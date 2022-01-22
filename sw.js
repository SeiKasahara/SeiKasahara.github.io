/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","64879a3455378a2be6520e1184d4c414"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","002a7058e9b141b06b0f3cdfee7d5ae0"],["/archives/2021/02/index.html","afd580ae7278d703d3abf7173e82debf"],["/archives/2021/11/index.html","20b24c2f6ec35387ec327a24cadea51f"],["/archives/2021/11/page/2/index.html","d21b6e4821a504bdbe6f58a8e43b759d"],["/archives/2021/11/page/3/index.html","70eef0229e096d693c6e7fabee85e493"],["/archives/2021/index.html","a5bb9963c81692c21bb2a597f5645554"],["/archives/2021/page/2/index.html","c4a26ec383b25cc50b3a90dbf68fd46b"],["/archives/2021/page/3/index.html","78510d7f29bd424717e795ca31ddc815"],["/archives/index.html","f856495efa4e389c390f4d0f8d993494"],["/archives/page/2/index.html","057360336b53901240103e9d5f7008eb"],["/archives/page/3/index.html","21b8263006d6daa0cd019cae7bbc2aea"],["/categories/Hexo博客技巧/index.html","89a790938a3c004e1af4d2d104f05ad3"],["/categories/index.html","a3b4659cadfc91e7c6c9f8194c3bcf35"],["/categories/python/index.html","b1d81e2884b004d38715c65d1c485af3"],["/categories/东方Project同人/index.html","e5f7ab8b393fc2089eb1c57c71b533df"],["/categories/哲学/index.html","afa6e2167780d7c17761a235d77d9cdc"],["/categories/天文摄影/index.html","270b3de03fd4f3d4cdc90e71066443ae"],["/categories/战术/index.html","4fc54149dbe48ecbf091b0a6ce7b8df9"],["/categories/数学/index.html","c81009674d7f8ebefa96fd538369ba20"],["/categories/文本翻译/index.html","a0aeff2fd24cd7d372e6d9722dd958f4"],["/categories/文献翻译/index.html","e431e3e076e56f471bccccd55bfd45f3"],["/categories/时评/index.html","64aab715a9ebe458c623f94656d81ffb"],["/categories/有机化学/index.html","5f3ed343ba48f4245fd3c54423ac9778"],["/categories/架空世界/index.html","8d35eecab0e482364bd26e16c1ad2cc9"],["/categories/社会学/index.html","4f5637dcb43a60ca1102a5a5a07b20ff"],["/categories/自传/index.html","f76c9ee45e2fc623e35a929e1b619e84"],["/categories/语言学/index.html","842216364d7e7e98178c3101996f8575"],["/categories/量子化学/index.html","b45dd405980ebd0140366ef717493869"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","bb2ab7e1ead07c06776fd9e840dac094"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8fa2295fb3b1e0e7b1af9f94d4698374"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","bd3096ebe052303fbc1b4e0d569d6090"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","f747bdb794ff326859b94a39f3669ac6"],["/p/0274.html","7690a90501990a4995ad7f2ecd33ebb4"],["/p/1578.html","cea2ee9514d350f36498f829ac723d8c"],["/p/1605.html","6a3b14a160064f97064cf40fd4294670"],["/p/1adf.html","92c06f5ad0638c468d5aabea3cf59797"],["/p/1i2o.html","755f990682f1288565b42aa27a6f329c"],["/p/1yui.html","378d9db381b55564f791980c04ac2a02"],["/p/41eb.html","6f542cb93e1f6ec8c5cfecd75af469e6"],["/p/4665.html","2029251f6a53f0365bb625fba5269ed5"],["/p/4966.html","9b7acf236ca5848417c20084907088ca"],["/p/71a0.html","e9609297f67fb65d5671028548917f78"],["/p/7db7.html","1840d7657acd82b03a3d462eab051791"],["/p/8527.html","a1704ac029fcfdafd82f0f5b5c4c8ced"],["/p/8c3b.html","dd8733f48224c8de33a21b7c69a3a58d"],["/p/9ce3.html","3391ed980066deeb74b8dfd73ac953fe"],["/p/a123.html","b7cb0c1eb2dbb7bed83468d20f4c2ae0"],["/p/a661.html","e7cbab6b8a182624932a729c1e49cbae"],["/p/acop.html","f963ca68272b9bcfa68848592f2e7f3c"],["/p/ae4b.html","70d9b12fc4151cc96ba8ea4dd45eebf5"],["/p/c7bc.html","241337de6b312eace2ee794044cfddc9"],["/p/dc59.html","81c27e55aefe2df7ba1a726de700c4a9"],["/p/rfti.html","83ecdf1affb295bca9eb882cf7c0431d"],["/page/2/index.html","49908fff14b57e2c8c0a8cfd17629361"],["/page/3/index.html","abc058db10fb575b761574e13421cf4a"],["/photos/index.html","abd4801c21ee95d172b5f67229284427"],["/shuoshuo/index.html","c0076c4d15ea813c0e7c5ba234c0034f"],["/sw-register.js","160e804b254b5e6f76340c916365a71a"],["/tags/Mathematica/index.html","f6e82c821f1e16dd0ce3b0b3bbd215a4"],["/tags/Submachine/index.html","8c2073fe71112a9ef48010c64bb4bc06"],["/tags/index.html","4bc1ef47ffcc8e2bf59b3af49c64f427"],["/tags/业力/index.html","033634adc901851c50aed88ed414f2a5"],["/tags/个人隐私/index.html","4903812345c7a276d24d92e6bc89c767"],["/tags/二元函数/index.html","3d42b16b3b6fd38bdf58e0e2c7e46810"],["/tags/人工智能/index.html","16bd4094c56bc5601b32e425f927c248"],["/tags/信息安全/index.html","25ec0016af97cf5c3119efd1d77d8c67"],["/tags/兰切斯特战术/index.html","7f8d932275b0bd8036197b1d6c4ea0b8"],["/tags/分子轨道/index.html","2510d70add00f70fd90b044b12671d35"],["/tags/南昌大学/index.html","9f9e7ba08d38c882a17e060060c5b012"],["/tags/反抗/index.html","901dfee388f793a822b8f30b70f431e8"],["/tags/古埃及/index.html","b9259c1a9f0fab8e5b39c50030f6f4d1"],["/tags/同人文/index.html","0a5e59e385ddfb6dee6d62d68236c7c4"],["/tags/同人活动/index.html","2871a88451c6763f8d5bed472e2eb6bd"],["/tags/同人社团/index.html","558cc0db8426b6c3238463672276a823"],["/tags/四维/index.html","830d9e0e7ccfe66a502d688b875288ed"],["/tags/坐标系/index.html","99680b5cdd58e4076511c0a4a0ff62fe"],["/tags/夏日之恋/index.html","ab11969567b2b3d7e17bd272bf80d423"],["/tags/大数据时代/index.html","bbe7a31e65465dee55995b6a7714eb9b"],["/tags/家族構造/index.html","6b6c692aba2f36ac4bf8af3a5bdea847"],["/tags/尼采/index.html","064724ff0fe7605fccf58e4619fbf396"],["/tags/德国/index.html","4a921af05c21c157816b5aa559e2e114"],["/tags/披头士/index.html","ed53eae88d2865b9c561c4363fa35196"],["/tags/摇滚/index.html","88b6c553c1a26715f8cd9d5d2239a4eb"],["/tags/教程/index.html","d750db59e6af89f28b1b040704b1b8fa"],["/tags/日升之屋/index.html","38a83dd4609aa08a801b86514ce58778"],["/tags/日语/index.html","73894536bd185f897e05d956d6522c2c"],["/tags/有机合成/index.html","f0bcd53f17bf67f50d3d28d8a7f059e1"],["/tags/比那名居天子/index.html","d98aeeaed66c4738a37bb5ea5864ee6f"],["/tags/氦合质子/index.html","b96384c31d4c9ab3c7445ff5114e7878"],["/tags/法律/index.html","944e3b189cb41ea1d90eb52e6e332320"],["/tags/流行词/index.html","493d1af17f91a1e8f5315fe529964d8a"],["/tags/深空天体/index.html","7f41e4c1a34ec39228ed273ecea67db0"],["/tags/现代性/index.html","def21cd5e2cb83fdf7ff54f02c88c2c2"],["/tags/理性/index.html","3f14b4dc86ccdf88191fa6ac53fa880e"],["/tags/移动端优化/index.html","f46d76d716cb2e28bfd8b77fa3a30d2f"],["/tags/羰基反应/index.html","c322405f813e7b4efbe0bbf7cb61275b"],["/tags/自由/index.html","0e1ebc5dd23bdc2dd901ec50abd954c2"],["/tags/蒙特卡洛法/index.html","67961c9572fa09cecb694f7d6ea3f42a"],["/tags/计算化学/index.html","bdc6178a8ad0a9a6d7cf879da87fd08d"],["/tags/造语法/index.html","0ab8f927b6e44537db658292cde9d9a7"],["/tags/風土論/index.html","08970a27c6f5463753b52acbba7e6e52"],["/tags/高中生活/index.html","022ec6b1f835105c02f8da3809c4f001"]];
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
