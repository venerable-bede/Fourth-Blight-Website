var db = require('../db')
var location = db.Schema({
	Hex_Location: { type: String, required: true }, 
	Zone_Location: { type: String, required: true },
	Unit_Name: { type: String, required: true },
	Unit_Type: { type: String, required: true },
	Description: { type: String, required: true }
})
module.exports = db.model('Location', location)
