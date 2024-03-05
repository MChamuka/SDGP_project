const express = require('express');
const app = express();
const locationsRoute = require('./locations');

app.use('/locations', locationsRoute)

app.listen(8000, () => {
    console.log('Server Running');
});