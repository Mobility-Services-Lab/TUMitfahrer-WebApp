var Reflux = require('reflux');

/**
  Actions for MessageStore. No logic here, but it is still required to
  create an action.
*/
var MessageActions = Reflux.createActions(['putMessage', 'popMessage']);

module.exports = MessageActions;
