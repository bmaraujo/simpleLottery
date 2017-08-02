var express = require('express');
var router = express.Router();

/* GET home page. */


router.post('/draw',function(req,res){

	console.log(req);
	
	options = req.body.options.split(";");

	var indexDrawn = Math.round(Math.random() * (options.length-1));
	var sorteado = options[indexDrawn];

	console.log(options);
	console.log(options.length);
	console.log(indexDrawn);
	console.log(sorteado);

	return res.status(200).json({success:true,drawn:sorteado});
});

module.exports = router;
