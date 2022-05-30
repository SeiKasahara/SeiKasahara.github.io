/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","42a7957fa635e3bbd314fe7fee845e45"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","a74a0e9bc2c6ae7b82c63e922d9e8420"],["/archives/2021/02/index.html","8d5fd34ab18b56c17014eada8d343f32"],["/archives/2021/11/index.html","df1e704bae697f05bffdf8b6b73b1885"],["/archives/2021/11/page/2/index.html","d042e98325588d6511727c95fbcb4a16"],["/archives/2021/11/page/3/index.html","bab39a0f09e0c69304de941e42a224f7"],["/archives/2021/index.html","f64c7f86579ca76928f2d5ed616080d8"],["/archives/2021/page/2/index.html","3305680f2006cabf27d60fb6ac2ea049"],["/archives/2021/page/3/index.html","3427f93cc65744043791aadcf6a95795"],["/archives/2022/04/index.html","bc6b144e6ff21562ce48ee05f695edc6"],["/archives/2022/05/index.html","731dcc683d898166f082e4c641eb0a02"],["/archives/2022/index.html","6c6dc3b4b1792ba1d6cdbfa3e9ed8b3d"],["/archives/index.html","ec34383e35e61388eac7d9f2f015a844"],["/archives/page/2/index.html","eeddb1a8a104bf798137dcfbb2ad4368"],["/archives/page/3/index.html","6108f684969e157d67a2f0b037c06629"],["/categories/Hexo博客技巧/index.html","d0db931c235ce7379895dfa1e130a0db"],["/categories/index.html","d84d63660fbf0bcfa96ad689278d410c"],["/categories/python/index.html","4825f2e63ba3dc1f28c2c94cf0ad3f19"],["/categories/东方Project同人/index.html","c8631842fb20ea635929b5e53efa0f95"],["/categories/哲学/index.html","11b95dae90ce65f6ad6f9aa5b237cb76"],["/categories/天文摄影/index.html","84cb7bc528cb5e5a84d200c977225747"],["/categories/战术/index.html","9c630d4832abfed9f4b3bad4338df673"],["/categories/数学/index.html","e951519192cc82d85715648c8fdf1e5a"],["/categories/文本翻译/index.html","3758579bea53ee55bd8bc5bf33bb3643"],["/categories/文献翻译/index.html","091387d2966491a87e9e4efb8533eb88"],["/categories/时评/index.html","d45681f6e77d4b41f9954ba11a955749"],["/categories/有机化学/index.html","a27ea9a504b153607f1556e2a4e861f8"],["/categories/架空世界/index.html","1ff1045015a24a42cec00039eaa11901"],["/categories/润/index.html","6563a3d6f14dad637cd949c8210f3c85"],["/categories/社会学/index.html","d8b536212314ed473c359a96a21530d4"],["/categories/自传/index.html","ad42101fd267f6afa2b0771810decebd"],["/categories/语言学/index.html","3b73bf81c2ad04c6c1cb121180024ecc"],["/categories/量子化学/index.html","b41927e858a44d071562f8edd946ca0c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f6c94bcd16bae401f96df2dd7c5267bb"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ee7d6d1b50c48b3a950f0fc36e1121dd"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c3f9b7095bea3f83308e788f3ce4ef21"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","b19cbe6c9e4295b334532565aa6aa469"],["/p/0274.html","109a07169f7b94f65ce102500c4cd40c"],["/p/1578.html","3412b07476b0f7417c0fd0d62473388f"],["/p/1605.html","7c9b4bd9c1174bbff1689a321dd6a4bc"],["/p/1adf.html","e0868c05dd27b56dbf472cb9f115846e"],["/p/1i2o.html","674c22b86b3541a1e2d4f57701faa0dd"],["/p/1yui.html","79233f86fcf38c114f10b1c24f9ddcd7"],["/p/41eb.html","e0776262d9bf07041489ddeb2803f152"],["/p/4665.html","3ecb96de4951b830b99d9b198830ec73"],["/p/4966.html","b8541f0caf463a419fad026a5468f667"],["/p/71a0.html","2184afeeff7529777aa3997e64e5f782"],["/p/7db7.html","a1a6d59ea016ca658632af71177d81bf"],["/p/8527.html","1f56159def29dbfe8db212c3f1cd3dce"],["/p/8c3b.html","9774e47ef2e288180142c3f0bb5cb2d7"],["/p/9ce3.html","d889e713fcc2aa957e424b67a6eac0e9"],["/p/a123.html","ee8f8ac3728dd9d43b024d233e8a9fee"],["/p/a661.html","a4211b9cd3aa8652261a09f4ca7f60cb"],["/p/acop.html","a54bedb68b075ca9aa72756b7c5e82ce"],["/p/ae4b.html","71fbb312373fcb8883007c064ae617ce"],["/p/c7bc.html","2a141505c8ae4af34bb8128a8f8f56dd"],["/p/dc59.html","8a072f70b267e19bf258c2200b159961"],["/p/pqdm.html","bb74eb15993d41e8966c651e63693034"],["/p/rfti.html","3c49099923ede0152f5174176ad940f5"],["/p/runa.html","23da0f29c7d512ad1473c78d0b13d075"],["/page/2/index.html","57e6e32e30bf116af5d2a14e0bd0d8d8"],["/page/3/index.html","bd8f3e62d9bf249191c821061a595496"],["/photos/index.html","692df972b0a8b6d3f84969d5148a5dfa"],["/shuoshuo/index.html","4a7d8ea120ecbc2994e1ef0771a61eae"],["/sw-register.js","d555dbecb844a1aa6a2e5152eaf1ac44"],["/tags/Mathematica/index.html","f5bdf2138cdf572d409a0147bb314e60"],["/tags/Submachine/index.html","127461108f129856e0515d685c8e0a2a"],["/tags/index.html","69b4609f5ed418404ca8ea5ca61b5e3e"],["/tags/业力/index.html","50122271e2ec71389c4bd562fe5737b6"],["/tags/个人隐私/index.html","da352cb6d0c6ea94f34933ba1ffda4c5"],["/tags/二元函数/index.html","f9d6262f9ce85b5c18735b56b5c06150"],["/tags/人工智能/index.html","cf89b4e134fd6c8c7c28ad1cc9021dd6"],["/tags/信息安全/index.html","7c23503097884b39f3da89bf4fbbd03d"],["/tags/兰切斯特战术/index.html","157430d4fc76b4e8b150110b94ee4684"],["/tags/分子轨道/index.html","5cb0de754e70bd27fefdee5ef7e7f8f2"],["/tags/南昌大学/index.html","d97f5b6046af49e9eb7ce0c1f029f09d"],["/tags/反抗/index.html","67936e875b197e08776d1e00d3dfc74d"],["/tags/古埃及/index.html","3a7ce248179581390e30f75982bd1879"],["/tags/同人文/index.html","542027b789a01cf2965424b4f5ab23bf"],["/tags/同人活动/index.html","d81c82ce99d8521efa00769e42457818"],["/tags/同人社团/index.html","3ea12bc51ad576b62fa3ef3ed74ea93c"],["/tags/四维/index.html","bc1840737e357090c771f7405534e0a7"],["/tags/坐标系/index.html","e18525554478d52faf6ae96dd1debef9"],["/tags/夏日之恋/index.html","5b8faf099b52de2987185ac7783b5a92"],["/tags/大数据时代/index.html","5743ab8646610b474668eddd8fcc6d80"],["/tags/家族構造/index.html","5e718b1ea8ddb8ec00a2aa0c03d1c863"],["/tags/尼采/index.html","b1007504ee60d0c3e0046aa0bebe9233"],["/tags/德国/index.html","22d8856e6e237900a7ea6fc6196139ab"],["/tags/披头士/index.html","cbff65cd4582f5802b02c5b567bf37ed"],["/tags/摇滚/index.html","64548e51867927c35ac9f6c68cc96361"],["/tags/教程/index.html","b043b68a218b32d90e3fad9980c7767e"],["/tags/数学/index.html","682752cf383901a1d7d2e89b56f7f978"],["/tags/日升之屋/index.html","db9cb85b3018b6c77fff21faa26e481d"],["/tags/日语/index.html","5d308e8b6bd01c4e9806588767678102"],["/tags/有机合成/index.html","3ae40bea999211e9ba81063e12cce24b"],["/tags/比那名居天子/index.html","665e721e0c5b23a55e8221a72ecb9c2f"],["/tags/氦合质子/index.html","cb85924032b1755394fb7c90b95a4262"],["/tags/法律/index.html","d91c9eb9748c82a9751effc6762c9608"],["/tags/流行词/index.html","5010b1af51b090956f19be3d3458c609"],["/tags/润学/index.html","0385540ab857012e6e7ced475ddb5005"],["/tags/深空天体/index.html","d231305db63c25e4928042bf16ca9117"],["/tags/现代性/index.html","8d8d6d61b5ef7355d1302e19b0e56b9f"],["/tags/理性/index.html","e6b639c7bb587e24259076cbd1535dc6"],["/tags/移动端优化/index.html","2f3a94734cccb34f0066affefe329374"],["/tags/羰基反应/index.html","cb942e9f6f1e20e04e2b350a02c401cd"],["/tags/自由/index.html","019537ec795abd96c50005cbc0debfa8"],["/tags/蒙特卡洛法/index.html","df7e06653dcecf475c55d5c02fabac64"],["/tags/计算化学/index.html","f88808c32c554b7d79e23c23dd701bc5"],["/tags/造语法/index.html","97db7027b5fb70d15c733b4a314c6da9"],["/tags/風土論/index.html","ac69352f1a2b80a2c79f136ac847633d"],["/tags/高中生活/index.html","cd47a4a6fc289a4bdd8ea375b4c32241"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
