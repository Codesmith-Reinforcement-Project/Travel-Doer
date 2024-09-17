const { buildAirlineLink } = require('../utility/airlinkLinkBuilder');

// const getAccessToken = async() => {
//   const client_id = process.env.AMADEUS_API_KEY;
//   const client_secret = process.env.AMADEUS_API_SECRET;

//   const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: new URLSearchParams({
//       'grant_type': 'client_credentials',
//       'client_id': client_id,
//       'client_secret': client_secret
//     })
//   });

//   const data = await response.json();
//   return data.access_token;
// };

const searchFlights = async (req, res) => {
  // try {
  //   const token = await getAccessToken();
  //   const { origin, destination, startDate, endDate, budget } = req.body;

  //   const requestBody = {
  //     "currencyCode": "USD",
  //     "originDestinations": [
  //       {
  //         "id": "1",
  //         "originLocationCode": origin,
  //         "destinationLocationCode": destination,
  //         "departureDateTimeRange": {
  //           "date": startDate
  //         }
  //       },
  //       {
  //         "id": "2",
  //         "originLocationCode": destination,
  //         "destinationLocationCode": origin,
  //         "departureDateTimeRange": {
  //           "date": endDate
  //         }
  //       }
  //     ],
  //     "travelers": [
  //       {
  //         "id": "1",
  //         "travelerType": "ADULT"
  //       }
  //     ],
  //     "sources": [
  //       "GDS"
  //     ],
  //     "searchCriteria": {
  //       "maxFlightOffers": 10,
  //       "flightFilters": {
  //         "price": {
  //           "maxPrice": budget
  //         }
  //       }
  //     }
  //   };

  //   const response = await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(requestBody)
  //   });

  //   const data = await response.json();

  //   if (data.data && data.data.length > 0) {
  //     const flightOffer = data.data[0];

  //     const origin = flightOffer.itineraries[0].segments[0]?.departure.iataCode || origin;
  //     const destination = flightOffer.itineraries[0].segments[0]?.arrival.iataCode || destination;
  //     const departureDate = flightOffer.itineraries[0].segments[0]?.departure.at.split('T')[0];
  //     const returnDate = endDate;

  //     const bookingLink = buildAirlineLink(origin, destination, departureDate, returnDate);

  //     res.json({
  //       flightDetails: flightOffer,
  //       bookingLink
  //     });
  //   } else {
  //     res.status(404).json({ error: 'No flights found' });
  //   }

  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'An error occurred while fetching flights' });
  // }

  try {
    const { origin, destination, startDate, endDate, budget } = req.body;

    const apiUrl = `https://serpapi.com/search?engine=google_flights&departure_id=${origin}&arrival_id=${destination}&outbound_date=${startDate}&return_date=${endDate}&currency=USD&adults=1&max_price=${budget}&api_key=${process.env.SERPAPI_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.search_metadata.status === 'Success') {
      const url = data.search_metadata.google_flights_url;
      const flightDetails = data.other_flights.length > 0 ? data.other_flights[0] : null;

      let arrivalImage = null;
      
      if (data.airports && data.airports.length > 0) {
        const arrivalAirport = data.airports[0].arrival[0];
        arrivalImage = arrivalAirport?.image || null;
      }

      res.json({
        flightDetails,
        bookingLink: url,
        destinationImage: arrivalImage
      });
    } else {
      res.status(404).json({ error: 'No flights found' });
    }

  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: error.message || 'An error occurred while fetching flights' });
  }  
};

module.exports = { searchFlights };
