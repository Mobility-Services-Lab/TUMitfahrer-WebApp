var Reflux = require('reflux');
var MessageActions = require('./messageActions');

/**
  Actions for FeedbackStore. FeedbackStore does not exist, but it is
  still required to create an action.
*/
var FeedbackActions = Reflux.createActions(['send']);

/**
  Upload the feedback message
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
FeedbackActions.send.listen(function(formData, callback) {
  var cookie = decodeCookie();
  $.ajax({
    type: 'POST',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/feedback',
    data: JSON.stringify(formData),
    headers: {
      Accept: '*/*',
      Authorization: cookie.user ? cookie.apiKey : ''
    },
    contentType: 'application/json',
    success: function(response) {
      MessageActions.putMessage('success', 'Your feedback has been successfully submitted.');
      callback(undefined);
    },
    error: function(response) {
      callback(response.responseJSON);
    }
  })
});

module.exports = FeedbackActions;
