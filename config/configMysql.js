const mysql=require('mysql');

module.exports=function(){
	var connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123123',
		port:3306,
		database:'1503A'
	})
	connection.connect();
	return connection;
}