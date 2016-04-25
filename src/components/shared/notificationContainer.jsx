var React = require('react');
var Notification = require('./notification.jsx');
var Reflux = require('reflux');
var MessageActions = require('../../actions/messageActions');
var MessageStore = require('../../stores/messageStore');

var NotificationContainer = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    messages: React.PropTypes.array
  },

  mixins: [
    Reflux.listenTo(MessageStore, 'onStoreChange'),
  ],

  getInitialState: function() {
    return {
      messages: []
    };
  },

  onStoreChange: function(data) {
    this.setState({
      messages: data
    });
  },

  render: function() {
    var buildNotificationArray = function() {
      var notifications = [];
      this.state.messages.forEach(function(message, index) {
        notifications.push(
          <Notification key={index} type={message.type} message={message.message} sticky={message.isSticky}/>
        );
      });
      return notifications.reverse();
    }.bind(this);

    return(
      <div id="notification-container">
        {buildNotificationArray()}
      </div>
    )
  }
});

module.exports = NotificationContainer;
