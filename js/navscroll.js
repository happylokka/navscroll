(function ($) {

    $.fn.navscroll = function (options) {
        
        options = Object.assign({
            scrollTime: 300, // 滑动时间
            defaultClick: 0, // 初始选中第n个，默认第0个
            scrollCallback: function(obj) {} // 回调函数
        },options);

        //阻止默认事件
        document.addEventListener('touchstart',function(ev){
            ev.preventDefault()
        },{passive:false});
    
        var wrapper = $(this);
        var wrapper_width = $(wrapper).width();
        var wrapper_off_right=$(window).width()-wrapper_width;
        var scroller = $(wrapper).find('.scroller');
        var s_li = $(scroller).find('li');
        var scrollerW = 0;
        $(s_li).eq(options.defaultClick).addClass('active').siblings().removeClass('active');

        $.each(s_li, function(i,v) {
            scrollerW += $(v).outerWidth();
        });

        if(scrollerW < $(window).width()) {
            $(s_li).width($(window).width() / s_li.length);
        } else {
            scroller.width(scrollerW);
        }

        var myIscroll = new IScroll(".wrapper",{
            eventPassthrough: true,
            scrollX: true,
            scrollY: false,
            preventDefault: false,
            click:true
        });
        
    
    init($(s_li).eq(options.defaultClick));    

    $(s_li).click(function(){
        init($(this));
    })

    function init(thisli) {
        var $this = thisli;
        var idx = $this.index();
        var off_left = $this.offset().left;
        var off_right = $(window).width() - off_left - $this.innerWidth();
        var prev_width = $this.prev('li').innerWidth();
        var next_width = $this.next('li').innerWidth();
        var pos_left = $this.position().left;

        $this.addClass("active").siblings().removeClass("active");
        if(scrollerW > wrapper_width) {

            if( idx < 1 ) {
                myIscroll.scrollTo( -pos_left + prev_width,0, 300);
            } 
            else if ( idx == s_li.length - 1 ) {
                scrollX = scrollerW - $(window).width();
                myIscroll.scrollTo(-scrollX,0,300);
            }
            else {
                if(off_left<15){
                    myIscroll.scrollTo( -pos_left + prev_width,0, 300);
                }else if(off_right<15){
                    myIscroll.scrollBy(off_right-next_width-wrapper_off_right,0, 300);
                }
            }

        }
        options.scrollCallback(thisli);
    }
    }
})(jQuery);