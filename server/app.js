require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

const indexRoute = require('./routes/indexRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.resolve('../client/build')));

app.use(cors({
  origin: [process.env.REACT_URL],
  credentials: true,
}));

app.use('/api', indexRoute);
app.get('*', (req, res) => {
  res.sendFile(path.relative('../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
