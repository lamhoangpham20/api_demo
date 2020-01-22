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
    }
});
app.get('/users', (req,res) =>
{
    res.send('get user');
});
// app.use('/sensor', sensorComponent);
// app.use('/users', usersComponent);
app.get('/users/id', (req, res) =>{
    console.log('get user info by id')
});
app.post('users/login', (req, res) =>
{
    console.log('login');
});
app.post('/users/id/sensor', (req, res) => {
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

app.get('/users/id/sensor', (req, res) => {
    console.log('Hello /users');
    return res.body.data;
});
app.listen(port, () => console.log(`Example app listenning on port ${port}`));