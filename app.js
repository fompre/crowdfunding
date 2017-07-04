const express = require('express')
const funding = require('./routes/funding')
var app = express()
var router = express.Router()

var port     = process.env.PORT || 8080; // set our port
router.get('/',function (req,res) {
    res.send("NOT IMPLEMENTED")
})
app.use('/v0',router)
app.use('/v0/funding',funding)

app.listen(port)
