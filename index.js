const express = require('express');
const app = express();
const port = 3000;
// const usersComponent = require('./components/users');
// const sensorComponent = require('./components/sensor');
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World'));

app.post('/users', (req, res) => {
    console.log('Hello /users');
    const result = {
        id: 264622
    };
    
    if (req.body.email == undefined) {
        res.sendStatus(400);
    }
    else {
        res.sendStatus(200);
        res.send(id);
    }
});
app.get('/users', (req,res) =>
{
    res.send('get user');
});
// app.use('/sensor', sensorComponent);
// app.use('/users', usersComponent);
app.get('/users/:userId', (req, res) =>{
    res.send(`get user info by id number ${req.params.userId}`)
});
app.post('/users/login', (req, res) =>
{
    
    if(req.body.username === undefined || req.body.password === undefined)
    {
        res.sendStatus(400);
    }
    else
    {
        res.sendStatus(200);
    }
});
app.post('/sensor', (req, res) => {
    console.log('Hello /users');
    if (req.body.name == undefined) {
        res.sendStatus(400);
    }
    else {
        res.sendStatus(200);
    }
});

app.get('/sensor', (req, res) => {
    res.send('sensor data')
});
app.listen(port, () => console.log(`Example app listenning on port ${port}`));