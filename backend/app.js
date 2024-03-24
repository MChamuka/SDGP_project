// importing packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn, exec } = require('child_process');
const mongoose = require('mongoose');
const Location = require('./models/locations');
const UserModel = require('./models/userprofile');
const CrowdData = require('./models/crowdData')
require("dotenv").config();
// const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { get } = require('http');
const { log } = require('console');

//creating express app
const app = express();

// use methods
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

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

let userData = ''

app.post('/userData',(req,res)=>{
  data = req.body
  console.log(data.email);
  UserModel.find({email: data.email}, {'email': 1, 'firstName': 1, 'lastName': 1})
  .then(result => {
    userData = result[0]
    console.log(result[0])
  })
  .catch((err) => {
    console.log(err);
  });  
})

app.get('/userData',(req,res)=>{
  res.send(userData)
});



app.post('/crowdData',(req,res)=>{
  data = req.body
  console.log(data.movieName);
  res.send(data)
  CrowdData.create(data)
})

app.post('/updateCrowdData', async(req,res)=>{
  data = req.body
  console.log(data);
  if(data.func == 'Publish to JetViaLense'){
    console.log('added');
    const crowdData = await CrowdData.find({movieName: data.id},{movieLocation: 1, movieScene: 1})
    const newLocation = crowdData[0].movieLocation[0]+' ('+crowdData[0].movieScene[0]+')'
    console.log(newLocation);
    const result = await Location.findOneAndUpdate(
      {movieTitle: data.id}, // Filter
      {$addToSet: {locations: newLocation}}, // Update
      {new: true}
    )
    console.log(result);
  }
  console.log('removed');
  const result = await CrowdData.deleteOne({ movieName: data.id })
  console.log(result);
})

app.get('/crowdData',(req,res)=>{
  CrowdData.find()
  .then((result) => {
    res.send(result)
  })
})




module.exports = app;
