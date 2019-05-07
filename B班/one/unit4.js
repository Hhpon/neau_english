const request = require('request');
const cheerio = require('cheerio');
const signin = require('./signin.js');
const wait = require('./wait.js');

// 做题前准备1 
function ready1(cookie, path) {
  return new Promise((resolve, reject) => {
    request({
      url: 'http://202.118.163.67' + path,
      headers: {
        Cookie: cookie,
        Referer: 'http://202.118.163.67/login/hpindex_student.php',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      }
    }, (err, res, html) => {
      console.log('ready1成功');
      resolve('ready1=>ok');
    })
  })
}

// 做题前准备2
function ready2(cookie) {
  return new Promise((resolve, reject) => {
    request({
      url: 'http://202.118.163.67/book/book141/index.php?Quiz=N&whichActionPage=',
      headers: {
        Cookie: cookie,
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      }
    }, (err, res, html) => {
      console.log('ready2成功');
      resolve('ok');
    })
  })
}

// 做题前的准备3
function getSuccessPage(cookie) {
  return new Promise(function (resolve, rejsct) {
    request({
      url: 'http://202.118.163.67/book/book141/unit_index.php?UnitID=4',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
    }, (err, res, html) => {
      console.log('getSuccessPage成功');
      resolve('ok');
    })

  })
}

function section2sister1S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu422checkbox.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 2,
        TestID: 2.2,
        KidID: 1,
        ItemID: 245,
        'Checkbox_0_1': 1,
        'Checkbox_1_2': 1,
        'Checkbox_2_3': 1,
        'Checkbox_3_3': 1,
        'Checkbox_3_4': 1,
        'Checkbox_4_1': 1,
        'Checkbox_4_3': 1,
        'Checkbox_5_5': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第2单元第二模块第2题实际开始做
function section2sister2S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu21blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 3,
        TestID: 2.3,
        KidID: 1,
        ItemID: 253,
        'Blank_0_0': 'fresh air',
        'Blank_0_1': 'avoid holes',
        'Blank_1_0': 'think about',
        'Blank_2_0': 'dream',
        'Blank_2_1': 'looking out',
        'Blank_3_0': 'an accident'

      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第2单元第二模块第3题实际开始做
function section2sister3S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu23drag.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 4,
        TestID: 2.4,
        KidID: 1,
        ItemID: 254,
        myList: '2^4^5^3^0^1'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister4S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu23drag.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 5,
        TestID: 2.5,
        KidID: 1,
        ItemID: 256,
        myList: '2^0^1^3^5^4'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister5S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu29blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 10,
        TestID: 2.10,
        KidID: 1,
        ItemID: 353,
        'Blank_0_0': '1962',
        'Blank_0_1': '1948',
        'Blank_0_2': 'leave',
        'Blank_0_3': 'public transport',
        'Blank_0_4': 'in and drove',
        'Blank_0_5': 'private',
        'Blank_0_6': 'build',
        'Blank_0_7': 'good condition',
        'Blank_0_8': 'engineering problem',
        'Blank_0_9': 'too heavy',
        'Blank_0_10': 'strong',
        'Blank_0_11': 'difficult to fly',
        'Blank_0_12': 'traffic problems'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister6S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu823mc.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 15,
        TestID: 2.15,
        KidID: 1,
        ItemID: 370,
        'Radio_0': 'a',
        'Radio_1': 'a',
        'Radio_2': 'a',
        'Radio_3': 'b',
        'Radio_4': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister7S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu422checkbox.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 16,
        TestID: 2.16,
        KidID: 1,
        ItemID: 371,
        'Checkbox_0_3': 1,
        'Checkbox_1_2': 1,
        'Checkbox_2_1': 1,
        'Checkbox_3_4': 1,
        'Checkbox_4_1': 1,
        'Checkbox_5_3': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister8S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu21blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 2,
        SisterID: 20,
        TestID: 2.20,
        KidID: 1,
        ItemID: 374,
        'Blank_0_0': 'airport managers',
        'Blank_0_1': 'relax',
        'Blank_0_2': 'pass the time',
        'Blank_0_3': 'midnight',
        'Blank_0_4': 'their flight',
        'Blank_0_5': 'three hundred',
        'Blank_0_6': '319',
        'Blank_0_7': '500'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister9S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu33blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 3,
        SisterID: 3,
        TestID: 3.3,
        KidID: 1,
        ItemID: 453,
        'Blank_0_0': 'tied up',
        'Blank_0_1': 'customer',
        'Blank_1_0': '20',
        'Blank_1_1': 'coffee',
        'Blank_2_0': 'delayed',
        'Blank_2_1': 'cow',
        'Blank_2_2': 'stations'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister10S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu34mc.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 3,
        SisterID: 4,
        TestID: 3.4,
        KidID: 1,
        ItemID: 463,
        'Radio_0': 'b',
        'Radio_1': 'a',
        'Radio_2': 'b',
        'Radio_3': 'a',
        'Radio_4': 'b',
        'Radio_5': 'b'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister11S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu34checkbox.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 3,
        SisterID: 5,
        TestID: 3.5,
        KidID: 1,
        ItemID: 465,
        'Checkbox_2': 1,
        'Checkbox_3': 1,
        'Checkbox_5': 1,
        'Checkbox_6': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister12S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu33blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 3,
        SisterID: 10,
        TestID: 3.10,
        KidID: 1,
        ItemID: 493,
        'Blank_0_0': 'a vegetarian meal',
        'Blank_0_1': 'meat',
        'Blank_0_2': 'his order',
        'Blank_0_3': 'business class',
        'Blank_0_4': 'cold',
        'Blank_0_5': 'the person in charge'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister13S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu34mc.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 3,
        SisterID: 11,
        TestID: 3.11,
        KidID: 1,
        ItemID: 494,
        'Radio_0': 'a',
        'Radio_1': 'b',
        'Radio_2': 'b',
        'Radio_3': 'b',
        'Radio_4': 'a',
        'Radio_5': 'a',
        'Radio_6': 'b',
        'Radio_7': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister14S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu41mc.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 4,
        SisterID: 1,
        TestID: 4.1,
        KidID: 1,
        ItemID: 119,
        whichKidID: 5,
        'Radio_0': 'c',
        'Radio_1': 'b',
        'Radio_2': 'd',
        'Radio_3': 'd',
        'Radio_4': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister15S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu42mc.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 4,
        SisterID: 2,
        TestID: 4.2,
        KidID: 1,
        ItemID: 125,
        'Radio_0': 'c',
        'Radio_1': 'b',
        'Radio_2': 'd',
        'Radio_3': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister16S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu42mc.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 4,
        SisterID: 3,
        TestID: 4.3,
        KidID: 1,
        ItemID: 131,
        'Radio_0': 'c',
        'Radio_1': 'a',
        'Radio_2': 'd',
        'Radio_3': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister17S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu44blank.php',
      method: 'POST',
      // proxy: 'http://neauproxy.feit.me:6000',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 4,
        SisterID: 4,
        TestID: 4.4,
        KidID: 1,
        ItemID: 137,
        'Blank_0_0': 'Gradually',
        'Blank_0_1': 'enabled',
        'Blank_0_2': 'vehicles',
        'Blank_0_3': 'dates back to',
        'Blank_0_4': 'As a result',
        'Blank_0_5': 'thoroughly',
        'Blank_0_6': 'capacity',
        'Blank_0_7': 'turn',
        'Blank_0_8': 'automobiles',
        'Blank_0_9': 'thanks to'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister18S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu45mc.php',
      method: 'POST',
      // proxy: 'http://neauproxy.feit.me:6000',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 4,
        SisterID: 5,
        TestID: 4.5,
        KidID: 1,
        ItemID: 541,
        'Radio_0': 'd',
        'Radio_1': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function section2sister19S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu45mc.php',
      method: 'POST',
      // proxy: 'http://neauproxy.feit.me:6000',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 4,
        SisterID: 6,
        TestID: 4.6,
        KidID: 1,
        ItemID: 542,
        'Radio_0': 'd',
        'Radio_1': 'b',
        'Radio_2': 'c'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

function test(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu72.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 4,
        SectionID: 7,
        SisterID: 2,
        TestID: 7.2,
        KidID: 1,
        ItemID: 166,
        'MC_145_0': 'b',
        'MC_145_1': 'b',
        'MC_145_2': 'd',
        'MC_145_3': 'a',
        'MC_145_4': 'd',
        'MC_180_0': 'c',
        'MC_180_1': 'd',
        'MC_180_2': 'a',
        'MC_180_3': 'a',
        'MC_159_0': 'c',
        'MC_159_1': 'b',
        'MC_159_2': 'd',
        'MC_159_3': 'a',
        'MC_159_4': 'c',
        'Blank_166_0_0': 'motor',
        'Blank_166_0_1': 'sufferer',
        'Blank_166_0_2': 'range from',
        'Blank_166_0_3': 'results from',
        'Blank_166_0_4': 'relies on',
        'Blank_166_0_5': 'confused',
        'Blank_166_0_6': 'still',
        'Blank_166_0_7': 'folk',
        'Blank_166_0_8': 'avoid',
        'Blank_166_0_9': 'wing'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit4');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res + 'test');
      resolve('ok');
    });
  })
}


async function unit4(cookie, path) {
  // let cookie = await signin();
  await ready1(cookie, path);
  await ready2(cookie);
  await getSuccessPage(cookie);
  await wait();
  await section2sister1S(cookie);
  await wait();
  await section2sister2S(cookie);
  await wait();
  await section2sister3S(cookie);
  await wait();
  await section2sister4S(cookie);
  await wait();
  await section2sister5S(cookie);
  await wait();
  await section2sister6S(cookie);
  await wait();
  await section2sister7S(cookie);
  await wait();
  await section2sister8S(cookie);
  await wait();
  await section2sister9S(cookie);
  await wait();
  await section2sister10S(cookie);
  await wait();
  await section2sister11S(cookie);
  await wait();
  await section2sister12S(cookie);
  await wait();
  await section2sister13S(cookie);
  await wait();
  await section2sister14S(cookie);
  await wait();
  await section2sister15S(cookie);
  await wait();
  await section2sister16S(cookie);
  await wait();
  await section2sister17S(cookie);
  await wait();
  await section2sister18S(cookie);
  await wait();
  await section2sister19S(cookie);
  await wait();
  await test(cookie);
  console.log('unit4 successful');
}

// unit4();
module.exports = unit4;