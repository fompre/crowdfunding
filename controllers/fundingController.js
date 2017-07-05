var fundingModel = require('../models/fundingsModel')

var fundingController = {}

fundingController.getProjectFundingData = function (req,res) {
    res.send('NOT IMPLEMENTED getProjectFundingData'+req.params.projectId+'\n')
}
fundingController.getUserFundingData = function (req,res) {
    res.send('NOT IMPLEMENTED getUserFundingData'+req.params.userId+'\n')
}
fundingController.postFundingForProject = function (req,res) {
    let backerId = req.body.backerId
    let amount =  req.body.amount
    let projectId = req.body.projectId

    fundingModel.addFunds(backerId,projectId,amount).then(res.send('payment processed \n'))

}

module.exports = fundingController