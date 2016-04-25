var React = require('react');
var ReactIntl = require('react-intl');

var Header = require('./shared/header.jsx');
var Footer = require('./shared/footer.jsx');
var NotificationContainer = require('./shared/notificationContainer.jsx');

var Reflux = require('reflux');
var AccountStore = require('../stores/accountStore');
var AccountActions = require('../actions/accountActions');

var messages = require('../locales/locales');

//Top level React component.
var Application = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
  },

  mixins: [
    Reflux.connect(AccountStore, 'user'),
    ReactIntl.IntlMixin,
  ],

  getInitialState: function() {
    var locale = navigator.language.split('-');
    locale = locale[1] ? locale[0] + '-' + locale[1].toUpperCase() : navigator.language;
    console.log(locale);
    var strings = messages[locale] ? messages[locale] : messages['en-GB'];
    //Check for account in cookies, if not
    return ({
      user: undefined,
      locales: ['en-GB'],
      messages: strings,
      language: strings.shared.header.language
    });
  },

  componentWillMount: function() {
    AccountActions.authorize();
  },

  changeLanguage: function(language) {
    var strings = messages[language] ? messages[language] : messages['en-GB'];
    this.setState({
      messages: strings,
      language: strings.shared.header.language
    })
  },

  render: function() {
    var changeLanguage = this.changeLanguage;
    return (
      <div>
        <Header user={this.state.user} locales={this.state.locales} messages={this.state.messages}>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.language} <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#0" onClick={function() {changeLanguage('de-DE');}}>Deutsch</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#0" onClick={function() {changeLanguage('en-GB');}}>English</a></li>
              </ul>
            </li>
          </ul>
        </Header>
        <NotificationContainer/>
        {React.cloneElement(this.props.children, {user: this.state.user, locales: this.state.locales, messages: this.state.messages})}
        <Footer user={this.state.user} locales={this.state.locales} messages={this.state.messages} />
      </div>
    );
  }
});

module.exports = Application
