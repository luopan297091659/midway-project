
import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    var begin_time=Date.now();

    const app = await createApp<Framework>();
    const result = await createHttpRequest(app).get('/');
    
    const cost = Date.now() - begin_time;
    console.log(cost,result.text)
    expect(result.status).toBe(200);
    expect(cost).toBeLessThanOrEqual(1000);
    expect(result.text).toBe("//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png")
    expect(result.text).toBe("//www.baidu.com/img/bd_logo1.png");

    await close(app);
  });
});
