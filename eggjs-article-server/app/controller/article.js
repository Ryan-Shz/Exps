const Controller = require('egg').Controller;
const moment = require('moment');

// 文章管理控制器
class ArticleController extends Controller {
    async create() {
        const { ctx } = this;
        let body = ctx.request.body;
        // 使用moment处理创建日期createTime
        const params = {...body, createTime: moment().format('YYYY-MM-DD HH:mm:ss')};
        // 使用service访问数据库
        const result = await ctx.service.article.create(params);
        if (result) {
            this.ctx.body = {
                code: 200,
                data: result
            };
        } else {
            this.ctx.body = {
                code: 500,
                errMsg: 'create article error!'
            }
        }
    }

    async list() {
        const { ctx } = this;
        let list = await ctx.service.article.list();
        if (list) {
            ctx.body = {
                code: 200,
                data: list
            }
        } else {
            ctx.body = {
                code: 500,
                errMsg: 'get article list error!'
            }
        }
    }

    async detail() {
        const { ctx } = this;
        const result = await ctx.service.article.detail(ctx.params.id);
        if (result) {
            ctx.body = {
                code: 200,
                data: result
            }
        } else {
            ctx.body = {
                code: 500,
                errMsg: 'get article detail error!'
            }
        }
    }
}

module.exports = ArticleController;