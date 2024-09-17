const PopUp = ({ bool, setBool, flightInfoObj }) => {
  const depAirport = flightInfoObj.data[0].itineraries[0].segments[0].iataCode;
  let arrAirport;
  if (flightInfoObj.data[0].itineraries[0].segments.length === 1)
    arrAirport =
      flightInfoObj.data[0].itineraries[0].segments[0].arrival.iataCode;
  else if (flightInfoObj.data[0].itineraries[0].segments.length === 2)
    arrAirport =
      flightInfoObj.data[0].itineraries[0].segments[1].arrival.iataCode;

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
