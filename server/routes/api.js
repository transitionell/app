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
	  keyFile 		= fs.readFile(keyFilePath, data=> data)
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
				'multer config is: ', 
				JSON.stringify(req.file,null,4),
				'\nfile path: ',
				req.file.path
			);

			//let filePath = path.join(
			//	__dirname,
			//	req.file.path
			//)

			fs.renameSync(
				//filePath,
				//filePath+'.jpg'
				req.file.path,
				req.file.path+'.jpg'
			)


			// Debug
			console.log('projectId: ',process.env.GCLOUD_PROJECT);

			/* get text from image */
			let config = {
				projectId: process.env.GCLOUD_PROJECT,
				project_id: process.env.GCLOUD_PROJECT,
				credentials: {
					type: process.env.GCLOUD_TYPE,
					project_id: process.env.GCLOUD_PROJECT,
					private_key_id: process.env.GCLOUD_PRIVATE_KEY_ID,
					private_key: process.env.GCLOUD_PRIVATE_KEY,
					client_email: process.env.GCLOUD_CLIENT_EMAIL,
					client_id: process.env.GCLOUD_CLIENT_ID,
					auth_uri: process.env.GCLOUD_AUTH_URI,
					token_uri: process.env.GCLOUD_TOKEN_URI,
					auth_provider_x509_cert_url: process.env.GCLOUD_AUTH_PROVIDER_X509_CERT_URL,
					client_x509_cert_url: process.env.GCLOUD_CLIENT_X509_CERT_URL
				}
			};
			let client = require('@google-cloud/vision')(config);
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
		}
	)
;




module.exports = router;












