/**
 * Created by fompre on 7/4/17.
 */
var admin = require("firebase-admin");

var serviceAccount = require("../firebase/crowdfund-app-firebase-adminsdk-ivm8s-ccef619a5e.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://crowdfund-app.firebaseio.com"
});

var db = admin.database()
var ref = db.ref()
var postRef = ref.child('fundings')
var data = {
    backer : "",
    project: "",
    amount: "",
    date: ""
}

var funding = {}

funding.addFunds = function (backer,project,amount) {
    var date = new Date()
    var data = {
        backer : backer,
        project: project,
        amount: amount,
        date: date.getTime()
    }
    return postRef.push(data)
}

module.exports = funding
