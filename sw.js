/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","e9e3f9546265bed6ad4217ae72241bd0"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","3fdf871f22cbe26ab6fad2b8f3a1ed52"],["/archives/2021/02/index.html","5949dce9e026e249df3a817b80116b5a"],["/archives/2021/11/index.html","f19b62a5795d57ba4786d2ce8f596804"],["/archives/2021/11/page/2/index.html","72cf0a63a8f588ee033af3cbb64665d5"],["/archives/2021/11/page/3/index.html","97adb04db46e3a3397f3cfbbbded5cfa"],["/archives/2021/index.html","37f1dfe9225268972e6c33a86fd6b046"],["/archives/2021/page/2/index.html","a4ba70e34ffcdf088b09ebd2243b8b43"],["/archives/2021/page/3/index.html","18dcc2e82c2f090fce03945efc6764b5"],["/archives/2022/04/index.html","ab465ff6615fb69dce57a170361e8ae3"],["/archives/2022/05/index.html","e116c0922b626b245af1c03059517337"],["/archives/2022/index.html","73f853248ed8ec566576c09111932ee8"],["/archives/2024/06/index.html","4f8c1cd2b37671b20dc3870d517e5c4a"],["/archives/2024/index.html","09916662ba51deba173c1fccd9ff756a"],["/archives/index.html","eb8ee432a7aba266d6f7e880e701e0a8"],["/archives/page/2/index.html","41f1341dfde77e0c829113f9b9299c6c"],["/archives/page/3/index.html","9848868c0a1a8fa7ca2b3c5ef74b8cca"],["/categories/CyberSecurity/index.html","3720ba83cbf9f03a9858f623cc80f293"],["/categories/Hexo博客技巧/index.html","1efd7e76dec7c3c4d607924a7ee62be9"],["/categories/index.html","994c8836637de420085e673845b376f5"],["/categories/python/index.html","46a258075460677d10b9ec35233a03ff"],["/categories/东方Project同人/index.html","6ec1bc06440cf36791c4808c4a81fd8a"],["/categories/哲学/index.html","8f979a0679d5faa3a2f9bb3e40fd8c0a"],["/categories/天文摄影/index.html","eeaeaa89baf21aff6919d0f39d3fc960"],["/categories/战术/index.html","cc6cb5ff1133d9d0a53b0b01364ab5df"],["/categories/数学/index.html","b5f7282d7939713776e07d738b065abd"],["/categories/文本翻译/index.html","cc0a45a86ead53633c8f6dbd18395598"],["/categories/文献翻译/index.html","3cd9cf18bc6900b678e2957c1ca66675"],["/categories/时评/index.html","7a922e3d9d047c9b826bce4c3622cc1f"],["/categories/有机化学/index.html","7ab98f99a27f0db1cfd8867791ddf59a"],["/categories/架空世界/index.html","9ccf16cfe28534ce2f7b22317db700d5"],["/categories/润/index.html","d1b717aa209744b89c8568e51629f969"],["/categories/社会学/index.html","1d0858a981ade9ec6aad2150812cbcfd"],["/categories/自传/index.html","bf596002a69856bd2a0151982f667853"],["/categories/语言学/index.html","4318e70c83c08bf66fe8d5aa479dacd1"],["/categories/量子化学/index.html","f4b53a5c9bbf5acd4a818521e90f73a3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","cffad883c243a26cff8d2202b4262dec"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","8cc46002bb7d69663de024ba28adbf63"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","955084bb58fd9940ab4e6257543997d2"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","3f031a713e26429ef573df06a2ad41dd"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b6b9eeec71d26b50f5ccce7e97e54d01"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","15e765e3a1df783469d9c3925d1f2cf2"],["/p/0274.html","ed26ab8da3e39fae703582303c3b543a"],["/p/1578.html","001fe7503d7c8ed513e7afaf0e26cf3e"],["/p/1605.html","99afc111997ca8d399d634c86eae622a"],["/p/1adf.html","aa47da42adafd9d3fdfa6440af691855"],["/p/1i2o.html","4a4d12d479a73835aed460d18963be33"],["/p/1yui.html","389bb3f85631e1edcf461f1fb6cc6bbd"],["/p/41eb.html","90cadc6fb35d0210410e925d04528227"],["/p/4665.html","c64f937c2d60d98466bbdfdd4cb6327b"],["/p/4966.html","e31fa23d135f3f825d30b2590e81a065"],["/p/71a0.html","514d024ec19f8c97f13ef6bbd6f1e5dd"],["/p/7db7.html","b3a071c08c554bf32600f7164b4e9ac5"],["/p/8527.html","7d64c1439fd9bc330ddb0336d09022b3"],["/p/8c3b.html","5348c9d3cedc331be18548fade6998d9"],["/p/9ce3.html","a6d2b835666b74836c35d85fdb9be1f5"],["/p/a123.html","18eb8ee65343e738eeeac9b11d3f7025"],["/p/a661.html","1b219e09561b52df26bdb3895ee45c5e"],["/p/acop.html","7a4399adff0fb76b21c95ed67d7e7101"],["/p/ae4b.html","4528a7fe66a45d2ca5dace86a9a134b4"],["/p/c7bc.html","bdbc1b85a4a458965d3e1338538b79d3"],["/p/dc59.html","ac0a5273439492eb7c444e204432589e"],["/p/pqdm.html","8f4891b2ce57b8189d0d04013210b2cb"],["/p/rfti.html","ebd6a54688e9a52ceb0b162119057ab5"],["/p/runa.html","85d13e252b06a221c9a8e5d72522c973"],["/p/vepm.html","6be25026e173ad928cf18dba3a0c556f"],["/page/2/index.html","cec70b9300135327c82078b7f5786c79"],["/page/3/index.html","fd258545e951c1e7dc1d308fd543aa08"],["/photos/index.html","3278bd15c890d48e9c1eb033e6ddadf4"],["/shuoshuo/index.html","af6d0ad5a259b66f12677ddd6081d069"],["/sw-register.js","191aaccaaa50c1029052d8e34f4ef8c7"],["/tags/Cryptography/index.html","07ad7b55000e1c31f182061dc0a5b77a"],["/tags/Mathematica/index.html","57c5e41f48e9e5e55dbecc695c222ef6"],["/tags/Submachine/index.html","884ab8b1787218d68a87357b9a76113b"],["/tags/index.html","6acfb55890f3f2dda59ffdf0bedb6596"],["/tags/业力/index.html","062c012b8a584b86f3070bd41de48e60"],["/tags/个人隐私/index.html","6028dbd93a083d4da53bda05c54241c8"],["/tags/二元函数/index.html","410a6cca4c2b8dec1c10aed72f62e192"],["/tags/人工智能/index.html","90be7082d466783fc09589a6cbe78f43"],["/tags/信息安全/index.html","80e40c385db18f5748d2ca2727de81cd"],["/tags/兰切斯特战术/index.html","5b7b4dfd42ecb0edd6e9412abae6c733"],["/tags/分子轨道/index.html","f4af2c8dd241b1cab6e943d7a76a5855"],["/tags/南昌大学/index.html","d53b5c16f942ee564de37e6467c3e296"],["/tags/反抗/index.html","10901561b7d49dc30779b49df219db2a"],["/tags/古埃及/index.html","497c60cf895565dc64eb5c849d486eba"],["/tags/同人文/index.html","8086a06889f1ec65ff66ab3b257b6102"],["/tags/同人活动/index.html","8ddc845135c9a3fa5683443742056606"],["/tags/同人社团/index.html","afc0f9845692390ff597f1311bf3ba5a"],["/tags/四维/index.html","2cd5a29f21217f133b62b6c592a260ea"],["/tags/坐标系/index.html","6abfe14fd299617e501a0330760b3872"],["/tags/夏日之恋/index.html","8c3f5d2c748f89582d91e170bd2036c5"],["/tags/大数据时代/index.html","b98b3ed510ed38aa67e32264295da1ee"],["/tags/家族構造/index.html","7b1f7d7edc56602e26867c56359d26eb"],["/tags/尼采/index.html","bc37e40811a112ed041988af0dff6e29"],["/tags/德国/index.html","ec866afd8408d02b89d136f5ffa8bda4"],["/tags/披头士/index.html","3af2a08cd6844a46a4dee81f9b79cbc1"],["/tags/摇滚/index.html","cfa8275ab5da59eba11eb4db26936447"],["/tags/教程/index.html","4ca83d90fffc421dae7f7450a07c230e"],["/tags/数学/index.html","1af75cc4d18880e0875e98da3b0d058d"],["/tags/日升之屋/index.html","f4b51b0c608e1d8dc060d5a20f676f55"],["/tags/日语/index.html","803ae48ecc46b56970b07f5525450807"],["/tags/有机合成/index.html","5f7be218d2c2777e9a45f21b39e6792c"],["/tags/比那名居天子/index.html","667423c9bdf1c9dffabfdd9ea9fd3b26"],["/tags/氦合质子/index.html","cd068e02ba26872b2df46e08659513d7"],["/tags/法律/index.html","b3a505e245ed8dd629bfaf55ab45df43"],["/tags/流行词/index.html","cc036cc4f578697c3e695b0d1b4c2103"],["/tags/润学/index.html","5c43137ccdc69d69a5d9cc61ecb6dcb5"],["/tags/深空天体/index.html","3525afe9618fd83726d98adc6daab090"],["/tags/现代性/index.html","f52e93ec79db83a50de4d01ef4dd581a"],["/tags/理性/index.html","753e0110c5935a568cbe561ac2563013"],["/tags/移动端优化/index.html","f06ae3cf7fd74df7c0b038354909f56e"],["/tags/羰基反应/index.html","6e72520ee2df4530a884d341f68fe9e7"],["/tags/自由/index.html","0f28b2b532588afd076dc3bf86fe2b18"],["/tags/蒙特卡洛法/index.html","3581a81c7855097068f1a58334debcbe"],["/tags/计算化学/index.html","66e0bfd31ff298d97c8137e8078cc0b9"],["/tags/造语法/index.html","f9030cf166504f613284b7ea6f2ccd7d"],["/tags/風土論/index.html","98f035d1f17a3e5c244cf2ec33960375"],["/tags/高中生活/index.html","88ee33aae299267f03561c87223e7482"]];
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
