var React = require('react');
var ResetPasswordForm = require('./resetPasswordForm.jsx');

var ResetPasswordPage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="container">
          <h1>Forgot Password?</h1>
          <p>No Problem, you can just reset your password!</p>
          <ResetPasswordForm />
        </div>
      </div>
    );
  }
});

module.exports = ResetPasswordPage;
