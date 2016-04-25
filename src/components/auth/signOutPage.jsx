var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Reflux = require('reflux');
var AccountActions = require('../../actions/accountActions');

var SignOutPage = React.createClass({

  componentDidMount: function() {
    AccountActions.signout();
    browserHistory.push('/');
  },

  render: function() {
    // This view is not being shown.
    return (<div></div>);
  }
});

module.exports = SignOutPage;
