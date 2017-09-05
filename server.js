const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const api = require('./server/routes/api');

const port = 4200;

const app = express();

// Where all Angular code is placed, allows express access to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Parses the text as urlencoded data and json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

app.listen(port, function(){
	console.log("Server is running on localhost:" + port);
});