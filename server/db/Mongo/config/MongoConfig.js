/* import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String
});

mongoose.connect('mongodb://localhost:27017/gifsdb');

const User = mongoose.model('User', userScheme);
const user = new User({
    name: 'ME'
})

user.save()
    .then(doc => {
        console.log('Object saved', doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error(err);
        mongoose.disconnect();
    }) */

"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var userScheme = new Schema({
    name: String
});

_mongoose.default.connect('mongodb://localhost:27017/gifsdb', { useNewUrlParser: true });

var User = _mongoose.default.model('User', userScheme);

var user = new User({
    name: 'not me'
});



User.find({}, function(err, docs){
    _mongoose.default.disconnect();
    if(err) return console.log(err);
    console.log(docs);
});
User.remove({
    name: 'not me'
}).then(function (result) {
    console.log('Object deleted', result);
    _mongoose.default.disconnect();
});

/* user.save().then(function (doc) {
    console.log('Object saved', doc);

    _mongoose.default.disconnect();
}).catch(function (err) {
    console.error(err);

    _mongoose.default.disconnect();
}); */