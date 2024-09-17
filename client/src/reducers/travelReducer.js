import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: '',
  destination: '',
  budget: 0,
  initialDate: '',
  returnDate: '',
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const travelSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {
    populateState: (state, action) => {
      const { origin, destination, budget, initialDate, returnDate } =
        action.payload;

      return Object.assign({}, state, {
        origin,
        destination,
        budget,
        initialDate,
        returnDate,
      });
    },
    addMarket: (state) => {
      const currMarketId = state.lastMarketId + 1;
      const currTotalMarkets = state.totalMarkets + 1;
      const currTotalCards = state.totalCards + 1;

      // create the new market object from provided data
      const newMarket = {
        //market objects => ID:value , location: value, cards, percent of total
        marketId: currMarketId,
        marketLocation: state.newLocation,
        marketCards: 1,
        marketPercent: (1 / currTotalCards) * 100,
      };

      // push the new market onto a copy of the market list
      const marketList = state.marketList.slice();
      marketList.push(newMarket);
      console.log('new market', marketList);

      //changes percentages of other cards
      for (let i = 0; i < marketList.length - 1; i++) {
        const corrMarket = {};
        corrMarket.marketId = marketList[i].marketId;
        corrMarket.marketLocation = marketList[i].marketLocation;
        corrMarket.marketCards = marketList[i].marketCards;
        corrMarket.marketPercent =
          (corrMarket.marketCards / currTotalCards) * 100;
        marketList[i] = Object.assign({}, corrMarket);
      }
      // return updated state
      return Object.assign({}, state, {
        totalMarkets: currTotalMarkets,
        totalCards: currTotalCards,
        marketList: marketList,
        lastMarketId: currMarketId,
        newLocation: '',
      });
    },
    setNewLocation: (state, action) => {
      // console.log('new location', action.payload);
      return Object.assign({}, state, {
        newLocation: action.payload,
      });
    },
    addCard: (state, action) => {
      const currentMarketList = state.marketList.slice();
      const currentTotalCards = state.totalCards + 1;

      //go through marketList until we find our object with action.paylod as marketID
      for (let i = 0; i < currentMarketList.length; i++) {
        if (currentMarketList[i].marketId === action.payload) {
          const correctMarket = {};
          correctMarket.marketId = currentMarketList[i].marketId;
          correctMarket.marketLocation = currentMarketList[i].marketLocation;
          correctMarket.marketCards = currentMarketList[i].marketCards + 1;
          correctMarket.marketPercent =
            (correctMarket.marketCards / currentTotalCards) * 100;
          currentMarketList[i] = Object.assign({}, correctMarket);

          // currentMarketList[i].marketCards++;
          break;
        }
      }

      for (let i = 0; i < currentMarketList.length; i++) {
        const corrMarket = {};
        if (currentMarketList[i].marketId !== action.payload) {
          corrMarket.marketId = currentMarketList[i].marketId;
          corrMarket.marketLocation = currentMarketList[i].marketLocation;
          corrMarket.marketCards = currentMarketList[i].marketCards;
          corrMarket.marketPercent =
            (corrMarket.marketCards / currentTotalCards) * 100;
          currentMarketList[i] = Object.assign({}, corrMarket);
        }
      }

      return Object.assign({}, state, {
        //replacing totalCards and marketList in our state
        totalCards: currentTotalCards,
        marketList: currentMarketList,
      });
    },
    deleteCard: (state, action) => {
      const currentMarketList = state.marketList.slice();
      const currentTotalCards = state.totalCards - 1;
      let currentTotalMarkets = state.totalMarkets;

      for (let i = 0; i < currentMarketList.length; i++) {
        if (currentMarketList[i].marketId === action.payload) {
          if (currentMarketList[i].marketCards - 1 === 0) {
            currentMarketList.splice(i, 1);
            currentTotalMarkets--;
          } else {
            const correctMarket = {};
            correctMarket.marketId = currentMarketList[i].marketId;
            correctMarket.marketLocation = currentMarketList[i].marketLocation;
            correctMarket.marketCards = currentMarketList[i].marketCards - 1;
            correctMarket.marketPercent =
              (correctMarket.marketCards / currentTotalCards) * 100;
            currentMarketList[i] = Object.assign({}, correctMarket);
          }

          break;
        }
      }

      for (let i = 0; i < currentMarketList.length; i++) {
        const corrMarket = {};
        if (currentMarketList[i].marketId !== action.payload) {
          corrMarket.marketId = currentMarketList[i].marketId;
          corrMarket.marketLocation = currentMarketList[i].marketLocation;
          corrMarket.marketCards = currentMarketList[i].marketCards;
          corrMarket.marketPercent =
            (corrMarket.marketCards / currentTotalCards) * 100;
          currentMarketList[i] = Object.assign({}, corrMarket);
        }
      }

      return Object.assign({}, state, {
        totalCards: currentTotalCards,
        marketList: currentMarketList,
        totalMarkets: currentTotalMarkets,
      });
    },
  },
});

export const { addCard, addMarket, setNewLocation, deleteCard } =
  travelSlice.actions;

export default travelSlice.reducer;
