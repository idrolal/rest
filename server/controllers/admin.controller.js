const serviceAdmin = require('../services/admin');

async function addHouseController(req, res) {
  res.json({ hello: 'hello' });
}

async function adminLogin(req, res) {
  console.log(req.body);
  const { email, password, checked } = req.body;

  try {
    if (checked !== 'qwerty') {
      res.status(401).json({ message: 'Нет доступа входа' });
    }

    const admin = await serviceAdmin.login({ email, password });
    const token = await serviceAdmin.generateJwtToken(admin);
    console.log(token);
    res.status(200).json({
      token, admin: { email: admin.email, name: admin.name }
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
}

module.exports = { addHouseController, adminLogin };
