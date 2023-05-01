/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","73ca4a8cf1a13ee16fa2f157ef8e4960"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","0f0085f86ec51ebf779c742405f54a57"],["/archives/2021/02/index.html","21ed1f9fc2a29a3ccbb5b68951d5cd6d"],["/archives/2021/11/index.html","560e08bac9d64d4d65a0c073894758de"],["/archives/2021/11/page/2/index.html","8df021e7c427b15e3feb4735a00f58ee"],["/archives/2021/11/page/3/index.html","b94e6e9cba1ccb3269e7fec22d74e7ec"],["/archives/2021/index.html","01e5bbdd49a69f219686d2cb01dd84be"],["/archives/2021/page/2/index.html","badc411eedae1a2d5d9589538a49d127"],["/archives/2021/page/3/index.html","394411c48dd0824014e51854210ea251"],["/archives/2022/04/index.html","4613b6ec8e194088e82aaff2fb6bbf20"],["/archives/2022/05/index.html","598c8a5259bd2ff2e26562302e9e5a90"],["/archives/2022/index.html","36913bb2b1d3b4b85c92101589013a30"],["/archives/index.html","5a2f9b3c85961ea21e4290498de78f0e"],["/archives/page/2/index.html","5456a32aa260c58bd99910cf390610da"],["/archives/page/3/index.html","889fab2f878236322b73e89223d4d38f"],["/categories/Hexo博客技巧/index.html","466fd91bc579091a1841931d6c2c6c38"],["/categories/index.html","0949395ca87fcd7c25887a7e26948c7b"],["/categories/python/index.html","77ad02b7b7357c92635fc2eeccd95c28"],["/categories/东方Project同人/index.html","b0878360d59593ffbbe31d6d71ccdbe7"],["/categories/哲学/index.html","0dc5d15100d5393b639d5842206b40dd"],["/categories/天文摄影/index.html","8305059ececeb1d60f6bad1bcebdd891"],["/categories/战术/index.html","8471ebc0261ee406a51524995d841806"],["/categories/数学/index.html","0ff6ffd5aa821a95ab956d689311cc13"],["/categories/文本翻译/index.html","c831715d7e65ca839e48740905710c9c"],["/categories/文献翻译/index.html","5479066e7eb3168cb979c096eba056bc"],["/categories/时评/index.html","5353a154ce3bf82391042a65453fd5f3"],["/categories/有机化学/index.html","f21f8c875432aa63294ca1de7e7ee02a"],["/categories/架空世界/index.html","ddf4f63af12bcf5ce21f36466dca09b4"],["/categories/润/index.html","028be84c97516976c70a535ffe61c3c1"],["/categories/社会学/index.html","620fc8ec5df9c26f9793e8b3cc263c90"],["/categories/自传/index.html","e4688a230b6630fef05005ca9c92094b"],["/categories/语言学/index.html","746912a63df33c8b10e61ed43f9b6fe0"],["/categories/量子化学/index.html","ee6970070e4a75a47673d735576d7cda"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","91ca0c3f355d102faf60c1356e16245d"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d385d740efdcd1a9eae8efd8683d0461"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","2e97f6090797193ea3789502a87def45"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","cd6ed8b1dfc6e9eae5a0b98e713ca3d1"],["/p/0274.html","98f96df70935170977d2a6bcdcb20535"],["/p/1578.html","a49407eb97ad2e9268512b4fa5609b33"],["/p/1605.html","8fc908ec5abcc70136b305f610ff690c"],["/p/1adf.html","3d87a184d91d8faded2f9690b51b2461"],["/p/1i2o.html","571779c182326b28987ae9f54a7bd39f"],["/p/1yui.html","9b5c6e3a8a2566eb2c93f447317e04bf"],["/p/41eb.html","399c654b6e57195914b661a3dcce7f4e"],["/p/4665.html","a54ebbc4713827f45e053e3ceb2e31f6"],["/p/4966.html","70dc3f53c96e84a60aec46227c58f061"],["/p/71a0.html","235a68ee02483ff5efe67eaf09fe0d57"],["/p/7db7.html","2b6af58a823d373230eed7fd9424ffee"],["/p/8527.html","386b45c3f6ea843fd97c50d1c2663632"],["/p/8c3b.html","9335bb95d6cddac1329093243a962d0d"],["/p/9ce3.html","d20d57b62274f698d225d77cc0315864"],["/p/a123.html","be93ab79215a7fbecbff31f10b024821"],["/p/a661.html","37240ac56fd6c74145a5f6545bfbd801"],["/p/acop.html","632ec4211933be768135c02b2a7a3688"],["/p/ae4b.html","d415c99a2d52f9bae117213cf1627195"],["/p/c7bc.html","73397519b71439c2b88e9cd171cf6408"],["/p/dc59.html","2d94b915978a089d690b6a8e10842b1c"],["/p/pqdm.html","9c7f69d7297e7c4d8b47dc8e9fe82d36"],["/p/rfti.html","da12eda55a59a25ca7a69849df3f9e73"],["/p/runa.html","9433103e436edde6bf269d53410aa046"],["/page/2/index.html","4d295ec70891e5d297da447de3959372"],["/page/3/index.html","7cc3f77440159606a73b1ce79aadc746"],["/photos/index.html","2354acddfd1039e7faae984d28cb3d6f"],["/shuoshuo/index.html","72fb6545897bd7963008e08c12280f40"],["/sw-register.js","56441ded5435c36226603db95ba8b38e"],["/tags/Mathematica/index.html","5c778d40948683c1ece9ec87b2da297f"],["/tags/Submachine/index.html","c455ef9fc981ceb458f8b35689fab6ab"],["/tags/index.html","6aaba472b94b96e8449dce1b0e04d1de"],["/tags/业力/index.html","2fc749f412948dc3616d113328bf8a11"],["/tags/个人隐私/index.html","2776285aab8bb60a79535008887ddf42"],["/tags/二元函数/index.html","a5f5609d4a3096ab0f064864e548b8b6"],["/tags/人工智能/index.html","596e81704ed72bfba432465571869c66"],["/tags/信息安全/index.html","39087a6f49c4044e014548279a713c35"],["/tags/兰切斯特战术/index.html","af18c86ff54f3e7da52a0ff5e71a311b"],["/tags/分子轨道/index.html","aa19b256392da31d0d81f8c7a053d3be"],["/tags/南昌大学/index.html","f6c21ac996b18c5a600d35b7e48464f6"],["/tags/反抗/index.html","82ba379b993f2e892fbea8a205ece3a0"],["/tags/古埃及/index.html","817040d337a94c1d936ebe4fdb331e59"],["/tags/同人文/index.html","209bc9b3f778e335ee34d32707ebc6b8"],["/tags/同人活动/index.html","bddd5c21e9508b1d9e977a0cd8cdffc9"],["/tags/同人社团/index.html","a3d844acc9638765a3dbf9a715b0cc88"],["/tags/四维/index.html","535ab35dfb98e12d5d96fe84b0d3212b"],["/tags/坐标系/index.html","30c3530db07989ddd68fb7a31d8fb33d"],["/tags/夏日之恋/index.html","67248f5bf56499c0d652989f7703df1a"],["/tags/大数据时代/index.html","38523df4fc5ca15ed64c3c8f705f5b57"],["/tags/家族構造/index.html","3d90f6f9c3212c8d76d1a75a2c17c320"],["/tags/尼采/index.html","f8ad2acbd178893e83696d183330ede4"],["/tags/德国/index.html","5913c04c7bfc108fb61e6bfcde8048a8"],["/tags/披头士/index.html","7b66fea27b3f7ae19bad31894ddf2fb7"],["/tags/摇滚/index.html","85e50a254fe771857cee5976de7fbafa"],["/tags/教程/index.html","2febb16ebe9f59a15900b261f4340c28"],["/tags/数学/index.html","4b82f24f83ef2c402738787401767c2a"],["/tags/日升之屋/index.html","c5ccc6f58c09c83c7e0f6b0aaa0bfe43"],["/tags/日语/index.html","77df5e1be71cd2580edf259a5f1834a3"],["/tags/有机合成/index.html","76eb8c679582a601b3ce6452460716bd"],["/tags/比那名居天子/index.html","d3f4d917dc93ecbbf539662b1bdb9845"],["/tags/氦合质子/index.html","d71777ed27195fb03153e7070243f277"],["/tags/法律/index.html","fa92120677866271360e57d1d9c635f9"],["/tags/流行词/index.html","a8a26c7dbb3629280f8ebf66d2762cfb"],["/tags/润学/index.html","aeaf97c1f91569b856fc070eaf684cff"],["/tags/深空天体/index.html","e07c0a6f97c374635eefff67ce4ae937"],["/tags/现代性/index.html","16e9c047a97c607b33c7df33edc4851a"],["/tags/理性/index.html","7bcbb37f4fcc218227c99a298908a015"],["/tags/移动端优化/index.html","25f7026f9dccdf6b11ab1b309e7cb8d7"],["/tags/羰基反应/index.html","6313954aa0b2860df53951c2d1434225"],["/tags/自由/index.html","eccd71062f893421617d1d254ccca853"],["/tags/蒙特卡洛法/index.html","0e7dcc470a54ae54fed6baf9f658f2e7"],["/tags/计算化学/index.html","ae6c4d1e2254b25d4cab1f4ad6be0db1"],["/tags/造语法/index.html","c49435ff8d75a963fa2c4ef234ac126b"],["/tags/風土論/index.html","741eba5ec4c25d9e42afe5e473d82a55"],["/tags/高中生活/index.html","74d0922bad40ee6c99131a262169cb8d"]];
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
