var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var festivalsRouter = require('./routes/festival')
var contactsRouter = require('./routes/contact')
var jeuxRouter = require('./routes/jeu')
var organisateursRouter = require('./routes/organisateur')
var espacesRouter = require('./routes/espace')
var zonesRouter = require('./routes/zone')
var reservationRouter = require('./routes/reservation')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/festival', festivalsRouter)
app.use('/contact', contactsRouter)
app.use('/jeu', jeuxRouter)
app.use('/organisateur', organisateursRouter)
app.use('/espace', espacesRouter)
app.use('/zone', zonesRouter)
app.use('/reservation', reservationRouter)



module.exports = app;
