var React = require('react');
var ReactIntl = require('react-intl');

var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var FeedbackActions = require('../../actions/feedbackActions');

var ContactPage = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  getInitialState: function() {
    return {
      validationErrors: [],
      canSubmit: false,
    }
  },

  enableForm: function() {
    this.setState({
      canSubmit: true
    });
  },

  disableForm: function() {
    this.setState({
      canSubmit: false
    });
  },

  resetForm: function() {
    this.refs.form.reset();
  },

  submitForm: function(model, resetForm, invalidateForm) {
    var scope = this;
    FeedbackActions.send(model, function(errorResponse) {
      if (errorResponse) {
        var possibleErrors = [
          {field: 'title', error: 'invalid feedback title'},
          {field: 'content', error: 'invalid feedback content'}
        ];

        var presentErrors = {};
        for (var i = response.errors.length; i-- ; ) {
          for (var j = possibleErrors.length; j--; ) {
            if (response.errors[i] === possibleErrors[j]['error']) {
              presentErrors[possibleErrors[j]['field']] = possibleErrors[j]['error'];
              break;
            }
          }
        }
        invalidateForm(presentErrors);
      } else {
        scope.resetForm();
      }
    });
  },

  render: function() {
    return (
      <div className="container">
        <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="form" className="form-horizontal">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <h3>{this.getIntlMessage('static.contact-page.title')}</h3>
              <p>{this.getIntlMessage('static.contact-page.explanation')}</p>
            </div>
            <FRC.Input
              name="title"
              value=""
              label={this.getIntlMessage('static.contact-page.form.title.label')}
              type="text"
              placeholder=""
              required />
            <FRC.Textarea
              name="content"
              rows='10'
              value=""
              label={this.getIntlMessage('static.contact-page.form.content.label')}
              validations="minLength:10"
              validationErrors={{
                minLength: this.getIntlMessage('static.contact-page.form.content.validation-errors.min-length')
              }}
              required />
          </div>
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <button type="reset" className="btn btn-default" onClick={this.resetForm}>{this.getIntlMessage('static.contact-page.form.clear')}</button> &nbsp;
              <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>{this.getIntlMessage('static.contact-page.form.submit')}</button>
            </div>
          </div>
        </Formsy.Form>
      </div>
    );
  }
});

module.exports = ContactPage;
