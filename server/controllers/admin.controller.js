const serviceAdmin = require('../services/admin');
const { Word } = require('../db/models');

async function addHouseController(req, res) {
  res.json({ hello: 'hello' });
}

async function adminLogin(req, res) {
  const { email, password, checked } = req.body;

  const checkedWordinDB = await Word.findOne({
    raw: true,
  });
  try {
    if (checked !== checkedWordinDB.name) {
      res.status(401).json({ message: 'Нет доступа входа' });
    }

    const admin = await serviceAdmin.login({ email, password });
    const token = await serviceAdmin.generateJwtToken(admin);
    res.status(200).json({
      token, admin: { email: admin.email, name: admin.name },
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
}

module.exports = { addHouseController, adminLogin };
