const searchFlights = async (req, res) => {
    try {
    const { origin, destination, startDate, endDate, budget } = req.body;

    const apiUrl = `https://serpapi.com/search?engine=google_flights&departure_id=${origin}&arrival_id=${destination}&outbound_date=${startDate}&return_date=${endDate}&currency=USD&adults=1&max_price=${budget}&api_key=${process.env.SERPAPI_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.search_metadata.status === 'Success') {
      const url = data.search_metadata.google_flights_url;
      
      const filteredBest = data.best_flights
        ? data.best_flights.filter(flight => flight.price <= budget)
        : [];
      const filteredOther = data.other_flights
        ? data.other_flights.filter(flight => flight.price <= budget)
        : [];

      const filteredData = {
        ...data,
        other_flights: filteredOther,
        best_flights: filteredBest,
        search_metadata: { google_flights_url: url },
      };

      res.json(filteredData);
    } else {
      res.status(404).json({ error: 'No flights found' });
    }

  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: error.message || 'An error occurred while fetching flights' });
  }  
};

module.exports = { searchFlights };
