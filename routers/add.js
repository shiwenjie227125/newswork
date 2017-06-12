const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var connection=require('../config/configMysql.js')(mysql);

router.post('/add',function(req,res){
	var title=req.body.title;
	connection.query('insert into news(title) values("'+title+'")',function(err,data){		
			res.send({code:0,data:data})		
	})
})
module.exports=router;