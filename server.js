var express =  require('express')
var logger     = require('morgan')


var app = express()
app.use(logger('dev'))

app.use('/js', express.static(__dirname + '/js'));
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

var server = app.listen(1337, function () {
  console.log('server listening on %d', server.address().port)
})
