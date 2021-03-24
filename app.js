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
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')
var typeJeuRouter = require('./routes/type_jeu')
var societeRouter = require('./routes/societe')
var priseContactRouter = require('./routes/prise_contact')
var jeuReserveRouter = require('./routes/jeu_reserve')
var commentaireRouter = require('./routes/commentaire')
var festivalPublicRouter = require('./routes/public/festival')
var auth = require("./middleware/auth")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/home', indexRouter);
app.use('/users', auth, usersRouter);
app.use('/festival', auth,festivalsRouter)
app.use('/contact', auth, contactsRouter)
app.use('/jeu',auth, jeuxRouter)
app.use('/organisateur',auth, organisateursRouter)
app.use('/espace', auth, espacesRouter)
app.use('/zone', auth, zonesRouter)
app.use('/reservation',auth, reservationRouter)
app.use('/login',loginRouter)
app.use('/typeJeu',auth,typeJeuRouter)
app.use('/societe',auth,societeRouter)
app.use('/priseContact',auth,priseContactRouter)
app.use('/jeuReserve',auth,jeuReserveRouter)
app.use('/commentaire',auth,commentaireRouter)
app.use('/public/festival',festivalPublicRouter)



module.exports = app;
