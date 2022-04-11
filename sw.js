/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","1abce30419e7ebaf8fed2ad9e6f54802"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","fd256964c93f67b4374e3cf2e0691238"],["/archives/2021/02/index.html","cc812d6dc67857ba59aad1757dda1e25"],["/archives/2021/11/index.html","10baff3cbe96c11a0be10d422cd418a9"],["/archives/2021/11/page/2/index.html","c475d9ffd2e5b24311f200a0c73ef3eb"],["/archives/2021/11/page/3/index.html","70f577e560d13dda91b63be964aad81a"],["/archives/2021/index.html","1933adcf0d3cdb2b42517af86f32bde6"],["/archives/2021/page/2/index.html","d2e4e43128281b0e1d5a7a9a07326d93"],["/archives/2021/page/3/index.html","fcfde4255bbe0699ec743b86afe946e9"],["/archives/2022/04/index.html","96097f88cd42c126922b629704d73446"],["/archives/2022/index.html","c7a5422041008dbfad76bb71f3e9303a"],["/archives/index.html","ef7323a1034b2a5b22bb608bd170e270"],["/archives/page/2/index.html","9fc4aaed4528107117a026417965a1a0"],["/archives/page/3/index.html","5835f264374a7422eea6267de4bea614"],["/categories/Hexo博客技巧/index.html","2386fb74863423f25dd7a2eaa95524f0"],["/categories/index.html","f28b1dd60ca7d232eb209134e0c1103c"],["/categories/python/index.html","048d2db8864176b2192ebf70efcd40f3"],["/categories/东方Project同人/index.html","2aeb01f71512ac829f2dfce6cd365c48"],["/categories/哲学/index.html","41cf31e2fd14df58fbcd9009859a3303"],["/categories/天文摄影/index.html","5862be2a8d6722ab5c6872e7e4be30a9"],["/categories/战术/index.html","cc1658d118c0b91f0af77ee59e56ca0f"],["/categories/数学/index.html","0f389801ad601e5974d6525cca1ff767"],["/categories/文本翻译/index.html","0c661e4100f4919d4b820f5831ed8712"],["/categories/文献翻译/index.html","576488f751aa795449a76248a2505aa8"],["/categories/时评/index.html","d0d2dfae7140653f31c176d05c200981"],["/categories/有机化学/index.html","90a4afb5c16065b2e40640a58921cb6e"],["/categories/架空世界/index.html","39999a94cbd87915dffdfdca76b1dadb"],["/categories/润/index.html","7af9d2c2c604fae74a87ca9c2ad46f1f"],["/categories/社会学/index.html","80f8b8f1c115b69cf2b942769f09861f"],["/categories/自传/index.html","fa407f6fba071fd6dab9befae284c8e7"],["/categories/语言学/index.html","f4775a51215aac2616481dde776e62e6"],["/categories/量子化学/index.html","a547cd14fa9c78e6d986119b538fb9e4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","59bc15c1fe08e8714e006977d15a0b06"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e8bd9249f85ec6be44bd3d41ad559107"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","25d3627f3a36247d2e6a848a77056e43"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","27ec0bb0c11f01f31e8491927c4d85de"],["/p/0274.html","352da82405abe8e9581d5ac686eb849c"],["/p/1578.html","fc2925920581f4b5f92e592074f1f151"],["/p/1605.html","d235a08cca0d856218244b2b6bc7d57b"],["/p/1adf.html","0b10b93c82100461fdfa7fcb67b348f7"],["/p/1i2o.html","5231c96773641eb258782100733c1538"],["/p/1yui.html","28f6f5145584eed9e49292d23d6351b9"],["/p/41eb.html","4ff94d290214d9ba113be42f8a857b6c"],["/p/4665.html","50c545a67d85f2c20f13a28a5ace70c2"],["/p/4966.html","40789ea534ec063dd0a9b897aaa0db6b"],["/p/71a0.html","4ffeb2e12ac078928c2600bacd54307f"],["/p/7db7.html","bb978b795fe7c3f2a1d5f6a3b4e58beb"],["/p/8527.html","1790bee7054d15349792d9634f75f800"],["/p/8c3b.html","41aa5a49984606798c38f9906648ba05"],["/p/9ce3.html","7c70582b861fc1c87f361b21b0036f4f"],["/p/a123.html","83eead669818ea81aaf1bbee49100c77"],["/p/a661.html","ea682c97603e6abdd634ba179c91c93e"],["/p/acop.html","690224891a2b0d7e67f66b3b6a63672a"],["/p/ae4b.html","fb3ef16def77bbc742b892054ba0c27a"],["/p/c7bc.html","3e577b7e2cf583bd28be7e6fc8aa04fe"],["/p/dc59.html","1a5d3be00b7a9e564484f991bbf76df3"],["/p/rfti.html","79f0e6cfebe3054ab9dee6e33c3f6aec"],["/p/runa.html","91659906d161e371302742b8cd054fcb"],["/page/2/index.html","8bf84cdcc677fbeaf9df11a1b98c18c7"],["/page/3/index.html","7b573761325de908d64042417a97a44b"],["/photos/index.html","b2091a7e0b3b3ba2d79c3c2388cfef57"],["/shuoshuo/index.html","69d09836f5a0d06765ffad6e300899a8"],["/sw-register.js","0782154257ad4b6e65d4ed06a846bda7"],["/tags/Mathematica/index.html","9276520ad6d652de6538e231848ad03b"],["/tags/Submachine/index.html","5972fa0ccf13e037ec3ae5b25f2a58a7"],["/tags/index.html","ac39f3f882160b4efa4ae600733cb4fd"],["/tags/业力/index.html","e3377499ed03201415854d7c6acb2e95"],["/tags/个人隐私/index.html","6a743a658526567d367d2d33b17f5d1e"],["/tags/二元函数/index.html","70b8985a8400f3de94b11de0565d19f1"],["/tags/人工智能/index.html","6196e74b6872d85381ac7eb4a8a7acdb"],["/tags/信息安全/index.html","ed050dd0650bfa9f536f5cdb045867db"],["/tags/兰切斯特战术/index.html","9be53babde21955b94d5436710f8056b"],["/tags/分子轨道/index.html","f590615f3feff7692a20a477652ca5a8"],["/tags/南昌大学/index.html","9dba8ab305edc45b6aa9bc2e50185d4a"],["/tags/反抗/index.html","0768da49343dd12c8b7cb2c1b240b7c3"],["/tags/古埃及/index.html","013802f55bd2280d6968ce5413032194"],["/tags/同人文/index.html","75bb1d004de7b48d599b15fe662cbfbd"],["/tags/同人活动/index.html","81ea954af4a28c9a9b9bc3eb701b273d"],["/tags/同人社团/index.html","c0415d10d4320deddda127668dd82338"],["/tags/四维/index.html","a0dccabe603f2623bd5280d8f2ff5388"],["/tags/坐标系/index.html","123f44a683e50aaa17bc607320aba30a"],["/tags/夏日之恋/index.html","4cf765b0ded75bba6ad67e8161d55873"],["/tags/大数据时代/index.html","d213bd12fd4036acbd4feaab11d005e4"],["/tags/家族構造/index.html","05a7bf7236a604d98c57f6814295cd29"],["/tags/尼采/index.html","aa19c1dcdd8214c2a3f9f57805321c4f"],["/tags/德国/index.html","8536c070df8d0090ae005571304f8bc1"],["/tags/披头士/index.html","3b9f9ad9a858706798b7f367bd1538c3"],["/tags/摇滚/index.html","703529a71cf94bddbaa9cf85a6352953"],["/tags/教程/index.html","b583c7c61d710bf850e0773286f77a6b"],["/tags/日升之屋/index.html","70a607085205dbf3f4d16df652eee78c"],["/tags/日语/index.html","bf2748e1c531a22429d70afae8af23b1"],["/tags/有机合成/index.html","b77ce88aa9a11e9ca308cb26ce977a26"],["/tags/比那名居天子/index.html","3d09549e46ae4789335425a3acdfd4d8"],["/tags/氦合质子/index.html","e9724550075b1aef747867fb1e947786"],["/tags/法律/index.html","dd28ff5290386f2f1c9be33cf2b700d3"],["/tags/流行词/index.html","7c59e0783b6dfeaa6708e705734de1cc"],["/tags/润学/index.html","0e91bf3b1762c530701a9eba2641aec6"],["/tags/深空天体/index.html","48f08946365e01b1083f23b9dbf4d94b"],["/tags/现代性/index.html","29895143eba4929b7a9f19bce4c2cc9d"],["/tags/理性/index.html","2e81df60e46735f8ea6ffcf400188a46"],["/tags/移动端优化/index.html","9a274303faf9726015f7086f0fc006ff"],["/tags/羰基反应/index.html","04b8187fa5a0887c240fc3afa77c4083"],["/tags/自由/index.html","f589843b98c56b9c9a9b64acee30af2c"],["/tags/蒙特卡洛法/index.html","3c738add177487b9b1b552bfe2c8e81d"],["/tags/计算化学/index.html","cf3e52e2aa01bbe89772eebe5bb4f2c5"],["/tags/造语法/index.html","2405aff00f8cb799f429791821d68464"],["/tags/風土論/index.html","41921b765479418e0ccd435e2c4a9054"],["/tags/高中生活/index.html","b29ff8213b8267344911faa792a6582f"]];
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
