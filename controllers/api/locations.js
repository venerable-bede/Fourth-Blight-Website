var router = require('express').Router()
var bcrypt = require('bcrypt-nodejs')
var jwt    = require('jwt-simple')
var Location   = require('../../models/location')
var config = require('../../config')

router.get('/locations/:name', function (req, res, next) {
	var name = req.params.name;
	console.log(name);
	Location.find({ $or:[{Unit_Name: { "$regex": name, "$options": "i" }}, 
					  	{Hex_Location: { "$regex": name, "$options": "i" }},
					  	{Zone_Location: { "$regex": name, "$options": "i" }}]},
	function (err, locations) {
			if (err) { return next(err) }
			res.json(locations)
	})
})

module.exports = router
