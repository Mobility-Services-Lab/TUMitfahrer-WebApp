var Reflux = require('reflux');
var MessageActions = require('../actions/messageActions');

var MessageStore = Reflux.createStore({

  /**
    Message structure:
    type - message type {'info', 'warn', 'danger', 'success'}
    message - actual message,
    sticky - should the message auto-disappear or not.
  */
  messages: [],
  listenables: MessageActions,

  onPutMessage: function(type, message, isSticky) {
    var messageObject = {
      type: type,
      message: message,
      isSticky: isSticky ? isSticky : false
    };
    this.messages.push(messageObject);
    this.trigger(this.messages);
  },

  /** Remove the message from the array */
  onPopMessage: function(index) {
    this.messages.splice(index, 1);
    this.trigger(this.messages);
  }
});

module.exports = MessageStore;
