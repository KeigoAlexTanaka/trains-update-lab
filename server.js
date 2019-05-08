const express = require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const logger = require('morgan');
app.use(logger('dev'));
const axios=require('axios');
const PORT = process.env.PORT || 3000;
const {planetRouter} = require('./routes/planets')

app.use('/planets',planetRouter)

app.get('/', async (req, res) => {
  try {
    res.send("Hello Friend")
  } catch (e) {
    res.status(e.status).json({ msg: e.status })
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})