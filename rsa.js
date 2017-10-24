var express  = require('express');
var app      = express();
var biginteger = require('big-integer');

app.configure(function() {
    app.use(express.static(__dirname + '/angular'));
    app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// Cargamos los endpoints
require('./app/routes.js')(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/angular/index.html'));
});

// Cogemos el puerto para escuchar
app.listen(8000);
console.log("APP por el puerto 3000")