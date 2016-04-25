var React = require('react');
var ReactIntl = require('react-intl');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var LoginForm = require('./loginForm.jsx');

var LoginPage = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin
  ],

  componentWillMount: function () {
    if (this.props.user) {
      browserHistory.push('/');
    }
  },

  render: function() {
    return (
      <div className="container">
        <LoginForm locales={this.props.locales} messages={this.props.messages} />
      </div>
    );
  }
});

module.exports = LoginPage;
