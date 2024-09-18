const PopUp = ({ bool, setBool, selectedLocale, airports }) => {
  // const depAirport = locale.flightsInfo[0].departure.name;
  console.log('this is locale passed in: ', selectedLocale);
  const arrAirport = selectedLocale.flightsInfo[0].arrival.name;
  const price = selectedLocale.price;
  // const arrCity = locale.airports[0].arrival[0].city;
  // const arrCityPic = locale.airports[0].arrival[0].image;
  // const arrCityPicThumb = locale.airports[0].arrival[0].thumbnail;
  // if (best_flights[0].layovers.length)

  if (!bool || !selectedLocale) {
    return null;
  }
  return (
    <div>
      flightInfoObjblah
      <button>Go</button>
    </div>
  );
};

export default PopUp;
