import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { populateState, populateResults } from '../reducers/travelReducer.js';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //the methods of add card and delete card

  const handleSearch = async () => {
    const state = { origin, destination, budget, startDate, endDate };
    try {
      await dispatch(populateState(state));

      const response = await fetch('http://localhost:8080/api/search-flights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin,
          destination,
          budget,
          startDate,
          endDate,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        await dispatch(populateResults(data));

        navigate('/results');
      } else {
        console.log(response);
        throw new Error('fetch failed');
      }

      return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  // console.log('origin', origin, 'destination', destination, 'budget', budget, 'initialdate', initialDate, 'returndate', returnDate);

  return (
    <div className='searchBox'>
      {/* props.MarketID */}
      <div className = 'searchBox-text'>
        Origin
        <input id='originBox' onChange={handleInputChange(setOrigin)}></input>
      </div>

      <div className = 'searchBox-text'>
        Destination
        <input
          id='destinationBox'
          onChange={handleInputChange(setDestination)}
        ></input>
      </div>

      <div className = 'searchBox-text'>
        Budget
        <input id='budgetBox' onChange={handleInputChange(setBudget)}></input>
      </div>

      <div className = 'searchBox-text'>
        Start Date
        <input
          id='initialDateBox'
          onChange={handleInputChange(setStartDate)}
        ></input>
      </div>

      <div className = 'searchBox-text'>
        End Date
        <input
          id='returnDateBox'
          onChange={handleInputChange(setEndDate)}
        ></input>
      </div>
      {/* <Link to='/results'> */}
      <button onClick={handleSearch}>Search</button>
      {/* </Link> */}
    </div>
  );
};
export default SearchBar;
