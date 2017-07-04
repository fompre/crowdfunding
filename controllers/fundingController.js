var fundingController = {}

fundingController.getProjectFundingData = function (req,res) {
    res.send('NOT IMPLEMENTED getProjectFundingData'+req.params.projectId+'\n')
}
fundingController.getUserFundingData = function (req,res) {
    res.send('NOT IMPLEMENTED getUserFundingData'+req.params.userId+'\n')
}

module.exports = fundingController