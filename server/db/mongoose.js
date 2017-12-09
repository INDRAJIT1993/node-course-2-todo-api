var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://indrajit1993:123456@ds133746.mlab.com:33746/testing1'||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};