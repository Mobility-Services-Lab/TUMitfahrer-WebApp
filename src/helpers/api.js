module.exports = {
  /**
    Session cookie is storead as a "userId|apiKey" string with base64 encoding.
    Decode the session cookie and return the user id and the api key separately.
  */
  decodeCookie: function() {
    //TODO: move this to a separate file.
    if (Cookies.get('session')) {
      var splittedCookie = window.atob(Cookies.get('session')).split('|');
      return {
        uid: splittedCookie[0],
        apiKey: splittedCookie[1]
      };
    }
    return {
      uid: '',
      apiKey: ''
    };
  },

  /**
    Calculate the authentication header from given username and password
  */
  authHeader: function(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }
}
