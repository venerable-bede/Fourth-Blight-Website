var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fourthblight', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
