module.exports = (app) => {
    const users = require('../controllers/users.controller');
    const news = require('../controllers/news.controller');
    const club = require('../controllers/club.controller');
    const router = require('express').Router();

    router.get('/users', users.findAll)
    router.post('/users', users.create)
    router.get('/users/:_id', users.findOne)
    router.put('/users/:_id', users.update)
    router.delete('/users/:_id', users.delete)

    router.get('/news', news.findAll)
    router.post('/news', news.create)
    router.get('/news/:_id', news.findOne)
    router.put('/news/:_id', news.update)
    router.delete('/news/:_id', news.delete)

    router.get('/club', club.findAll)
    router.post('/club', club.create)
    router.get('/club/:_id', club.findOne)
    router.put('/club/:_id', club.update)
    router.delete('/club/:_id', club.delete)

    app.use(router)
}