var React = require('react');
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var AccountActions = require('../../actions/accountActions');

var ResetPasswordForm = React.createClass({

    getInitialState: function() {
        return {
            validationErrors: [],
            canSubmit: false
        };
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
        AccountActions.resetPassword(model, function(response) {
          if (response === undefined) {
            this.resetForm();
          } else {
            var possibleErrors = [
                {field: 'email', error: "User not found."}
            ];

            var presentErrors = {};

            for (var i=response.errors.length; i-- ; ) {
                for (var j=possibleErrors.length; j--; ) {
                    if (response.errors[i] == possibleErrors[j]['error']) {
                        presentErrors[possibleErrors[j]['field']] = possibleErrors[j]['error'];
                        break;
                    }
                }
                //TODO: not an error we recognize, maybe display it?
            }
            invalidateForm(presentErrors);
          }
        }.bind(this));
    },

    render: function() {
        return (
          <Formsy.Form onValidSubmit={this.submitForm} onValid={this.enableForm} onInvalid={this.disableForm} ref="form" className="form-horizontal">
            <FRC.Input
              name="email"
              value=""
              label="TUM email"
              type="email"
              placeholder="example@tum.de"
              validations={{
                isEmail:true,
                matchRegexp: /^[a-z0-9._-]+@tum[.]de$|^[a-z0-9._-]+@cs[.]tum[.]edu$|^[a-z0-9._-]+@mytum[.]de$|^[a-z0-9._-]+@[a-z0-9]+[.]tum[.]de$/i
              }}
              help="tum.de, *.tum.de, cs.tum.edu, mytum.de"
              required />
            <div className="row">
              <div className="col-sm-9 col-sm-offset-3">
                <button type="reset" className="btn btn-default" onClick={this.resetForm}>Clear</button> &nbsp;
                <button type="submit" className="btn btn-primary" disabled={!this.state.canSubmit}>Reset Password</button>
              </div>
            </div>
          </Formsy.Form>
        );
    }
});

module.exports = ResetPasswordForm;
