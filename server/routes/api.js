/**
 * 	Get dependencies
 **/
const express 	= require('express'),
	  router 	= express.Router(),
	  multer  	= require('multer'),
	  upload 	= multer({ dest: 'dist/uploads/' })
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

//			console.log(
//				'file is: ', 
//				JSON.stringify(req.file,null,4),
//				'file path: ',
//				req.file.path
//			);
//
//			var filePath = path.join(
//				__dirname,
//				req.file.path
//			)
//
//			fs.rename(
//				filePath,
//				filePath+'.jpg'
//			)
//
//			/* get tect from image */
//			var config = {
//				projectId: 'transition-ell',
//				keyFilename: './src/sandbox/_secrets/TransitionELL-f43d0dfba03a.json'
//			};
//			var client = require('@google-cloud/vision')(config);
//			/*
//			return client.detectText(
//				filePath+'.jpg', 
//				function(err, results) {
//					if (err) {
//						console.error(
//							JSON.stringify(err,null,4)
//						);
//						return res.status(500).send(err);
//					}
//
//					console.log(
//						'data fetch from google: ',
//						JSON.stringify(
//							results[0],
//							null,
//							4
//						)
//					)
//					res.render('mapping', { data: results[0] });
//					//return res.json(results[0]);
//				}
//			);
//			*/
//
//			client
//				.readDocument(filePath+'.jpg')
//				.then(
//					(results) => {
//						const fullTextAnnotation = results[1].responses[0].fullTextAnnotation;
//						console.log(fullTextAnnotation.text);
//
//						// send render text to client
//						return res.json(results)
//
//					}
//				)
//				.catch(
//					(err) => {
//						console.error('ERROR:', err);
//						return res.status(500).send(err);
//					}
//				)
//			;



			/* return text to client in JSON */
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
		}
	)
;




module.exports = router;












