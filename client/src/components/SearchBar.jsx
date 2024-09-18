import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { populateState, populateResults } from '../reducers/travelReducer.js';

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dispatch = useDispatch();
  //the methods of add card and delete card
  const handleSearch = async () => {
    const state = { origin, destination, budget, startDate, endDate };
    try {
      await dispatch(populateState(state));

      const response = await fetch('http://localhost:8080/api/search-flights', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origin, destination, budget, startDate, endDate })
      });
      if (response.ok) {
        const data = await response.json();
        await dispatch(populateResults(data));
      } else { console.log(response); throw new Error('fetch failed'); }

      return;
    } catch (err) { console.log(err); }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  // console.log('origin', origin, 'destination', destination, 'budget', budget, 'initialdate', initialDate, 'returndate', returnDate);

  return (
    <div className='searchBox'>
      {/* props.MarketID */}
      <div>
        Origin
        <input id='originBox' onChange={handleInputChange(setOrigin)}></input>
      </div>

      <div>
        Destination
        <input id='destinationBox' onChange={handleInputChange(setDestination)}></input>
      </div>

      <div>
        Budget
        <input id='budgetBox' onChange={handleInputChange(setBudget)}></input>
      </div>

      <div>
        Start Date
        <input id='initialDateBox' onChange={handleInputChange(setStartDate)}></input>
      </div>

      <div>
        End Date
        <input id='returnDateBox' onChange={handleInputChange(setEndDate)}></input>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default SearchBar;
