var React = require('react');

var RideSearchBox = React.createClass({
  render: function() {
    return (
      <form method="get" acceptCharset="UTF-8" action="#" className="ride-search-quick">
        <div className="row">
          <div className="form-group col-sm-5">
            <input type="text" className="form-control" id="departure_place" name="departure_place" placeholder="From (Address)" autoComplete="off" />
          </div>
          <div className="form-group col-sm-5">
            <input type="text" className="form-control" id="destination" name="destination" placeholder="To (Address)" autoComplete="off" />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-info btn-block">Search</button>

            <input type="hidden" value="5" id="destination_threshold" name="destination_threshold" />
            <input type="hidden" value="5" id="departure_place_threshold" name="departure_place_threshold" />
          </div>
        </div>
      </form>
    );
  }
});

module.exports = RideSearchBox;
