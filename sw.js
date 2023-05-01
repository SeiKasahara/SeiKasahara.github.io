/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","251c2f58aefdaad8a3e325f54d85d9eb"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","123e386d86c2a97cddb800a7eaba7929"],["/archives/2021/02/index.html","2e93b6c001f91787fc9fa5f0d4134218"],["/archives/2021/11/index.html","5305eaf4a1615e8324675a015328786c"],["/archives/2021/11/page/2/index.html","18ed00076ff2bdd98f1c3c11229cea05"],["/archives/2021/11/page/3/index.html","0a01eaef936e172ff6b34269801c0ef5"],["/archives/2021/index.html","c6d2f9f3a94f63b3a3ab68ee4aad196b"],["/archives/2021/page/2/index.html","eeee7b0c0b6c021d81ccdb4ef07e3858"],["/archives/2021/page/3/index.html","1a07345bccab47fb6fe8d7069dbd81f5"],["/archives/2022/04/index.html","ccefb37024ff6d76f18767f7ee7050e6"],["/archives/2022/05/index.html","00cd302cd4ea1f9f9ccdbd8004d0329b"],["/archives/2022/index.html","ad3e1c09e7dd5d750e75bb7d5df6564e"],["/archives/index.html","371770647c9ad3214bf26959491f3687"],["/archives/page/2/index.html","8685eebb632b9fb9f0a937c7e25de4fd"],["/archives/page/3/index.html","4267e65aad3a78ded59b6066dfcc288d"],["/categories/Hexo博客技巧/index.html","2b62789fca0ed776316c012812c0ddf0"],["/categories/index.html","713f0b7c512a79df63250bbff79cc707"],["/categories/python/index.html","ed53b35cfdcff0c2451847ad5998b0d7"],["/categories/东方Project同人/index.html","2f5428c124cf61b219e8a27228197d52"],["/categories/哲学/index.html","46227dc3a3b2fbf7133dcfa512dd9f8d"],["/categories/天文摄影/index.html","34cf74251805e866150b88da4e3f7b35"],["/categories/战术/index.html","3e065ddc8a9092fd939ab3e1644d5fc9"],["/categories/数学/index.html","4954a54dc254bb665720efde349f463b"],["/categories/文本翻译/index.html","35b556f774f60b4f1690081d11d2dad2"],["/categories/文献翻译/index.html","86a7966e91a0943e8513f1be5e8a73f6"],["/categories/时评/index.html","d2b2150e9d4ace52f411d72f9a2f6e0a"],["/categories/有机化学/index.html","d4dab3ee5bfb5f725a6eaae3468760db"],["/categories/架空世界/index.html","c027c27255d4706f4ed22cd7957d172f"],["/categories/润/index.html","fe8f4cfdfb2c46c8bfcec1949b16252b"],["/categories/社会学/index.html","e821604501b592e04ae85ddfd861d13a"],["/categories/自传/index.html","6ad18f66f20d6b531a48f7b5cdf5d096"],["/categories/语言学/index.html","177c786ead9fab447f9b8d974ce0d927"],["/categories/量子化学/index.html","5a0aeeeb683ee6e2998599ff01f2c249"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","91ca0c3f355d102faf60c1356e16245d"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c5ca57ac4abbad4b31771bdd468a3da0"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","63070f02658ef92901c1e888d4df508f"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","2eb5974b8662eda92b54d604c7a09ea5"],["/p/0274.html","b8715d9c0c9c554f73b16f92a1487141"],["/p/1578.html","c640e2834816d39ad95bcc3ee54b90a2"],["/p/1605.html","c1c3d241896e0189c971ea659e280291"],["/p/1adf.html","271e2f73743ad0ef30fb1fe101ec9a9b"],["/p/1i2o.html","ef34055a8031526fb52df44c636d0cb3"],["/p/1yui.html","91c43083014d06b6a2723af46b3874ae"],["/p/41eb.html","ec0ba45f2144d1cf2fbdcb28e52cfca0"],["/p/4665.html","b227de76e61bde9aa377e2516fc41e43"],["/p/4966.html","7db3f275af8384ebcc30917b35849e28"],["/p/71a0.html","d39c35849106315a2dc4a64b85b74b9d"],["/p/7db7.html","00dc3e15d925de91e589cc7832c2787d"],["/p/8527.html","fb879d808bb203e6a1ac79590ef0b589"],["/p/8c3b.html","0215d8992af2a9d1a5186f1e5552e9ad"],["/p/9ce3.html","041ac0fa64ffca8c171a2e948f549ef5"],["/p/a123.html","d0405f4722f3735a03d3e696c18ce58d"],["/p/a661.html","cfbfe3b164c367492b069746fb8b4cdd"],["/p/acop.html","ab3be31c0a5118d00a049080fdc57a8e"],["/p/ae4b.html","02965b574dd92826c1513b44e934f815"],["/p/c7bc.html","b21c335bd89a929721da656bc35a709b"],["/p/dc59.html","42e60deb88dbba6dd795a9b0509107ee"],["/p/pqdm.html","468a2c705aeb216d0da722450c261027"],["/p/rfti.html","3f608a7695a25af78f690e499acd16dd"],["/p/runa.html","1b5f2dbc77b8376894e579f8d5f79182"],["/page/2/index.html","88a209a4a4f39cd1d2315c10bde4288a"],["/page/3/index.html","4e98009a2707bfc2031b3b0f65da73f9"],["/photos/index.html","994f995e8dcc0a4ab500b6281a278b2d"],["/shuoshuo/index.html","3988fd905f53dd0d251f694258590ef6"],["/sw-register.js","97814ef4eab4976cf5ce5234b52d5179"],["/tags/Mathematica/index.html","4ab385ee4d3691c3938a86e012e90ff7"],["/tags/Submachine/index.html","4f38854a4ffdc908f5958a99b6797d2d"],["/tags/index.html","5278cb9081c8b34223d7676178e29036"],["/tags/业力/index.html","915d904ddab855c19cc807d0256bcdf5"],["/tags/个人隐私/index.html","8f3cf4d21387feabab7d78a3a99242b2"],["/tags/二元函数/index.html","afe7796d0986e051ff907d498d9fe018"],["/tags/人工智能/index.html","030b5776c66b61b276fe8edd9a2a84e1"],["/tags/信息安全/index.html","aeea342f579021a819dd447742486d20"],["/tags/兰切斯特战术/index.html","0f20a98730cade78bc97bb6f03865ac3"],["/tags/分子轨道/index.html","7bce9eda019094bdc188841a5a6810f7"],["/tags/南昌大学/index.html","b6a821d39d7c4b310ebb48d1ebc67436"],["/tags/反抗/index.html","b9a799e7c5c7d6f7a4e63f9e2b308888"],["/tags/古埃及/index.html","35b33f4ad4f4cc1eeb32c43f5360eeef"],["/tags/同人文/index.html","0e0a0bb23a172a4994b01ec0e7d7cd3f"],["/tags/同人活动/index.html","10ab1b7c6f733a5481db34e7521ea7f8"],["/tags/同人社团/index.html","23988d7692e23f4dbfcf2dac72257457"],["/tags/四维/index.html","9e70c8776c175b1e466e23a5e12c9ffe"],["/tags/坐标系/index.html","682dee36733cbef205c134b24ea47838"],["/tags/夏日之恋/index.html","5dd689276e41dc188e932f0bfdc44da8"],["/tags/大数据时代/index.html","c47e81e21bf8bbb998f5236ed57a19e8"],["/tags/家族構造/index.html","17b6247ad8a081febd77abccc5661373"],["/tags/尼采/index.html","b48147716b0f3cdf1bf6b02a8826f366"],["/tags/德国/index.html","bbcdae9af19fca6ce6eb3430c32281af"],["/tags/披头士/index.html","5f1179088868d16e9b37daf6a5c0576c"],["/tags/摇滚/index.html","255dcd3629006a91f1ae9db68fe1b204"],["/tags/教程/index.html","84bf4d1da2be1fa06dad48ec73c218ac"],["/tags/数学/index.html","28c3fd84ef68d6e27e204eb89500e1d0"],["/tags/日升之屋/index.html","553c9343f683a3138a3a8c0151d49be1"],["/tags/日语/index.html","cdb1cbdb301070d0acfb38dd047d43a8"],["/tags/有机合成/index.html","3f378f12e24690dd3361f889a43ae8a4"],["/tags/比那名居天子/index.html","b5a043ae6a8a1d0a73e9cb2813026de1"],["/tags/氦合质子/index.html","c1d4128b2c41265e394fd379ed6d9432"],["/tags/法律/index.html","c85f2d18d2efcea9d12ba0f2aaeae7d5"],["/tags/流行词/index.html","d1985a0ce2e1d71f602bdf25a0bda541"],["/tags/润学/index.html","879634901c85d0fd4c84fa6ada07fafd"],["/tags/深空天体/index.html","96ca3ff7f00beba54ea229fe34f024b3"],["/tags/现代性/index.html","ed22be1086da5a7412ea3903da70db01"],["/tags/理性/index.html","8d4d94e568463920ab4c4ca9d2164ce3"],["/tags/移动端优化/index.html","896bee7cda6b718978c115e49893a25a"],["/tags/羰基反应/index.html","9ad5dbaf119d585f5aa27d609b18cb8b"],["/tags/自由/index.html","f73df3a6cb2ed69715b3609477a1aeac"],["/tags/蒙特卡洛法/index.html","06173ea59e33dd9da04e9fb0772a6576"],["/tags/计算化学/index.html","9a2e23b53f5b520097b4571706fb9406"],["/tags/造语法/index.html","4c5e2d34c307e8899ebe7cd80ebf1c16"],["/tags/風土論/index.html","5eb159026789fd0a3333088eb0b99dc3"],["/tags/高中生活/index.html","5591ea5e8644009f5ce90f6de368592f"]];
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
