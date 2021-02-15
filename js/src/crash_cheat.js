 var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/1.png");
        document.title = '╭(°A°`)╮ 勃艮第人……';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
        document.title = '(ฅ>ω<*ฅ) 欢迎回来达瓦里希' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});