const oneStarting = require('./one/oneStarting');
const twoStarting = require('./two/twoStarting');
const threeStartin = require('./three/threeStarting');
const fourStarting = require('./four/fourStarting');

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const opn = require('opn')
const path = require('path')
const fs = require('fs')
const USER_INFO_FILE = './userinfo.json'

const app = express();

app.use(bodyParser.json());

// app.get('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/getinfo', (req, res) => {
    let userinfo = JSON.parse(fs.readFileSync(USER_INFO_FILE))

    res.send({ userinfo: userinfo })
})

app.post('/getInfo', async (req, res) => {

    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let selected = req.body.selected;

    let userinfo = {
        userName: userName,
        passWord: passWord,
        selected: selected
    }

    fs.writeFileSync(USER_INFO_FILE, JSON.stringify(userinfo))

    if (selected == 1) {
        console.log('1');
        oneStarting(userName, passWord)
    } else if (selected == 2) {
        console.log('2');
        twoStarting(userName, passWord)
    } else if (selected == 3) {
        console.log('3');
        threeStartin(userName, passWord)
    } else if (selected == 4) {
        console.log('4');
        fourStarting(userName, passWord)
    }
    res.send('ok');

})

app.listen(3000, () => {
    opn('http://localhost:3000/');
    console.log('Server listening on port 3000');
})