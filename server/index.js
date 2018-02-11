const express = require('express')
const app = express()
const Sequelize = require('sequelize');
var cookieParser = require('cookie-parser')

const path = require('path')
const db = require('../db/user')
const bodyParser = require('body-parser');
const sequelize = new Sequelize('postgres://localhost:5432/pass');

const passport = require('passport')

app.use(cookieParser())

 app.use(require('cookie-session')({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'an insecure secret key'],

  // Cookie Options
  //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(passport.initialize())
 app.use(passport.session())
//body-parsing
app.use('/', bodyParser.json());
app.use('/', bodyParser.urlencoded({ extended: true }));

//serves up static files
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public'))
})
app.use('/auth', require('./auth'))
console.log('db', db)
db.sequelize.sync()
.then(() =>{
  app.listen(8080, () =>{
    console.log('listening on Port 3000')
  })
})
