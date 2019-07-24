const express = require('express');
const mongoose = require('mongoose');
//  连接mongo，并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',() => {
    console.log("connected success...")
});
//  类似于mysql的表，mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user: {type: String,require: true},
    age: {type: Number,require: true}
}))
//  新增数据
// User.create({
//     user: 'xiaomin',
//     age: 15
// },(err,doc) => {
//     if(!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

// User.remove({age:23},(err,doc) => {
//     if(!err) {
//         console.log(doc)
//     }
// })

User.update({'user':'xiaomin'},{'$set': {age: 23}},(err,doc) => {
    if(!err) {
        console.log(doc);
    }
})

const server = express();

server.get('/',(req,res) => {
    res.send('<h1>Hello world!!</h1>');
})

server.get('/data',(req,res) => {
    res.json({'name': 'luohuayu &&','age': 23,'hobby': 'coding'});
})

server.get('/info',(req,res) => {
    User.find({'user': 'xiaomin'},(err,doc) => {
        res.json(doc)
    })
})

server.listen(8080,() => {
    console.log("Node server started at port 8080");
})