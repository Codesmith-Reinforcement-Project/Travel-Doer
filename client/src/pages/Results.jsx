import { useState } from 'react';
import ResultCard from '../components/ResultCard';
// import { useSelector, useDispatch } from 'react-redux';

const Results = () => {
  const [locations, setLocations] = useState([]);
  const [bool, setBool] = useState(false);
  function cardClick() {
    setBool(true);
  }

  //   const locales = useSelector((state) => state.locations);
  return (
    <div>
      <h1>Your Vacation!!</h1>
      <button>Cheapest</button>
      <button>Furthest</button>
      <div>
        {locations.map((locale, index) => {
          return (
            <ResultCard
              value={locale}
              key={index}
              locations={locations}
              setLocations={setLocations}
              cardClick={cardClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
