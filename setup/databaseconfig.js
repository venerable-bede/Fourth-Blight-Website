var mongoose = require('mongoose')
var spell = require('../models/spell')
var location = require('../models/location')
var monster = require('../models/monster')
var spellData = require('./spelldata.json');
var locationData = require('./locationdata.json');
var monsterData = require('./monsterdata.json');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fourthblight', function () {
	console.log('mongodb connected')

	spell.remove({}, function(err) { 
	   console.log('spells removed') 
	});

	location.remove({}, function(err) { 
	   console.log('locations removed') 
	});

	monster.remove({}, function(err) { 
	   console.log('monster removed') 
	});

	spell.insertMany(spellData)
	    .then(function(mongooseDocuments) {
	        console.log(mongooseDocuments.length + " spells added");
	    })
	    .catch(function(err) {
	        console.log(err)
	    });

    location.insertMany(locationData)
	    .then(function(mongooseDocuments) {
	        console.log(mongooseDocuments.length + " locations added");
	    })
	    .catch(function(err) {
	        console.log(err)
	    });

	monster.insertMany(monsterData)
	    .then(function(mongooseDocuments) {
	        console.log(mongooseDocuments.length + " monsters added");
	    })
	    .catch(function(err) {
	        console.log(err)
	    });
})
