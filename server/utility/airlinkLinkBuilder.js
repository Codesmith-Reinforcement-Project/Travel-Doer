const buildAirlineLink = (origin, destination, departureDate, returnDate) => {
  return `https://www.kayak.com/flights/${origin}-${destination}/${departureDate}/${returnDate}`;
};

module.exports = { buildAirlineLink };