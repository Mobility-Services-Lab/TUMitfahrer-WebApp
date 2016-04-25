var Reflux = require('reflux');
var MessageActions = require('./messageActions');
var ApiHelpers = require('../helpers/api');


var AccountActions = Reflux.createActions({
  'signin': {children: ['completed']},
  'signout': {children: ['completed']},
  'signup': {},
  'delete': {},
  'resetPassword': {},
  'changePassword': {},
  'getUserDetails': {children: ['completed']},
  'updateUserDetails': {children: ['completed']},
  'uploadAvatar': {children: ['completed']},
  'authorize': {},
  'validateApiKey': {children: ['completed', 'failed']},
});

/**
  Call to the API to perform login
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
AccountActions.signin.listen(function (formData, callback) {
  var user = null;
  var api_key = null;
  $.ajax({
    type: 'POST',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/sessions',
    headers: {
      Accept: '*/*',
      Authorization: ApiHelpers.AuthHeader(formData.email, formData.password),
    },
    contentType: 'text/plain',
    success: function(response) {
      callback(null);
      MessageActions.putMessage('success', 'Login successful.');
      this.completed(response.user);
    }.bind(this),
    error: function(response) {
      callback(response);
    }.bind(this)
  });
});

/**
  Call to the API to perform logout
*/
AccountActions.signout.listen(function() {
  var cookie = ApiHelper.decodeCookie();
  $.ajax({
    type: 'DELETE',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/sessions',
    headers: {
      Accept: '*/*',
      Authorization: cookie.apiKey
    },
    contentType: 'text/plain',
    success: function(response) {
      MessageActions.putMessage('success', 'Logout successful.');
      this.completed();
    }.bind(this),
  });
});

/**
  Call to the API to perform registration
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
AccountActions.signup.listen(function (formData, callback) {
  $.ajax({
    type: 'POST',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/users',
    contentType: 'application/json',
    data: JSON.stringify({user: formData}),
    success: function(response) {
      MessageActions.putMessage('success', 'Registration successful. Login information has been sent to your email.', true);
      callback(null);
    },
    error: function(response) {
      callback(JSON.parse(response.responseText));
    }
  });
});

/**
  Call to the API to delete the user account
*/
AccountActions.delete.listen(function() {
  var cookie = ApiHelper.decodeCookie();
  $.ajax({
    type: 'DELETE',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/users/' + cookie.uid,
    contentType: 'application/json',
    headers: {
      Accept: '*/*',
      Authorization: cookie.apiKey
    },
    success: function(response) {
      MessageActions.putMessage('success', 'Logout successful.');
    },
    error: function(response) {
      console.error(response);
    }
  });
});

/**
  Call to the API to reset password
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
AccountActions.resetPassword.listen(function (formData, callback) {
  $.ajax({
    type: 'POST',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/password/forgot' + '?email=' + encodeURIComponent(formData.email),
    contentType: 'text/plain',
    success: function(response) {
      MessageActions.putMessage('success', 'Password change request successfully created! Please, check your inbox.')
      callback(undefined);
    },
    error: function(response) {
      callback(response.responseJSON);
    }
  });
});

/**
  Call to the API to change password
  username - user id;
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
AccountActions.changePassword.listen(function(username, formData, callback) {
  $.ajax({
    type: 'PUT',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/password',
    data: JSON.stringify({password: formData.newPassword}),
    headers: {
      Accept: '*/*',
      Authorization: ApiHelpers.AuthHeader(username, formData.password),
      //TODO: AuthHeader is b64(username:password) again. WTF???
    },
    contentType: 'application/json',
    success: function(response) {
      MessageActions.putMessage('success', 'Password successfully changed!');
      callback(undefined);
    },
    error: function(response) {
      callback(response.responseJSON);
    }
  });
});

/**
  Call to the API to get the extended user info.
*/
AccountActions.getUserDetails.listen(function() {
  var cookie = ApiHelper.decodeCookie();
  $.ajax({
    type: 'GET',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/users/' + cookie.uid,
    headers: {
      Accept: '*/*',
      Authorization: cookie.apiKey
    },
    contentType: 'text/plain',
    success: function(response) {
      this.completed(response.user);
    }.bind(this)
  });
});

/**
  Call to the API to update the user info
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
AccountActions.updateUserDetails.listen(function(formData, callback) {
  var cookie = ApiHelper.decodeCookie();
  $.ajax({
    type: 'PUT',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/users/' + cookie.uid,
    data: JSON.stringify({user: formData}),
    headers: {
      Accept: '*/*',
      Authorization: cookie.apiKey
    },
    contentType: 'application/json',
    success: function(response) {
      MessageActions.putMessage('success', 'Update successful.');
      callback(undefined);
      this.completed(response.user);
    }.bind(this),
    error: function(response) {
      callback(response);
    }
  });
});

/**
  Call to the API to upload the user avatar
  formData - data that is being sent from the React component;
  callback - function that is used to pass errors back to the React component;
*/
AccountActions.uploadAvatar.listen(function (formData, callback) {
  //TODO: reformat the whole avatar behaviour.
  // Maybe it's better to move the avatar into a separate store?
  var cookie = ApiHelper.decodeCookie();
  $.ajax({
    type: 'POST',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/users/' + cookie.uid + '/avatar',
    data: formData,
    headers: {
      Accept: '*/*',
      Authorization: cookie.apiKey
    },
    processData: false,
    contentType: false,
    success: function (response) {
      MessageActions.putMessage('success', 'Avatar uploaded successfully');
      callback(response);
      this.completed();
    }.bind(this),
    error: function (response) {
      callback(response);
    }
  });
});

/**
  Call to the API to check the validity of the user API key
*/
AccountActions.validateApiKey.listen(function() {
  var cookie = ApiHelper.decodeCookie();
  $.ajax({
    type: 'PUT',
    crossDomain: true,
    url: process.env.API_ROOT_URL + '/sessions',
    data: 'json',
    headers: {
      Accept: '*/*',
      Authorization: cookie.apiKey
    },
    success: function(response) {
      if (response.status === 'OK') {
        this.completed();
      } else {
        this.failed();
      }
    }.bind(this),
    error: function(response) {
      console.error(response);
      this.failed();
    }.bind(this)
  });
});

module.exports = AccountActions;
