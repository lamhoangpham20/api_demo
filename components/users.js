const express = require('express');
const app = express.app();

app.post('/users', (req, res) => {
    console.log('Hello /users');
    
    if (req.body.username == undefined) {
        res.sendStatus(400);
    }
    else {
        res.json(users);
    }
});

app.get('/users', (req,res) =>
{
    
});
app.get('/users/id', (req, res) =>{
    
})
app.post('users/login', (req, res) =>
{
    console.log('login');
})
app.post('/users/id/sensor', (req, res) => {
    console.log('Hello /users');
    
    if (req.body.name == undefined) {
        res.sendStatus(400);
    }
    else {
        res.sendStatus(200);
    }
});

app.get('/users/id/sensor', (req, res) => {
    console.log('Hello /users');
    return res.body.data;
});