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
      url: 'http://202.118.163.67/book/book141/unit_index.php?UnitID=6',
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
      url: 'http://202.118.163.67/book/book141/uyu21blank.php',
      method: 'POST',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Origin: 'http://202.118.163.67',
        Referer: 'http://202.118.163.67/book/book142/uyu21blank.php?UnitID=1&SectionID=2&SisterID=2',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
      form: {
        UnitID: 6,
        SectionID: 2,
        SisterID: 2,
        TestID: 2.2,
        KidID: 1,
        ItemID: 271,
        'Blank_0_0': 'exercise',
        'Blank_0_1': 'full-time',
        'Blank_0_2': 'running'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
      url: 'http://202.118.163.67/book/book141/uyu522checkbox.php',
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 3,
        TestID: 2.3,
        KidID: 1,
        ItemID: 272,
        'Checkbox_0': 1,
        'Checkbox_4': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 4,
        TestID: 2.4,
        KidID: 1,
        ItemID: 273,
        myList: '2^4^5^0^3^6^1'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 5,
        TestID: 2.5,
        KidID: 1,
        ItemID: 275,
        'Blank_0_0': 'a sweet tooth',
        'Blank_0_1': 'sweet',
        'Blank_1_0': 'coffee',
        'Blank_1_1': 'chocolate',
        'Blank_2_0': 'Eating late',
        'Blank_2_1': 'regularly',
        'Blank_3_0': 'too much',
        'Blank_4_0': 'fast food',
        'Blank_5_0': 'far too many',
        'Blank_5_1': 'cake'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 9,
        TestID: 2.9,
        KidID: 1,
        ItemID: 394,
        'Blank_0_0': 'eating problems',
        'Blank_0_1': 'replace normal',
        'Blank_0_2': 'food pills',
        'Blank_0_3': 'taste different',
        'Blank_0_4': 'its flavor',
        'Blank_0_5': 'become common'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 10,
        TestID: 2.10,
        KidID: 1,
        ItemID: 396,
        'Checkbox_1': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 15,
        TestID: 2.15,
        KidID: 1,
        ItemID: 398,
        'Radio_0': 'c',
        'Radio_1': 'a',
        'Radio_2': 'c',
        'Radio_3': 'd',
        'Radio_4': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 2,
        SisterID: 16,
        TestID: 2.16,
        KidID: 1,
        ItemID: 399,
        'Checkbox_0_1': 1,
        'Checkbox_1_1': 1,
        'Checkbox_2_1': 1,
        'Checkbox_3_2': 1,
        'Checkbox_4_2': 1,
        'Checkbox_5_1': 1,
        'Checkbox_6_2': 1,
        'Checkbox_7_1': 1,
        'Checkbox_8_2': 1,
        'Checkbox_9_2': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
      url: 'http://202.118.163.67/book/book141/uyu33drag.php',
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
        UnitID: 6,
        SectionID: 3,
        SisterID: 3,
        TestID: 3.3,
        KidID: 1,
        ItemID: 470,
        myList: '3^1^5^4^0^2'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 3,
        SisterID: 4,
        TestID: 3.4,
        KidID: 1,
        ItemID: 473,
        'Blank_1_0': 'tea and coffee',
        'Blank_1_1': 'one small cup',
        'Blank_1_2': 'painkillers',
        'Blank_1_3': 'three times a day',
        'Blank_2_0': 'Foot pain',
        'Blank_3_0': 'worry about'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 3,
        SisterID: 10,
        TestID: 3.10,
        KidID: 1,
        ItemID: 504,
        'Blank_0_0': 'feel relaxed',
        'Blank_1_0': 'much exercise',
        'Blank_2_0': 'sporting hero',
        'Blank_3_0': 'walk a day'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 3,
        SisterID: 11,
        TestID: 3.11,
        KidID: 1,
        ItemID: 505,
        'Checkbox_0': 1,
        'Checkbox_1': 1,
        'Checkbox_3': 1,
        'Checkbox_5': 1
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 4,
        SisterID: 1,
        TestID: 4.1,
        KidID: 1,
        ItemID: 121,
        whichKidID: 5,
        'Radio_0': 'c',
        'Radio_1': 'b',
        'Radio_2': 'd',
        'Radio_3': 'b',
        'Radio_4': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 4,
        SisterID: 2,
        TestID: 4.2,
        KidID: 1,
        ItemID: 127,
        'Radio_0': 'c',
        'Radio_1': 'b',
        'Radio_2': 'a',
        'Radio_3': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 4,
        SisterID: 3,
        TestID: 4.3,
        KidID: 1,
        ItemID: 133,
        'Radio_0': 'b',
        'Radio_1': 'd',
        'Radio_2': 'b',
        'Radio_3': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 4,
        SisterID: 4,
        TestID: 4.4,
        KidID: 1,
        ItemID: 139,
        'Blank_0_0': 'pressures',
        'Blank_0_1': 'disappear',
        'Blank_0_2': 'compromise',
        'Blank_0_3': 'alcohol',
        'Blank_0_4': 'intense',
        'Blank_0_5': 'interferes with',
        'Blank_0_6': 'undermine',
        'Blank_0_7': 'pay attention to',
        'Blank_0_8': 'suffers from',
        'Blank_0_9': 'competitive'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 4,
        SisterID: 5,
        TestID: 4.5,
        KidID: 1,
        ItemID: 545,
        'Radio_0': 'd',
        'Radio_1': 'd'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 4,
        SisterID: 6,
        TestID: 4.6,
        KidID: 1,
        ItemID: 546,
        'Radio_0': 'c',
        'Radio_1': 'a'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
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
        UnitID: 6,
        SectionID: 7,
        SisterID: 2,
        TestID: 7.2,
        KidID: 1,
        ItemID: 168,
        'MC_147_0': 'a',
        'MC_147_1': 'a',
        'MC_147_2': 'c',
        'MC_147_3': 'd',
        'MC_147_4': 'b',
        'MC_182_0': 'a',
        'MC_182_1': 'c',
        'MC_182_2': 'b',
        'MC_182_3': 'b',
        'MC_182_4': 'a',
        'MC_161_0': 'c',
        'MC_161_1': 'c',
        'MC_161_2': 'd',
        'MC_161_3': 'd',
        'MC_161_4': 'd',
        'Blank_168_0_0': 'perfectly',
        'Blank_168_0_1': 'sewing',
        'Blank_168_0_2': 'distant',
        'Blank_168_0_3': 'suffer from',
        'Blank_168_0_4': "at arm's length",
        'Blank_168_0_5': 'cloudy',
        'Blank_168_0_6': 'judging',
        'Blank_168_0_7': 'slightly',
        'Blank_168_0_8': 'background',
        'Blank_168_0_9': 'eye views'
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit6');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res + 'test');
      resolve('ok');
    });
  })
}


async function unit6(cookie, path) {
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
  await test(cookie);
  console.log('unit6 successful');
}

// unit6();
module.exports = unit6;