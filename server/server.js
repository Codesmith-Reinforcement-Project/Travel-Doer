require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const { checkDatabaseConnection } = require('./models/database');
const userRoutes = require('./routes/userRoutes');
const flightRoutes = require('./routes/flightRoutes');

const PORT = process.env.PORT || 8080;
const app = express();
const bcrypt = require('bcrypt');

checkDatabaseConnection();
app.use(express.json());
app.use(cors());

app.use('/api/auth', userRoutes);

app.use('/api', flightRoutes);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
