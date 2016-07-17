var router = require('express').Router()
var bcrypt = require('bcrypt-nodejs')
var jwt    = require('jwt-simple')
var Spell   = require('../../models/spell')
var config = require('../../config')

router.get('/spells/:name', function (req, res, next) {
	var name = req.params.name;
	console.log(name);
	Spell.find({ $or:[{name: { "$regex": name, "$options": "i" }}]},
	function (err, spells) {
			if (err) { return next(err) }
			res.json(spells)
	})
})

module.exports = router
