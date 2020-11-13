const Service = require('egg').Service;

class ArticleService extends Service {
    async create(params) {
        const { app } = this;
        try {
            // 使用egg-mysql插件来访问mysql数据库
            const result = await this.app.mysql.insert('article', params);
            return result;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async list() {
        const { app } = this;
        try {
            let result = await this.app.mysql.select('article');
            return result;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async detail(id) {
        if (!id) {
            console.log('id is not exist!');
            return null;
        }
        try {
            let result = await this.app.mysql.get('article', {id});
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ArticleService;