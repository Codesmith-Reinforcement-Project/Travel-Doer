import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { populateState } from '../reducers/travelReducer.js';

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const dispatch = useDispatch();
  //the methods of add card and delete card
  const handlePopulateState = () => {
    const state = { origin, destination, budget, initialDate, returnDate };
    dispatch(populateState(state));
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  // console.log('origin', origin, 'destination', destination, 'budget', budget, 'initialdate', initialDate, 'returndate', returnDate);

  return (
    <div className='searchBox'>
      {/* props.MarketID */}
      <input id='originBox' onChange={handleInputChange(setOrigin)}></input>
      <input id='destinationBox' onChange={handleInputChange(setDestination)}></input>
      <input id='budgetBox' onChange={handleInputChange(setBudget)}></input>
      <input id='initialDateBox' onChange={handleInputChange(setInitialDate)}></input>
      <input id='returnDateBox' onChange={handleInputChange(setReturnDate)}></input>
      <button onClick={handlePopulateState}>Search</button>
    </div>
  );
};
export default SearchBar;
