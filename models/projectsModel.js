/**
 * Created by fompre on 7/4/17.
 */
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://crowdfund-app.firebaseio.com"
});