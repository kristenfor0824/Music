/**
 * Created by Administrator on 2017/8/7 0007.
 */

var connect=require('./com_mysql');

var jsons={

    select:function(req,res){
      connect.query('select * from music order by rand() LIMIT 15',function(err,data){
          if(err) return res.json({status:500,msg:'error'});
          res.json({status:200,msg:'success',data:data});
      })
    },
    seles:function(req,res){
        connect.query('select * from music order by rand() LIMIT 15',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },
    selest:function(req,res){
        connect.query('select * from music order by rand() LIMIT 15',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },
    radio:function(req,res){
        connect.query('select * from music order by rand() LIMIT 3',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },

    a:function(req,res){
        connect.query('select * from music order by rand() LIMIT 3',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },
    b:function(req,res){
        connect.query('select * from music order by rand() LIMIT 3',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },
    c:function(req,res){
        connect.query('select * from music order by rand() LIMIT 3',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },
    d:function(req,res){
        connect.query('select * from music order by rand() LIMIT 3',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },
    e:function(req,res){
        connect.query('select * from music order by rand() LIMIT 3',function(err,data){
            if(err) return res.json({status:500,msg:'error'});
            res.json({status:200,msg:'success',data:data});
        })
    },

};

module.exports=jsons;