require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

const indexRoute = require('./routes/indexRouter');


const adminMainRouter = require('./routes/adminMainRouter');

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: 'GET,POST,PUT,DELETE',
}));

app.use('/api', indexRoute);
app.use('/api/admin', adminMainRouter)

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
