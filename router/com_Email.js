/**
 * Created by Administrator on 2017/8/10 0010.
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({//邮箱验证码发送
    service: 'qq',
    auth: {
        user: '623552925@qq.com',
        pass: 'vglzioaqcyypbfid' //授权码,通过QQ获取

    }
});

module.exports=transporter;