/**
 * Created by fompre on 7/4/17.
 */
const express = require('express')
var routes = express.Router()
var controller = require('../controllers/fundingController')

routes.get('/projects/:projectId',controller.getProjectFundingData)
routes.get('/users/:userId',controller.getUserFundingData)

module.exports = routes