let request  =require("request");
let cheerio = require("cheerio");
let debug = require("debug")('chapter6_pachong:update');

debug("读取博文列表");

request('http://blog.sina.com.cn/s/articlelist_1776757314_0_1.html',function (err, res) {
    if(err) return console.error(err);

    let $ = cheerio.load(res.body.toString());
    let articleList = [];

    $('.articleList .articleCell').each(function () {
        $me = $(this);

        let $title  =$me.find('.atc_title a');
        let $time = $me.find('.atc_info atc_tm SG_txtc');
        let item = {
            title:$title.text().trim(),
            url:$title.attr('href'),
            time:$time.text().trim()
        };

        let s = item.url.match(/blog_([a-zA-Z0-9]+)\.html/);
        if(Array.isArray(s)){
            item.id = s[1];
            articleList.push(item);
        }
    });
    console.log(articleList);
});