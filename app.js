require('dotenv').config();
const express = require('express');
const path = require('path');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csurf = require('csurf');
const MongoStore = require('connect-mongo');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(
  session({
    secret: 'emsD4nangPr0J3cT',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

module.exports = app;
