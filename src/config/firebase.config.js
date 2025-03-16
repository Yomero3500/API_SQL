const admin = require('firebase-admin');

// Inicializa Firebase Admin SDK (¡asegúrate de usar la ruta correcta!)
const serviceAccount = require('../pushnotification223190-firebase-adminsdk-fbsvc-85e7849588.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;