import { createSlice } from '@reduxjs/toolkit';
import parseFlights from './helperReducer.js';
const initialState = {
  origin: '',
  destination: '',
  budget: 0,
  initialDate: '',
  returnDate: '',
  resultsArray: [],
};

const travelSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {
    populateState: (state, action) => {
      const { origin, destination, budget, initialDate, returnDate } = action.payload;
      console.dir(state.origin);
      console.log('newstuff', origin, destination, budget, initialDate, returnDate);

      return {...state, origin, destination, budget, initialDate, returnDate, };
    },
    populateResults: (state, action) => {
      const resultsArray = parseFlights(action.payload);
      return {...state, resultsArray}
    }
  },
});

export const { populateState, } = travelSlice.actions;
export default travelSlice.reducer;
