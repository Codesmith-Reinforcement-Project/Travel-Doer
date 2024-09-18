import { createSlice } from '@reduxjs/toolkit';
import parseFlights from './helperReducer.js';
const initialState = {
  origin: '',
  destination: '',
  budget: 0,
  startDate: '',
  endDate: '',
  savedUrl: '',
  results: {},
  /*
  results array format
    url : the flight url to be saved
    bestflights: [{
      flightsInfo: [{ departure {            
                        "name": "Beijing Capital International Airport",
                        "id": "PEK",
                        "time": "2023-10-03 15:10"
                      }, arrival, airline, logo, duration, class, moreInfo: [] }, {}, ..., {}],
      total_duration, 
      price, 
      moreInfo: []
    }, {}, ..., {}]
    otherflights: [] (same structure as bestflights)
    airports: [] (same as documentation)
  */
};

const travelSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {
    populateState: (state, action) => {
      const { origin, destination, budget, startDate, endDate } =
        action.payload;
      // console.dir(state.origin);
      // console.log('newstuff', origin, destination, budget, startDate, endDate);

      return { ...state, origin, destination, budget, startDate, endDate };
    },
    populateResults: (state, action) => {
      const parsedObject = parseFlights(action.payload);
      parsedObject.url = action.payload.search_metadata.google_flights_url;
      parsedObject.airports = action.payload.airports;
      console.log('in reducer', parsedObject);
      return { ...state, results: parsedObject };
    },
  },
});

export const { populateState, populateResults } = travelSlice.actions;
export default travelSlice.reducer;
