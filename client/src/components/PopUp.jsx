const PopUp = ({ bool, setBool, flightInfoObj, locale }) => {
  const depAirport = locale.best_flights[0].flights[0].departure_airport;
  const arrAirport = locale.best_flights[0].flights[0].arrival_airport;
  const price = locale.best_flights[0].price;
  const arrCity = locale.airports[0].arrival[0].city;
  const arrCityPic = locale.airports[0].arrival[0].image;
  const arrCityPicThumb = locale.airports[0].arrival[0].thumbnail;
  // if (best_flights[0].layovers.length)

  if (!bool || !flightInfoObj) {
    return null;
  }
  return (
    <div>
      flightInfoObj
      <button>Go</button>
    </div>
  );
};

export default PopUp;
