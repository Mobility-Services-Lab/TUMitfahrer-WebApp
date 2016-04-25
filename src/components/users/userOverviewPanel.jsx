var React = require('react');
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var UserAvatar = require('../../actions/accountActions');
var Reflux = require('reflux');
var AccountStore = require('../../stores/accountStore');

var UserOverviewPanel = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
  },

  mixins: [
    Reflux.listenTo(AccountStore, 'onAccountStoreChange'),
  ],

  getInitialState: function () {
    return {
      avatarString: '?rand=' + (Math.floor(Math.random() * 100000))
    };
  },

  onAccountStoreChange: function (events) {
    if (events.hasOwnProperty('avatarChanged') && events.avatarChanged) {
      this.setState({
        avatarString: '?rand=' + Math.floor(Math.random() * 100000)
      });
    }
  },

  render: function() {
    var avatarUri = process.env.API_ROOT_URL + '/users/' + this.props.user.id + '/avatar' + this.state.avatarString;

    return (
      <div className="jumbotron well-sm text-center">
        <br />
        <br />
        <div className="img-circle center-block img-avatar" style={{background: 'transparent url(' + avatarUri +') center center/cover scroll'}}></div>
        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
      </div>
    );
  }
});

module.exports = UserOverviewPanel;
