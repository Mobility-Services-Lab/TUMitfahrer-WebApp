var bulk = require('bulk-require');

var messages = bulk(__dirname, ['*.json']);

module.exports = messages;
