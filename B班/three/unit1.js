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
      url: 'http://202.118.163.67/book/book143/index.php?Quiz=N&whichActionPage=',
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
      url: 'http://202.118.163.67/book/book143/unit_index.php?UnitID=1',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Referer: 'http://202.118.163.67/book/book143/jdindex.php',
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
      url: 'http://202.118.163.67/book/book143/uyu21blank.php',
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
        ItemID: 535,
        'Blank_0_0': 'daredevil',
        'Blank_0_1': 'bungee jumping',
        'Blank_0_2': 'cup of tea',
        'Blank_0_3': 'feel good',
        'Blank_0_4': 'achievement'
      }
    }, (err, res, html) => {
      // console.log(html);
      // fs.writeFileSync('index.html',html);
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu23drag.php',
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
        ItemID: 69,
        myList: '2^3^4^1^0'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu522checkbox.php',
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
        ItemID: 82,
        'Checkbox_0': 1,
        'Checkbox_1': 1,
        'Checkbox_3': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu823mc.php',
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
        SisterID: 5,
        TestID: 2.5,
        KidID: 1,
        ItemID: 341,
        'Radio_0': 'b',
        'Radio_1': 'c',
        'Radio_2': 'b',
        'Radio_3': 'c',
        'Radio_4': 'b'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu21blank.php',
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
        SisterID: 6,
        TestID: 2.6,
        KidID: 1,
        ItemID: 110,
        'Blank_0_0': 'started off',
        'Blank_0_1': 'a huge business empire',
        'Blank_1_0': 'teacher',
        'Blank_1_1': 'taught me so much about life',
        'Blank_2_0': 'imprisoned',
        'Blank_2_1': 'survived',
        'Blank_2_2': 'impressed',
        'Blank_2_3': 'ability or the skills'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu34checkbox.php',
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
        ItemID: 243,
        'Checkbox_0': 1,
        'Checkbox_1': 1,
        'Checkbox_2': 1,
        'Checkbox_3': 1,
        'Checkbox_4': 1,
        'Checkbox_5': 1,
        'Checkbox_8': 1,
        'Checkbox_9': 1,
        'Checkbox_10': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu522checkbox.php',
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
        ItemID: 255,
        'Checkbox_2': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu216drag.php',
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
        ItemID: 259,
        myList: '4^6^2^1^5^0^3'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu21blank.php',
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
        SisterID: 20,
        TestID: 2.20,
        KidID: 1,
        ItemID: 262,
        'Blank_0_0': '90 minutes',
        'Blank_1_0': 'true landmark',
        'Blank_2_0': '10 times',
        'Blank_2_1': 'focus',
        'Blank_3_0': 'make this challenge',
        'Blank_4_0': 'seven miles',
        'Blank_5_0': 'four months',
        'Blank_5_1': 'outstanding achievement'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu34checkbox.php',
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
        ItemID: 2,
        'Checkbox_1': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu33blank.php',
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
        SisterID: 5,
        TestID: 3.5,
        KidID: 1,
        ItemID: 5,
        'Blank_0_0': 'Like I said',
        'Blank_1_0': 'having said that',
        'Blank_2_0': "That's what I was saying",
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu34checkbox.php',
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
        ItemID: 26,
        'Checkbox_0': 1,
        'Checkbox_1': 1,
        'Checkbox_2': 1,
        'Checkbox_5': 1,
        'Checkbox_6': 1,
        'Checkbox_8': 1,
        'Checkbox_9': 1,
        'Checkbox_10': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu41mc.php',
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
        ItemID: 158,
        whichKidID: 5,
        'Radio_0': 'b',
        'Radio_1': 'c',
        'Radio_2': 'a',
        'Radio_3': 'd',
        'Radio_4': 'c'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第13题实际开始做
function section2sister14S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book143/uyu42mc.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 2,
        TestID: 4.2,
        KidID: 1,
        ItemID: 169,
        'Radio_0': 'b',
        'Radio_1': 'a',
        'Radio_2': 'a',
        'Radio_3': 'c'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第13题实际开始做
function section2sister15S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book143/uyu42mc.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 3,
        TestID: 4.3,
        KidID: 1,
        ItemID: 182,
        'Radio_0': 'd',
        'Radio_1': 'c',
        'Radio_2': 'a',
        'Radio_3': 'b'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第13题实际开始做
function section2sister16S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book143/uyu44blank.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 4,
        TestID: 4.4,
        KidID: 1,
        ItemID: 190,
        'Blank_0_0': 'believe in',
        'Blank_0_1': 'circumstances',
        'Blank_0_2': 'searching for',
        'Blank_0_3': 'a strong sense of',
        'Blank_0_4': 'responsibility',
        'Blank_0_5': 'insecurity',
        'Blank_0_6': 'integrity',
        'Blank_0_7': 'accomplishing',
        'Blank_0_8': 'are longing for',
        'Blank_0_9': 'priorities'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第13题实际开始做
function section2sister17S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book143/uyu45mc.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 5,
        TestID: 4.5,
        KidID: 1,
        ItemID: 611,
        'Radio_0': 'a',
        'Radio_1': 'd',
        'Radio_2': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res);
      resolve('ok');
    });
  })
}

// 第一单元第二模块第13题实际开始做
function section2sister18S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book143/uyu45mc.php',
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
        UnitID: 1,
        SectionID: 4,
        SisterID: 6,
        TestID: 4.6,
        KidID: 1,
        ItemID: 612,
        'Radio_0': 'b',
        'Radio_1': 'b',
        'Radio_2': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
      url: 'http://202.118.163.67/book/book143/uyu72.php',
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
        ItemID: 226,
        'MC_201_0': 'b',
        'MC_201_1': 'c',
        'MC_201_2': 'a',
        'MC_201_3': 'd',
        'MC_201_4': 'c',
        'MC_209_0': 'd',
        'MC_209_1': 'a',
        'MC_209_2': 'b',
        'MC_209_3': 'c',
        'MC_209_4': 'c',
        'MC_217_0': 'b',
        'MC_217_1': 'c',
        'MC_217_2': 'a',
        'MC_217_3': 'a',
        'MC_217_4': 'd',
        'Blank_226_0_0': 'opening',
        'Blank_226_0_1': 'struggled',
        'Blank_226_0_2': 'progress',
        'Blank_226_0_3': 'remaining',
        'Blank_226_0_4': 'emerged',
        'Blank_226_0_5': 'continued',
        'Blank_226_0_6': 'enlarge',
        'Blank_226_0_7': 'crawling',
        'Blank_226_0_8': 'get through',
        'Blank_226_0_9': 'as strong as'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit1');
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
  await section2sister18S(cookie);
  await wait();
  await test(cookie);
  console.log('unit1 successful');
}

// unit1();
module.exports = unit1;