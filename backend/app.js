// importing packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn, exec } = require('child_process');
const mongoose = require('mongoose');
const Location = require('./models/locations');
const { get } = require('http');

//creating express app
const app = express();

// use methods
app.use(bodyParser.json());
app.use(cors());

// db connection
const dbURI = 'mongodb+srv://danindu:gLe8lKyg5S0UNRP4@jetvialensedb.x7bdmb1.mongodb.net/film-data'
mongoose.connect(dbURI)
    .then(() => app.listen(4000))
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));

    
// get movie ids to the backend
app.post('/locations', (req, res) => {
  movieData = req.body;
  console.log(movieData.ID);
  storeLocations(movieData).then(() => {
    console.log('Locations stored');
    getLocations(movieData);
  });
});

// store locations in the database
async function storeLocations() {
  const id = [movieData.ID];
  const title = [movieData.Title];

  // executing the python script
  const pythonProcess = spawn('python', ['movie-locations.py', id, title]);

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python script error: ${data.toString()}`);
  });
}

// get locations from the database
function getLocations () {

  id = movieData.ID;
  title = movieData.Title;

  app.get('/locations', (req, res) => {
    Location.find({imdbID: id}, {"_id": 1, "movieTitle": 1, "locations": 1})
      .then((result) => {
        if(result.length != 0) {
          console.log('Data recieved');
        }
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });      
    res.status(200);
  });

}

module.exports = app;
