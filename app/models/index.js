const dbConfig = require('../../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.news = require('./news.model')(mongoose);
db.users = require('./users.model')(mongoose);
db.club = require('./club.model')(mongoose);

module.exports = db;