var express = require('express');
var router = express.Router();
var cors = require('cors');
router.use(cors());
var fileUpload = require('express-fileupload');


router.use(fileUpload());

router.use('/public', express.static(global.__basedir + '/public'));

router.post('/upload', (req, res, next) => {
	// console.log(req);
	let imageFile = req.files.file;

	imageFile.mv(`${__basedir}/public/${req.body.filename}`, err => {
		if (err) {
			return res.status(500).send(err);
		}

		res.json({ file: `public/${req.body.filename}` });
		console.log(res.json);
	});
});

  module.exports = router;
