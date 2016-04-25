var React = require('react');
var ReactIntl = require('react-intl');
var ChangePasswordForm = require('./changePasswordForm.jsx');
var EditUserProfileForm = require('./editUserProfileForm.jsx');
var DeleteUserProfileForm = require('./deleteUserProfileForm.jsx');
var UserOverviewPanel = require('./userOverviewPanel.jsx');
var AvatarForm = require('./avatarForm.jsx');

var UserProfilePage = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin
  ],

  render: function() {
    return (
      <div className="container">
        <UserOverviewPanel user={this.props.user} />
        <AvatarForm user={this.props.user} locales={this.props.locales} messages={this.props.messages} />
        <EditUserProfileForm user={this.props.user} locales={this.props.locales} messages={this.props.messages} />
        <ChangePasswordForm username={this.props.user.email} locales={this.props.locales} messages={this.props.messages} />
        <DeleteUserProfileForm user={this.props.user} locales={this.props.locales} messages={this.props.messages} />
      </div>
    );
  }
});

module.exports = UserProfilePage;
