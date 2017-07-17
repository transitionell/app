/*
*
*   Express: ReST-API and Static-File server (with external route modules)
*
*/


/**
 * 	Get dependencies
 **/
const express 	 = require('express'),
	  port 		 = process.env.PORT || '3000',
	  api 		 = require('./server/routes/api');
	  path 		 = require('path'),
	  http 		 = require('http'),
	  bodyParser = require('body-parser'),
	  morgan     = require('morgan'),
	  path 		 = require('path'),
	  fs 		 = require('fs')
;



/**
 *	init app. Attach & config middleware
 **/
const app = express();
app.set('port', port);										// Store port from environment in Express.
app.use(morgan('dev'));										// use morgan for logging
app.set('view engine', 'pug');								// use pug to render views
app.use(bodyParser.json());									// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist'))); 		// Point static path to dist
app.set('views', path.join(__dirname, '/client'));			// Point views dir to NG client dir



/**
 *	config routes
 **/
app.use('/api', api);										// Set our api routes
app.get('*', (req, res) => {								// Other routes defer to Angular's routing module
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});



/**
 *	Create HTTP server. Listen on provided port, on all network interfaces.
 **/
const server = http.createServer(app);
server
	.listen(
		port, 
		() => console.log(`API running on localhost:${port}`)
	)
;




