const express = require('express');
const router = express.Router();

/* GET api listing. */
router
	.get('/', (req, res) => {
		res.send('api works');
	})
	.get('/pug', function (req, res) {
		res.render('pug', { title: 'Hey', message: 'Hello there!' })
	})
;

module.exports = router;