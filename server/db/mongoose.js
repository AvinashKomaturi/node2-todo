var mongoose =require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://avinash:abcd1234@ds253203.mlab.com:53203/agile-beyond"||"mongodb://localhost:27017");

module.exports = {mongoose};