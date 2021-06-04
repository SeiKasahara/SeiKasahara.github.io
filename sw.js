/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4ad4454005efe4f23cf12f221764c207"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","5961b8b14989c75c379f00f9e82617e7"],["/404/index.html","796510f612bfebcb60c2aa14f8a0ef37"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","012ce9250fd4a2b652fb96e2a6c7436b"],["/archives/2018/07/index.html","62bab216009804b74ff8804aa1b7158e"],["/archives/2018/index.html","29f84523ea12f362c31e511e836b83e0"],["/archives/2019/05/index.html","a4a0fd59a77b836146dc339e072f41a6"],["/archives/2019/index.html","d7bc7ff6d409f0351615f1fa35cd38db"],["/archives/2020/01/index.html","789a242b3c1bcb17d9538ff30b300b70"],["/archives/2020/02/index.html","8b25aae0eafdde7a7ba6ff048c0197fc"],["/archives/2020/10/index.html","4a09fe34c816a37096a0ff9da1ba429c"],["/archives/2020/11/index.html","7c0e39c8f6ebf2ee4f0761436c8d58dc"],["/archives/2020/index.html","ff1d3fbcde1015ab5dcfed4bb1a2072b"],["/archives/2021/01/index.html","305240dbab89114cc39fa63bff58e7e9"],["/archives/2021/02/index.html","b86a795a29d54335c5b36f01ea3807a9"],["/archives/2021/03/index.html","e7199b6817e10588c0b7aba1f67ab5ee"],["/archives/2021/04/index.html","5de34040deb95199a2072679a746340d"],["/archives/2021/05/index.html","454bea83f719ebc4eaf3ea85056ccd57"],["/archives/2021/06/index.html","a27e58e985cff427ded6b0f3694231cf"],["/archives/2021/index.html","4ea4752b21dfe2493138d16bef91ae16"],["/archives/index.html","2aa71fa7174bb07e1ab1045345a6d4f0"],["/archives/page/2/index.html","1cfc67dc19c6513ec141f41e0e03d8a1"],["/archives/page/3/index.html","59bf1527656a7be2a9db6336de60ee64"],["/categories/Hexo博客技巧/index.html","e917a36c8a3fca138babd750bcbeec18"],["/categories/index.html","821309e6d54cfbcab629e6bdd07d6ab0"],["/categories/东方Project同人/index.html","bfb8344d6b619be42f9ba98d9582ae2d"],["/categories/历史/index.html","8ff94dded9901559ded020ebf3b00e70"],["/categories/哲学/index.html","dc16d2f93a08d0f77225295bd8198047"],["/categories/天文摄影/index.html","f4c6b33b63459c7e453aa14cb5107765"],["/categories/战术/index.html","a28dfc97ed8803d928949d160b204618"],["/categories/文本翻译/index.html","c54f54277b799cb8811fd1782c09473a"],["/categories/文献翻译/index.html","acbb4a67d08ea2f604824e9adc81fb8f"],["/categories/时评/index.html","4e752af2af77a02948eeb3d25144c4b5"],["/categories/有机化学/index.html","31009bf5276708936252b36504bd2835"],["/categories/架空世界/index.html","3e0d27c54111f73e99850ba7e51abb10"],["/categories/社会学/index.html","5fb3b2735f5795d673e893076672784a"],["/categories/自传/index.html","9ed26df5e6d11dc706b6843e4bac81f3"],["/categories/语言学/index.html","f55dd6f18c149c470f050ad26e391702"],["/categories/量子化学/index.html","489ba743f8f25c2290a51bc2b3a5ffe8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9cec0d311331cc0cdbf61e1e0aad8494"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3fc163cde8c7e2b3d6bea393fe7d9dbb"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/han/CHANGELOG.html","05a715b71f0883e4b12dfa5e392cbaa3"],["/lib/han/LICENSE.html","01cdce67d9c9f934314f5c4be261d3e4"],["/lib/han/README-en.html","53a6a3d07b80a9a4e70e56b656f85495"],["/lib/han/README-ja.html","60040717dee3d6dc79d90ba036f67e8a"],["/lib/han/README.html","20be470ac29e9dfe18a01b6e2876681a"],["/lib/han/demo/README.html","78336ba99fd42d80639ec92f99dbc0a5"],["/lib/han/demo/biaodian.html","113b8495a911ab6fd7d4497351f43bf0"],["/lib/han/demo/counter-han.css","8694960a0dd84adea4dff4c8f997c8ba"],["/lib/han/demo/counter.html","6ec8df7257ff5f0e0aa90f22f1ab66ca"],["/lib/han/demo/deco-line.html","e0974eeb469323d21d8878bcc729e434"],["/lib/han/demo/em-han.css","621c9a63e09961a9feca07dc7d26b08b"],["/lib/han/demo/em.html","2af6c5a74ed56bfd7d024f3f1bc9fe49"],["/lib/han/demo/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/han/demo/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/han/demo/four.html","e0f957c77526204cf556bcfff9c278e0"],["/lib/han/demo/generics-han.css","a64c35d85c55e30f466cd535fd64acef"],["/lib/han/demo/generics.html","d72d2960c4d64bb2441684c8224072e6"],["/lib/han/demo/han.css","2d63dc8d264ba08c64a5a3dcb416091e"],["/lib/han/demo/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/han/demo/han.min.css","408ffcd3305d9e8d7bbb7ae9ab478f66"],["/lib/han/demo/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/han/demo/hanging.html","adc45c4b219a651b6545e013e41d0f4a"],["/lib/han/demo/hws.html","968169735fbe9944ce8f08d36f8a66a3"],["/lib/han/demo/index.html","db0f001c1d69fe4c1de51ddf99d7576c"],["/lib/han/demo/italic.html","5842c4ed818cb62083d8def4f76627bf"],["/lib/han/demo/jiya.html","799088720ac0e6a1b62f6d92dd4c4b42"],["/lib/han/demo/numeral.html","955b2d9822388f5749c5d34091f72c33"],["/lib/han/demo/require.js","9a5abad043df0d348bdc5eb2c200973a"],["/lib/han/demo/ruby(ff)-han.css","d2972c2ea4be223a3e4fcac065a95309"],["/lib/han/demo/ruby(ff).html","86d7bce2f93c1d9afde43cf61dd9e38f"],["/lib/han/demo/ruby.html","62ed9eeab09da34cb755f58501bfd03d"],["/lib/han/demo/shs.html","ac5bccb3bab508f50cbfdac8d205616d"],["/lib/han/demo/subst.html","ea8dbc9299a74c778b265e5edb33a0b8"],["/lib/han/demo/test-amd.html","a9a65776d3b2e5950080e406b041b63a"],["/lib/han/demo/test-amd.js","03fa913a8b3e523e8275e0a47aed1682"],["/lib/han/demo/test-commonjs.html","25d646c23e91323bf65edc5cfdaf80e4"],["/lib/han/demo/test-commonjs.js","85bdbbc5256b411974f994b9d130ef17"],["/lib/han/demo/test-hans.html","514867786a1ff305da64ded5cf076a1b"],["/lib/han/demo/test-ja.html","59f9f9851b3e08a8bd58ca158d03bd51"],["/lib/han/demo/test-nojs.html","eaed3617f31a5d1749b75d39a134ccd0"],["/lib/han/demo/test.html","d28e2cc0fac901aef616f878fbd7ed36"],["/lib/han/demo/well-knit.html","eaa7a05140bb0d1e3d5243665e72c192"],["/lib/han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/han/dist/han.css","2d63dc8d264ba08c64a5a3dcb416091e"],["/lib/han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/han/dist/han.min.css","408ffcd3305d9e8d7bbb7ae9ab478f66"],["/lib/han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/han/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/han/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/han/index.css","630e6e1b11f8d0b1eff3691e92e480bd"],["/lib/han/index.js","b19d23e2b927b8aea5c6e6975ca3589e"],["/lib/han/src/js/core.js","ececa017a08b1574fc0e7495d3324515"],["/lib/han/src/js/dom-ready.js","8c173cfcd322369f43fc359c821cd202"],["/lib/han/src/js/find.js","97b00abcd411f3f9f83510c5eb7a3270"],["/lib/han/src/js/global.js","63f05719ece26c4f4ffe228813934cf0"],["/lib/han/src/js/han.js","7d30093762d73e78db08a40273a0d319"],["/lib/han/src/js/inline.js","da1bdac161ed544ed758e91485ccef61"],["/lib/han/src/js/inline/hanging.js","874f3dbaaf0867ca87bd7f5298be911c"],["/lib/han/src/js/inline/hws.js","97c4e843c354c11cb04efaab07c4131c"],["/lib/han/src/js/inline/jiya.js","e1ca31cc28a3fc60c34745f5d740e5f3"],["/lib/han/src/js/inline/subst.js","59733611aece58ee49c204f1447df4d5"],["/lib/han/src/js/intro.js","a8cb7ac2189e71cb0c477dbcc6f35b42"],["/lib/han/src/js/locale.js","227acc74c1d52b790965f34440c7b165"],["/lib/han/src/js/locale/core.js","61d159bf46bde5270db660b1aca9ed89"],["/lib/han/src/js/locale/detect-font.js","9459388e9c22489c8f851d22d8be5d51"],["/lib/han/src/js/locale/h-ruby.js","bafcb95c5ea291da00a83d1e845817c7"],["/lib/han/src/js/locale/init-cond.js","222524a822b02b31244945e2b2a02874"],["/lib/han/src/js/locale/locale.js","841f0e064f8d55ad1e8e60106707fbf8"],["/lib/han/src/js/locale/normalize.js","ac09fe2fb2f251eabe1f4bb959e0b504"],["/lib/han/src/js/locale/support.js","c047869dee360444f04f45e5dd3f4fa2"],["/lib/han/src/js/method.js","3be65b076e5170c091c4305fa574e7fd"],["/lib/han/src/js/outro.js","b5ea957cf68cbabfe6d87fe42db13c61"],["/lib/han/src/js/regex.js","226697344100ab47e8ee81a43d80975e"],["/lib/han/src/js/regex/typeset.js","8199232e354a7e1070602c832a5feba3"],["/lib/han/src/js/regex/unicode.js","d940497e84cd408dc166f0d19ddafced"],["/lib/han/src/js/typeface.js","0cab33bfec96a6a7422a7cafd66d1304"],["/lib/han/src/js/typography.js","98c8e9f571607ef7c2734480e4c20bf2"],["/lib/han/src/js/typography/biaodian.js","77a11796e5dc4c850bfedd48439eb9b8"],["/lib/han/src/js/var/body.js","c2cf34e5a1a17186c10ac4bf9ef4e5ea"],["/lib/han/src/js/var/document.js","ac1952d633ad3a6015ad9439dedb2fb8"],["/lib/han/src/js/var/root.js","65f96bd6a5d5a40e0aa5dba8c6018b6f"],["/lib/han/src/lib/fibre.js/index.js","af28e3617304f9aa02f99b4c201f51b4"],["/lib/han/src/lib/require.js","9a5abad043df0d348bdc5eb2c200973a"],["/lib/han/src/sass/example.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/sass/han.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/api.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/example.css","0a13fa0306b1ad314f5d7f40b923f774"],["/lib/han/src/styl/han.css","72311bf989b7185ead31ef004523494b"],["/lib/han/src/styl/index.css","630e6e1b11f8d0b1eff3691e92e480bd"],["/lib/han/src/styl/inline/em.css","fc4b027bc8cb2694dd1e46624a4f3b78"],["/lib/han/src/styl/inline/hanging.css","e3a94e7a68cbc0053aca46858a97bcaf"],["/lib/han/src/styl/inline/hws.css","e9ae62032c6993dbdc4aae775a100142"],["/lib/han/src/styl/inline/jiya.css","0cd61ef570d20169e01b8d140d11f463"],["/lib/han/src/styl/inline/subst.css","1b50276436055007b6e55d1e6ecd7fa0"],["/lib/han/src/styl/locale.css","5c3ec5f4be0b27440c69e9d371d89c62"],["/lib/han/src/styl/locale/const.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/locale/enhancement.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/locale/h-ruby.css","762bd2ba8e7306a319786ee39e858c84"],["/lib/han/src/styl/locale/mixin.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/locale/normalize.css","da0ce69de29e35783ff5dfe6cc7de0c9"],["/lib/han/src/styl/locale/semantics.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/section/counter.css","2cfb91bd7a4d2363d486cc6af0414e3f"],["/lib/han/src/styl/section/well-knit.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typeset.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography.css","70b74e998d481cebd8b2f8edb2c48fea"],["/lib/han/src/styl/typography/extend.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/extend/cursive.css","a83fc088c1ce1334675a8ee7a1ace4da"],["/lib/han/src/styl/typography/extend/mono.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/extend/sans.css","fbf423133324eac903816af71c2c8fbd"],["/lib/han/src/styl/typography/extend/serif.css","139ddb76eee592466cede5d7bbae8fca"],["/lib/han/src/styl/typography/ff.css","da7abce73fcd155b441de50b0520b3bb"],["/lib/han/src/styl/typography/ff/biaodian.css","d6dd26efa8939f9d0a4d3cb0ecaeb887"],["/lib/han/src/styl/typography/ff/fangsong.css","024c87f6a7f4fe7ff52374af8d3f9738"],["/lib/han/src/styl/typography/ff/heiti.css","13e6f4a69701456dafc2ec2c9020037f"],["/lib/han/src/styl/typography/ff/italic.css","103d7ccd3a482c169dd7e433b6f2918d"],["/lib/han/src/styl/typography/ff/kaiti.css","5cb44a02be05092d5502e03cd14fd4f8"],["/lib/han/src/styl/typography/ff/numeral.css","ad6e701a7b4664c497a6e13ada1126e6"],["/lib/han/src/styl/typography/ff/range.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/ff/ruby.css","c7b7dd6e745d7f9baac87eaa31ddf9c7"],["/lib/han/src/styl/typography/ff/songti.css","7bb2026ca089784dd68814e215059c57"],["/lib/han/src/styl/typography/mixin.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/typography.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/var/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/var/internal.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/test/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/han/test/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/han/test/index.html","e9fdd8d19b0de496e90185323b6f5ad1"],["/lib/han/test/index.js","463259527c2afae89a3c284c09ce3603"],["/lib/han/test/qunit-assert-dom.min.js","694fa96f91d549ca64d0937cb25d8c78"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","7f1bc27331d7c1df5be25fca832a6cdb"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","dc9411cf0a7b6609272fdfd688fffbf8"],["/p/0274.html","91b800f83c21022950e9d3233ef37c1e"],["/p/1578.html","aab34b21c9dbd80c16b664cbf6a1f82c"],["/p/1605.html","a52b8470e89141f2d5e346c28873b686"],["/p/1adf.html","8a4e60cc118d8c3a184e21336894041f"],["/p/1i2o.html","c8e9d12d2d6ca33cbe9309ee65c15a5c"],["/p/41eb.html","3acbd9830929e7402d571b7b01ec2489"],["/p/4665.html","967e18859893cb9f9f23e70da1667d51"],["/p/4966.html","2e51ed503dddda20c0ee65684d1da2ad"],["/p/71a0.html","5aa8e5af4a88597fa0c0d290b1ab1fc9"],["/p/7db7.html","7b94f6d48bffbeec718985afd0b9467c"],["/p/8527.html","508f9b03ae75622ef9d6e05cfc1d56ef"],["/p/8964.html","b4509bd708858479f326b3def0c3347e"],["/p/8c3b.html","1819f75e1a5a68857654e731d1f5b392"],["/p/9ce3.html","ab5b336c5742d2f0c2deaf7cf7094202"],["/p/a123.html","a9d4ae54be36e6a5b3f0adf3071b72a6"],["/p/a661.html","582effe68ba352b4554cd45d3341a3fc"],["/p/ae4b.html","f3e6ddfb5438ddcb25af5a80deee6436"],["/p/c7bc.html","7b4165f19f80fc52873ea659635a616e"],["/p/dc59.html","a465bce2d1b29d6e961cd5a85e260714"],["/page/2/index.html","bb72f66f57ae4d2b49ea321ed4c54bfd"],["/page/3/index.html","d5b50d58c0540b41e5b3ba6b011e2a87"],["/photos/index.html","7aaf0136524018cb1ca9451ba561f0f6"],["/sw-register.js","56c2e5d57aefe849ef2c606a12190dfd"],["/tags/Mathematica/index.html","70b1fc9765e078119ce1b376cbfb2e7e"],["/tags/Submachine/index.html","59e07073e20ae10e8994916ab2dde522"],["/tags/index.html","3b79ade06ae61d2ff965079498e77550"],["/tags/业力/index.html","eec7ac607f51df0cc3e899632c1bde64"],["/tags/个人隐私/index.html","a28076df4801485aa8d15888060456f5"],["/tags/人工智能/index.html","5ee501e282d9e3baf6a599dc4884840c"],["/tags/信息安全/index.html","b442ae2bceb36f350f857f93a8f606a6"],["/tags/兰切斯特战术/index.html","3c01b7cfcd436abf298d1640b45cc302"],["/tags/分子轨道/index.html","be1b4234d6448dfdb08833e8f299ed8f"],["/tags/南昌大学/index.html","0cca694f5ee3fcc542c6abaff94d03c1"],["/tags/反抗/index.html","34c9a9166d5825726d517950b40c1aa6"],["/tags/古埃及/index.html","027d705b1a7fd82cdd6870e06798c000"],["/tags/同人文/index.html","7608c9a9e7de56f504cc0c548d044f38"],["/tags/同人活动/index.html","685a7eba10e37d8b458073d940536263"],["/tags/同人社团/index.html","427f8ba5611ac5250aa97390aec3523c"],["/tags/四维/index.html","25e91431923c64fa405dfebce0c97f07"],["/tags/坐标系/index.html","86b9a3cfb5e1b9092caee6761b78d5f8"],["/tags/夏日之恋/index.html","b6795024792c95bc68db35b361991422"],["/tags/大数据时代/index.html","b8000937db0dc599b75460c72bde5eab"],["/tags/家族構造/index.html","d03aa8d86b0ffac86eeb2ee1448cccfd"],["/tags/尼采/index.html","90755de1c534cc68b1f51ba631336066"],["/tags/德国/index.html","8b25492af6b4b8d4d833f0628ee0e84b"],["/tags/披头士/index.html","3d1d87f0418e26568dd9173ca17795a1"],["/tags/摇滚/index.html","70814baf68eadf5231adf0581d63f2d0"],["/tags/教程/index.html","c22c7718dc0783d69538fbe5001d9428"],["/tags/日升之屋/index.html","df440bb60dac54ad738e9500518093d4"],["/tags/日语/index.html","649e189f73f2911eaa83b464f3ac621d"],["/tags/有机合成/index.html","814d11cdb23604d512ac3ce44409d593"],["/tags/比那名居天子/index.html","c7ec9fb92c40faea4439a2a963e28ee7"],["/tags/氦合质子/index.html","63016f4e3d900f1f5dc5e565a84d111f"],["/tags/流行词/index.html","932c59b5fe36a498c1d890d2d618f9e2"],["/tags/深空天体/index.html","fe3224d1be6196cd52fc491251ef6acc"],["/tags/现代性/index.html","cd8ce204c943b4bf9929b707045e5f57"],["/tags/理性/index.html","08a6e2d07f86cd862ccbedfc8bdea329"],["/tags/移动端优化/index.html","5edfecd09fd866c932fe088b99c15b85"],["/tags/羰基反应/index.html","2722c2aab6bda39a066a1cdc15e5b348"],["/tags/自由/index.html","710f63d67529260d8a46f3db9c74c1d6"],["/tags/计算化学/index.html","e0c52a5418007cef9cb7a4d78380a2ac"],["/tags/造语法/index.html","ce708858b21a7a92f7caec3c070caac9"],["/tags/風土論/index.html","9ca72fe007b2b2969d206c401847e309"],["/tags/高中生活/index.html","d97577bcd16f8e758c871d20d56a7309"]];
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
