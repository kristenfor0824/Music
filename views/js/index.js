

var vue=new Vue({
    el:'#box_big',
    data:{
        select:"",//歌单1
        b_select:"",//歌单2
        c_select:"",//歌单2
        trans:"",//电台推荐1
        a:"",//电台推荐2
        b:"",//电台推荐3
        c:"",//电台推荐4
        d:"",//电台推荐5
        e:"",//电台推荐6
    },
    methods:{

        init:function(){
            /*底部选项卡star*/
            mui.init();
//mui('.mui-slider').slider().setStopped(true);//禁止选项卡右滑动
            (function($) {
                //阻尼系数
                var deceleration = mui.os.ios?0.003:0.0009;
                $('.mui-scroll-wrapper').scroll({
                    bounce: false,
                    indicators: true, //是否显示滚动条
                    deceleration:deceleration
                });
                $.ready(function() {
                    //循环初始化所有下拉刷新，上拉加载。
                    $.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
                        $(pullRefreshEl).pullToRefresh({
//              down: {
//                  callback: function() {
//                      var self = this;
//                      setTimeout(function() {
//                          var ul = self.element.querySelector('.mui_ul');
//                          ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
//                          self.endPullDownToRefresh();
//                      }, 1000);
//                  }
//              },
//                            up: {
//                                callback: function() {
//                                    var self = this;
//                                    setTimeout(function() {
//                                        var ul = self.element.querySelector('.mui_ul');
//                                        ul.appendChild(createFragment(ul, index, 5));
//                                        self.endPullUpToRefresh();
//                                    }, 1000);
//                                }
//                            }
                        });
                    });
                    var createFragment = function(ul, index, count, reverse) {
                        var length = ul.querySelectorAll('li').length;
                        var fragment = document.createDocumentFragment();
                        var li;
                        for (var i = 0; i < count; i++) {
                            li = document.createElement('li');
                            li.className = 'mui_li';
                            li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
                            fragment.appendChild(li);
                        }
                        return fragment;
                    };
                });
            })(mui);
            /*底部选项卡end*/

            /*个性推荐图片自动轮播*/

   
            mui('.img_box').slider({
                interval:800//自动轮播周期，若为0则不自动播放，默认为0；
            });

            var T1,T2;
            mui('.mui-segmented-control').on('tap','.outer',function() {
                var text = this.innerText;
                switch (text) {
                    case '个性推荐':
                        T1 = setTimeout(function () {
                            mui('.img_box').slider({
                                interval: 800//自动轮播周期，若为0则不自动播放，默认为0；
                            });
                            clearTimeout(T1);
                        }, 1);
                        break;
                    case '主播电台':
                        T2 = setTimeout(function () {
                            mui('.img_boxs').slider({
                                interval: 800//自动轮播周期，若为0则不自动播放，默认为0；
                            });
                            clearTimeout(T2);
                        }, 1);
                        break;
                }
            });
            /*点击推荐歌单，跳转的歌单页面*/
            $('.rec_btn').on('click',function(){
                window.location.href='http://192.168.0.33/song.html';
            });
            /*点击排行榜li标签，跳转的歌单页面*/
            $('.hot_ul').on('click',function(){
                window.location.href='http://192.168.0.33/song.html';
            });
            /*点击最新音乐li标签，跳转的歌单页面*/
            $('.new_music').on('click',function(){
                window.location.href='http://192.168.0.33/song.html';
            });
        },
        sel:function(){
            var _this=this;
            $.get('http://192.168.0.33/select',function(data){//加载歌单数据1
                _this.select=data.data;
            });
            $.get('http://192.168.0.33/seles',function(data){//加载歌单数据2
                _this.b_select=data.data;
            });$.get('http://192.168.0.33/selest',function(data){//加载歌单数据3
                _this.c_select=data.data;
            });

          //加载电台推荐数据
            $.get('http://192.168.0.33/radio',function(data){
                _this.trans=data.data;
            });
            $.get('http://192.168.0.33/a',function(data){
                _this.a=data.data;
            });
            $.get('http://192.168.0.33/b',function(data){
                _this.b=data.data;
            });
            $.get('http://192.168.0.33/c',function(data){
                _this.c=data.data;
            });
            $.get('http://192.168.0.33/d',function(data){
                _this.d=data.data;
            });
            $.get('http://192.168.0.33/e',function(data){
                _this.e=data.data;
            });


        },

    }


});

vue.init();
vue.sel();