var express = require('express');
var app = express();
var request = require('request');
require('dotenv').config();
const access_token = process.env.ACCESS_TOKEN;
var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+access_token;


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api', function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      res.json({obj})
      res.end();
    }
  })
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
