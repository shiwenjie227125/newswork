const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var connection=require('../config/configMysql.js')(mysql);

router.post('/count',function(req,res){
	var NO=req.body.NO;
	connection.query("update news set count=count+1 where NO=?",[req.body.NO],function(err,data){		
		if(err){
			throw err;
		}
		res.send('fangwenliang')
	})
})
module.exports=router;