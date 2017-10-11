//global
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use('/', function ( req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, DELETE");    
    next();
})
let pesertaRoute = require('./peserta/pesertaRoute');
app.use('/api',pesertaRoute);
let angkatanRencanaRoute = require('./angkatanrencana/angkatanRencanaRoute');
app.use('/api',angkatanRencanaRoute);
let angkatanAktualRoute = require('./angkatanaktual/angkatanAktualRoute');
app.use('/api',angkatanAktualRoute);
require('./konfigurasi/config');

app.listen(8820);