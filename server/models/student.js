const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
	name: String,
	primaryLanguage: String,
	classNumber: String
});

module.exports = mongoose.model('student', studentSchema, 'students');