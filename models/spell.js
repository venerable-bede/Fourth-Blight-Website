var db = require('../db')
var spell = db.Schema({
	name: { type: String, required: true },
	desc: { type: String, required: true },
	page: { type: String },
	range: { type: String },
	components: { type: String },
	material: { type: String },
	ritual: { type: String },
	duration: { type: String },
	concentration: { type: String },
	casting_time: { type: String },
	level: { type: String },
	school: { type: String },
	class: { type: String }
})
module.exports = db.model('Spell', spell)
