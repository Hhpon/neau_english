const signin = require('./signin.js');
const unit1 = require('./unit1.js');
const unit2 = require('./unit2.js');
const unit3 = require('./unit3.js');
const unit4 = require('./unit4.js');
const unit5 = require('./unit5.js');
const unit6 = require('./unit6.js');
const unit7 = require('./unit7.js');
const unit8 = require('./unit8.js');

var wait = function () {
  return new Promise(function (resolve, rejsct) {
    setTimeout(() => {
      resolve('ok');
    }, 3000);
  })
}

async function twoStarting(username, password) {
  console.log(username);
  console.log(password);
  let cookiePath = await signin(username, password);
  console.log(cookiePath);
  let cookie = cookiePath.cookie;
  let path = cookiePath.path;
  await unit1(cookie, path);
  await this.wait;
  await unit2(cookie, path);
  await this.wait;
  await unit3(cookie, path);
  await this.wait;
  await unit4(cookie, path);
  await this.wait;
  await unit5(cookie, path);
  await this.wait;
  await unit6(cookie, path);
  await this.wait;
  await unit7(cookie, path);
  await this.wait;
  await unit8(cookie, path);
}

module.exports = twoStarting;