const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// // Loading evnironmental variables here
// if (process.env.NODE_ENV !== 'production') {
// 	console.log('loading dev environments');
// 	require('dotenv').config();
// }
// require('dotenv').config();

// const express = require('express');
// const morgan = require('morgan');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const dbConnection = require('./db'); // loads our connection to the mongo database
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;


// // Middlewares
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(session({
//   secret: process.env.APP_SECRET || 'this is the default passphrase',
//   store: new MongoStore({ mongooseConnection: dbConnection }),
//   resave: false,
//   saveUninitialized: false
// }));

// // // Passport
// // app.use(passport.initialize());
// // app.use(passport.session()); // will call the deserializeUser

// // Add routes, both API and view
// app.use(routes);


// // If its production environment!
// if (true) {
// 	const path = require('path');
// 	console.log('YOU ARE IN THE PRODUCTION ENV');
// 	app.use(express.static(path.join(__dirname, '../client/build')));
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.join(__dirname, 'index.html'))
// 	});
// }


// // Error handler
// app.use(function(err, req, res, next) {
// 	console.log('====== ERROR =======');
// 	console.error(err.stack);
// 	res.status(500);
// });

// // Starting Server
// app.listen(PORT, () => {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });