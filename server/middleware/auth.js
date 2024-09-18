const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
   const authHeaqder = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1]
   //if there is no token
   if (token == null) return res.sendStatus(401);

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // if token is invalid
    if (err) return res.sendStatus(403)
        req.user = user;
    next();
   })

}