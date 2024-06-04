/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","378d9ffdfaaab86f4dd20d683d1cbaa4"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","ee7c18b5bfdae3ff6b392061411e4cea"],["/archives/2021/02/index.html","bb5848ac01f5146f79ad09ef6b9fe8a8"],["/archives/2021/11/index.html","3b46625d43a7f81b689427e7c1edad0c"],["/archives/2021/11/page/2/index.html","cd1c4383c913d3c3643ba8cc6e1d42fe"],["/archives/2021/11/page/3/index.html","05dc9721292aac2146a1d163e611b959"],["/archives/2021/index.html","840ffbc780d06bd7f7b08c1d4605da5c"],["/archives/2021/page/2/index.html","ab50bcf7490d034e29ae73d5e8dd8cb3"],["/archives/2021/page/3/index.html","2245af3d5ff3d6bbc20be740fd6dd6ad"],["/archives/2022/04/index.html","24ec758f3f3a7f96b4c7566e46c12650"],["/archives/2022/05/index.html","190da51660e171044baefc19e04991f6"],["/archives/2022/index.html","8ef9b9e67fa55506bfe8f7a09b0f1f30"],["/archives/2024/06/index.html","d7cc6d2e46f5886ca4f7a6af29cf20e3"],["/archives/2024/index.html","e8ae5f6f6f810dc728fb4c81326b6c7b"],["/archives/index.html","07f915874608345b488b9dc3479959c4"],["/archives/page/2/index.html","c72a6b6a6a301499637b31ea4edae947"],["/archives/page/3/index.html","ab35d723a8e91a7d54eb071c3471db3e"],["/categories/CyberSecurity/index.html","ed31424c175712cc7b3e59459d6edd09"],["/categories/Hexo博客技巧/index.html","c4844391ca29dce517ff452e5ca1ee10"],["/categories/index.html","bf7e902e6edc665bbd80f8b5ebec18b7"],["/categories/python/index.html","e06d3e095f8e6b176b78b1c11fc022a0"],["/categories/东方Project同人/index.html","0257c628ce5f591f665f62efb8c613a2"],["/categories/哲学/index.html","cab2668f5ac8ab9b3fbea3c04e3fdcf3"],["/categories/天文摄影/index.html","5c466fc757df2315d310295840d63027"],["/categories/战术/index.html","d972c2abf93e3ec01563303875847eb0"],["/categories/数学/index.html","d3e3636ad3936403b4310ec240e8176b"],["/categories/文本翻译/index.html","4b8ed16cb8b53958d1bb7cc15d0ef251"],["/categories/文献翻译/index.html","d7e3ca0f929baab9870df84d3452f3e2"],["/categories/时评/index.html","63a0f7ca2ba455b5883cd8d7a13da622"],["/categories/有机化学/index.html","aa334235972fa3410c70cf969004052d"],["/categories/架空世界/index.html","ba5eb93fce368fa2f354aa58c4e38771"],["/categories/润/index.html","bf751c4224495886b6f2396c5ae6a7bd"],["/categories/社会学/index.html","561af9fd2cd14c5d9940622654888c6e"],["/categories/自传/index.html","e3a04b563fab14afede6087e0f4de6cb"],["/categories/语言学/index.html","10bd375a066049acf87c366cc222b3f1"],["/categories/量子化学/index.html","86c69e5a5375988bf66e77304b935ed0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","cffad883c243a26cff8d2202b4262dec"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","8cc46002bb7d69663de024ba28adbf63"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","88a1b2d1c9582df6d6ff6867b7655c6d"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","3f031a713e26429ef573df06a2ad41dd"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b8d1f7cd2d3cf783cecdcde6cc19305c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","f7b2160ebbad1d68429886bf7631c797"],["/p/0274.html","1f7a90da9e0c447ec2ea02425a7b8b57"],["/p/1578.html","c33f6c47129e790e1331e331a372f471"],["/p/1605.html","d44bd069ad5d55334ceedad8f8810cd5"],["/p/1adf.html","320a5fc5072fb6a05858f687d98f453b"],["/p/1i2o.html","845a4e4f415c82ea2a76879d75ce01fb"],["/p/1yui.html","c4e4f63712712ef95247284f6c879b56"],["/p/41eb.html","3c9fd2924040ed9ce76280bd0ca66efd"],["/p/4665.html","9372b2f33b238f51e3d8c6d3dab26c59"],["/p/4966.html","f5973dc1e697691b6be2cd373dc8e571"],["/p/71a0.html","18683391a62edd079719f736309eaf63"],["/p/7db7.html","ec81e51ed19db671aea42950fc717f8e"],["/p/8527.html","eefe9aed6495b181a633d6dd350f0904"],["/p/8c3b.html","0df322aad9815065019333cb574c784a"],["/p/9ce3.html","63656fb1ba90579bd2afd854c2faa574"],["/p/a123.html","ccc874df0d43b95210f610b220832308"],["/p/a661.html","cc12d2fe9cbcd17389cd6d8f24a00d0e"],["/p/acop.html","bfa9bfe672c86657d2ef0e7df8f187f4"],["/p/ae4b.html","b2dec6389ac63fd5459eb406c6975265"],["/p/c7bc.html","9ed37f219ad4a1178095f460387af559"],["/p/dc59.html","caf724636ec66021ee7ae7f18ad77c69"],["/p/pqdm.html","585f2c0954e910ef0cf205ea70a99180"],["/p/rfti.html","697f62d14e3512168bec07d6bc1629e7"],["/p/runa.html","2194acd6431da7a10c6181f1b6aef2b9"],["/p/vepm.html","74207f8f68fe0b80c6a030ace9e7154b"],["/page/2/index.html","cc020bb9a410cb8b2545027688ed1442"],["/page/3/index.html","8a721359011256af41ac7a46f6b15310"],["/photos/index.html","fb24da6b84f1ea75cddb67269221b15b"],["/shuoshuo/index.html","220f9163526d0759c6a3f04565d31fb2"],["/sw-register.js","bd24eff4babb000ba16cd7758fc1d9dd"],["/tags/Cryptography/index.html","cff90587b87559202536a7543d078415"],["/tags/Mathematica/index.html","bbc8ea09eed581a0cb2a78ff9d635c11"],["/tags/Submachine/index.html","8fa92946bfa6a7b0ae2b4a40ee06a328"],["/tags/index.html","a1a2a55b5e846b44e2a23d57de5ddf24"],["/tags/业力/index.html","32c6fb17ece6791f013e1dc5dfd4589d"],["/tags/个人隐私/index.html","5c3f0137915b6cbb19eaf40dcd1e2792"],["/tags/二元函数/index.html","b9c8141a926ec22f84578e636c42d44f"],["/tags/人工智能/index.html","3518af5aac7454988b1cf817778225e1"],["/tags/信息安全/index.html","3d6180e8fb84cc27b9f74d67f0535485"],["/tags/兰切斯特战术/index.html","95f624aa1381b049c7f62cf7e73276f0"],["/tags/分子轨道/index.html","b0861c17fd184927e7bf02ba00d033ad"],["/tags/南昌大学/index.html","560bbda96dbae90bf303a958117f0cfd"],["/tags/反抗/index.html","8b704e18babf8f2a163a44d7c4d5f62f"],["/tags/古埃及/index.html","7e7e1a43a1c42fe4a7c1fff4befe6e66"],["/tags/同人文/index.html","25b344ee79b5ea1beead2ec325412140"],["/tags/同人活动/index.html","5276055dd9addfd9bdc41085068df378"],["/tags/同人社团/index.html","833e6c5afbadb768a6a2cc41d76e6476"],["/tags/四维/index.html","5857a9e0703f938d93d12ec6524e59d0"],["/tags/坐标系/index.html","9106986f90d7112c113eff88210a79a9"],["/tags/夏日之恋/index.html","9cf23e8335daf71a09ddea4faf7c27eb"],["/tags/大数据时代/index.html","b0efed86436c77a4ed1620030ad3c2e7"],["/tags/家族構造/index.html","f3345f65d56c56954ea3d67780369f35"],["/tags/尼采/index.html","80272d153514af36a4082cff3cc0e9a0"],["/tags/德国/index.html","d457687fa4fbc6e1dd9e272330bd46f4"],["/tags/披头士/index.html","890b08b7c634b4e45453c4aa396af18c"],["/tags/摇滚/index.html","16c3c2567a3e7338388b58351f2223b0"],["/tags/教程/index.html","eb58dd7420a0aa8551aeb180cc668466"],["/tags/数学/index.html","e16733f1b7986083cd7e3e9cda442f8e"],["/tags/日升之屋/index.html","75ea8663396cb27b107ff8860fbc013e"],["/tags/日语/index.html","7bfe6dbfb6cff17083fd04b39e793617"],["/tags/有机合成/index.html","71f3690118d69d2539aefe9b3eac698c"],["/tags/比那名居天子/index.html","2d57889dcb629c6840d5bf97c4f40aa1"],["/tags/氦合质子/index.html","9695d4d01b5c90990c664c522d754a0a"],["/tags/法律/index.html","8001fc454c352e318aa119e1438b3ef8"],["/tags/流行词/index.html","be18493732233f362ecec6564d8ff290"],["/tags/润学/index.html","5fdacb54637a060e14ae78833ff7ed7b"],["/tags/深空天体/index.html","2e180833c42a49fb11f0984bb3f5efcc"],["/tags/现代性/index.html","7abe56de3e4ccdba0cd51a1edfe35e0e"],["/tags/理性/index.html","1eea5161a05864a997162629ac86cff4"],["/tags/移动端优化/index.html","ad4c79e10b431595858c2ef3c4830c6b"],["/tags/羰基反应/index.html","d70fe70e6405af4d28c961af1a63259b"],["/tags/自由/index.html","eca13cdfe7b705491d8613782a6d63e1"],["/tags/蒙特卡洛法/index.html","e005219fff6876f3b792abb2d2da634d"],["/tags/计算化学/index.html","c3509e9e4d247309c7c7790440780c7a"],["/tags/造语法/index.html","237905ef9dfd04fbba32cd7e4afd5d28"],["/tags/風土論/index.html","33fbf9d72a379c434b3acf88371ebec4"],["/tags/高中生活/index.html","ae7a04d98ad03135e33519d26c914c01"]];
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
