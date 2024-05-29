var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/1.png");
        document.title = '╭(°A°`)╮ No';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
        document.title = '(ฅ>ω<*ฅ) Welcome to ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});