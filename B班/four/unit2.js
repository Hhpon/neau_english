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
      url: 'http://202.118.163.67/book/book144/index.php?Quiz=N&whichActionPage=',
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
      url: 'http://202.118.163.67/book/book144/unit_index.php?UnitID=2',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Cookie: cookie,
        Host: '202.118.163.67',
        Referer: 'http://202.118.163.67/book/book144/jdindex.php',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      },
    }, (err, res, html) => {
      console.log('getSuccessPage成功');
      resolve('ok');
    })

  })
}


// 第2单元第二模块第1题实际开始做
function section2sister1S(cookie) {
  return new Promise(function (resolve, reject) {
    request({
      url: 'http://202.118.163.67/book/book144/uyu21blank.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 2,
        TestID: 2.2,
        KidID: 1,
        ItemID: 19,
        'Blank_0_0': 'excited',
        'Blank_0_1': 'on the banks',
        'Blank_0_2': 'beach parties',
        'Blank_0_3': 'find out',
        'Blank_0_4': 'looking forward to',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu23drag.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 3,
        TestID: 2.3,
        KidID: 1,
        ItemID: 79,
        myList: '5^0^3^2^4^1',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu522checkbox.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 4,
        TestID: 2.4,
        KidID: 1,
        ItemID: 60,
        'Checkbox_0': 1,
        'Checkbox_1': 1,
        'Checkbox_2': 1,
        'Checkbox_7': 1,
        'Checkbox_9': 1,
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu522checkbox.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 5,
        TestID: 2.5,
        KidID: 1,
        ItemID: 62,
        'Checkbox_0': 1,
        'Checkbox_1': 1,
        'Checkbox_3': 1,
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu211checkboxTable.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 9,
        TestID: 2.9,
        KidID: 1,
        ItemID: 207,
        'Checkbox_0_2': 1,
        'Checkbox_1_1': 1,
        'Checkbox_2_1': 1,
        'Checkbox_3_1': 1,
        'Checkbox_4_1': 1,
        'Checkbox_5_2': 1,
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu29blank.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 10,
        TestID: 2.10,
        KidID: 1,
        ItemID: 209,
        'Blank_0_0': 'Thursday, 20/5/2004',
        'Blank_0_1': '16',
        'Blank_0_2': '20',
        'Blank_0_3': 'by the river',
        'Blank_0_4': 'raining',
        'Blank_0_5': 'fancied',
        'Blank_0_6': 'have the guts to tell him',
        'Blank_0_7': 'good-looking, romantic and intelligent',
        'Blank_0_8': '3 children',
        'Blank_0_9': "I'm happy",
        'Blank_0_10': 'feel good about who I was',
        'Blank_0_11': 'Good luck for the future',
        'Blank_0_12': 'be happy with who you are',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu522checkbox.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 15,
        TestID: 2.15,
        KidID: 1,
        ItemID: 63,
        'Checkbox_2': 1,
        'Checkbox_5': 1,
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu21blank.php',
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
        UnitID: 2,
        SectionID: 2,
        SisterID: 16,
        TestID: 2.16,
        KidID: 1,
        ItemID: 21,
        'Blank_0_0': 'the longest-living communities',
        'Blank_0_1': '900',
        'Blank_0_2': 'go about their business',
        'Blank_0_3': 'fruit and vegetable',
        'Blank_0_4': 'ingredients',
        'Blank_0_5': 'cell damage',
        'Blank_0_6': 'high quantities',
        'Blank_0_7': 'health protective',
        'Blank_0_8': '1,200',
        'Blank_0_9': '20 percent less',
        'Blank_0_10': 'getting more for their money',
        'Blank_0_11': "health's worth",
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu34checkbox.php',
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
        UnitID: 2,
        SectionID: 3,
        SisterID: 4,
        TestID: 3.4,
        KidID: 1,
        ItemID: 213,
        'Checkbox_0': 1,
        'Checkbox_2': 1,
        'Checkbox_3': 1,
        'Checkbox_4': 1,
        'Checkbox_6': 1,
        'Checkbox_7': 1,
        'Checkbox_9': 1,
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu41mc.php',
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
        UnitID: 2,
        SectionID: 4,
        SisterID: 1,
        TestID: 4.1,
        KidID: 1,
        ItemID: 312,
        whichKidID: 5,
        'Radio_0': 'a',
        'Radio_1': 'd',
        'Radio_2': 'c',
        'Radio_3': 'b',
        'Radio_4': 'd',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu42mc.php',
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
        UnitID: 2,
        SectionID: 4,
        SisterID: 2,
        TestID: 4.2,
        KidID: 1,
        ItemID: 457,
        'Radio_0': 'c',
        'Radio_1': 'b',
        'Radio_2': 'a',
        'Radio_3': 'd',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu42mc.php',
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
        UnitID: 2,
        SectionID: 4,
        SisterID: 3,
        TestID: 4.3,
        KidID: 1,
        ItemID: 332,
        'Radio_0': 'b',
        'Radio_1': 'c',
        'Radio_2': 'd',
        'Radio_3': 'a',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu44blank.php',
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
        UnitID: 2,
        SectionID: 4,
        SisterID: 4,
        TestID: 4.4,
        KidID: 1,
        ItemID: 340,
        'Blank_0_0': 'proportion',
        'Blank_0_1': 'estimated',
        'Blank_0_2': 'have profound impacts on',
        'Blank_0_3': 'potential',
        'Blank_0_4': 'economically',
        'Blank_0_5': 'pensions',
        'Blank_0_6': 'originate from',
        'Blank_0_7': 'residential',
        'Blank_0_8': 'poses a challenge to',
        'Blank_0_9': 'be transformed into',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu45mc.php',
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
        UnitID: 2,
        SectionID: 4,
        SisterID: 5,
        TestID: 4.5,
        KidID: 1,
        ItemID: 463,
        'Radio_0': 'b',
        'Radio_1': 'd',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu45mc.php',
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
        UnitID: 2,
        SectionID: 4,
        SisterID: 6,
        TestID: 4.6,
        KidID: 1,
        ItemID: 464,
        'Radio_0': 'b',
        'Radio_1': 'd',
        'Radio_2': 'c',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
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
      url: 'http://202.118.163.67/book/book144/uyu72.php',
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
        UnitID: 2,
        SectionID: 7,
        SisterID: 2,
        TestID: 7.2,
        KidID: 1,
        ItemID: 136,
        'MC_442_0': 'b',
        'MC_442_1': 'd',
        'MC_442_2': 'c',
        'MC_442_3': 'b',
        'MC_442_4': 'c',
        'MC_450_0': 'd',
        'MC_450_1': 'c',
        'MC_450_2': 'c',
        'MC_450_3': 'b',
        'MC_450_4': 'a',
        'MC_128_0': 'b',
        'MC_128_1': 'c',
        'MC_128_2': 'a',
        'MC_128_3': 'a',
        'MC_128_4': 'd',
        'Blank_136_0_0': 'launched',
        'Blank_136_0_1': 'corner',
        'Blank_136_0_2': 'bankruptcy',
        'Blank_136_0_3': 'virtually',
        'Blank_136_0_4': 'directing',
        'Blank_136_0_5': 'discharged from',
        'Blank_136_0_6': 'secured',
        'Blank_136_0_7': 'substantial',
        'Blank_136_0_8': 'Not surprisingly',
        'Blank_136_0_9': 'fashion accessories',
      }
    }, (err, res, html) => {
      $ = cheerio.load(html);
      var res = $('.dwt>p').text().trim();
      if (res.indexOf('Done with this activity.') == -1) {
        console.log('unit2');
        reject('由于网络或端口问题，程序已经停止运行！');
        return;
      }
      console.log(res + 'test');
      resolve('ok');
    });
  })
}


async function unit2(cookie, path) {
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
  await test(cookie);
  console.log('unit2 successful');
}

// unit2();
module.exports = unit2;