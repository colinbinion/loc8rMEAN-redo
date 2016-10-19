var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/Loc8rRedo';
mongoose.connect(dbURI);

mongoose.connection.on('connected', functiion () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', functiion (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', functiion () {
  console.log('Mongoose is disconnected');
});
