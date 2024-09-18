const db = require('../models/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userController = {
  // Checks login credentials against existing rows in database.
  async login(req, res, next) {

    try {
      // checks for username in database
      const data = [req.body.email.toLowerCase()];
      const string = `SELECT * FROM users
            WHERE email = $1`;
      const response = await db.query(string, data);
      if (response.rows.length > 0) {
        // if there is a username, checks uses bcrypt to check hashed password against (hashed) password stored in the database
       if (await bcrypt.compare(req.body.password, response.rows[0].password));
       // if matching, creates a jwt and returns it.
       const accessToken = jwt.sign(req.body.email.toLowerCase(), process.env.ACCESS_TOKEN_SECRET)
       res.json({accessToken:accessToken});
 
      } else {
        res.status(200).json(false);
      }
    } catch (err) {
      const error = err;
      return next({
        message: 'Error in login: ' + error.message,
        log: err,
      });
    }
  },

  // Guard against duplicate acounts
  async checkForExisting(req, res, next) {
    try {
      const data = [req.body.email.toLowerCase()];
      const string = `SELECT * FROM users
            WHERE email = $1;`;
      const response = await db.query(string, data);
      if (response.rows.length > 0)
        res.status(200).json('This username already exists');
      else {
        return next();
      }
    } catch (err) {
      return next({
        message: 'Error checking for existing user: ' + err,
        log: err,
      });
    }
  },
  // Create a new row in the database with login credentials

  async hashPassword(req, res, next) {
    try {
      // const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(hashedPassword);
      res.locals.newUser = { email: req.body.email.toLowerCase(), password: hashedPassword };
      return next();
    } catch (err) {
      return next({
        message: 'Error checking for existing user: ' + err,
        log: err,
      });
    }
  },

  async addNewAccount(req, res, next) {
    console.log('creating new account with: ' + req.body);
    try {
      const data = [req.body.email.toLowerCase(), res.locals.newUser.password];

      const string = `INSERT INTO users (email, password) 
        VALUES ($1, $2)`;
      const response = await db.query(string, data);
      res.status(200).json('user successfully added...');
    } catch (err) {
      return next({
        message: 'Error checking for existing user: ' + err,
        log: err,
      });
    }
  },
};

module.exports = userController;
