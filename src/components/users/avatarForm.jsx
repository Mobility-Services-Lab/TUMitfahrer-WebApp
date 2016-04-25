var React = require('react');
var ReactIntl = require('react-intl');
var Reflux = require('reflux');

var AccountActions = require('../../actions/accountActions');
var AccountStore = require('../../stores/accountStore');
var MessageActions = require('../../actions/messageActions');

var AvatarForm = React.createClass({

  imageSize: 1024*1024*2, // 2MB

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    Reflux.listenTo(AccountStore, 'onAccountStoreChange'),
    ReactIntl.IntlMixin
  ],

  getInitialState: function () {
    return {
      canSubmit: false
    };
  },

  onAccountStoreChange: function (events) {
    if (events.hasOwnProperty('avatarChanged') && events.avatarChanged) {
      //TODO: update image
    }
  },

  checkValidity: function () {
    if (undefined == this.refs.file.files[0]) {
      this.setState({
        canSubmit: false
      });
      return;
    }

    if (this.refs.file.files[0].size < this.imageSize) {
      this.setState({
        canSubmit: true
      });
    } else {
      MessageActions.putMessage('warning', this.getIntlMessage('users.avatar.img-too-large'), true);
      this.resetForm();
    }
  },

  uploadFile: function (e) {
    e.preventDefault();

    var fd = new FormData();
    fd.append('uploadImage', this.refs.file.files[0]);

    AccountActions.uploadAvatar(fd, function (response) {
      this.resetForm();
    }.bind(this));
  },

  resetForm: function () {
    document.getElementById('avatar-form').reset();
    this.setState({
      canSubmit: false
    });
  },

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3">
            <h3>{this.getIntlMessage('users.avatar.change-profile')}</h3>
          </div>
        </div>

        <form className="uploader form-horizontal" id="avatar-form" ref="uploadForm" encType="multipart/form-data">
          <div className="form-group row">
            <label className="col-sm-3 control-label" htmlFor="avatar-file">{this.getIntlMessage('users.avatar.img-file')}</label>
            <div className="col-sm-9">
              <input ref="file" type="file" name="file" id="avatar-file" accept="image/*" onChange={this.checkValidity} required="required" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <div className="btn-toolbar">
                <div className="btn-group">
                  <button className="btn btn-default" type="button" onClick={this.resetForm}>{this.getIntlMessage('auth.register.clear')}</button>
                </div>
                <div className="btn-group">
                  <button className="btn btn-primary" type="submit" ref="button" disabled={!this.state.canSubmit} onClick={this.uploadFile}>
                    {this.getIntlMessage('users.avatar.upload')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AvatarForm;
