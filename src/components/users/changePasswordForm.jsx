var React = require('react');
var ReactIntl = require('react-intl');
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var AccountActions = require('../../actions/accountActions');
var MessageActions = require('../../actions/messageActions');

var ChangePasswordForm = React.createClass({

  propTypes: {
    username: React.PropTypes.string,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  getInitialState: function() {
    return {
      validationErrors: [],
      canSubmit: false
    };
  },

  enableForm: function() {
    this.setState({
      canSubmit: true
    });
  },

  disableForm: function() {
    this.setState({
      canSubmit: false
    });
  },

  resetForm: function() {
    this.refs.ChangePasswordForm.reset();
  },

  submitForm: function(model, resetForm, invalidateForm) {
    AccountActions.changePassword(this.props.username, model, function(response) {
      if (response === undefined) {
        this.resetForm();
      } else {
        MessageActions.putMessage('danger', this.getIntlMessage('users.change-password.no-change'));

        var possibleErrors = [
          {field: 'password', error: "Wrong credentials."}
        ];

        var presentErrors = {};

        for (var i=response.errors.length; i-- ;) {
          for (var j=possibleErrors.length; j--;) {
            if (response.errors[i] == possibleErrors[j]['error']) {
              presentErrors[possibleErrors[j]['field']] = possibleErrors[j]['error'];
              break;
            }
          }
          //TODO: not an error we recognize, maybe display it?
        }
        invalidateForm(presentErrors);
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="ChangePasswordForm" className="form-horizontal">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <h3>{this.getIntlMessage('users.change-password.change')}</h3>
            </div>
          </div>
          <FRC.Input
          name="password"
          value=""
          label={this.getIntlMessage('users.change-password.password-old')}
          type="password"
          placeholder=""
          validations="minLength:4"
          required />
          <FRC.Input
          name="newPassword"
          value=""
          label={this.getIntlMessage('users.change-password.password-new')}
          type="password"
          placeholder=""
          validations="minLength:4"
          validationErrors={{
            minLength: this.getIntlMessage('users.change-password.password-minlength')
          }}
          required />
          <FRC.Input
          name="newPasswordConfirmation"
          value=""
          label={this.getIntlMessage('users.change-password.password-confirm')}
          type="password"
          placeholder=""
          validations="equalsField:newPassword"
          validationErrors={{
            equalsField: this.getIntlMessage('users.change-password.password-match')
          }}
          required />
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>
                {this.getIntlMessage('users.change-password.change')}
              </button>
            </div>
          </div>
        </Formsy.Form>
      </div>
    );
  }
});

module.exports = ChangePasswordForm;
