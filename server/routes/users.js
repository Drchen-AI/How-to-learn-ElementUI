var express = require('express');
var router = express.Router();
//连接数据库的文件
var db = require('../models/db');
//将User表引入进来
var User = require('../models/User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create',function(req,res,next){
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.name = req.body.name;
  newUser.password = req.body.password;
  newUser.phone = parseInt(req.body.phone);
  newUser.email = req.body.email;
  newUser.is_active = req.body.is_active;
  //判断一下如果，数据库单中存在相同的username,让用户重新填写
  User.findOne({'username':req.body.username},function(err,user){
    if(user){
      return res.json({
        status:'1',
        message:'用户名相同，无法进行注册'
      })
    }else{
        newUser.save().then(data=>{
            return res.json({
                status:'0',
                message:"success"
            })
        }).catch(err=>{
            return res.json({
                status:'1',
                message:err
            })
        })
    }
  })
})
//获取所有的用户列表
router.get('/getUsers',function(req,res,next){
  var page = parseInt(req.query.page);
  var pageSize = parseInt(req.query.pageSize);
  var skip = parseInt((page - 1) * pageSize);
  User.find({}).sort({'create_time':-1}).skip(skip).limit(pageSize).exec().then(users=>{
      if(users){
          User.count({},function(err,count){
              return res.json({
                  status:'0',
                  userList:users,
                  count:count
              })
          })
      }
  }).catch(err=>{
    return res.json({
      status:'1',
      message:err
    })
  })
})
module.exports = router;
