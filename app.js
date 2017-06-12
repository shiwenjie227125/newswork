const express=require('express');
const app=express();
const router=express.Router();
const ejs=require('ejs');
const mysql=require('mysql');
const bodyparser=require('body-parser');

app.use(express.static(__dirname+'/static'));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:false}));

require('./config/configRouter.js')(app);

app.listen(3333,function(){
	console.log('listen this port 3333....')
})