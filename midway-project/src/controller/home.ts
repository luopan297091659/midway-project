const https = require("https")
const cheerio = require('cheerio');
const url = "https://www.baidu.com"

https.get(url, (res) => {
    let html = '';  
    res.on('data', (data) => {
      html += data;
    });
  
    res.on('end', () => { 
        var t = getPageSrc(html)
        console.log(t)
    }); 
  }).on('error', () => { 
    console.log('获取网页信息错误');
  });

function getPageSrc(html) {
    const $ = cheerio.load(html);
    var src_info = $("#lg img").attr("src");
    return src_info
}
