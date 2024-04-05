require('dotenv').config()


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const methodOverride = require('method-override');



const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const apisRouter = require('./routes/apis.routes')

const checkLoginUserLocal = require('./middlewares/checkLoginUserLocal');
const checkCookie = require('./middlewares/checkCookie');
const cors= require('cors');


const app = express();


//configuracion de session
app.use(session({secret: 'onetone01'}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  // ... otras opciones
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))
/* recurso Estatico*/
app.use(express.static(path.join(__dirname,'..', 'public')));

app.use(cors())
app.use(checkLoginUserLocal);


app.use(checkCookie)


//RUTAAAAS
app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/productos', productsRouter);
app.use('/apis', apisRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
