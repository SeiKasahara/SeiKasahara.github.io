/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1ddb67dab8c4e1b3a123ca14f8ef4c79"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","408153ec685595c7f6b5204a15c9307b"],["/404/index.html","6775ebb75890424fa51fbbfc13a29b99"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","b3dff66cd4739e37b9e65556e03fe4c6"],["/archives/2021/02/index.html","34480bcf3cbf8ea885d80651a4b48777"],["/archives/2021/11/index.html","77757e35b14b0215a2730ddc83c4df73"],["/archives/2021/11/page/2/index.html","c8de0f64524ef3517f4dba3bbab01bb7"],["/archives/2021/11/page/3/index.html","6fb3d0b51067e9bb82689e809a848ac2"],["/archives/2021/index.html","06710a8b7408824d76065a4b7839ad80"],["/archives/2021/page/2/index.html","dfc42c2369919290976c22bd8ab64ce5"],["/archives/2021/page/3/index.html","6009c8916ee591b195dbc21676e38827"],["/archives/index.html","448863d0c26cffdc21682b1bba89a95f"],["/archives/page/2/index.html","fff351e0575ad2f0fbbe28a2897c6bd8"],["/archives/page/3/index.html","e184a7f66c41a4ea7ae48ca74a387a6e"],["/categories/Hexo博客技巧/index.html","7a7bd3f4284c9f217daa832c7fc13485"],["/categories/index.html","edff3e3455526fc01eb3c3120fac3093"],["/categories/python/index.html","1a1d636bb723ee5f74452e89fc8c3722"],["/categories/东方Project同人/index.html","9490a56835921b5069feae0fb56f6cf1"],["/categories/哲学/index.html","405fc1a434f450ee7bb8419440867938"],["/categories/天文摄影/index.html","5c04e6853fe013ccebfb15864892d736"],["/categories/战术/index.html","58fbafeb47c60c429869dce25feaa2c0"],["/categories/数学/index.html","d2b68e2da6fd3d768afdc1119f2c30e4"],["/categories/文本翻译/index.html","244ab037491cc42d5fe3b82b5849ee6c"],["/categories/文献翻译/index.html","bf345b01046e4c8c3e69effee777af71"],["/categories/时评/index.html","ff5f3bcc455ec119ab093e525022f70b"],["/categories/有机化学/index.html","cc310a6d57ba7ce7e4aae3dd44edc05b"],["/categories/架空世界/index.html","c81fa7c7f1c5622171fd092962ddf6c1"],["/categories/社会学/index.html","35fb21f3c795bbf821cb7d8402a35939"],["/categories/自传/index.html","51c3bf36a9c50486fb309d6cd69e69cd"],["/categories/语言学/index.html","4789073d1ff3accc9e444c8f36b73fa0"],["/categories/量子化学/index.html","f1932073a0e6d308c5b1c1a844f87c8e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","162ba20bf67517d8af16e1494f42dc5b"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e966cee833337ba76d7368f99ee289b6"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","1c9964d854aa3c6e20826adcd493bec1"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","08f555c139fe9e039cb7b39907afa405"],["/p/0274.html","85b275c0a1912e0f4d50aee22c7a3b1c"],["/p/1578.html","82d4420efb2bbbba8dda8420e3e4c8bb"],["/p/1605.html","4c1aa2a02e26f6d944da9770b264c68c"],["/p/1adf.html","470c54ec1efaeacd9728d1948030263a"],["/p/1i2o.html","1b37c26cb12fc773da2fd018c86c489c"],["/p/1yui.html","6e509580aaf34625b1a538fb8f2fe046"],["/p/41eb.html","1445bbc82cf11ed1d92b9f0002c67c35"],["/p/4665.html","7c6a352650fc9ee0f0dece894681a520"],["/p/4966.html","fe655d891c484e95e09ff7ec5134d44d"],["/p/71a0.html","41016b02e0ede85ad8febefa8ba4ab7e"],["/p/7db7.html","6ca2029bb7a5249be5ebe23273c276e8"],["/p/8527.html","4deeaee2b93eae207198627051a4ec9e"],["/p/8c3b.html","3f9fa167d7617db6a07d566c60e92799"],["/p/9ce3.html","6bd04fd87f5cf9d5230a83e4ad81845d"],["/p/a123.html","4a0502c8f4e5c1c2806d062c5ce7fe37"],["/p/a661.html","f4f69eebc7d1234e5d6bbc604cd32038"],["/p/acop.html","57926c87afbea4804cdaabe6b61d6869"],["/p/ae4b.html","0a21ddd46700a7fd923f74aee1a3fa74"],["/p/c7bc.html","cc7f55ea59458ebe7952678ecd8b81a1"],["/p/dc59.html","3c70f204f4e4f56dc02aefd4d199e14b"],["/p/rfti.html","19fb1ec91facc1557c86966934c5da53"],["/page/2/index.html","d5fba3f3eba84972a5e3cb69da45acd4"],["/page/3/index.html","a2bb66993de6ac45e1042a7ace820ea4"],["/photos/index.html","8546d128f90591dcb52bef9e64abbaab"],["/shuoshuo/index.html","43e1ed0b025ac0ad91129e23ab55a81e"],["/sw-register.js","77e29aa2d2639eace6628756b1651449"],["/tags/Mathematica/index.html","815323cd79a78386bc2c21c8cd5cd9dd"],["/tags/Submachine/index.html","40b9cc98899a8f2e3d66ada19fece6d1"],["/tags/index.html","da16ce2aac1d8bd594b9f3a7ac663070"],["/tags/业力/index.html","b0d0800541f13afe91c67cbcce2adc6b"],["/tags/个人隐私/index.html","9b9eca10dc8d43f3385fde942249e908"],["/tags/二元函数/index.html","8841a13dcb23197889ee50008427f6d9"],["/tags/人工智能/index.html","1f85f436c9b0924d4d94ab24df43f8bb"],["/tags/信息安全/index.html","d469d924dc637631273507fda550e1de"],["/tags/兰切斯特战术/index.html","05968b70afdc05155e4b3438566f8f4f"],["/tags/分子轨道/index.html","a871d5f12389ba57b23728c01b011829"],["/tags/南昌大学/index.html","6078e7943601d21e6b40e3c04b5abd50"],["/tags/反抗/index.html","a32a6fea4f2352173305f2ec656d36aa"],["/tags/古埃及/index.html","94b5c8b28737427257f384b4626de3bf"],["/tags/同人文/index.html","5582bcf1e36766ef65a5b65ae0a86522"],["/tags/同人活动/index.html","5d70868d7b8ce8f86f7eca6fd674a58f"],["/tags/同人社团/index.html","46c86715ecf04fe3b65c6a043b4d26e2"],["/tags/四维/index.html","6eca7449f3c4c6167ea9616eea057fad"],["/tags/坐标系/index.html","34f318dc49cab7de29a24f701048da26"],["/tags/夏日之恋/index.html","f0f8ea0b151152989cdde53fa29f3f5b"],["/tags/大数据时代/index.html","2c674857b593724105c213254c514203"],["/tags/家族構造/index.html","2c99abd390cfd1167aff3febc488fd85"],["/tags/尼采/index.html","ea917b8cf2a55f1733afb8104fa3f7d3"],["/tags/德国/index.html","157d489762dfbb0655de216887c15e1c"],["/tags/披头士/index.html","26797139a1395b063d7f558915cfd60b"],["/tags/摇滚/index.html","4e60b9e3d9d51bed39eb57168b63f498"],["/tags/教程/index.html","3e14e3c65639f97a222e958a29954cdd"],["/tags/日升之屋/index.html","4b4fed6f717c7f4668e72f14ec104c6a"],["/tags/日语/index.html","3a9bc01bcd4a2655ec8ce4c79a77e987"],["/tags/有机合成/index.html","f0112a14edd905a6238f1f8132c6598b"],["/tags/比那名居天子/index.html","38dcb2fe8d81cb4a4b11838ada6c57dd"],["/tags/氦合质子/index.html","cbaddf0d243f7fb95c9102153e6d91af"],["/tags/法律/index.html","828865e369e86b75bc475ce611a065ad"],["/tags/流行词/index.html","dddc0627601ee41ae6a0201dc5313ba6"],["/tags/深空天体/index.html","76c2e27ac0c2e8c93f06c930dbc603ae"],["/tags/现代性/index.html","52cff5eb6b49418105c8e99a5bde7a5d"],["/tags/理性/index.html","1c4cc82933102296c94164bc71422651"],["/tags/移动端优化/index.html","ef8b426dc644ce545df503ddd20ae548"],["/tags/羰基反应/index.html","b238fc34f03672a4f29212e6a1f315d4"],["/tags/自由/index.html","bc57135f7abc92b2a1e020406149662d"],["/tags/蒙特卡洛法/index.html","cb836f0d06c14cb7c2ee6c7ba516e3c7"],["/tags/计算化学/index.html","3d284ea9fc9ca98fcc16514d0bf53e02"],["/tags/造语法/index.html","a3a09d48f7de6dc6e6e35cec1bf83ed3"],["/tags/風土論/index.html","2e9635c52e41c2cbccc3821903ae05d3"],["/tags/高中生活/index.html","a96c0291004d3ebd736eaa6f91755016"]];
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
