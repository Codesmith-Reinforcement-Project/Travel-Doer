const searchFlights = async (req, res) => {
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
