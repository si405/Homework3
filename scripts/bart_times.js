// Return the next trains departing Montgomery (MONT) station using the BART
// API.
// Once this is working enhance it to use any other standard BART station
// abbreviation and extract the station name from the message.
//The BART API returns XML so use the xml2js parser and request to make the HTTP call.

var xml2js = require('xml2js');
var parseString = new xml2js.Parser().parseString;
var request = require('request');

// Define the starting station. A later iteration would be to listen for valid BART stations
// but for the initial project assume Montgomery (MONT).
// Define the unique developer API key.
// Full details of the BART APIs can be found at http://api.bart.gov/docs/overview/index.aspx

var station = 'MONT';
var apikey = 'ZZLI-UU93-IMPQ-DT35';

module.exports = function(robot) {
  robot.respond(/next bart/i, function(msg) {
    msg.reply(getDepartures(station, apikey, msg.message));
  });
}

function getDepartures(station,apikey,message) {
// This function takes the desired BART station and calls the BART estimated time of departure
// API to find the next departures from this station.
    var url = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig="+station+"&key="+apikey;

// Define an array to hold the returned information.
    var departures = [];
    request(url, function (err, resp, body) {
      if (err) throw err;
      parseString(body, function (err, json) {
      json.root.station[0].etd.forEach(function (e) {
        e.estimate.forEach(function (departure) {
          // At this point I'm only interested in trains on the PITT line but
          // can't just check for PITT as there are other trains to Pleasant Hill
          // and Concord that also work. All those trains are on the "yellow" line.
          if (departure.color == 'YELLOW' && departure.direction == 'North' {
            //console.log(e.abbreviation, departure.minutes);
            departures.push(e.abbreviation+" in "+departure.minutes+ "mins");
          }
        });
      });
      // Console logging at this point shows the correct data but returning the data does not.
      // Need to figure out why!
      console.log(departures);
      return(departures);
    });
    });
};
