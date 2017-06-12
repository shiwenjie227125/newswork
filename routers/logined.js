const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var connection=require('../config/configMysql.js')(mysql);

router.post('/logined',function(req,res){
	connection.query('select * from news',function(err,data){
		if(data.length>0){
			res.send({code:0,data:data})
		}else{
			res.send({code:1,data:'登录失败，请注册'});
		}	
	})

})

module.exports=router;