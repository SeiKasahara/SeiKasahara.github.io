/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","6ff8a60cc5f8c1635973914f7aa7ebcc"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","9dcb5b0c5a41a320b94652756ab0946e"],["/archives/2021/02/index.html","bc55ea07f9b0aa84300154f6a16a4628"],["/archives/2021/11/index.html","b55a47ba11d44f78c8e92852707236cd"],["/archives/2021/11/page/2/index.html","1fc240ab9f0588cd9125c30d3c11b1c6"],["/archives/2021/11/page/3/index.html","3c389a14b181b74aa0f15404f67899d0"],["/archives/2021/index.html","7909bb0026dd04db9a370723e4b11a2a"],["/archives/2021/page/2/index.html","b5ffb8782e646a165be01503aee18ad2"],["/archives/2021/page/3/index.html","13ae9fcbe9ee367387263c96ec96f296"],["/archives/2022/04/index.html","2b25831bcd815b22b7d00889caf4dbb0"],["/archives/2022/05/index.html","a250edf0b53a78349d5475024020b5f9"],["/archives/2022/index.html","0ff96b974f862d1692a5f832ea34c2b1"],["/archives/index.html","0b60a7317df3dad946f07d7a3ffcfd5f"],["/archives/page/2/index.html","74a2ffde5dad2ba3f4c788e87a23b3d1"],["/archives/page/3/index.html","bb74a3c6a451687f6acce75566b79f81"],["/categories/Hexo博客技巧/index.html","548ec40a37c8e3df6f1a0b0367d8e02b"],["/categories/index.html","baf3eecfb3023d2262d7b5a1193f2eab"],["/categories/python/index.html","64045e8253eba6d60ef04cebbf1a999a"],["/categories/东方Project同人/index.html","fdc529129953d0254bb29ec3ce50b088"],["/categories/哲学/index.html","87592caf3fd4d7ffca22db42939a9cb9"],["/categories/天文摄影/index.html","8f3ea564a5e0d05298c8ec0b0b30c79b"],["/categories/战术/index.html","692a55dd658ce39ef11ee6f69f1b74b3"],["/categories/数学/index.html","facc8a3b15464be8f6e9df76bf1e58b7"],["/categories/文本翻译/index.html","a92de580d46f0549c5df75e553719459"],["/categories/文献翻译/index.html","0f14f851cff1ce48082dd7a68b16e8e0"],["/categories/时评/index.html","74d33215dc4ab8ef107a72e020beb6f1"],["/categories/有机化学/index.html","7a860bf084cb8f04e291df0be753ddbd"],["/categories/架空世界/index.html","1079126339b08aa4777b7cab9818ebaa"],["/categories/润/index.html","3961f2f15c16ca914deb13950844ab5d"],["/categories/社会学/index.html","a83b6fea8e964da94418b845349550fa"],["/categories/自传/index.html","e6d1c376ef856c53673c6370a29e8fd5"],["/categories/语言学/index.html","938830e7eee83199156125f1f1ff0dc9"],["/categories/量子化学/index.html","450572e716378c3b0ecca60cd26c702e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","cffad883c243a26cff8d2202b4262dec"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","8cc46002bb7d69663de024ba28adbf63"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3d8726c257fb8a80a388f387ba3d80c6"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","3f031a713e26429ef573df06a2ad41dd"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","e7350b3af14d593475e5af0ce67f062e"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","a4ffd2e1c7a7aecf3c3e2aee1cb67359"],["/p/0274.html","5556ac0f73cec1f3408e0b377a51cbbe"],["/p/1578.html","5200520ce1e25026a15e3727de629989"],["/p/1605.html","2903306281191751e300343d85ad2233"],["/p/1adf.html","69f01547b10976fabe876ab1d1179479"],["/p/1i2o.html","a12c0145f3331096c9f7c2c9d2432e67"],["/p/1yui.html","75fdc9be9a684ebbbd8c703cdd3ee67f"],["/p/41eb.html","fcfda35f47474507cfedd8a39096fb42"],["/p/4665.html","bbc855ab74c1bf701e551f4a14288602"],["/p/4966.html","734accee062a419ad5b5e6b37d3ce03e"],["/p/71a0.html","2a73cc87b7057101cd792038fcaa8659"],["/p/7db7.html","491f053e921886a9ba68fa6903e468a4"],["/p/8527.html","3814acdc28e32c4279b2421f19f7dbdc"],["/p/8c3b.html","e360484a1c497e2201b5fa5cfad477a6"],["/p/9ce3.html","c5acf5f2cadef21ece865cb7bc7f0647"],["/p/a123.html","41b43bd5bb6a2180e93c21e6bfd28dba"],["/p/a661.html","4e034eab70d254fc92cf7d9144323aef"],["/p/acop.html","34a8a8ef6587f747e2d25a28cbdc3d47"],["/p/ae4b.html","69b3ebcbbea8b3ba2241301c3de45b95"],["/p/c7bc.html","918f4bd51d33302ebc28b9bad4b8a61b"],["/p/dc59.html","382871c2fa5cfb5e39b17536d65d8eaa"],["/p/pqdm.html","d8dbe4d4db301d4b37d9d0297d89d980"],["/p/rfti.html","f3f9f175581bf3f53f7eb42adef10a49"],["/p/runa.html","7cf1ab595a261e8807477f648e9a4a01"],["/page/2/index.html","7c3dbd2a6a2368bc2af72caad9d8856f"],["/page/3/index.html","f5d6c1ecbff40974cc27fbde40287ef9"],["/photos/index.html","475a3a7f58616017738047f009b987b2"],["/shuoshuo/index.html","d87a70648446f8660f39680cccbf5552"],["/sw-register.js","665cf18a1fe734b2f3d4954f4c69f1d0"],["/tags/Mathematica/index.html","033f32aa21b7a67686b19e1937215841"],["/tags/Submachine/index.html","9ab27b9060f0eea89254a5efcd38d881"],["/tags/index.html","b6b5c007de0902b8b9b7ebaeece368fa"],["/tags/业力/index.html","ad944c8a76fc19e83c9cf719e0aa5383"],["/tags/个人隐私/index.html","7d85ad7c4cb25421b7a08e2950780c5b"],["/tags/二元函数/index.html","8b9a0a8d0f9dd817e0e58200c8d24e83"],["/tags/人工智能/index.html","975638d3663fa3dc2a71e0f35a7a0e69"],["/tags/信息安全/index.html","b7f4c10876ff0090b74fcc6d55dc98dd"],["/tags/兰切斯特战术/index.html","f855f26aae0d06bc7509720f224f42d5"],["/tags/分子轨道/index.html","7e87fec82a9505732204c00bb1f3d326"],["/tags/南昌大学/index.html","69271a568d0aba09d7808052d88ac602"],["/tags/反抗/index.html","1ee88396fcbb642ddb85d10acb3028e1"],["/tags/古埃及/index.html","5a92e41652c5adc0816dc6df60cd65bf"],["/tags/同人文/index.html","b3359a7f8fdb971462b12e7f240c8eb4"],["/tags/同人活动/index.html","296ae344749023beecb182d70ccf465b"],["/tags/同人社团/index.html","f80025ffd450c6f085531caccf233083"],["/tags/四维/index.html","6d42533463746e4a72d7c5635be2e18d"],["/tags/坐标系/index.html","8c4a07d28e9a70071da5847f70f5988d"],["/tags/夏日之恋/index.html","fde452cc0c426f8f6022452379d7cc5d"],["/tags/大数据时代/index.html","951dcf9f2f10c0064051816062238caf"],["/tags/家族構造/index.html","8ef026d1dbc00853283549e860cd1cd0"],["/tags/尼采/index.html","32c43539d448006aff2336d289d243cd"],["/tags/德国/index.html","8f5e687433bdf55d9dd11314814127c2"],["/tags/披头士/index.html","dd2c16aeea2af1d4a0df5fbc64f34f79"],["/tags/摇滚/index.html","86f478ca5bd65e523c3db15bd4a2e633"],["/tags/教程/index.html","47a39a8d56ca5de8d54722d11105b20e"],["/tags/数学/index.html","cd1f1adcd6975b1726c41b80918e3dd0"],["/tags/日升之屋/index.html","e932ae334cd0f6b86eb0cac6f93bded8"],["/tags/日语/index.html","16650997d602683e50a0962a3d03dd30"],["/tags/有机合成/index.html","df7a72137e6dd27d99c67a0e13b2576c"],["/tags/比那名居天子/index.html","4565de483d56ca782c2bf4d3d05a4257"],["/tags/氦合质子/index.html","34bf8113d63c10cd48a6f4398fe06b3c"],["/tags/法律/index.html","df59d9b82834d6e0b930bd1fb80130d1"],["/tags/流行词/index.html","f0350ccb4996619ba4b7c4589ed4aa1d"],["/tags/润学/index.html","b1a87e84178755f43c49e13345da84fc"],["/tags/深空天体/index.html","b561d19bde77f398fd648415f132615b"],["/tags/现代性/index.html","c945faffdd0bee401fdbb5a5b9f78c1e"],["/tags/理性/index.html","d7a37f3a853b11fe5d163a605f5ce708"],["/tags/移动端优化/index.html","dc1823e9402370c6475a6ab8281c2a28"],["/tags/羰基反应/index.html","33ae708ca517cc9bda612a5f2378ab57"],["/tags/自由/index.html","196f2ebcb5089678c44f16a3c8acbea8"],["/tags/蒙特卡洛法/index.html","9573afcf85ebf2f8946fea3b18208825"],["/tags/计算化学/index.html","dae976284cd8dbd80c23aadcdb7b071f"],["/tags/造语法/index.html","76a94046baddb703d21a07b100375360"],["/tags/風土論/index.html","701024b845242181a54b9d10cdb99566"],["/tags/高中生活/index.html","aa5d6052091c89b128ceea8919ed8375"]];
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
