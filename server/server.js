const express = require( 'express' );
const app = express();
const path = require( 'path' );

// Settings
app.set( 'port', 3000 );
app.set( 'views', path.join(__dirname, '..', '/public/views' ) );
//app.engine('html', require('ejs').renderFile);
app.set( 'view engine', 'ejs');

// Routes
app.use( require('../public/routes/index' ) );
app.use( '/css', express.static(path.join(__dirname, "..", "public/assets/css" ) ) );
app.use( '/images', express.static(path.join(__dirname, "..", "public/assets/images" ) ) );

// Static files

// Listening server
app.listen( app.get( 'port' ), () => {
    console.log( 'Server on port', app.get( 'port' ) );
} );