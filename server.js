const path = require('path')
let ejs = require('ejs')

const express = require('express')
const bodyParser = require('body-parser')

const mainRoutes = require('./routes/main')

const errorController = require('./controllers/errors')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)

// app.use(errorController.show404)

app.listen(process.env.PORT || 3000);
// app.listen(3000)
