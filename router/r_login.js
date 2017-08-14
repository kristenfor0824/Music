/**
 * Created by Administrator on 2017/8/10 0010.
 */
var connect=require('./com_mysql.js');
var josn={

    login:function(req,res){
        var name=req.query.name,
            pass=req.query.pass;
        var json={};

        connect.query('SELECT * FROM `m_user` WHERE username="'+name+'"',function(err,data){

            if(data==''){
                json={msg:'该用户不存在'}
            }else{
                if(data[0].password==pass){
                    json={status:200,msg:'恭喜你，登陆成功！'};
                } else{
                    json={status:500,msg:'密码有误！'}
                }
            }
            res.json(json)
        })

    },

};

module.exports=josn;