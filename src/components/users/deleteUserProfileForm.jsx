var React = require('react');
var ReactIntl = require('react-intl');
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var AccountActions = require('../../actions/accountActions');

var DeleteUserProfileForm = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
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
    this.refs.DeleteUserProfileForm.reset();
  },

  submitForm: function(model, resetForm, invalidateForm) {
    AccountActions.delete(model);
  },

  render: function () {
    return (
      <div>
        <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="DeleteUserProfileForm" className="form-horizontal">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <h3>{this.getIntlMessage('users.delete.delete')}</h3>
            </div>
          </div>
          <FRC.Checkbox
            name="agreement"
            value={false}
            rowLabel={this.getIntlMessage('users.delete.confirmation')}
            label={this.getIntlMessage('users.delete.confirmation-text')}
            validations="equals:true"
            validationErrors={this.getIntlMessage('users.delete.agree')}
            required />
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3" style={{marginBottom: 5 + 'px'}}>
              {this.getIntlMessage('users.delete.retype')}
            </div>
          </div>
          <FRC.Input
            name="email"
            value=""
            label={this.getIntlMessage('auth.login.tum-email')}
            type="email"
            placeholder="example@tum.de"
            validations={{
              isEmail:true,
              matchRegexp: /^[a-z0-9._-]+@tum[.]de$|^[a-z0-9._-]+@cs[.]tum[.]edu$|^[a-z0-9._-]+@mytum[.]de$|^[a-z0-9._-]+@[a-z0-9]+[.]tum[.]de$/i,
              equals:this.props.user.email
            }}
            help="tum.de, *.tum.de, cs.tum.edu, mytum.de"
            required />
          <FRC.Input
            name="userID"
            value={this.props.user.id}
            type="hidden" />
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <button type="submit" className="btn btn-danger" disabled={!this.state.canSubmit}>
                {this.getIntlMessage('users.delete.delete')}
              </button>
            </div>
          </div>
        </Formsy.Form>
      </div>
    );
  }
});

module.exports = DeleteUserProfileForm;
