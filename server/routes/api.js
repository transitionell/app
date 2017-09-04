const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student'),
	  fs			= require('fs'),
	  path 			= require('path'),
	  multer  		= require('multer'),
	  uploadDir		= path.join(__dirname,'../../dist/uploads/'),
	  upload 		= multer({ dest: uploadDir }),
	  keyFilePath 	= path.join(__dirname,'../_secrets/TransitionELL-f43d0dfba03a.json'),
	  keyFile 		= fs.readFile(keyFilePath, data=> data)
;

const db = "mongodb://demdi:ell4u@ds137207.mlab.com:37207/demdi-students"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
// mongoose.connect('mongodb://demdi:ell4u@ds137207.mlab.com:37207/demdi-students', function(err){
	if(err){
		console.error("Error! " + err);
	}
});

router.get('/students', function(req, res){
	console.log('Get request for all students');
	Student.find({})
	.exec(function(err, students){
		if (err){
			console.log("Error retrieving students");
		}else {
			res.json(students);
		}
	});
});

router.get('/students/:id', function(req, res){
	console.log('Get request for a single student');
	Student.findById(req.params.id)
	.exec(function(err, student){
		if (err){
			console.log("Error retrieving student");
		}else {
			res.json(student);
		}
	});
});

router.post('/student', function(req, res){
	console.log('Add a student');
	var newStudent = new Student();
	newStudent.name = req.body.name;
	newStudent.primaryLanguage = req.body.primaryLanguage;
	newStudent.classNumber = req.body.classNumber;
	newStudent.save(function (err, insertedStudent) {
		if(err){
			console.log('Error saving student');
		}else {
			res.json(insertedStudent)
		}
	});
});

router.put('/student/:id', function(req, res){
	console.log('Update a student');
	Student.findByIdAndUpdate(req.params.id,
	{
		$set: {
				name: req.body.name, 
				primaryLanguage: req.body.primaryLanguage,
				classNumber: req.body.classNumber
			  }
	},
	{
		new: true
	},
	function(err, updatedStudent){
		if(err){
			res.send('Error updating student');
		}else {
			res.json(updatedStudent);
		}
	});
});

router.delete('/student/:id', function(req, res){
	console.log('Deleting a student');
	Student.findByIdAndRemove(req.params.id, function(err, deletedStudent){
		if(err){
			res.send('Error deleting studt')
		}else{
			res.json(deletedStudent);
		}
	});
});

router.post(
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

			/* get text from image */
			let config = {
				projectId: 'transition-ell',
				keyFilename: 'server/_secrets/TransitionELL-f43d0dfba03a.json'
			};
			let client = require('@google-cloud/vision')(config);
			client
				.readDocument(req.file.path+'.jpg')
				.then(
					(results) => {
						const fullTextAnnotation = results[1].responses[0].fullTextAnnotation;
						var text = fullTextAnnotation.text;
						console.log(fullTextAnnotation.text);

						// send render text to client
						//return res.json(results)
						//return res.json({text: fullTextAnnotation.text})
						let config2 = {
							projectId: 'ell-edu',
							keyFilename: 'server/_secrets/ELL_Edu-4ee6bd69f677.json'
						};

						let translateClient = require('@google-cloud/translate')(config2);
						translateClient
							.translate('photosynthesis', {from: 'en', to: 'es'})
							.then(
								(data) =>{
									text = text.replace(/photosynthesis/gi, 'photosynthesis |' + data[0] +'|');
									console.log("\ndata: " + data[0]);
									return res.json({translation: text});
								}
							)
						;
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