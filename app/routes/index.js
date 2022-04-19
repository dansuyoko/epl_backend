module.exports = (app) => {
  const users = require('../controllers/users.controller');
  const news = require('../controllers/news.controller');
  const club = require('../controllers/club.controller');
  const router = require('express').Router();

<<<<<<< HEAD
  router.get('/user', users.findAll);
  router.post('/register', users.create);

  router.get('/user/:_id', users.findOne);
  router.put('/user/:_id', users.update);
  router.delete('/user/:_id', users.delete);
=======
    router.get('/users', users.findAll)
    router.post('/user', users.create)
    router.get('/user/:_id', users.findOne)
    router.put('/user/:_id', users.update)
    router.delete('/user/:_id', users.delete)

    router.get('/news', news.findAll)
    router.post('/news/:_id', news.create)
    router.get('/news/:_id', news.findOne)
    router.get('/dashboard/:_id', news.findUser)
    router.put('/news/:_id', news.update)
    router.delete('/news/:_id', news.delete)
>>>>>>> dcfb1be2047f65331054800ad4210d00f2071f1d

  router.get('/news', news.findAll);
  router.post('/news/:_id', news.create);
  router.get('/news/:_id', news.findOne);
  router.get('/dashboard/:_id', news.findUser);
  router.put('/news/:_id', news.update);
  router.delete('/news/:_id', news.delete);

  router.get('/club', club.findAll);
  router.post('/club', club.create);
  router.get('/club/:_id', club.findOne);
  router.put('/club/:_id', club.update);
  router.delete('/club/:_id', club.delete);

  app.use(router);
};
