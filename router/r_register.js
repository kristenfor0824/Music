/**
 * Created by Administrator on 2017/8/10 0010.
 */

var connect=require('./com_mysql.js');
var transporter=require('./com_Email.js');

var jsons={

    code:function(req,res){//发送验证码

        var code="",
            codeLength=4,
            random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//随机数
        for(var i=0;i<codeLength;i++){
            var index=Math.floor(Math.random()*36);
            code+=random[index];
        }

        var username=req.body.username,
            password=req.body.password,
            email=req.body.email;
        /*
         发送验证码至邮箱
         发送者623552925@qq.com
         接收着email
         * */

        if(req.cookies.name && req.cookies.pass && req.cookies.code) {
            res.json({msg:'请过30秒后再发送验证'});
        }else{
            var mailOptions = {
                from: '623552925@qq.com', // 发送者
                to:email, // 接受者,可以同时发送多个,以逗号隔开
                subject: '通过nodejs发送的邮件', // 标题
                //text: 'Hello world', // 文本
                html: code //需要发送的内容
            };
            console.log(code);
            transporter.sendMail(mailOptions, function(err, info) {
                if(err){res.json({status:500,msg:'邮件发送失败！'}) }
                else{
                    res.cookie('name',username,{
                        maxAge:25000,
                        path:'/'
                    });

                    res.cookie('pass',password,{
                        maxAge:25000,
                        path:'/'
                    });
                    res.cookie('code',code,{
                        maxAge:25000,
                        path:'/'
                    });
                    res.json({status:200,msg:'发送成功，进入邮箱查看！'})
                }
            });

        }



    },

    reg:function(req,res){//注册账户
        var name=req.cookies.name,
            pass=req.cookies.pass,
            code=req.cookies.code,
            name2=req.body.username,
            pass2=req.body.password,
            code2=req.body.code;
        //console.log(name2,pass2,code2);

        connect.query('SELECT * FROM `m_user` WHERE username="'+name+'"',function(err,data){

            if(data[0]){
                return   res.json({msg:'账号已存在!'})
            }

            if( name==name2 && pass==pass2 && code==code2){
                var str='INSERT INTO `m_user` (username,password,code) VALUES ("'+name+'","'+pass+'","'+code+'")';

                connect.query(str,function(err2,data2){
                    if(err2){
                        res.json({status:500,msg:'注册失败！'})
                    }
                    else{
                        res.json({status:200,msg:'注册成功！'})
                    }
                })

            }else{
                res.json({txt:'输入不一致',msg:'注册信息或验证码输入有误'})
            }







        });

    }


};

module.exports=jsons;













