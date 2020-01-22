const express = require('express');
const router = express.Router();

router.post('/users/id/sensor', (req, res) => {
    console.log('Hello /users');
    const result = {
        id: 264622
    };
    
    if (req.body.name == undefined) {
        res.sendStatus(400);
    }
    else {
        res.sendStatus(200);
    }
});

router.get('/users/id/sensor', (req, res) => {
    console.log('Hello /users');
    return res.body.data;
});