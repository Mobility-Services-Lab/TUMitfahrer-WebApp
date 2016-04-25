var React = require('react');
var ReactIntl = require('react-intl');
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var AccountActions = require('../../actions/accountActions');

var RegistrationForm = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin
  ],

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
    this.refs.form.reset();
  },

  submitForm: function(model, resetForm, invalidateForm) {
    var scope = this;
    AccountActions.signup(model, function(errorResponse) {
      // Iterate through possible errors.
      if (errorResponse) {
        var possibleErrors = [
          {field: 'email', error: "Email already exists."},
          {field: 'email', error: "Not a valid mail address. Use one of these: tum.de, *.tum.de, cs.tum.edu, mytum.de"},
          {field: 'first_name', error: "First name must contain at least 2 characters."},
          {field: 'last_name', error: "Last name must contain at least 2 characters."}
        ];

        var presentErrors = {};

        for (var i=errorResponse.errors.length; i-- ; ) {
          for (var j=possibleErrors.length; j--; ) {
            if (errorResponse.errors[i] == possibleErrors[j]['error']) {
              presentErrors[possibleErrors[j]['field']] = possibleErrors[j]['error'];
              break;
            }
          }
          //TODO: not an error we recognize, maybe display it?
        }
        invalidateForm(presentErrors);
      } else {
        scope.resetForm();
      }
    });
  },

  componentDidMount: function() {
    // Get departments info from the server
    // TODO: Maybe create additional action and store for this?
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

  render: function() {
    return (
      <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="form" className="form-horizontal">
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3">
            <h3>{this.getIntlMessage('shared.header.sign-up')}</h3>
          </div>
        </div>
        <FRC.Input
          name="first_name"
          value=""
          label={this.getIntlMessage('auth.register.first_name')}
          type="text"
          placeholder={this.getIntlMessage('auth.register.first_name')}
          validations="minLength:2"
          required />
        <FRC.Input
          name="last_name"
          value=""
          label={this.getIntlMessage('auth.register.last_name')}
          type="text"
          placeholder={this.getIntlMessage('auth.register.last_name')}
          validations="minLength:2"
          required />
        <FRC.Select
          name="department"
          label={this.getIntlMessage('auth.register.department')}
          options={this.state.departments}
          value=''
          required />
        <FRC.Input
          name="email"
          value=""
          label={this.getIntlMessage('auth.login.tum-email')}
          type="email"
          placeholder="example@tum.de"
          validations={{
            isEmail:true,
            matchRegexp: /^[a-z0-9._-]+@tum[.]de$|^[a-z0-9._-]+@cs[.]tum[.]edu$|^[a-z0-9._-]+@mytum[.]de$|^[a-z0-9._-]+@[a-z0-9]+[.]tum[.]de$/i
          }}
          help="tum.de, *.tum.de, cs.tum.edu, mytum.de"
          required />
        <FRC.Input
          name="car"
          value=""
          label={this.getIntlMessage('auth.register.car')}
          type="text"
          placeholder="Nissan Micra" />
        <FRC.Input
          name="phone_number"
          value=""
          label={this.getIntlMessage('auth.register.phone_number')}
          type="text"
          placeholder="+49 &hellip;" />
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3">
            <button type="reset" className="btn btn-default" onClick={this.resetForm}>{this.getIntlMessage('auth.register.clear')}</button> &nbsp;
            <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>{this.getIntlMessage('shared.header.sign-up')}</button>
          </div>
        </div>
      </Formsy.Form>
    );
  }
});

module.exports = RegistrationForm;
