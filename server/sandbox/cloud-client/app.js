var config = {
	projectId: 'transition-ell',
	keyFilename: '../_secrets/TransitionELL-f43d0dfba03a.json'
};


var client = require('@google-cloud/vision')(config);


// Read the text from an image.
client.detectText('../images/menu.jpg', function(err, results) {
	if (err) {
		console.error(
			JSON.stringify(err,null,4)
		);
		process.exit(-1);
	}

	for (var i=0; i<results.length; i++){
		console.log(results[i]);
	}
});





