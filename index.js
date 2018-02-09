// Storing all the var require up here

var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();

// app.set and app.use 
// used for rendering a front-end

app.set('view engine', 'ejs');
app.use(express.static(__dirname+ 'views'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));


// trying to render just to test the app is working

app.get('/', function(req, res) {
	res.render('index');
});

// connect to server; don't freak out

app.listen(process.env.PORT || 3000);
console.log('yes, it is working');