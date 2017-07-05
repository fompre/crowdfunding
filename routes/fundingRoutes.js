/**
 * Created by fompre on 7/4/17.
 */
const express = require('express')
var routes = express.Router()
var controller = require('../controllers/fundingController')

//All uri starts with /v0/funding
//>>>>>>>>>> GET <<<<<<<<<<<<<<
routes.get('/:projectId',controller.getProjectFundingData)
routes.get('/:userId',controller.getUserFundingData)
//>>>>>>>>>> POST <<<<<<<<<<<<<
routes.post('/',controller.postFundingForProject)

module.exports = routes