/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","b43543a54467c3d5fa6d8a58050aa3fa"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","c1352502ec96c73965938a3df6cbfc41"],["/archives/2021/02/index.html","da90332e606692e1c9d7296f70c75aca"],["/archives/2021/11/index.html","64c4508065f4698ce495ac25f00115bd"],["/archives/2021/11/page/2/index.html","bc54f58bf5164c03539693ef91bd740c"],["/archives/2021/11/page/3/index.html","7963ec9c07a80adf0162106196cb9bbb"],["/archives/2021/index.html","1aeff0d8e2b7d75254947979916bb1ea"],["/archives/2021/page/2/index.html","0ba43ee9389e9a7b1614bd729869813b"],["/archives/2021/page/3/index.html","0c187e10a4cb468b1e81067a228a7477"],["/archives/index.html","0a2ca8ca8c5595cd5b8e2795b6ad9378"],["/archives/page/2/index.html","e663b529e04801d3d00e240b6bba8b4f"],["/archives/page/3/index.html","59199cc1f12a1843a7f38033d564daeb"],["/categories/Hexo博客技巧/index.html","64d31e8be66d35088a6180edc80707d2"],["/categories/index.html","f5494ccdd9d02cd6c7ab6a78598736a9"],["/categories/python/index.html","b34e5ab6d28f503d2fc791f3b85bbbce"],["/categories/东方Project同人/index.html","2526fdf887a002ec8abbd08908859c79"],["/categories/哲学/index.html","5b5bb54da4fc5dd8c41760be967bce36"],["/categories/天文摄影/index.html","621e7e83fe3f6e1fc259f65a521aedae"],["/categories/战术/index.html","ee7d2ec59d01094c7fab68affcb0c468"],["/categories/数学/index.html","61e8919f9703e5076265f1e41c55e3ab"],["/categories/文本翻译/index.html","f476c5fd5553d78eeb8d0fa9bf0ebb7e"],["/categories/文献翻译/index.html","09c19f8801fb0ae4dc3fff71e34b508a"],["/categories/时评/index.html","05aad4c50ff94055dabc9b61db37be60"],["/categories/有机化学/index.html","62012d2a1509a14bbc64d32804161778"],["/categories/架空世界/index.html","2f4d54ec8a4e3a88c75044d46a41279b"],["/categories/社会学/index.html","2c9271e4dfeb59a5bd6807c7c31e9ce7"],["/categories/自传/index.html","19209f43baf76a7aa9ebf7795fe6f187"],["/categories/语言学/index.html","6d13dcbc6707da37c9b8688d4ac6934d"],["/categories/量子化学/index.html","ea7127292354fe3cd7535a5e27f8fb19"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d95b0cbfdeffac4cd5df45f14212e23d"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8b26e7f2507e0f82bda93e6ea9789695"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","948deff27b5f6f8df118f0ef28aae54b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","d86368579dd9cb9696ad02bf03ead96c"],["/p/0274.html","f7c6bcdadf769096d198a2d00eb67e30"],["/p/1578.html","c7564c7d88688c6d12f58b8c9b043200"],["/p/1605.html","c297e7bf27efe6c64b9da3d0f94f4bc7"],["/p/1adf.html","968aabc95640792d7159c221287e304a"],["/p/1i2o.html","cd01b314a2f98cfb488b5d34a4e6a0f4"],["/p/1yui.html","8876c865c65398935bd3cfadc37d5fa1"],["/p/41eb.html","65135392e2a656622cefaa5015ca7369"],["/p/4665.html","8b9b735d4f8a275451d91f568c77e307"],["/p/4966.html","1f8e94668de443f63e4aaecb0f08b2b4"],["/p/71a0.html","df5ac7dfe50ffd2e2ee9385a798363a4"],["/p/7db7.html","cbb185ca5536e90c650988c07da98bf8"],["/p/8527.html","42c0a30606258c624c6dfc6524b124dd"],["/p/8c3b.html","c03dd31cd2ad8f5515d13ea4102d0559"],["/p/9ce3.html","ae416fd45e610c83c4b7a94f2a8dae23"],["/p/a123.html","4ae07c06878f64dd7688fdf23bc0c3ba"],["/p/a661.html","e9e8cbe2e997eeb9ccbcb9314def8a36"],["/p/acop.html","fc54a9d77c22ccee68f0abf4db893ad5"],["/p/ae4b.html","483f7a15f3d75763a5d805912d9c92ce"],["/p/c7bc.html","f47a5a17f459d47b3e849c36fd695205"],["/p/dc59.html","de8a96ab9c2518a49305c4b444bebbb2"],["/p/rfti.html","74e0d35995f33f1df895d4a6bfcdef94"],["/page/2/index.html","d68f3691a6a474a44c8c61ee276786ef"],["/page/3/index.html","fb8b055812b325ca5ec87a72895e1a1f"],["/photos/index.html","1cdeb1d8553e5b7b924736490fa719ef"],["/shuoshuo/index.html","5d926c2c7d9c9418f7738431ca2cb061"],["/sw-register.js","fffd6871b5b4a815267786f21ed62384"],["/tags/Mathematica/index.html","6390cf553e53b0841d3304a0f7a6cbd9"],["/tags/Submachine/index.html","18e16c36e6181fdc9d54295f4dbcaa2a"],["/tags/index.html","4aeb52d3f5559d5f18c6df2176e9c4bb"],["/tags/业力/index.html","2b23016ea750dbaa895d6648173ed554"],["/tags/个人隐私/index.html","7f88d55cfba409c9b52ea6481ba88358"],["/tags/二元函数/index.html","ecc0f56e38c60e89e6523cb678c39b0d"],["/tags/人工智能/index.html","f459c4b863a1cd043632dccbea6e6737"],["/tags/信息安全/index.html","291600b839bd838b046129e64c12f7c6"],["/tags/兰切斯特战术/index.html","fee09c5eb702822c9f49188923b9689d"],["/tags/分子轨道/index.html","91887f20b01195b039c2c3369d7ee5fd"],["/tags/南昌大学/index.html","2b90ae46200062d03d90401e037fcd26"],["/tags/反抗/index.html","54924a2d98a3c8ed76a6d314c5436669"],["/tags/古埃及/index.html","33968a2aa59a5908d2a0c71ec6a0dbd5"],["/tags/同人文/index.html","114cebef70ec64a0cf552c134752326a"],["/tags/同人活动/index.html","f7ec44bb16999353bd8a46fdcb5ad1db"],["/tags/同人社团/index.html","9a34a1bdfc62a004b8089c00c54c300b"],["/tags/四维/index.html","46d2b8d0c7b44857ea0d48f60714824b"],["/tags/坐标系/index.html","46524ba548162b76bd624bed01b44db5"],["/tags/夏日之恋/index.html","58d8f9a5a523628134be024dedb4e06b"],["/tags/大数据时代/index.html","225bba8b67be7d2ed1c14fe56a7d7fde"],["/tags/家族構造/index.html","7ff0c539c0be07abc3ba07be7dc42f72"],["/tags/尼采/index.html","694cfbc34146aa75bdba371d6bb87277"],["/tags/德国/index.html","cd6878393cef01ae5c97d8cfc9e1bd15"],["/tags/披头士/index.html","a1935875e2b7e2a3de23d9d3cf294195"],["/tags/摇滚/index.html","6a9d28cbe872cf07dc47c52a12ceecb1"],["/tags/教程/index.html","e82ef8ffe1c44f9404ce9ef43c6cf43b"],["/tags/日升之屋/index.html","85cf62dbfe27922c24daca6c41d1fc11"],["/tags/日语/index.html","2532a341491926fff89e9c3f292fb6ab"],["/tags/有机合成/index.html","bf9bc47a6a25d35a7057afe4af7dd6f5"],["/tags/比那名居天子/index.html","70fffec2e915eabdfd1a23704559060d"],["/tags/氦合质子/index.html","1ae10209feb13996e012612ea2ba3f7f"],["/tags/法律/index.html","2a5563a9eae32ba8cb0ab36d2b6f64a2"],["/tags/流行词/index.html","c302a787d121095f9b16ae39770a109f"],["/tags/深空天体/index.html","f47e4211d25df9c2ea663c6c6a08c36c"],["/tags/现代性/index.html","dc8e32b538b11ece3ff8d618b305ef52"],["/tags/理性/index.html","114d3d248148685704ec671c6ebef325"],["/tags/移动端优化/index.html","ca08df399e1a90027d5cf3bb8472cea9"],["/tags/羰基反应/index.html","42fa35b2c8f95a97dbba0f0db47297aa"],["/tags/自由/index.html","aa7320f276b47f53c6f94742088de7c9"],["/tags/蒙特卡洛法/index.html","2f05fd20834d457aff34ec483c9f8415"],["/tags/计算化学/index.html","70629f47b57358fcc19fa90c6a66c509"],["/tags/造语法/index.html","248a6d1f09fa3aac12dc1b7cec38873a"],["/tags/風土論/index.html","dca1f612c8fb2b9a3bcc0e34818a4508"],["/tags/高中生活/index.html","063719a9ada8b6d357b11d9483472a3b"]];
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
