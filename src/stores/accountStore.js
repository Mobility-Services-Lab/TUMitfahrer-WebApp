var Reflux = require('reflux');
var AccountActions = require('../actions/accountActions');

var AccountStore = Reflux.createStore({

  currentUser: undefined,

  init: function() {
    this.listenTo(AccountActions.signin.completed, this.onSigninCompleted);
    this.listenTo(AccountActions.signout.completed, this.onSignoutCompleted);
    this.listenTo(AccountActions.getUserDetails.completed, this.onUserDetailsCompleted);
    this.listenTo(AccountActions.updateUserDetails.completed, this.onUserDetailsCompleted);
    this.listenTo(AccountActions.uploadAvatar.completed, this.onUploadAvatarCompleted);
    this.listenTo(AccountActions.authorize, this.onAuthorize);
    this.listenTo(AccountActions.validateApiKey.completed, this.onValidateApiKeyCompleted);
    this.listenTo(AccountActions.validateApiKey.failed, this.onValidateApiKeyFailed);
  },

  onSigninCompleted: function(user) {
    // Create session cookie - base64(uid|apiKey) with expiration date of 1 month.
    Cookies.set('session', window.btoa(user.id + '|' + user['api_key']), {expires: 30});
    AccountActions.getUserDetails();
  },

  onSignoutCompleted: function() {
    this.currentUser = undefined;
    Cookies.remove('session');
    this.trigger({
      user: this.currentUser
    });
  },

  /** Update the user details inside the app */
  onUserDetailsCompleted: function(user) {
    this.currentUser = user;
    this.trigger ({
      user: this.currentUser
    });
  },

  onUploadAvatarCompleted: function () {
    this.trigger({
      avatarChanged: true
    });
  },

  /**
    Initial authorization check, invoked when the user
    loads the app for the first time.
  */
  onAuthorize: function() {
    if (!this.currentUser && Cookies.get('session')) {
      AccountActions.validateApiKey();
    }
  },

  /** Get user details if the validation is complete  */
  onValidateApiKeyCompleted: function() {
    AccountActions.getUserDetails();
  },

  /** Remove the cookie if the validation failed  */
  onValidateApiKeyFailed: function() {
    Cookies.remove('session');
  }
});

module.exports = AccountStore;
