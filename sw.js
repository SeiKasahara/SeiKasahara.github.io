/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","3d4b4237e54d67536c612dd8895aa159"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","a8ec975320fd2822af86512e28b95997"],["/archives/2021/02/index.html","3d8c5fa23c949d52243e18e3fa24d8e1"],["/archives/2021/11/index.html","012b1a5ff3af69c7bb3509b75c6d89cf"],["/archives/2021/11/page/2/index.html","c24085932a49d4ccf17debe6bbf8641b"],["/archives/2021/11/page/3/index.html","f79cc55102cc811586f6703fe5886a67"],["/archives/2021/index.html","5e692bb4db4a7081780b43299de1eb46"],["/archives/2021/page/2/index.html","5f0ffa7ecb790f1b805468439cdf26a1"],["/archives/2021/page/3/index.html","1ebec8a987530bc31011d70008319273"],["/archives/2022/04/index.html","371fe9b95361c18e0e9e03244472b369"],["/archives/2022/05/index.html","84d6fd1f1da66c405146107ba7c8fd61"],["/archives/2022/index.html","4fc4036798bc2e8a81e2f6be8a6d1bb2"],["/archives/index.html","d3ce65fc87d10e6c373966f923f3936b"],["/archives/page/2/index.html","b8227957dfe39aebbf80f2a6373d4ba0"],["/archives/page/3/index.html","2c33b6949f4994e899030b8d5da9931d"],["/categories/Hexo博客技巧/index.html","a12febae3c1846094feaa30ba21e0414"],["/categories/index.html","790edea97fc444a3ed99389734196009"],["/categories/python/index.html","4892f0bada1f4e1b62ac81209f61f41b"],["/categories/东方Project同人/index.html","673005672899c9b40873fc43660a8c9e"],["/categories/哲学/index.html","b38655795cb3fbb7cd808c13ec4b2d58"],["/categories/天文摄影/index.html","b7a4b57a65f19fb98ec22ff2e1acc713"],["/categories/战术/index.html","ec35c2c457e79ad351c2b95467978685"],["/categories/数学/index.html","c0268f2974c93954401e5e0714ed4725"],["/categories/文本翻译/index.html","eb00462bf8b6e3537a957d7137b0c038"],["/categories/文献翻译/index.html","f69a02ab3b46b994773931134be5f91b"],["/categories/时评/index.html","1bfc54a7ed2cb42ef9e2bfadb922a37e"],["/categories/有机化学/index.html","418a06013d817806c198550dca50b4d1"],["/categories/架空世界/index.html","4be2173b6a55df5c50b1793506cc534c"],["/categories/润/index.html","074c8ab43a30c087878cd8f51eb083f1"],["/categories/社会学/index.html","5fc7cd295abdccca16563e38c790c3a1"],["/categories/自传/index.html","fbb93422dc6ab5f145a4411b2040950b"],["/categories/语言学/index.html","571281b3d7ea62cf2e8ace57c3c58b3e"],["/categories/量子化学/index.html","2860c1cab58c65cf3be0efc4b1c0b4e3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","921422ea7bb956df6c3d1e6420d48fef"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","8cc46002bb7d69663de024ba28adbf63"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c1fa8e2be1b01ec72d1711ed2a5c6870"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f023c40f70380ba32a8bde1fedd7e26f"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","4a0ac85688f06b9475fb731e0bb84ff0"],["/p/0274.html","837ccd4adbcd7f72205ae47b3024acdc"],["/p/1578.html","3d6cc9cf803034ef3f2785a16b4b975f"],["/p/1605.html","74a5650940bdf8a39287ffa52bd12835"],["/p/1adf.html","9881df1dfbcabb96942aa52bd8577c4c"],["/p/1i2o.html","1767f3d6833360628d579f02f5c90f1e"],["/p/1yui.html","720ff0ad46e1dad8f3bcbe7da998dd44"],["/p/41eb.html","7a9917160d3c06022e777e4b936bb9ff"],["/p/4665.html","4337038841f1aab0824b053800b24ac9"],["/p/4966.html","5a3c4d6270c3cc5f342125595e1e0494"],["/p/71a0.html","90d1597bec6ccd0410a94c4630220f48"],["/p/7db7.html","4044547a2c39ece969548216cee7c1c0"],["/p/8527.html","6181e29a48dcb78f0b09a98a090a5954"],["/p/8c3b.html","8fa1ac8e6443cd1b9e5d7aec38198f38"],["/p/9ce3.html","836896e4cb0b7163aaf5ed617635debe"],["/p/a123.html","72b5e19fdd65b1dd19bce93be9ff51f0"],["/p/a661.html","647ee28aef85a384aae8aec350dcebae"],["/p/acop.html","8e1e9a4453f285cbb7a10eebe315196b"],["/p/ae4b.html","d82cd42f8b7b3b0bcb314ff811fc0a81"],["/p/c7bc.html","a5d6e51dc0113a64dfc256c151421fa1"],["/p/dc59.html","381b2e7cf08e8c19079087e413367e32"],["/p/pqdm.html","8a317055d2b9ccbb6f972e2c52d22f8a"],["/p/rfti.html","dacb8d61b33fd919bf936e04da1412ae"],["/p/runa.html","236fd2ea11f9ea29f356bd2f3fb94d53"],["/page/2/index.html","5bcef57a95d4f7fe06d12c167a5f3bc5"],["/page/3/index.html","f90549eed1d0c1f067f63b6e2200d0e7"],["/photos/index.html","65db387fab97c4032950ff6d159f43e5"],["/shuoshuo/index.html","79f95fe89dadb035231877df3cb3a123"],["/sw-register.js","76359c48981cfa657ce95c647a654199"],["/tags/Mathematica/index.html","25e5afe69a733ff44820c2d647839eb8"],["/tags/Submachine/index.html","6e8c19cba3c9b90db3f217f6806cedc1"],["/tags/index.html","bee0fff60e03c966e7f62c58197b73d1"],["/tags/业力/index.html","f567787818f04916ef9f6ab5261ca0bb"],["/tags/个人隐私/index.html","13143afb06d9df7c8802e18bc7989e33"],["/tags/二元函数/index.html","31ea295cc21d9dae835814b4e6fe9c40"],["/tags/人工智能/index.html","8782bd2b6b7f655bbb3b85ae36a5bd3e"],["/tags/信息安全/index.html","f6cbd534a6c6f128a5e8a04117f6f775"],["/tags/兰切斯特战术/index.html","7294ad997912099b6cf5809253fdb135"],["/tags/分子轨道/index.html","b3aa25cf99a3b409e794002ecf2241e5"],["/tags/南昌大学/index.html","b26bdd30cc7a3f43b239c5b056dcddd7"],["/tags/反抗/index.html","70ad03cb1cbb8cc198ba11afd109556f"],["/tags/古埃及/index.html","ebbd14b15036a77bc24208c1d04c9a7e"],["/tags/同人文/index.html","d6a8a12d4b08ca4c1933b01ca8f622f3"],["/tags/同人活动/index.html","ec8200caed84bfc3e0d98e6d6c1d6266"],["/tags/同人社团/index.html","d0e0ecabec0b31490cdb860178277f87"],["/tags/四维/index.html","bc22bac94046631b4c7f4fb3fe5a7a9b"],["/tags/坐标系/index.html","5a36d0425cc0c0db2d965d1804af22d7"],["/tags/夏日之恋/index.html","5abe54b535b24dc59759f1e7c6452972"],["/tags/大数据时代/index.html","ea18d72e0c4b2730b1065d16e8c16605"],["/tags/家族構造/index.html","f10c3fd9b9d12b5d657be7aafac42ff1"],["/tags/尼采/index.html","c7299ab54cd8ad40c45c2b27867046a3"],["/tags/德国/index.html","83d100d90ce40fd38e54cf3134173e42"],["/tags/披头士/index.html","ba08f4f0b2b50427ae6ef0536d24d7b4"],["/tags/摇滚/index.html","20d6e0c825bb8ae91132e9e5ceeabf23"],["/tags/教程/index.html","4965b4ffed450db7e9da17c69476b2c6"],["/tags/数学/index.html","ff757569f71844c94c330a624a410466"],["/tags/日升之屋/index.html","f801b6bfed82dac2c2f8689a5259c58d"],["/tags/日语/index.html","15a994241419a23fd2b81e19a9eede75"],["/tags/有机合成/index.html","b8a931a8b642d34955174e6b97bb6411"],["/tags/比那名居天子/index.html","a46cc9710244ed7bdfab5e18ad2c6fb0"],["/tags/氦合质子/index.html","c3657547d1732d2c2917ef40ae8e2fb1"],["/tags/法律/index.html","0f8acfc78b29ed10d4a0e4c93e30608d"],["/tags/流行词/index.html","72400b1a26b2cef898b51bf20a97908c"],["/tags/润学/index.html","a2b4c62506dddff36097438e4bd47a95"],["/tags/深空天体/index.html","7fa26c5928732e3f8fa3685359274885"],["/tags/现代性/index.html","322b18c81684cde53a23809fb77861a1"],["/tags/理性/index.html","f23415f339d4bc242be1684674e2267d"],["/tags/移动端优化/index.html","b659a90edb505d0783ebbecfcc3a8e13"],["/tags/羰基反应/index.html","8ebc4ced64efe4a3fc6cb8661fba239d"],["/tags/自由/index.html","ae0f88f29e2eb7065191a3683e6b4078"],["/tags/蒙特卡洛法/index.html","d7190bcf73727c177ff322cdbeb4a4ea"],["/tags/计算化学/index.html","3b5a5e44cb83dd3cc7a43ad16fe11a40"],["/tags/造语法/index.html","dfd7007345a0f6943f689b0837828f94"],["/tags/風土論/index.html","7ab3cf06429bbe4651272699b9955a88"],["/tags/高中生活/index.html","d5d5669816004e05651c561efd722485"]];
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
