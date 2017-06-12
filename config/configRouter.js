var boke=require('../routers/boke.js');
var logined=require('../routers/logined.js');
var detail=require('../routers/detail.js');
var success=require('../routers/success.js');
var successed=require('../routers/successed.js')
var add=require('../routers/add.js')

module.exports=function(app){
	app.get('/boke',boke);
	app.post('/logined',logined);
	app.get('/detail',detail);
	app.get('/success',success);
	app.post('/successed',successed)
	app.post('/add',add)
}