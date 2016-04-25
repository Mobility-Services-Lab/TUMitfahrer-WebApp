var React = require('react');
var ReactIntl = require('react-intl');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var IndexPage = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  render: function() {
    var userOptions = '';
    if (this.props.user === undefined) {
      userOptions = (
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5">
            <Link to="/auth/register" className="btn btn-success btn-lg btn-block">{this.getIntlMessage('static.index-page.user-options.sign-up')}</Link>

            <br />
            <br />

            <Link to="/auth/login" className="btn btn-default btn-lg btn-block">{this.getIntlMessage('static.index-page.user-options.log-in')}</Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="page-one-container">

          <div className="container">
            <div className="title-container">
              <h1 className="text-center">{this.getIntlMessage('static.index-page.jumbotron.header')}</h1>
              <p className="text-center">{this.getIntlMessage('static.index-page.jumbotron.sub-header')}</p>
            </div>

            <br />
            <br />

            {userOptions}

            <br />
            <br />

            <div className="text-center">
                <a href="https://play.google.com/store/apps/details?id=de.tum.mitfahrerapp">
                  <img alt={this.getIntlMessage('static.index-page.app-links.android')}
                       src="img/Get_it_on_Google_play.svg" className="app-store-banner" />
                </a>
                &nbsp;
                <a href="https://itunes.apple.com/de/app/tumitfahrer/id556098177">
                  <img alt={this.getIntlMessage('static.index-page.app-links.ios')}
                       src="img/Download_on_the_App_Store_Badge_US-UK_135x40.svg" className="app-store-banner" />
                </a>
            </div>

            <br />
            <br />
          </div>

          <br />
          <br />

        </div>

        <br />
        <br />

        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <h2>{this.getIntlMessage('static.index-page.ad-columns.left.title')}</h2>
              <p>{this.getIntlMessage('static.index-page.ad-columns.left.text')}</p>
            </div>
            <div className="col-md-4">
              <h2>{this.getIntlMessage('static.index-page.ad-columns.center.title')}</h2>
              <p>{this.getIntlMessage('static.index-page.ad-columns.center.text')}</p>
            </div>
            <div className="col-md-4">
              <h2>{this.getIntlMessage('static.index-page.ad-columns.right.title')}</h2>
              <p>{this.getIntlMessage('static.index-page.ad-columns.right.text')}</p>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    );
  }
});

module.exports = IndexPage;
