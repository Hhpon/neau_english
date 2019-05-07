const oneStarting = require('./one/oneStarting');
const oneSignin = require('./one/signin');
const twoStarting = require('./two/twoStarting');
const twoSignin = require('./two/signin');
const threeStartin = require('./three/threeStarting');
const threeSignin = require('./three/signin')
const fourStarting = require('./four/fourStarting');
const fourSignin = require('./four/signin')

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const opn = require('opn')
const path = require('path')
const app = express();

app.use(bodyParser.json());

// app.get('/', express.static(path.join(__dirname, 'public')))

function getNum() {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://www.hhp.im/getNum'
        }, (err, res, html) => {
            resolve(res.body);
        })
    })
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/getInfo', async (req, res) => {

    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let selected = req.body.selected;

    let abc = await getNum();

    if (abc !== '1') {
        res.end('no');
    } else {
        console.log('abc');
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
        res.end('ok');
    }

})

app.listen(3000, () => {
    opn('http://localhost:3000/');
    console.log('Server listening on port 3000');
})