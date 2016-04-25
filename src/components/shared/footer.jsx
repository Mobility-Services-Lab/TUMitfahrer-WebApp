var React = require('react');
var ReactIntl = require('react-intl');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Footer = React.createClass({

  mixins: [
    ReactIntl.IntlMixin,
  ],

  render: function() {
    return (
      <footer className="footer">
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-right-not-xs">
              <ul className="list-unstyled">
                <li><Link to='/legal-information'>{this.getIntlMessage('shared.footer.legal')}</Link></li>
                <li><Link to='/imprint'>{this.getIntlMessage('shared.footer.imprint')}</Link></li>
                <li><Link to='/contact'>{this.getIntlMessage('shared.footer.contact')}</Link></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <address>
                <b>{this.getIntlMessage('shared.footer.address.university')}</b><br />
                {this.getIntlMessage('shared.footer.address.faculty')}<br />
                {this.getIntlMessage('shared.footer.address.chair')}<br />
                {this.getIntlMessage('shared.footer.address.street')}<br />
              {this.getIntlMessage('shared.footer.address.city')}
              </address>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <a href="https://www.jungeakademie.tum.de/tum-junge-akademie/" className="pull-right">
                <img src="/img/junge-akademie.png" alt={this.getIntlMessage('shared.footer.images.junge-akademie')} className="img-responsive height-constrain-50" />
              </a>
            </div>
            <div className="col-xs-6">
              <a href="http://www.mobility-services.in.tum.de/">
                <img src="/img/mobility-services.png" alt={this.getIntlMessage('shared.footer.images.mobility-services')} className="img-responsive height-constrain-50" />
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
