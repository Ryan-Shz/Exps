'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 使用 egg-mysql 插件
    const res = await app.mysql.select('article');
    console.log(res);
    ctx.body = {
      message: '123'
    };
  }
}

module.exports = HomeController;
