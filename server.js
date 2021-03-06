//Installs express 
const express = require('express');
const app = express();

// Uses the ng built files from the /dist folder
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);