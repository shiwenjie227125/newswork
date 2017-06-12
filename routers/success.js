const express=require('express');
const router=express.Router();
const mysql=require('mysql');
var connection=require('../config/configMysql.js')(mysql);
router.get('/success',function(req,res){
	
		res.render("success")			
	})

module.exports=router;