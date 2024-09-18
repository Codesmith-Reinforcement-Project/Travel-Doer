// import { useState } from 'react';
import ResultCard from '../components/ResultCard';
// import { useSelector, useDispatch } from 'react-redux';

const results = () => {
  const [locations, setLocations] = useState('');
  //   const locales = useSelector((state) => state.locations);
  return (
    <div>
      <h1>Your Vacation!!</h1>
      <button>Cheapest</button>
      <button>Furthest</button>
      <div>
        {locations.map((locale, index) => {
          return <ResultCard value={locale} key={index} price={locale.price} />;
        })}
      </div>
    </div>
  );
};

export default results;
