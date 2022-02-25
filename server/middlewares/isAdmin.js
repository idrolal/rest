const jwt = require('jsonwebtoken');

async function isAuth(req, res, next) {
  try {
    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1];
    const { userId, email } = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.userId = userId;
    req.email = email;

    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

module.exports = { isAuth };
