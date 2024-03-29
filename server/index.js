require('dotenv').config({ path: __dirname + '/../.env' })
const express = require('express'),
  cors = require('cors'),
  session = require('express-session'),
  massive = require('massive'),
  app = express(),
  path = require('path'),
  stripe = require('stripe')(process.env.STRIPE_SECRET),
  { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

// Controllers

const authCtrl = require('./controllers/authController')
const payCtrl = require('./controllers/payController')
const dashCtrl = require('./controllers/dashController')

// Middleware
app.use(express.json())
app.use(cors())

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 * 4 }
  })
)

app.use(express.static(path.join(__dirname, '..', 'build')))

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
      console.log(`SERVER LISTENING ON ${SERVER_PORT}`)
      console.log('DATABASE CONNECTED')
    })
  })
  .catch(err => console.log(err))

// Auth Endpoints

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.post('/auth/user', authCtrl.register)

// User Endpoints
// app.get("/api/users", userCtrl.getUsers);

// Payment Endpoints

// app.post('/pay', payCtrl.pay);
// app.get('/secret', payCtrl.secret);
app.post('/create-checkout-session', payCtrl.session)

// Dash Endpoints

app.get('/get-day-weather/:lat/:lng', dashCtrl.getDayWeather)
app.get('/get-open-weather/:lat/:lng', dashCtrl.getOpenWeather)
app.get('/get-mosquitoes/:lat/:lng', dashCtrl.getMosquitoData)
app.post('/get-prop-data', dashCtrl.getPropertyData)

// todo add back in for production
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})
