/**
 * Created by Administrator on 2017/8/10 0010.
 */



$(function(){


    var time=20;
    var click_flag=true;

    if (parseInt(window.name)) {
        click_flag = false;
        time = parseInt(window.name);
        countdown($('#cod_btn'));//传参给obj
    }


    $('#cod_btn').on('click',function(){
        var username= $('.username').val(),
            password=$('.password').val(),
            email=$('.email').val();



        var _this = $(this);
        var json={username:username,password:password,email:email};
        console.log(json);

/*
* 点击发送验证码
* */
        $.post('http://192.168.0.33/code',json,function(data){

                if(data.status==500){alert(data.msg);}
                else if(data.status==200){
                    countdown(_this);
                    alert(data.msg);
                    if(!click_flag) return console.log('不能多次点击');
                    click_flag = false;
                }else{
                    alert(data.msg);
                    //if(!click_flag) return console.log('不能多次点击');
                    click_flag = false;
                }

        })


    });



    /*
     * 倒计时获取验证码
     * 关键字window.name
     */
    function countdown(obj){
        var T = setInterval(function () {
            time--;
            window.name = time;
            obj.text(time+'内请输入');
            if (time <= 0) {//当倒计时完成
                clearInterval(T);
                obj.text('邮箱验证');
                time = 20;
                click_flag = true;
            }
        }, 1000)
    }






    $('#reg_btn').on('click',function(){
        var username= $('.username').val(),
            password=$('.password').val(),
            code=$('#code').val();

        var json={username:username,password:password,code:code};
        $.post('http://192.168.0.33/register',json,function(data){

              if(data.status==500){
                  alert(data.msg);
                  $('#code').val("")
              }
              else if(data.status==200){alert(data.msg);$('#code').val("")}
              else if(data.txt=='两次输入不一致'){alert(data.msg);$('#code').val("")}
              else{alert(data.msg);$('#code').val("")}

        })



        })




});