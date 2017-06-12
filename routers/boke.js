const express=require('express');
const router=express.Router();

router.get('/boke',function(req,res){
	res.render('boke')
})

module.exports=router;