const Controller = require('egg').Controller;

class ProductController extends Controller {
    async index() {
        const { ctx } = this;
        const res = await ctx.service.product.index();
        ctx.body = res;
    }

    async detail() {
        const { ctx } = this;
        let { id } = ctx.query;
        ctx.body = {
            id
        };
    }

    async detail2() {
        const { ctx } = this;
        let { id } = ctx.params;
        ctx.body = {
            id
        }
    }

    async create() {
        const { ctx } = this;
        let { name } = ctx.request.body;
        ctx.body = {
            name
        }
    }
}

module.exports = ProductController;