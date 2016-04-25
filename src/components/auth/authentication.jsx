var React = require('react');
var ReactIntl = require('react-intl');

var Authentication = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  render: function() {
    return (
      <div>
        {React.cloneElement(this.props.children, {user: this.props.user, locales: this.props.locales, messages: this.props.messages})}
      </div>
    );
  }
});

module.exports = Authentication
