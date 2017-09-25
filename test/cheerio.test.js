let cheerio = require('cheerio');

let $ = cheerio.load('<h2 class="title"> hello wordd</h2>');

$('h2.title').text('hello dana');
$('h2').addClass('welcome');

console.log($.html());