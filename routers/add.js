const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var connection=require('../config/configMysql.js')(mysql);

router.post('/add',function(req,res){
	var title=req.body.title;
	var keys=req.body.keys;
	console.log(keys)
	console.log(title)
	connection.query("insert into news(keys,title) values('"+keys+"','"+title+'")',function(err,data){
			
			res.send({code:0,data:"ok"})		
	})
})
module.exports=router;