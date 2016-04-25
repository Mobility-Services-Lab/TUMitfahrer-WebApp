var React = require('react');
var ReactIntl = require('react-intl');
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var AccountActions = require('../../actions/accountActions');

var EditUserProfileForm = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    departments: React.PropTypes.array,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      crossDomain: true,
      url: process.env.API_ROOT_URL + '/users/departments',
      contentType: 'application/json',
      success: function(response) {
        var departments = [];
        for (var i in response.departments) {
          departments.push({
            value: response.departments[i].name,
            label: response.departments[i].friendly_name
          });
        }
        departments.sort(function(a, b) {
          return a.label.localeCompare(b.label);
        });
        departments.unshift({value: '', label: this.getIntlMessage('auth.register.select') + '\u2026'});
        this.setState({
          departments: departments
        });
      }.bind(this),
      error: function(response) {
        console.log(response);
        // something terrible happened
      }
    });
  },

  getInitialState: function() {
    return {
      validationErrors: [],
      canSubmit: false,
      departments: [{value: '', label: this.getIntlMessage('auth.register.select') + '\u2026'}]
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
    this.refs.EditUserProfileForm.reset();
  },

  submitForm: function(model, resetForm, invalidateForm) {
    AccountActions.updateUserDetails(model, function(response) {
      if (response === undefined) {
        // this.resetForm();
      } else {
        console.log(response.errors);
        //TODO: No need for server-side validation here?
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="EditUserProfileForm" className="form-horizontal">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <h3>{this.getIntlMessage('users.profile.details')}</h3>
            </div>
          </div>
          <FRC.Input
          name="first_name"
          value={this.props.user.first_name}
          label={this.getIntlMessage('auth.register.first_name')}
          type="text"
          placeholder={this.getIntlMessage('auth.register.first_name')}
          required />
          <FRC.Input
          name="last_name"
          value={this.props.user.last_name}
          label={this.getIntlMessage('auth.register.last_name')}
          type="text"
          placeholder={this.getIntlMessage('auth.register.last_name')}
          required />
          <FRC.Select
          name="department"
          label={this.getIntlMessage('auth.register.department')}
          options={this.state.departments}
          value={this.props.user.department}
          required
          />
          <FRC.Input
          name="car"
          value={this.props.user.car}
          label={this.getIntlMessage('auth.register.car')}
          type="text"
          placeholder="Nissan Micra" />
          <FRC.Input
          name="phone_number"
          value={this.props.user['phone_number']}
          label={this.getIntlMessage('auth.register.phone_number')}
          type="text"
          placeholder="+49 &hellip;" />
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>
                Update profile
              </button>
            </div>
          </div>
        </Formsy.Form>
      </div>
    );
  }
});

module.exports = EditUserProfileForm;
