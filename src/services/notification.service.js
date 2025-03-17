const admin = require('../config/firebase.config');
const Usuario = require('../models/Usuario.model');

const registerFcmToken = async (userId, fcmToken) => {
    try {
        await Usuario.update({ fcmToken: fcmToken }, { where: { user_id: userId } });
        console.log(`Token ${fcmToken} registrado para el usuario ${userId}`);
    } catch (error) {
        console.error("Error al registrar el token FCM:", error);
        throw error;
    }
};

const sendPushNotification = async (user_id, title, body, data) => {
    try {
        const user = await Usuario.findByPk(user_id);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const fcmToken = user.fcmToken;

        if (!fcmToken) {
            throw new Error("Usuario sin token FCM registrado");
        }

        const message = {
            notification: {
                title: title,
                body: body
            },
            data: data,  
            token: fcmToken
        };

        const response = await admin.messaging().send(message);
        console.log("Notificación enviada correctamente:", response);
        return response;

    } catch (error) {
        console.error("Error al enviar la notificación:", error);
        throw error;
    }
};

module.exports = {
    registerFcmToken,
    sendPushNotification
};