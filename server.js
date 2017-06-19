const express = require('express');
const path = require('path');
const cors = require('express-cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const turingStaff = require('./turing-staff.js');
const bio = require('./bio.js')

app.use(cors({
  allowedOrigins: ['localhost:3000']
}));

app.use(express.static('pictures'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/api/frontend-staff', function(req, res, next) {
  res.status(200).send(turingStaff)
});

app.get('/api/bio/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  if(!bio[id]){
    return next('No id matching');
  }
  res.status(200).send(bio[id]);
});

app.listen(3001);
console.log('Listening for 3001');
