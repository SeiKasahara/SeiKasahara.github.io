/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","295c5eb8fbefcc7f96ee7c5c78c99774"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","8f5dbbc771b66a66cec0adef78cead25"],["/archives/2021/02/index.html","6603c0a94d725d9bf29f457ba8e47c8e"],["/archives/2021/11/index.html","1567ad22d9df8b0aa94b750741589bfd"],["/archives/2021/11/page/2/index.html","8bca02a7ffad290c07ed15be9590748d"],["/archives/2021/11/page/3/index.html","092ce6a48f055055da664acf1bddfdc2"],["/archives/2021/index.html","de087c50fa53563188f444b1eb5b1cd5"],["/archives/2021/page/2/index.html","1da668c93338877957db6e1472075be4"],["/archives/2021/page/3/index.html","782a2cbd6dfb7ee52de96ac9c08b1bd0"],["/archives/2022/04/index.html","25f737cabe4e855e2b1894879470e0cf"],["/archives/2022/05/index.html","d1871819f5bd5d0bbaa9140a9bd56522"],["/archives/2022/index.html","5aadbf0ce8af2a7a17b354e9f710c1a4"],["/archives/index.html","ee4859200d72bd474cfeddb613e4c452"],["/archives/page/2/index.html","930a94ff424ba10d7893ca2b445a190d"],["/archives/page/3/index.html","ae0f8f4a19559844714a37ae28a1194e"],["/categories/Hexo博客技巧/index.html","2e5fa0678a44c3430a722e987f5bca91"],["/categories/index.html","f5676b4a3c32e2173c30248fdf3e9df0"],["/categories/python/index.html","68af052f17967dc6144ce4f25cc1d101"],["/categories/东方Project同人/index.html","dfd227fd9c68f7dc94a8494f1565d6df"],["/categories/哲学/index.html","786f4c6207483424057f74f5cef29037"],["/categories/天文摄影/index.html","838a8c567a2ae3a1db1bf7b56d9a8628"],["/categories/战术/index.html","1f660d5cf1eb1ec503451d6a169f0805"],["/categories/数学/index.html","8150cc3e8bca890e26b060e723d80123"],["/categories/文本翻译/index.html","94c7108b16f50902a9440dbf8b1a4328"],["/categories/文献翻译/index.html","de70e04c174b15229f8f487aa984b3f0"],["/categories/时评/index.html","0e036df851225222f91024ab276afcbf"],["/categories/有机化学/index.html","935d94cb29037cf909532563987044fe"],["/categories/架空世界/index.html","b8cb7533799496d527630bf8f7a228de"],["/categories/润/index.html","99ebf04fb8c9119eba6807e77decea7a"],["/categories/社会学/index.html","d9b478e8aa6f9056e83b579c1aaddcae"],["/categories/自传/index.html","562ae2aaf5c1e15078f073e2b48d4887"],["/categories/语言学/index.html","0cd95075de82ac0f7a9d366c740cdc6f"],["/categories/量子化学/index.html","70833dc99b9e20ea483c9664b1d2433d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","50413504b1d71158ef68c9a5cc432696"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","94017ae281bb3f6604cc6d138ad42656"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","1eb206e13f075381b07e4f4b98609cdc"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","b2b504719b5d1638ac79145b308d57fa"],["/p/0274.html","f336b506777745854aadb3239315be13"],["/p/1578.html","cda4f7e5a8b76e8be069f2dc60cd2260"],["/p/1605.html","135efa010abfc01088e783c6d917a582"],["/p/1adf.html","91f9a45753776fface8681b3e59182c7"],["/p/1i2o.html","7ede922ba2c3dd411663052370696a4b"],["/p/1yui.html","9cd3fe137d8c6b7b477ef4e17b025c41"],["/p/41eb.html","b254a11ed9bd823c9212e90e00d4a350"],["/p/4665.html","8f312722fce67927d2d5f3bda514d5eb"],["/p/4966.html","94f5219f5040d2a3edef40caea4eb875"],["/p/71a0.html","6b3db4ae7bf1608d1fb052d6843b12e2"],["/p/7db7.html","7e6c8b72bc1d6974800485f5ea63fbcf"],["/p/8527.html","53af67b7feed2f7e9454490115c80457"],["/p/8c3b.html","1d84015327fd789249a36ce7984c1422"],["/p/9ce3.html","f660ecc8d8ab86874c2827141b5cddf7"],["/p/a123.html","c02da6071560191ab9505f04c5e966fc"],["/p/a661.html","73169b1f9f791f1e4d704c3a8ffa5442"],["/p/acop.html","9fcd53879c507407735d01bfb4126568"],["/p/ae4b.html","006c28219150efff9f4d966ac85cc112"],["/p/c7bc.html","0a01282d0e4c1e735babd38705742aa8"],["/p/dc59.html","0ded02cf37359c2bb1bfa712769d7229"],["/p/pqdm.html","5e8cac1bb3f06bc47e91f9581b494001"],["/p/rfti.html","6a913362f2e085dba2602b2116a18f22"],["/p/runa.html","6d9eab0cf12b8a4865e996d9132f53f4"],["/page/2/index.html","4c1367bee22597246f2c26eec7a7f671"],["/page/3/index.html","73db1bb0c69a007775c54f4493f88eee"],["/photos/index.html","4c7045f49e743ae5c508b6ef3a66fe09"],["/shuoshuo/index.html","9c1552f05328f1e805040e62d86c6f83"],["/sw-register.js","61e65b2c435911624992b05a2fcc9990"],["/tags/Mathematica/index.html","e52dbade2a6237f1b21cb025b97b1899"],["/tags/Submachine/index.html","faeabd250aff81849a203884e2e0282e"],["/tags/index.html","e573b49a358f5f4fe670723ad62f84f8"],["/tags/业力/index.html","9a730c7040823563f14979fd7537b5ad"],["/tags/个人隐私/index.html","ff7149cc4d0fa6281607ca3195992ede"],["/tags/二元函数/index.html","17e7c778f7ef52d93b523b53a6279071"],["/tags/人工智能/index.html","23d86043fafbbd8066db766f96edf19d"],["/tags/信息安全/index.html","fa0bd375ced8f940492b862e93815d28"],["/tags/兰切斯特战术/index.html","30612aa9f708b73f8a650f9409000d95"],["/tags/分子轨道/index.html","65137e8c1388181485645f50b9d77feb"],["/tags/南昌大学/index.html","f47ba174023477ddec1d3b83c6fb1273"],["/tags/反抗/index.html","b4522e6dd2474549b38ac1da3bfb4e14"],["/tags/古埃及/index.html","5206552f387fe998f153598da898da03"],["/tags/同人文/index.html","f6a26f1911eb515e638af92258941d3a"],["/tags/同人活动/index.html","667fb11e9ec132ce7d6ea623efe677dc"],["/tags/同人社团/index.html","42e31b8723f7a9db280753dcd1da398d"],["/tags/四维/index.html","77c05e4d0c636cf30fe3f25d222cb64e"],["/tags/坐标系/index.html","5b45291bec478eb8215f53b804b39c91"],["/tags/夏日之恋/index.html","e2d0501d8774ddb4527a21ef64ceeba9"],["/tags/大数据时代/index.html","16e9bb6f6f7b5568c673418f0383b2eb"],["/tags/家族構造/index.html","34161ee53f2a5ac7d4f16ebefa360395"],["/tags/尼采/index.html","ff5c720801381af658253db2abc45446"],["/tags/德国/index.html","325e604bd3ca92ed1778b4a12a8c3234"],["/tags/披头士/index.html","4939a5ce30323df860a5fcd1ee662df4"],["/tags/摇滚/index.html","1103fa4c579a4d3776ac5e82cabbddb0"],["/tags/教程/index.html","89fc1216f0cebc0d54eadd047db01f5d"],["/tags/数学/index.html","fd27ba930d688042342e78373e30473a"],["/tags/日升之屋/index.html","701fd03be615f85f4e00e12342173be3"],["/tags/日语/index.html","919cf4a838d0bce4c80b51099c501895"],["/tags/有机合成/index.html","62d748517e7ea1c56caae361cb2c6330"],["/tags/比那名居天子/index.html","1de6303fe84bf58a4385b2c66b92fa3c"],["/tags/氦合质子/index.html","6e232773b798db5b0fe71ee0adf8e8e2"],["/tags/法律/index.html","38e8b9f8e9457b5ef75ab98c4333e9d8"],["/tags/流行词/index.html","1c446ce2adb223ff3529abe2bc004c27"],["/tags/润学/index.html","827590bf7ef33fff6f5560794d164eb6"],["/tags/深空天体/index.html","22b9a47dabd816d2a66dbbb051b15107"],["/tags/现代性/index.html","a6fe123585182c3d12810eb908fde989"],["/tags/理性/index.html","8589e79a536a72a52b93ed2d55157fca"],["/tags/移动端优化/index.html","e824bfeb26ca7afa33fa9fb8a0eb1785"],["/tags/羰基反应/index.html","553d3c51b177322689a6cf07af8b4666"],["/tags/自由/index.html","b525fd2772fab91c2a20b95a7bd84e3b"],["/tags/蒙特卡洛法/index.html","fa0c760e52fbaf1cf01e86d7a0e515b9"],["/tags/计算化学/index.html","381e45b90142d5c1d40b534b923483ce"],["/tags/造语法/index.html","2168d86038de2243274fb7f00db1cf20"],["/tags/風土論/index.html","33d68ffc244cd54d6d0697598614a7b5"],["/tags/高中生活/index.html","95501dea24d1bfed403f0bff5e642f04"]];
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
