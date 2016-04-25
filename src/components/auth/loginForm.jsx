var React = require('react');
var ReactIntl = require('react-intl');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var AccountActions = require('../../actions/accountActions');

var LoginForm = React.createClass({

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
      canSubmit: false,
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
    AccountActions.signin(model, function(errorResponse) {
      if (errorResponse) {
        console.log(errorResponse.errors);
      } else {
        this.resetForm();
        browserHistory.push('/');
      }
    }.bind(this));
  },

  render: function() {
    return (
      <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="form" className="form-signin form-horizontal">
        <h3>{this.getIntlMessage('shared.header.log-in')}</h3>
        <FRC.Input
          name="email"
          value=""
          label={this.getIntlMessage('auth.login.tum-email')}
          type="email"
          placeholder={this.getIntlMessage('auth.login.tum-email')}
          validations={{
            isEmail:true,
            matchRegexp: /^[a-z0-9._-]+@tum[.]de$|^[a-z0-9._-]+@cs[.]tum[.]edu$|^[a-z0-9._-]+@mytum[.]de$|^[a-z0-9._-]+@[a-z0-9]+[.]tum[.]de$/i
          }}
          required
          elementWrapperClassName={[{'col-sm-9': false}, 'col-xs-12']}
          labelClassName={[{'column-sm-3': false}, 'sr-only']} />
        <FRC.Input
          name="password"
          value=""
          label={this.getIntlMessage('auth.login.password')}
          type="password"
          placeholder={this.getIntlMessage('auth.login.password')}
          required
          elementWrapperClassName={[{'col-sm-9': false}, 'col-xs-12']}
          labelClassName={[{'column-sm-3': false}, 'sr-only']} />
        <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={!this.state.canSubmit}>{this.getIntlMessage('shared.header.log-in')}</button>
        <Link to='/auth/reset-password'>{this.getIntlMessage('auth.login.forgot')}</Link>
      </Formsy.Form>
    );
  }
});

module.exports = LoginForm;
