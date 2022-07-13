import { Controller, Get} from '@midwayjs/decorator';
import axios from 'axios'; 
const cheerio = require('cheerio');
const url = "http://www.baidu.com/";

@Controller('/')
export class HomeController {
    @Get('/')
    async home(): Promise<string> {
      const result = (await axios.get(url)).data;
      console.log(result)
      return getPageSrc(result.toString())
  }}

function getPageSrc(html) {
    const $ = cheerio.load(html);
    var src_info = $("#lg img").attr("src");
    return src_info
}