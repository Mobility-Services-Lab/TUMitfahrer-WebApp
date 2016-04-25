var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var routes = require('./routes');
var ga = require('react-ga');

// Include Bootstrap JavaScript
require('bootstrap-sass');

// Configure globals
global.jQuery = global.$ = require('jquery');
global.Cookies = require('js-cookie');

/*
  API_ROOT_URL and GOOGLE_ANALYTICS_KEY environment variables
  should be configured on a production/build server. For development it is
  possible to use untracked env.js file with the following contents:

  process.env.API_ROOT_URL = ''; // Link to the TUMitfahrer API endpoint
  process.env.GOOGLE_ANALYTICS_KEY = ''; // Google Analytics key

  Gulp build script will automatically assign these values based on the
  environment variables.
*/
if (!process.env.API_ROOT_URL || !process.env.GOOGLE_ANALYTICS_KEY) {
  require('../env');
}

// Init Google Analytics
ga.initialize(process.env.GOOGLE_ANALYTICS_KEY, {debug: process.env.NODE_ENV !== 'production'});

function logPageView() {
  ga.pageview(this.state.location.pathname);
}

ReactDOM.render(<Router history={browserHistory} routes={routes} onUpdate={logPageView} />,
  document.getElementById('content')
);
