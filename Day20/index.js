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

//rama

let surattugasRoute = require('./surattugas/surattugasRoute.js');
app.use('/api',surattugasRoute);

let tipepegawaiRoute = require('./tipepegawai/tipepegawaiRoute.js');
app.use('/api',tipepegawaiRoute);

let pegawaiRoute = require('./pegawai/pegawaiRoute.js');
app.use('/api',pegawaiRoute);

let surattugasrinciRoute = require('./surattugasrinci/surattugasrinciRoute.js');
app.use('/api',surattugasrinciRoute);



app.listen(8820);