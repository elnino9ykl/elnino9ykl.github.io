var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/app'));

// views is directory for all template files
app.set('views', __dirname + '/app/views');

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', function(request, response) {
  response.render('home/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
