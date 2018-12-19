const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  // for (const start of journeys) {
  //   return start.startLocation;
  // }
  return this.journeys.map((journeystart) => {
    start = journeystart.startLocation;
    return start;
  });
// console.log(start.join('-'));
};


Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journeyend) => {
    endOfJourney = journeyend.endLocation;
    return endOfJourney;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((modeOfTransport) => {
    // vehicle = modeOfTransport.transport === modeOfTransport;
    // return vehicle
    return modeOfTransport.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((miles) => {
    return miles.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
