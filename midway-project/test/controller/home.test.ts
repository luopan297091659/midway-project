const res = require('../../src/controller/home');
import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello Midwayjs!');

    // close app
    await close(app);
  });

});

test("home.ts测试",()=>{
  console.log(res)
  var begin_time=Date.now();
  expect(res).toEqual("//www.baidu.com/img/flexible/logo/pc/index.png");
  // expect(res).toEqual("//www.baidu.com/img/bd_logo1.png");
  var end_time=Date.now();
  console.log(begin_time,end_time)
})
