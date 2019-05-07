const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
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
      url: 'http://202.118.163.67/book/book141/unit_index.php?UnitID=1',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Referer: 'http://202.118.163.67/book/book141/jdindex.php',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
    }, (err, res, html) => {
      console.log('getSuccessPage成功');
      resolve('ok');
    })

  })
}


// 第一单元第二模块第1题实际开始做
function section2sister1S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book141/uyu21blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Content-Length': 93,
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        Pragma: 'no-cache',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
      },
      form: {
        UnitID: 1,
        SectionID: 2,
        SisterID: 2,
        TestID: 2.2,
        KidID: 1,
        ItemID: 16,
        'Blank_0_0': 'busy',
        'Blank_0_1': 'friends',
        'Blank_0_2': 'university',
        'Blank_0_3': 'social life'
      }
    }, (err, res, html) => {
      // console.log(html);
      // fs.writeFileSync('index.html',html);
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第2题实际开始做
function section2sister2S(cookie) {
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
        UnitID: 1,
        SectionID: 2,
        SisterID: 3,
        TestID: 2.3,
        KidID: 1,
        ItemID: 20,
        myList: '0^2^4^3^1^5'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第3题实际开始做
function section2sister3S(cookie) {
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
        UnitID: 1,
        SectionID: 2,
        SisterID: 4,
        TestID: 2.4,
        KidID: 1,
        ItemID: 23,
        'Blank_0_0': 'danced',
        'Blank_1_0': 'view of',
        'Blank_1_1': 'fun',
        'Blank_2_0': 'drink',
        'Blank_3_0': 'west',
        'Blank_3_1': 'delicious meal',
        'Blank_4_0': 'house',
        'Blank_4_1': 'TV'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第4题实际开始做
function section2sister4S(cookie) {
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
        UnitID: 1,
        SectionID: 2,
        SisterID: 9,
        TestID: 2.9,
        KidID: 1,
        ItemID: 30,
        'Blank_0_0': '1962',
        'Blank_1_0': '4th',
        'Blank_2_0': '1990',
        'Blank_3_0': '1996'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第5题实际开始做
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
        UnitID: 1,
        SectionID: 2,
        SisterID: 10,
        TestID: 2.10,
        KidID: 1,
        ItemID: 31,
        'Blank_0_0': 'teacher',
        'Blank_0_1': 'cleaned houses',
        'Blank_0_2': 'lost',
        'Blank_0_3': 'visited',
        'Blank_0_4': 'work',
        'Blank_0_5': 'his wife',
        'Blank_0_6': 'in his own words'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第6题实际开始做
function section2sister6S(cookie) {
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
        UnitID: 1,
        SectionID: 2,
        SisterID: 15,
        TestID: 2.15,
        KidID: 1,
        ItemID: 35,
        myList: '0^2^7^5^3^4^6^1'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第7题实际开始做
function section2sister7S(cookie) {
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
        UnitID: 1,
        SectionID: 2,
        SisterID: 16,
        TestID: 2.16,
        KidID: 1,
        ItemID: 36,
        'Blank_0_0': 'home',
        'Blank_0_1': 'country',
        'Blank_0_2': 'relatives',
        'Blank_0_3': 'foreigner',
        'Blank_0_4': 'speak',
        'Blank_0_5': 'passed on',
        'Blank_0_6': 'heat',
        'Blank_0_7': 'sea',
        'Blank_0_8': 'happiness'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第8题实际开始做
function section2sister8S(cookie) {
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
        UnitID: 1,
        SectionID: 3,
        SisterID: 3,
        TestID: 3.3,
        KidID: 1,
        ItemID: 42,
        'Blank_0_0': 'It was great',
        'Blank_0_1': 'He is a football player',
        'Blank_0_2': 'It was really beautiful'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第9题实际开始做
function section2sister9S(cookie) {
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
        UnitID: 1,
        SectionID: 3,
        SisterID: 4,
        TestID: 3.4,
        KidID: 1,
        ItemID: 43,
        'Checkbox_0': 1,
        'Checkbox_2': 1,
        'Checkbox_4': 1,
        'Checkbox_6': 1,
        'Checkbox_9': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第10题实际开始做
function section2sister10S(cookie) {
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
        UnitID: 1,
        SectionID: 3,
        SisterID: 10,
        TestID: 3.10,
        KidID: 1,
        ItemID: 57,
        'Blank_0_0': 'a small town',
        'Blank_1_0': '1993',
        'Blank_2_0': '2008',
        'Blank_3_0': '2003',
        'Blank_4_0': '7'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第11题实际开始做
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
        UnitID: 1,
        SectionID: 3,
        SisterID: 11,
        TestID: 3.11,
        KidID: 1,
        ItemID: 58,
        'Checkbox_0': 1,
        'Checkbox_3': 1,
        'Checkbox_4': 1,
        'Checkbox_6': 1,
        'Checkbox_7': 1,
        'Checkbox_8': 1,
        'Checkbox_9': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第12题实际开始做
function section2sister12S(cookie) {
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 1,
        TestID: 4.1,
        KidID: 1,
        ItemID: 68,
        whichKidID: 5,
        'Radio_0': 'b',
        'Radio_1': 'a',
        'Radio_2': 'b',
        'Radio_3': 'd',
        'Radio_4': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第13题实际开始做
function section2sister13S(cookie) {
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 2,
        TestID: 4.2,
        KidID: 1,
        ItemID: 69,
        'Radio_0': 'd',
        'Radio_1': 'b',
        'Radio_2': 'c',
        'Radio_3': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 3,
        TestID: 4.3,
        KidID: 1,
        ItemID: 70,
        'Radio_0': 'd',
        'Radio_1': 'd',
        'Radio_2': 'b',
        'Radio_3': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
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
      url: 'http://202.118.163.67/book/book141/uyu44blank.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 4,
        TestID: 4.4,
        KidID: 1,
        ItemID: 72,
        'Blank_0_0': 'programmes',
        'Blank_0_1': 'very',
        'Blank_0_2': 'decisions',
        'Blank_0_3': 'doing laundry',
        'Blank_0_4': 'Obviously',
        'Blank_0_5': 'choices',
        'Blank_0_6': 'ruining',
        'Blank_0_7': 'get used to',
        'Blank_0_8': 'opportunities',
        'Blank_0_9': 'step back'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
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
      url: 'http://202.118.163.67/book/book141/uyu45mc.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 5,
        TestID: 4.5,
        KidID: 1,
        ItemID: 535,
        'Radio_0': 'b',
        'Radio_1': 'c'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
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
      url: 'http://202.118.163.67/book/book141/uyu45mc.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 6,
        TestID: 4.6,
        KidID: 1,
        ItemID: 536,
        'Radio_0': 'd',
        'Radio_1': 'c'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元test实际开始做
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
        UnitID: 1,
        SectionID: 7,
        SisterID: 2,
        TestID: 7.2,
        KidID: 1,
        ItemID: 80,
        'MC_76_0': 'c',
        'MC_76_1': 'a',
        'MC_76_2': 'd',
        'MC_76_3': 'd',
        'MC_76_4': 'a',
        'MC_77_0': 'c',
        'MC_77_1': 'd',
        'MC_77_2': 'a',
        'MC_77_3': 'b',
        'MC_77_4': 'c',
        'MC_78_0': 'c',
        'MC_78_1': 'b',
        'MC_78_2': 'a',
        'MC_78_3': 'b',
        'MC_78_4': 'd',
        'Blank_80_0_0': 'achievements',
        'Blank_80_0_1': 'specialized',
        'Blank_80_0_2': 'vast',
        'Blank_80_0_3': 'professional',
        'Blank_80_0_4': 'educated',
        'Blank_80_0_5': 'was familiar',
        'Blank_80_0_6': 'extensively',
        'Blank_80_0_7': 'elegantly',
        'Blank_80_0_8': 'a great deal',
        'Blank_80_0_9': 'Besides'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res + 'test');
      resolve('ok');
    });
  })
}



async function unit1(cookie, path) {
  // var cookie = await signin();
  await ready1(cookie, path);
  await ready2(cookie);
  await getSuccessPage(cookie);
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
  await test(cookie);
  console.log('unit1 successful');
}

// unit1();
module.exports = unit1;