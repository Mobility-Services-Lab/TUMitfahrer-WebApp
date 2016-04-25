var React = require('react');
var ReactIntl = require('react-intl');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var RegistrationForm = require('./registrationForm.jsx');

var RegistrationPage = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin
  ],

  componentWillMount: function () {
    if (this.props.user !== undefined) {
      browserHistory.push('/');
    }
  },

  render: function() {
    return (
      <div className="container">
        <RegistrationForm locales={this.props.locales} messages={this.props.messages} />
      </div>
    );
  }
});

module.exports = RegistrationPage;
