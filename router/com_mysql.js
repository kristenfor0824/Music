/**
 * Created by Administrator on 2017/8/7 0007.
 */
var mysql=require('mysql');

var connect=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'house'
});

connect.connect(function(){
    console.log('mysql连接成功！')
});


module.exports = connect;