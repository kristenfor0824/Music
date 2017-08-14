/**
 * Created by Administrator on 2017/8/8 0008.
 */


$(function(){
    var audio = $('audio')[0];

//播放音乐

    $('.aa').on('click',function(){
        window.location.href='http://192.168.0.33/p_music.html';
    })


    var flag=true;
    $('.song_p2').on('click',function(){ //点击li标签，调用change_music(this)方法,传参this(指代当前song_p2)
        if(flag==true){//如果为true，播放
            change_music(this);
            flag=false;
        }
        else if(flag==false){//如果为flase，停止播放
            judge_paused(this);
            flag=true;
        }

    });

    var a='./views/images/pause.png',
        b='./views/images/play.png';
    function change_music(_this){
        $(_this).find('.music_sp').css({backgroundImage:'url('+a+')'});//点击播放按钮，更换图片
        $(_this).siblings('.song_p').css({animation:'change 25s linear infinite'});//旋转头像
        play_music($(_this).attr('music'));//获取音乐路径
    }


    /**
     * 播放
     * @param music_src     歌曲链接
     */
    function play_music(music_src) {
        audio.src = music_src;
        judge_paused();//是否暂停
    }


    /*** 判断是否暂停*/
    function judge_paused(this_) {
        if (audio.paused && audio.src) {//audio.paused为true
            audio.play();//播放音乐
            $(this_).find('.music_sp').css({backgroundImage:'url('+a+')'});//点击播放按钮，更换图片
            setTimeout(function () {
                $(this_).siblings('.song_p').css({animation:'change 25s linear infinite'});//旋转头像
            }, 100);
            return 'play';
        } else {
            audio.pause();
            $(this_).find('.music_sp').css({backgroundImage:'url('+b+')'});//点击播放按钮，更换图片
            $(this_).siblings('.song_p').css({'AnimationPlayState': 'paused'});//暂停转动
            //reset();
            return 'pause';
        }
    }









});







