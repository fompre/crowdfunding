const express = require('express')
const funding = require('./routes/fundingRoutes')
var bodyParser = require('body-parser')

var app = express()
var router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port
router.get('/',function (req,res) {
    res.send("NOT IMPLEMENTED")
})
app.use('/v0',router)
app.use('/v0/funding',funding)

app.listen(port)
