var db = require('../db')
var monster = db.Schema({
	name: { type: String, required: true },
	size: { type: String, required: true },
	type: { type: String, required: true },
	subtype: { type: String},
	alignment: { type: String},
	armor_class: { type: String},
	hit_points: { type: String},
	hit_dice: { type: String},
	speed: { type: String},
	strength: { type: String},
	dexterity: { type: String},
	constitution: { type: String},
	intelligence: { type: String},
	wisdom: { type: String},
	charisma: { type: String},
	constitution_save: { type: String},
	intelligence_save: { type: String},
	wisdom_save: { type: String},
	history: { type: String},
	perception: { type: String},
	damage_vulnerabilities: { type: String},
	damage_resistances: { type: String},
	damage_immunities: { type: String},
	condition_immunities: { type: String},
	senses: { type: String},
	languages: { type: String},
	challenge_rating: { type: String},
	special_abilities:[
	  {
	     name : String,
	     desc : String,
	     attack_bonus : String
	  }
	],
	actions: [
	  {
	     name: String,
	     desc: String,
	     attack_bonus: String,
	     damage_dice: String,
	     damage_bonus: String
	  }
	],
	legendary_actions: [
	  {
	    name: String,
	    desc: String,
	    attack_bonus: String
	  }
	]
})
module.exports = db.model('Monster', monster)
