/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","6e8c39f14f200f33fc6e10c2f91dc2d9"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","3f3ae4666f60ad0a0ba738707fccc9bd"],["/archives/2021/02/index.html","da01a34f2101f92764c42edc6da0bc89"],["/archives/2021/11/index.html","5de7eee5dbeb4243744ea578d530ee95"],["/archives/2021/11/page/2/index.html","03e4c63a6c915ec51c09a5e64e7de143"],["/archives/2021/11/page/3/index.html","fd10def55b9c199fa49ad42d0602f8d3"],["/archives/2021/index.html","8b32c71e5c647b8fccfdd21e5766b19e"],["/archives/2021/page/2/index.html","e597731a9a1e57e3bf2934c7f0ceb079"],["/archives/2021/page/3/index.html","d2b5a171638a80f551fcb0469f58dc5c"],["/archives/index.html","f7b6cc06f0dcd61085c60a94bd62c154"],["/archives/page/2/index.html","f4c06cea3cb43674aacfe1af2ab4dfd8"],["/archives/page/3/index.html","bbd896922c33a9d9ae92f74493a03595"],["/categories/Hexo博客技巧/index.html","7e439c7d7ce7a55c3319c19e9a580434"],["/categories/index.html","8ab38c496a7daf1ca60ca9f9724024dd"],["/categories/python/index.html","b57a3e9d225265ad28e3508cf50fa038"],["/categories/东方Project同人/index.html","dac1719094efa76c3f48a62808cf5ddf"],["/categories/哲学/index.html","f0b910769e73c9fe6b2f1efdc06bc756"],["/categories/天文摄影/index.html","2dd06ec91b7f4ceb60da5398e287128d"],["/categories/战术/index.html","8585930a0e5f7d57c2991a90400dcc8f"],["/categories/数学/index.html","8fb09ec83851370f0beebf0c33e44c22"],["/categories/文本翻译/index.html","9f2eba691ceab5146623ddf14a315ed3"],["/categories/文献翻译/index.html","5545e87eae2ca938a34830774babc5a6"],["/categories/时评/index.html","21f168d67b66879a28847208139e4f88"],["/categories/有机化学/index.html","d91ac92ed3f8cb5d95496fa49fee017d"],["/categories/架空世界/index.html","4330bea68dcfdd7ec7279c23deed74b5"],["/categories/社会学/index.html","e3be7084a92ea91efe4caaff09238e65"],["/categories/自传/index.html","6e8855948661edd3ff416f1f9aff77a5"],["/categories/语言学/index.html","f7b66555979e996b1bb600034dc18020"],["/categories/量子化学/index.html","1f189db6c0a9828a3e3a0f788e9eff76"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d95b0cbfdeffac4cd5df45f14212e23d"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","23e76eb9db3d3e86fd4ec227c0081a88"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","26a49d2e6325538edfb8dcc80d3d9295"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","86656112234cc43d3bea8b27f08444f7"],["/p/0274.html","b36e8c3dfcf5a42cb79c692f3237c45c"],["/p/1578.html","feb122e07abd5497b3ffe57dee79e727"],["/p/1605.html","51d76b0f74f8904f1c98f88454c74929"],["/p/1adf.html","6718b1f06839c781f77ec3a2e684d269"],["/p/1i2o.html","2d8044a32097bc0b3b07176d74487ea1"],["/p/1yui.html","b502cc06040cd4a2cca3e2821fbe5e95"],["/p/41eb.html","71d22cae19ac1ce775856ca390ee2e54"],["/p/4665.html","f7dcb036e2fea98d2cac87a7b4ea4c94"],["/p/4966.html","c79d6a53cc46e05769da530fa7f2cb0c"],["/p/71a0.html","f5171db54c27848d3a08b11334203ef2"],["/p/7db7.html","3916546d866408730794526165acc58d"],["/p/8527.html","30d1b5293bbdad33d27a3e6d6d410897"],["/p/8c3b.html","70b9fdb54a4bd332acece3eca54d3e41"],["/p/9ce3.html","4c718d64304502b9c5f44af1f99717ee"],["/p/a123.html","ff36f31a01dd24494c2dcf81f2d0c582"],["/p/a661.html","2ca44d16ac7fa155de0bb20a201f8f50"],["/p/acop.html","2c440a7c34c88bc4a45c817f46a599cd"],["/p/ae4b.html","6367077154ebd773b7252c7189cb86ce"],["/p/c7bc.html","1640ceee6cc5b65a74064831e8bb2bbd"],["/p/dc59.html","c8baaadf829ccf14650dae5fa66195fd"],["/p/rfti.html","6251e30613443a4deb3151a74345bbe7"],["/page/2/index.html","2e1421679adcee47c955cf052ded8e3b"],["/page/3/index.html","3ab6a3b7db5786fbefc3d8ff76615c16"],["/photos/index.html","aa55df9d13e906fcece9d248dcf88dc6"],["/shuoshuo/index.html","c1f96a4e3a84681cedfa3272c7200297"],["/sw-register.js","a6328d93f2b438e6bab924fa74dec9ed"],["/tags/Mathematica/index.html","312b082662086d17862a214afc7e5a6a"],["/tags/Submachine/index.html","e8bf39cff77f3369060235ceb1d68c61"],["/tags/index.html","01ceb6f7b53f8beba3cac27c1db5b733"],["/tags/业力/index.html","c23a757f468f63316f1865e4dcfe5630"],["/tags/个人隐私/index.html","534961e24cd8acaa218e82c6498cb583"],["/tags/二元函数/index.html","a1626b29207c7ed7d593022fb08efe3c"],["/tags/人工智能/index.html","fad50abbd623cb869d035e6980959215"],["/tags/信息安全/index.html","549f15b82868cc1aecde9f52a2e98bab"],["/tags/兰切斯特战术/index.html","f91ba722aab92271119b355b91b464ee"],["/tags/分子轨道/index.html","4203a86975049cb193969bd20e12e1f6"],["/tags/南昌大学/index.html","9073755c865e91dc1d12bccbbcf3f2bd"],["/tags/反抗/index.html","08b8a4b01cabf619251edeeb51d01164"],["/tags/古埃及/index.html","50d6f4f83aec787d91388267aa9d15f8"],["/tags/同人文/index.html","c54123eb1ddcfadd0f66837432b5e4bb"],["/tags/同人活动/index.html","f8d86dc4d5b59426dc8a9335fc2f38b6"],["/tags/同人社团/index.html","7d2a82a6eba72f7ce6986f92b6b03910"],["/tags/四维/index.html","60b6bb4e7ea78559548961ed0c1acd40"],["/tags/坐标系/index.html","8b5efc6a7361048a3ce41e99ef2abd3b"],["/tags/夏日之恋/index.html","90e59420548afe138d1f73de9e88c0ba"],["/tags/大数据时代/index.html","66ac718985779406455421160f21a87e"],["/tags/家族構造/index.html","c502aa8951f277a8f8dec935b35141f2"],["/tags/尼采/index.html","33cf757e7e2e69de4f9a883a44e1cb53"],["/tags/德国/index.html","8d38c90f9729f3b0e167d9cdc0bd8160"],["/tags/披头士/index.html","83c399e64d55d214dffcc6d2e2a61501"],["/tags/摇滚/index.html","0075d5dc8a594d8553360df308a1adaf"],["/tags/教程/index.html","7727908fa1772485fea4487dd020174d"],["/tags/日升之屋/index.html","f9561f6dc106cda8f11fadbdee0f77ed"],["/tags/日语/index.html","9d11d937c81b13cf16b087daecd485b1"],["/tags/有机合成/index.html","97554d209f9367387deca3f754b0aa27"],["/tags/比那名居天子/index.html","680efbc8687246347faf24b003acaa21"],["/tags/氦合质子/index.html","440f5a0a948cfd89c1c39a9f99cf8f21"],["/tags/法律/index.html","bfb5e3492a285be3301ac03a9dec65ba"],["/tags/流行词/index.html","3de5906a65c3cf08c97234a50ccb304d"],["/tags/深空天体/index.html","3339f15eb10f64d708bbcf9b750d7861"],["/tags/现代性/index.html","cffa1406ec99a6c41b02b253809ad42b"],["/tags/理性/index.html","51df6f112754119c9ac9bad1c32a5a55"],["/tags/移动端优化/index.html","7ebdff6c8b3589edf1e988abe24513e6"],["/tags/羰基反应/index.html","3f845c1bb5bacf8c93c3b32b1a8f07bf"],["/tags/自由/index.html","36988fc4f00c72b08d76b8609851cba1"],["/tags/蒙特卡洛法/index.html","fbea7360831c94c9a64061b20bb47cdc"],["/tags/计算化学/index.html","8939e905301bb20a2f08db642df1df14"],["/tags/造语法/index.html","88b234daacc8b6f41fd61f06cc983191"],["/tags/風土論/index.html","cbd3c4612cb0218fdae82c1974ad4287"],["/tags/高中生活/index.html","56b21b1af43d917b5411b87f97c393df"]];
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
