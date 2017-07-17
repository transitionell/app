/**
 * 	Get dependencies
 **/
const express 		= require('express'),
	  router 		= express.Router(),
	  fs			= require('fs'),
	  path 			= require('path'),
	  multer  		= require('multer'),
	  uploadDir		= path.join(__dirname,'../../dist/uploads/'),
	  upload 		= multer({ dest: uploadDir }),
	  keyFilePath 	= path.join(__dirname,'../_secrets/TransitionELL-f43d0dfba03a.json'),
	  keyFile 		= fs.readFile(keyFilePath, data=> data);
;



/**
 * 	define api routes & attach modules 
 **/
router
	.get(
		'/', 
		(req, res) => {
			res.send('api works');
		}
	)
	.get(
		'/pug', 
		function (req, res) {
			res.render('pug', { title: 'Hey', message: 'Hello there!' })
		}
	)
	.post(
		'/detect-text',
		upload.single('file'),
		function(req, res) {

			// Debug
			console.log('in /detectText');


			// init uploads dir if necessary
			// WARNING: 
			// - this is highly ineficient and not production ready
			// - need to do this only once per project build
			// - can I add a step in build process to ensure this?
			// - at the very least this shouldn't be synchronous 
			if (!fs.existsSync(uploadDir))
				fs.mkdirSync(uploadDir);
			

			console.log(
				'file is: ', 
				JSON.stringify(req.file,null,4),
				'\nfile path: ',
				req.file.path
			);

			//var filePath = path.join(
			//	__dirname,
			//	req.file.path
			//)

			fs.renameSync(
				//filePath,
				//filePath+'.jpg'
				req.file.path,
				req.file.path+'.jpg'
			)

			/* get text from image */
			var config = {
				projectId: 'transition-ell',
				keyFilename: 'server/_secrets/TransitionELL-f43d0dfba03a.json'
			};
			var client = require('@google-cloud/vision')(config);
			/*
			return client.detectText(
				filePath+'.jpg', 
				function(err, results) {
					if (err) {
						console.error(
							JSON.stringify(err,null,4)
						);
						return res.status(500).send(err);
					}

					console.log(
						'data fetch from google: ',
						JSON.stringify(
							results[0],
							null,
							4
						)
					)
					res.render('mapping', { data: results[0] });
					//return res.json(results[0]);
				}
			);
			*/

			client
				.readDocument(req.file.path+'.jpg')
				.then(
					(results) => {
						const fullTextAnnotation = results[1].responses[0].fullTextAnnotation;
						console.log(fullTextAnnotation.text);

						// send render text to client
						return res.json(results)

					}
				)
				.catch(
					(err) => {
						console.error('ERROR:', err);
						return res.status(500).send(err);
					}
				)
			;



			/* return text to client in JSON 
			//res.render('mapping', { data: results[0] });
			return res.json(
						{
							'results':
							[
								{'id':1},
								{'id':2}
							]
						}
					)
			;
			*/
		}
	)
;




module.exports = router;












