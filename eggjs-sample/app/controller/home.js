'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await ctx.service.product.index();
    // 模板引擎，返回渲染的html模板，并传递对象到模板中
    await ctx.render('index.html', {
      res, list: ['a', 'b', 'c']
    });
  }
}

module.exports = HomeController;
