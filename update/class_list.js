let request  = require("request");
let cheerio = require('cheerio');
let debug = require('debug')('chapter6_pachong:update');

debug('读取博文列表');

request('http://blog.sina.com.cn/u/1776757314',function (err, res) {
    if(err) return console.error(err);
    console.log(res.body.toString());
    let $ = cheerio.load(res.body.toString());
    let classList = [];
    $('.classList li a').each(function () {
        let $me = $(this);
        let item = {
            name:$me.text().trim(),
            url: $me.attr('href')
        };

        let s = item.url.match(/articlelist_\d+_(\d+)_\d\.html/);
        if(Array.isArray(s)){
            item.id = s[1];
            classList.push(item);
        }
    });
    console.log(classList);
});