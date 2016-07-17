var router = require('express').Router()
var bcrypt = require('bcrypt-nodejs')
var jwt    = require('jwt-simple')
var Monster   = require('../../models/monster')
var config = require('../../config')

router.get('/monsters/:name', function (req, res, next) {
	var name = req.params.name;
	Monster.find({name: { "$regex": name, "$options": "i" }},
	function (err, monsters) {
		if (err) { return next(err) }
		res.json(monsters)
	})
})

module.exports = router
