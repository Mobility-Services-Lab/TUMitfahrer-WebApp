var React = require('react');
var ReactIntl = require('react-intl');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var MessageActions = require('../../actions/messageActions');

var User = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  // componentWillMount: function() {
  //   if (!this.props.user) {
  //     MessageActions.putMessage('danger', 'Only logged-in users have access to the requested page.');
  //     browserHistory.push('/');
  //   }
  // },

  render: function() {
    if (!this.props.user) return (<div></div>);
    return (
      <div>
        {React.cloneElement(this.props.children, {user: this.props.user, locales: this.props.locales, messages: this.props.messages})}
      </div>
    );
  }
});

module.exports = User
