const express = require('express');
const router = express.Router();
const Client = require('../models/client.model');

// Create a new client
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Creating client with email:", email);
        const newClient = await Client.create({ email, password });
        console.log("New client created:", newClient);
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const client = await Client.findOne({ where: { email, password } });
        if (!client) {
            console.log("Client not found or invalid credentials");
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', client });
    } catch (error) {
        console.error("Error during client login:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;