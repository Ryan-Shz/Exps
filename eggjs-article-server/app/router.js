'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/article/list', controller.article.list);
  router.get('/article/detail/:id', controller.article.detail)
  router.post('/article/create', controller.article.create);
};
