const getAccessToken = async() => {
  const client_id = process.env.AMADEUS_API_KEY;
  const client_secret = process.env.AMADEUS_API_SECRET;

  const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': client_id,
      'client_secret': client_secret
    })
  });


  const data = await response.json();
  return data.access_token;
};

const searchFlights = async (req, res) => {
  try {
    const token = await getAccessToken();
    
    const mockBody = {
      "currencyCode": "USD",
      "originDestinations": [
        {
          "id": "1",
          "originLocationCode": "NYC",
          "destinationLocationCode": "MAD",
          "departureDateTimeRange": {
            "date": "2024-11-01",
            "time": "10:00:00"
          }
        }
      ],
      "travelers": [
        {
          "id": "1",
          "travelerType": "ADULT"
        }
      ],
      "sources": [
        "GDS"
      ],
      "searchCriteria": {
        "maxFlightOffers": 2,
        "flightFilters": {
          "cabinRestrictions": [
            {
              "cabin": "BUSINESS",
              "coverage": "MOST_SEGMENTS",
              "originDestinationIds": [
                "1"
              ]
            }
          ]
        }
      }
    };

    const response = await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockBody)
    });

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching flights' });
  }
};

module.exports = { searchFlights };