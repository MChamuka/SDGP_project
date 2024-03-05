const express = require('express');
const app = express();
const { spawn } = require('child_process');


const args = ["tt1670345"];
const pythonProcess = spawn('python', ['movie-locations.py', ...args]);

let locations = "";
pythonProcess.stdout.on('data', (data) => {
  locations = data.toString();
  console.log(locations);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`Python script error: ${data.toString()}`);
});

app.get('/locations', (req, res) => {
  res.send(locations);
});

app.listen(8000, () => {
  console.log('Server Running');
});

module.exports = app;
