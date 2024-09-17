import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { populateState } from '../reducers/marketsReducer.js';

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

  return (
    <div className='marketBox'>
      {/* props.MarketID */}
      <input id='originBox' onChange={setOrigin(this.value)}></input>
      <input id='destinationBox' onChange={setDestination(this.value)}></input>
      <input id='budgetBox' onChange={setBudget(this.value)}></input>
      <input id='initialDateBox' onChange={setInitialDate(this.value)}></input>
      <input id='returnDateBox' onChange={setReturnDate(this.value)}></input>
      <button onClick={handlePopulateState}>Search</button>
    </div>
  );
};
export default SearchBar;
