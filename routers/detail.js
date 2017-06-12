const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var connection=require('../config/configMysql.js')(mysql);

router.get('/detail',function(req,res){
	connection.query('select * from news',function(err,data){
		// console.log(data)
		res.render("detail",{
			num:data
		})			
	})
})

module.exports=router;