/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d263088cb1838fe59664248f69ab0fca"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","e948adec0fe9d80fec992ceca15feff5"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","61d8e4be2c074c5d5204cb1a71d6dc47"],["/archives/2021/02/index.html","0f85515f8ce4c76c4c28054b570c389e"],["/archives/2021/11/index.html","ce0caba665b0b19755c6cf3855e53f4b"],["/archives/2021/11/page/2/index.html","bdc8c4d06902f318f0f647f4c500702f"],["/archives/2021/11/page/3/index.html","e6ab5546478bafc806de132d3351418a"],["/archives/2021/index.html","aa8f05f1153b3525470e3574634045d4"],["/archives/2021/page/2/index.html","c3ad1f5c6c0fd6c64fa5732509d6965f"],["/archives/2021/page/3/index.html","dfe0fbc6fa3312ef09d6003b7c281dc6"],["/archives/2022/04/index.html","17b77fce94d2fdcee0510ed8bc6c4159"],["/archives/2022/05/index.html","1649a925715fc33a3472c592c0f95b57"],["/archives/2022/index.html","14c595d073c0ddf420f5eeee10865927"],["/archives/2024/06/index.html","27be1988573f1d4106c159aeb00bac59"],["/archives/2024/07/index.html","d9f27a46548f07fc18bf08ab2ba0a277"],["/archives/2024/index.html","fe5d39e143b57ca29f06de528565f465"],["/archives/index.html","c080fddf170ad487155fb536025088e8"],["/archives/page/2/index.html","406d876e0fcc0b5e7979e0e7e0e66e38"],["/archives/page/3/index.html","088aa15ec5b088516a558ee339d60a8d"],["/categories/CyberSecurity/index.html","94b53752d9e3c0e2e2b800d792befb9a"],["/categories/Git/index.html","74fee23c3ba4f69441ef2574611ccfb6"],["/categories/Hexo博客技巧/index.html","f34b0d5e738222ce12a888b18a2c9073"],["/categories/index.html","a5ac4a350928060c08080949cdfebe8e"],["/categories/python/index.html","9313fe6048705839a0f0987ccde9e8a2"],["/categories/东方Project同人/index.html","87b4cd8624587bfd761381027158671b"],["/categories/哲学/index.html","af8ac15b9153ab4429b12a5cd94c8a8b"],["/categories/天文摄影/index.html","903316e3e51abfb3cdc75df90656c18d"],["/categories/战术/index.html","3e3e55cb2f2cfe96c5a2ab0c7fd318d6"],["/categories/数学/index.html","9f8b81ad7d97a58ed66eaf3f6e4aebb8"],["/categories/文本翻译/index.html","20a641e7ac44f6cf1dbd92592a964963"],["/categories/文献翻译/index.html","a12041ef8b4d98b2473cf4a3405b77d8"],["/categories/时评/index.html","c49698a7d18711cb11f14ab07d63aaad"],["/categories/有机化学/index.html","d92e037215d9cf5972674ce6544cc5a2"],["/categories/架空世界/index.html","c9f39e1527fa72bba501c5131db7ad9f"],["/categories/润/index.html","3862f743e864b09fb9ad857a416c06b4"],["/categories/社会学/index.html","df19fd98c32f0c77b31ade348ce77580"],["/categories/自传/index.html","4ce65d35812261c0b9a8a29c442a9472"],["/categories/语言学/index.html","c0082dc8ea648ec276c0e5dc9c18e1e9"],["/categories/量子化学/index.html","4b97cfdf20198ee49a141be63dbba2e0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","f822a1507cd1891e878c34b1e8b51ff1"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","8cc46002bb7d69663de024ba28adbf63"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b23a05f0ee52981187fe472184ed196d"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","3f031a713e26429ef573df06a2ad41dd"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","e7d76a2ecb234fa61b88449705a66f2c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","8516e87df244d35bbbf0a4658eda6a43"],["/p/0274.html","5388a1cb192a2d7828c8268b147a05cf"],["/p/1578.html","3d42ae545eb02082f6d6552701dd95d9"],["/p/1605.html","8f3dd6ec0faa91cfa2f48e6ff9388fc7"],["/p/1adf.html","c11337af9d5e14aa68974fe8333d36db"],["/p/1i2o.html","1706439bcdefb20d6c89a4de4dae71d1"],["/p/1yui.html","4f694fb771147a64cd662ff78f11fc5b"],["/p/41eb.html","7f82b52a9d1ce4002f61b091a4e9668a"],["/p/4665.html","e46f8b77e943aef9c8b8746d597d2b61"],["/p/4966.html","ee8f7f87e36d339fd05a26af3e093507"],["/p/71a0.html","f4ba867c0526231f3e3305effee77052"],["/p/7db7.html","f9d8176aefb6eaf813b6f51d2b635abe"],["/p/8527.html","a532aae786681adf35407e39b5ab02e0"],["/p/8c3b.html","07a8e778010b23f7d7bd1c9390e5076a"],["/p/9ce3.html","4da3dc8432dc97d67d7c3b5fdf700e05"],["/p/a123.html","f466ecfee7432bd1e601391950c68cb1"],["/p/a661.html","afdd49802225fcbb4371b1ea89790816"],["/p/acop.html","f6be2b70277f79d6421dfdea519a6d77"],["/p/ae4b.html","8fd8fb5c8d3876a2fdb25fe856ed2f86"],["/p/c7bc.html","d7293e8221a389eeb01524b3b4d7e827"],["/p/dc59.html","e1e8db9c9f752df4e0011b0386a9dcda"],["/p/pqdm.html","281abf1f1400a2034084f6ba9289a962"],["/p/rfti.html","b892aaf5d00d26363f11c104a3bd2255"],["/p/runa.html","e50e25c748dd76576cc9de2f250404c0"],["/p/vepm.html","0e732f5bc753f28f1924488f1ee0ff5a"],["/p/vppm.html","f885e83c03051cb1938cc4a494d05aaf"],["/page/2/index.html","27cfa9bbd0fbf7258b4772f12e2a6c30"],["/page/3/index.html","ac6dd08a9257fc08f4caecad9652837f"],["/photos/index.html","6774948ca8587a144ce7c74df9f399fd"],["/shuoshuo/index.html","2d20d371e6eab81cbfcab6d3cb9106a0"],["/sw-register.js","77ed82502a454d33a6a1b28231b52b9a"],["/tags/Cryptography/index.html","d3f7b621a6930674201f12d45e5eec84"],["/tags/Git/index.html","40949fae959e062bd06d2befc8b27a93"],["/tags/Mathematica/index.html","2de13afdcbe9960aaf9db0029738d939"],["/tags/Submachine/index.html","5d3453e6514d1acec2c64b5f20b7cb1a"],["/tags/index.html","ae6f35081286d9bca216e58959ddbe70"],["/tags/业力/index.html","19a3ed95499d480a2af656f201fcd522"],["/tags/个人隐私/index.html","46b86c3a88d91873ad2f59e0c28bffa8"],["/tags/二元函数/index.html","20e5743b834eead615c6ff4d323ab0a5"],["/tags/人工智能/index.html","fd9ea3ba2fd5b2f6f5c231bc51492a40"],["/tags/信息安全/index.html","855bad17118218819c724cee43f5b484"],["/tags/兰切斯特战术/index.html","a2aebfcedcf6f31741aab9bc41228888"],["/tags/分子轨道/index.html","11c71386b3803f08746f8b7301bf72c7"],["/tags/南昌大学/index.html","4be9c91cb21d249914c60b2a96ce26a5"],["/tags/反抗/index.html","ac08d18da232ddc99ea26c63b0506c20"],["/tags/古埃及/index.html","f809f439bbc59b391abfb181b5b86d40"],["/tags/同人文/index.html","bbc1fce4248ce2f41bf5ab03c7135989"],["/tags/同人活动/index.html","9628635ff8d7e1b8f44b5484ad838778"],["/tags/同人社团/index.html","355bd604ffd0cd4b9919fb236bb4730a"],["/tags/四维/index.html","a42c281ebb68de43be7e0610049226cb"],["/tags/坐标系/index.html","85f5df1e6f9da8b7894fe3d26d32ad75"],["/tags/夏日之恋/index.html","f29557bba81e20e871e08a0f4f3bada8"],["/tags/大数据时代/index.html","1e4557833a0204763b23f38c8279e52c"],["/tags/家族構造/index.html","261cd3708f9aa4aa6b0551780cc77265"],["/tags/尼采/index.html","b80f07f9d2ec516c15b95bfa72b0ce1a"],["/tags/德国/index.html","aeb760ada5d9aa55ef776e38b1795c2a"],["/tags/披头士/index.html","f09e41f49b4997f67732c04ed5d471b8"],["/tags/摇滚/index.html","da4246eaebc7723985bb376b2086cdea"],["/tags/教程/index.html","6fb53319911482dbb8b196e3bba4c5db"],["/tags/数学/index.html","6b0264b2ec1773e171878e5179f439af"],["/tags/日升之屋/index.html","4d08b4a38a6276cff66cd4c40ecca0c4"],["/tags/日语/index.html","2b7f88d6cc2b82ba5b57ca2056426412"],["/tags/有机合成/index.html","150f253628ae0fc9eb9ece4f81ec07a8"],["/tags/比那名居天子/index.html","6da8fe40ff1ea53a9ac63e95aa129a38"],["/tags/氦合质子/index.html","2377b28d13000982cc72dd600f869644"],["/tags/法律/index.html","ba06121595bcd2281fbb7e92b3ab1243"],["/tags/流行词/index.html","036397413c459a3d38b12ce3ca523989"],["/tags/润学/index.html","f3dcc266c46343f77a0888566d68dbb9"],["/tags/深空天体/index.html","3f7b886f58ab76f0809b68950564b660"],["/tags/现代性/index.html","a3cfdb4e83f317496c64c71e802c1cc7"],["/tags/理性/index.html","296cc887ff5fcfd1c5decaf4ae893779"],["/tags/移动端优化/index.html","630ff858c27a40d28a7b685d3d427f09"],["/tags/羰基反应/index.html","4836fe4156e55247cb890caef71a9e6f"],["/tags/自由/index.html","bb48187d51395de889315d56c7a70c0a"],["/tags/蒙特卡洛法/index.html","92928e7641baa8f4133fa0bb042f814b"],["/tags/计算化学/index.html","0a259fafdf1b47a880512cbed5ed9eb8"],["/tags/造语法/index.html","ea80d35fecc29e5c511430acf959a452"],["/tags/風土論/index.html","2ab517933aebbd544ef7bfe50dd8b0ca"],["/tags/高中生活/index.html","06a805b40e2b4403b9f8f821ec5acec3"]];
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
