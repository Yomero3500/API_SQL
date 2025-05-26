const admin = require('firebase-admin');

// Inicializa Firebase Admin SDK
const serviceAccount = require('../movilnoti-firebase-adminsdk-fbsvc-01aaa7f647.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;