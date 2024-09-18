const parseFlights = (flights) => {
  const bestFlights = [];
  const otherFlights = [];
  if (flights.best_flights && flights.other_flights) {
    flights.best_flights.map(obj => {
      const flightsInfo = [];

      obj.flights.map(ele => {
        flightsInfo.push({
          departure: ele.departure_airport,
          arrival: ele.arrival_airport,
          airline: ele.airline,
          logo: ele.airline_logo,
          duration: ele.duration,
          class: ele.travel_class,
          moreInfo: ele.extensions
        })
      });

      const flightData = {
        flightsInfo,
        total_duration: obj.total_duration,
        price: obj.price,
        moreInfo: obj.extensions
      };

      bestFlights.push(flightData);
    });

    flights.other_flights.map(obj => {
      const flightsInfo = [];

      obj.flights.map(ele => {
        flightsInfo.push({
          departure: ele.departure_airport,
          arrival: ele.arrival_airport,
          airline: ele.airline,
          logo: ele.airline_logo,
          duration: ele.duration,
          class: ele.travel_class,
          moreInfo: ele.extensions
        })
      });

      const flightData = {
        flightsInfo,
        total_duration: obj.total_duration,
        price: obj.price,
        moreInfo: obj.extensions
      };

      otherFlights.push(flightData);
    })
  };

  return { bestFlights, otherFlights };
}

export default parseFlights;