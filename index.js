// Storing all the var require up here

var express 	 = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var request    = require('request');
var app 			 = express();

// app.set and app.use 
// used for rendering a front-end

app.set('view engine', 'ejs');
app.use(express.static(__dirname+ 'views'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));


// trying to render just to test the app is working

// app.get('/', function(req, res) {
// 	res.render('index');
// });

// using the default url and params, 
// testing out that API key works and data is rendering

app.get('/', function(req, res) {
	var results = "";
	// var api = process.env.MAPS_API_KEY;
	var origin = req.query.q;
	var destination = req.query.z;
	var travelMode = req.query.travel;
	console.log(origin);
	console.log(destination);
	console.log(travelMode);
	// var url = ('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + origin + '&destinations=' + destination + '&key=' + 'AIzaSyDo32Za0RzapNrTIxMulGkYcd-Cx9FiHaM');
	var url = ('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + origin + '&destinations=' + destination + '&mode=' + travelMode + '&language=en-EN&key=' + 'AIzaSyDo32Za0RzapNrTIxMulGkYcd-Cx9FiHaM')
	request(url, function(err, response, data) {
		var finalResults = JSON.parse(data);
		// console.log(finalResults.rows[0]);
		// console.log('yay' + finalResults.rows[0].elements[0].duration.text);
		// console.log(data[1]);

		// console.log(travelMode);

		res.render('index', {results: finalResults});
		// console.log('working?');
	});
});

// connect to server; don't freak out

app.listen(process.env.PORT || 3000);
console.log('yes, it is working');