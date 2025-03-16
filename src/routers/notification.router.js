const express = require('express');
const router = express.Router();
const NotificationService = require('../services/notification.service');

// Endpoint para registrar el token FCM
router.post("/register-fcm-token", async (req, res) => {
    const { user_id, fcmToken } = req.body;

    if (!user_id || !fcmToken) {
        return res.status(400).json({ error: "Faltan userId o fcmToken" });
    }

    try {
        await NotificationService.registerFcmToken(user_id, fcmToken);
        res.status(200).json({ message: "Token FCM registrado correctamente" });
    } catch (error) {
        console.error("Error al registrar el token FCM:", error);
        res.status(500).json({ error: "Error al registrar el token FCM" });
    }
});

// Endpoint para enviar una notificación push (ejemplo)
router.post("/send-push-notification", async (req, res) => {
    const { userId, title, body, data } = req.body;

    if (!userId || !title || !body) {
        return res.status(400).json({ error: "Faltan userId, title o body" });
    }

    try {
        const result = await NotificationService.sendPushNotification(userId, title, body, data);
        res.status(200).json({ message: "Notificación enviada correctamente", response: result });
    } catch (error) {
        console.error("Error al enviar la notificación:", error);
        res.status(500).json({ error: "Error al enviar la notificación", details: error });
    }
});

module.exports = router;