var React = require('react');
var ReactIntl = require('react-intl');
var Cookie = require('js-cookie');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reflux = require('reflux');

var AccountStore = require('../../stores/accountStore');

var Header = React.createClass({

  propTypes: {
    user: React.PropTypes.object
  },

  mixins: [
    Reflux.listenTo(AccountStore, 'onStoreChange'),
    ReactIntl.IntlMixin,
  ],

  onStoreChange: function(data) {
    //If logged in successfully -> redirect to timeline
    if (data.hasOwnProperty('authorized')) {
      if (!data.authorized) {
        if (data.hasOwnProperty('message')) {
          console.log("[Header] error message", data.message);
        }
      }
    }
  },

  render: function() {
    if (this.props.user) {
      navbarContent = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/user/profile">{this.getIntlMessage('shared.header.profile')}</Link></li>
          <li><Link to="/auth/logout">{this.getIntlMessage('shared.header.sign-out')}</Link></li>
        </ul>
      );
    } else {
      navbarContent = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/auth/register">{this.getIntlMessage('shared.header.sign-up')}</Link></li>
          <li><Link to="/auth/login">{this.getIntlMessage('shared.header.log-in')}</Link></li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-default navbar-static-top navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#navbar" aira-expanded="false">
              <span className="sr-only">{this.getIntlMessage('shared.header.toggle-navigation')}</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">{this.getIntlMessage('shared.header.brand')}</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            {navbarContent}
            {this.props.children}
          </div>
        </div>{/* .container-fluid */}
      </nav>
    );
  }
});

module.exports = Header;
