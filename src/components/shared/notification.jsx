var React = require('react');
var classNames = require('classnames');
var MessageActions = require('../../actions/messageActions');

var Notification = React.createClass({

  propTypes: {
    key: React.PropTypes.number,
    type: React.PropTypes.string,
    message: React.PropTypes.string,
    isSticky: React.PropTypes.bool
  },

  popNotification: function() {
    MessageActions.popMessage(this.key);
  },

  componentDidMount: function() {
    if (!this.props.sticky) {
      setTimeout(this.popNotification, 2000);
    }
  },

  render: function() {
    var classes = classNames(
      'alert',
      'alert-' + this.props.type,
      'alert-dismissible'
    );

    return (
      <div className={classes} role="alert">
        <button onClick={this.popNotification} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {this.props.message}<br />
      </div>
    );
  }
});

module.exports = Notification;
