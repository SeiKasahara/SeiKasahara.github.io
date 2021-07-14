/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4ad4454005efe4f23cf12f221764c207"],["/404/bg.jpg","12171423dcbb5b702f26e8361ff64e88"],["/404/few.jpg","039eba7d44cf7aff24008cdc280d16dd"],["/404/font-awesome.min.css","5961b8b14989c75c379f00f9e82617e7"],["/404/index.html","4c002a97b31dffb732f9fe942a1e6618"],["/404/main.css","4088f7ec928a08ee881183fcb4a70fa3"],["/about/index.html","18729a7e65edd4386d0e07713d256f37"],["/archives/2018/07/index.html","52b58c8348215a760b258afd48c07c2c"],["/archives/2018/index.html","b1ecf2a600d6fd2cbab5ab0142fd13d6"],["/archives/2019/05/index.html","41f02598eac54b6f8100a18cee4d04a0"],["/archives/2019/index.html","d5598d9d00bde78202d40b1807f84b68"],["/archives/2020/01/index.html","d16d177554187c4a8607bd3f33f4e00a"],["/archives/2020/02/index.html","68aecfff2e58d23e7a2a729f40eadac0"],["/archives/2020/10/index.html","f404a443bf6238ab1e3187bc2997f624"],["/archives/2020/11/index.html","171d52f0fe43f636118ca2916e8fe23c"],["/archives/2020/index.html","8141c5409e15c3917f1fbddbdd760a21"],["/archives/2021/01/index.html","8f1daffccf69fbd2cdfbd08a5dbb2cc6"],["/archives/2021/02/index.html","4c16f3d30c843307270d9224df3eccbf"],["/archives/2021/03/index.html","a982232b2e77d8e37a81311e333e92c9"],["/archives/2021/04/index.html","327ae547a9cd72a3b8a554e8231d1277"],["/archives/2021/05/index.html","fd8a64f78f7ee0b5199b173dc9468d4e"],["/archives/2021/06/index.html","d9f7e4ea3a43c1fc5f684e019c8d5245"],["/archives/2021/index.html","261e03fd343d4f9dc488378c40280d71"],["/archives/index.html","bb4a38e70fbfc7f539097581d30af2f9"],["/archives/page/2/index.html","4fc1638e589c7efb4a28b197a638a558"],["/archives/page/3/index.html","4140b81c46a92e598190e29b151b9c3c"],["/categories/Hexo博客技巧/index.html","063381f6535159f7b82e96c0aeaedf3d"],["/categories/index.html","b0f66538707b72ba2ac651d71ea11786"],["/categories/东方Project同人/index.html","7043f4d91784885f0e024234982fa9ee"],["/categories/哲学/index.html","87c9049aa09f8c28e1ca96e8196d2738"],["/categories/天文摄影/index.html","e18b9a6595ec57ff2db367f23d8b701b"],["/categories/战术/index.html","05a6ee125aa6adf7a33afdada9e6548d"],["/categories/文本翻译/index.html","622b4bceae7c6280766e3c5798a92999"],["/categories/文献翻译/index.html","349a425cc571dc77b6fe554d80faa80e"],["/categories/时评/index.html","58d165465f326fc8f7444c6dc7906c20"],["/categories/有机化学/index.html","4b1c53fa2b1d7893424f4921aa1ccd08"],["/categories/架空世界/index.html","4731481503b93d779b75a64b64fa4389"],["/categories/社会学/index.html","81cd6486f124dd13d74feffc4ea45fb6"],["/categories/自传/index.html","748c60025f28b82c4ad672f720471acd"],["/categories/语言学/index.html","e784733613b262f0dd5a8d791b798ed8"],["/categories/量子化学/index.html","ac845a9c9f92bf803cee2644922fcfcd"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","caec3e68c571585c112506e5edb1fa91"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/1.png","1723f9f6e815ac730792fb3112db3c99"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","406f80d6e5b4ad6c207f5c956f1707b1"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg.jpg","0ec130ec1758067ba17843e70ea63521"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","94eae543f1bc5bcec578c4fa2a550877"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","d0409732a15961b6779634bd70c7f572"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3ba1cb5b092a9dc51302eb433fc1a5ec"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","679220e951b697a81e71f3f694cccae6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","bf9d6a4f474701b3e23b5b077a74f24a"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","47f7900be91fee65e72f8322a0dfde35"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","10767f5954c3306bdc42dbc7e7203c5b"],["/js/wobblewindow.js","6bd8ea6e48bd12b79754367219074a53"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/adaptive.js","875e757169d3d04ff434d28f8ac77b15"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","79adc48f5c7c94eab4f2c7b1bd58acac"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/han/CHANGELOG.html","05a715b71f0883e4b12dfa5e392cbaa3"],["/lib/han/LICENSE.html","01cdce67d9c9f934314f5c4be261d3e4"],["/lib/han/README-en.html","53a6a3d07b80a9a4e70e56b656f85495"],["/lib/han/README-ja.html","60040717dee3d6dc79d90ba036f67e8a"],["/lib/han/README.html","20be470ac29e9dfe18a01b6e2876681a"],["/lib/han/demo/README.html","78336ba99fd42d80639ec92f99dbc0a5"],["/lib/han/demo/biaodian.html","11c5f3b860c5ebb2a850ceb339b7dbe0"],["/lib/han/demo/counter-han.css","8694960a0dd84adea4dff4c8f997c8ba"],["/lib/han/demo/counter.html","d03511e86c0aa162b86ad5c9c3466056"],["/lib/han/demo/deco-line.html","66fd15d2715f498b350957138e06d55e"],["/lib/han/demo/em-han.css","621c9a63e09961a9feca07dc7d26b08b"],["/lib/han/demo/em.html","3b6a4ec03c5e3501f9f1b9cb4d144661"],["/lib/han/demo/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/han/demo/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/han/demo/four.html","21029e072d4cbc74890e525eb6df9ce1"],["/lib/han/demo/generics-han.css","a64c35d85c55e30f466cd535fd64acef"],["/lib/han/demo/generics.html","7895ea0fe70c951726cb28df17512f36"],["/lib/han/demo/han.css","2d63dc8d264ba08c64a5a3dcb416091e"],["/lib/han/demo/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/han/demo/han.min.css","408ffcd3305d9e8d7bbb7ae9ab478f66"],["/lib/han/demo/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/han/demo/hanging.html","199266223a8174e69f2a027e7a5c07ef"],["/lib/han/demo/hws.html","94c0401cb6b724ecd852e12ed9e54ffd"],["/lib/han/demo/index.html","9e33d11f040ba70422ac2920a33c2eb1"],["/lib/han/demo/italic.html","4e848c92b3d0b03e20f85d21a0ad4531"],["/lib/han/demo/jiya.html","361640146b1f6c07e37a035262c02ce9"],["/lib/han/demo/numeral.html","3fe4483ba69ecfabaf1a77d88d66c016"],["/lib/han/demo/require.js","9a5abad043df0d348bdc5eb2c200973a"],["/lib/han/demo/ruby(ff)-han.css","d2972c2ea4be223a3e4fcac065a95309"],["/lib/han/demo/ruby(ff).html","565b5855e49caca52d20c74988766bfe"],["/lib/han/demo/ruby.html","7057cc2b314cbc89f6f193f665a49099"],["/lib/han/demo/shs.html","074d0e1d2018694775c6d9fedf771fb6"],["/lib/han/demo/subst.html","2aaf06da3b5976010d4a522831425553"],["/lib/han/demo/test-amd.html","1e98298008c74e251d83597d4948a8cf"],["/lib/han/demo/test-amd.js","03fa913a8b3e523e8275e0a47aed1682"],["/lib/han/demo/test-commonjs.html","e5387448bc2b49f4a8bfd8f26a027387"],["/lib/han/demo/test-commonjs.js","85bdbbc5256b411974f994b9d130ef17"],["/lib/han/demo/test-hans.html","f919a68a3114e87d70a24fa99062f3ba"],["/lib/han/demo/test-ja.html","062db077ca493cfebb7d1829dead03a2"],["/lib/han/demo/test-nojs.html","fead03e07b6186102a8b0e376a6f32b8"],["/lib/han/demo/test.html","9385ea4fec8c8b3ca86f4eed4b35429f"],["/lib/han/demo/well-knit.html","6427c176043933cce14f57a06268ba1e"],["/lib/han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/han/dist/han.css","2d63dc8d264ba08c64a5a3dcb416091e"],["/lib/han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/han/dist/han.min.css","408ffcd3305d9e8d7bbb7ae9ab478f66"],["/lib/han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/han/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/han/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/han/index.css","630e6e1b11f8d0b1eff3691e92e480bd"],["/lib/han/index.js","b19d23e2b927b8aea5c6e6975ca3589e"],["/lib/han/src/js/core.js","ececa017a08b1574fc0e7495d3324515"],["/lib/han/src/js/dom-ready.js","8c173cfcd322369f43fc359c821cd202"],["/lib/han/src/js/find.js","97b00abcd411f3f9f83510c5eb7a3270"],["/lib/han/src/js/global.js","63f05719ece26c4f4ffe228813934cf0"],["/lib/han/src/js/han.js","7d30093762d73e78db08a40273a0d319"],["/lib/han/src/js/inline.js","da1bdac161ed544ed758e91485ccef61"],["/lib/han/src/js/inline/hanging.js","874f3dbaaf0867ca87bd7f5298be911c"],["/lib/han/src/js/inline/hws.js","97c4e843c354c11cb04efaab07c4131c"],["/lib/han/src/js/inline/jiya.js","e1ca31cc28a3fc60c34745f5d740e5f3"],["/lib/han/src/js/inline/subst.js","59733611aece58ee49c204f1447df4d5"],["/lib/han/src/js/intro.js","a8cb7ac2189e71cb0c477dbcc6f35b42"],["/lib/han/src/js/locale.js","227acc74c1d52b790965f34440c7b165"],["/lib/han/src/js/locale/core.js","61d159bf46bde5270db660b1aca9ed89"],["/lib/han/src/js/locale/detect-font.js","9459388e9c22489c8f851d22d8be5d51"],["/lib/han/src/js/locale/h-ruby.js","bafcb95c5ea291da00a83d1e845817c7"],["/lib/han/src/js/locale/init-cond.js","222524a822b02b31244945e2b2a02874"],["/lib/han/src/js/locale/locale.js","841f0e064f8d55ad1e8e60106707fbf8"],["/lib/han/src/js/locale/normalize.js","ac09fe2fb2f251eabe1f4bb959e0b504"],["/lib/han/src/js/locale/support.js","c047869dee360444f04f45e5dd3f4fa2"],["/lib/han/src/js/method.js","3be65b076e5170c091c4305fa574e7fd"],["/lib/han/src/js/outro.js","b5ea957cf68cbabfe6d87fe42db13c61"],["/lib/han/src/js/regex.js","226697344100ab47e8ee81a43d80975e"],["/lib/han/src/js/regex/typeset.js","8199232e354a7e1070602c832a5feba3"],["/lib/han/src/js/regex/unicode.js","d940497e84cd408dc166f0d19ddafced"],["/lib/han/src/js/typeface.js","0cab33bfec96a6a7422a7cafd66d1304"],["/lib/han/src/js/typography.js","98c8e9f571607ef7c2734480e4c20bf2"],["/lib/han/src/js/typography/biaodian.js","77a11796e5dc4c850bfedd48439eb9b8"],["/lib/han/src/js/var/body.js","c2cf34e5a1a17186c10ac4bf9ef4e5ea"],["/lib/han/src/js/var/document.js","ac1952d633ad3a6015ad9439dedb2fb8"],["/lib/han/src/js/var/root.js","65f96bd6a5d5a40e0aa5dba8c6018b6f"],["/lib/han/src/lib/fibre.js/index.js","af28e3617304f9aa02f99b4c201f51b4"],["/lib/han/src/lib/require.js","9a5abad043df0d348bdc5eb2c200973a"],["/lib/han/src/sass/example.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/sass/han.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/api.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/example.css","0a13fa0306b1ad314f5d7f40b923f774"],["/lib/han/src/styl/han.css","72311bf989b7185ead31ef004523494b"],["/lib/han/src/styl/index.css","630e6e1b11f8d0b1eff3691e92e480bd"],["/lib/han/src/styl/inline/em.css","fc4b027bc8cb2694dd1e46624a4f3b78"],["/lib/han/src/styl/inline/hanging.css","e3a94e7a68cbc0053aca46858a97bcaf"],["/lib/han/src/styl/inline/hws.css","e9ae62032c6993dbdc4aae775a100142"],["/lib/han/src/styl/inline/jiya.css","0cd61ef570d20169e01b8d140d11f463"],["/lib/han/src/styl/inline/subst.css","1b50276436055007b6e55d1e6ecd7fa0"],["/lib/han/src/styl/locale.css","5c3ec5f4be0b27440c69e9d371d89c62"],["/lib/han/src/styl/locale/const.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/locale/enhancement.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/locale/h-ruby.css","762bd2ba8e7306a319786ee39e858c84"],["/lib/han/src/styl/locale/mixin.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/locale/normalize.css","da0ce69de29e35783ff5dfe6cc7de0c9"],["/lib/han/src/styl/locale/semantics.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/section/counter.css","2cfb91bd7a4d2363d486cc6af0414e3f"],["/lib/han/src/styl/section/well-knit.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typeset.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography.css","70b74e998d481cebd8b2f8edb2c48fea"],["/lib/han/src/styl/typography/extend.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/extend/cursive.css","a83fc088c1ce1334675a8ee7a1ace4da"],["/lib/han/src/styl/typography/extend/mono.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/extend/sans.css","fbf423133324eac903816af71c2c8fbd"],["/lib/han/src/styl/typography/extend/serif.css","139ddb76eee592466cede5d7bbae8fca"],["/lib/han/src/styl/typography/ff.css","da7abce73fcd155b441de50b0520b3bb"],["/lib/han/src/styl/typography/ff/biaodian.css","d6dd26efa8939f9d0a4d3cb0ecaeb887"],["/lib/han/src/styl/typography/ff/fangsong.css","024c87f6a7f4fe7ff52374af8d3f9738"],["/lib/han/src/styl/typography/ff/heiti.css","13e6f4a69701456dafc2ec2c9020037f"],["/lib/han/src/styl/typography/ff/italic.css","103d7ccd3a482c169dd7e433b6f2918d"],["/lib/han/src/styl/typography/ff/kaiti.css","5cb44a02be05092d5502e03cd14fd4f8"],["/lib/han/src/styl/typography/ff/numeral.css","ad6e701a7b4664c497a6e13ada1126e6"],["/lib/han/src/styl/typography/ff/range.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/ff/ruby.css","c7b7dd6e745d7f9baac87eaa31ddf9c7"],["/lib/han/src/styl/typography/ff/songti.css","7bb2026ca089784dd68814e215059c57"],["/lib/han/src/styl/typography/mixin.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/typography/typography.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/var/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/src/styl/var/internal.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/han/test/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/han/test/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/han/test/index.html","16f04137bc9dd861e39442c8dbd7f3ef"],["/lib/han/test/index.js","463259527c2afae89a3c284c09ce3603"],["/lib/han/test/qunit-assert-dom.min.js","694fa96f91d549ca64d0937cb25d8c78"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/lib/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/lib/needsharebutton/font/fontello.eot","554fcb8f6f463d652255b4ebf1985d1a"],["/lib/needsharebutton/font/fontello.svg","01093c118e7441ce027b7c6ce071c154"],["/lib/needsharebutton/font/fontello.ttf","6efe6247b258f94428ca8b0e454737c2"],["/lib/needsharebutton/font/fontello.woff","e8f3ac9ad7cd30dc01fe17b1a48d624a"],["/lib/needsharebutton/font/fontello.woff2","5e8a3d8db5425c9de793553ab295c4ff"],["/lib/needsharebutton/fontello-embedded.css","b17c20648e252aa5e4f8f119f88ee6dd"],["/lib/needsharebutton/needsharebutton.css","0b01f295c537c8dbc4d005480f451148"],["/lib/needsharebutton/needsharebutton.js","5bd32b1c7b548ead703b55c49934f436"],["/lib/needsharebutton/needsharebutton.min.css","9d74ab038f2768e49c8d962819484840"],["/lib/needsharebutton/needsharebutton.min.js","bc13476121a03b123e3f2800e590ce0d"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fb196d8fa3df4d1e26825563dad3913b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messages/index.html","8caa043f5fb62eec2f2f780be9a21e4b"],["/p/0274.html","e24e85f3bced6b3d5a24011984140824"],["/p/1578.html","f671fb08448ea23381f429ca8f1dfbf4"],["/p/1605.html","e8b90cabe8d8be397f722699f6be9536"],["/p/1adf.html","a81784c56cd74aef7526604a817ff91e"],["/p/1i2o.html","3e66e361993ab10a661ade2752e0a6fa"],["/p/1yui.html","e2cd77cf035bf8b48e60879d83782007"],["/p/41eb.html","34bec99ce34031490d40bc76283f111b"],["/p/4665.html","c4b97057d765a59b0eb611d7cd074e33"],["/p/4966.html","e52c966f79584136ca5334ccc15f43e4"],["/p/71a0.html","ec30b6ae2566ee554f60495d930f2959"],["/p/7db7.html","2067d4e87f6b47f0efeb38a8a5019740"],["/p/8527.html","d21f54921bef009ea600f71122e6d2b8"],["/p/8c3b.html","16500d38198d605859d22f6955cce2b8"],["/p/9ce3.html","51eb76b6f02307bd27382ac2e9e9edc8"],["/p/a123.html","8fae3f79a6e8afd259c5e5223b0b95a9"],["/p/a661.html","0ba8de449790f6f9bfd0100f4183dac7"],["/p/ae4b.html","b5394d204bf929e0fd94ebc2fa1ad2cf"],["/p/c7bc.html","a8636c70b473a1a6961f725b701cb3ad"],["/p/dc59.html","088ab93987b34ef5a36595a5502aff4e"],["/page/2/index.html","8e826bf0f53637af879517d0cde720ba"],["/page/3/index.html","047dfcd89b4a2805b7567097bae9eb0b"],["/photos/index.html","8e41595b06845415449143f698a4b5bb"],["/sw-register.js","8813cd72ca5fed387ab20fbe871b8a09"],["/tags/Mathematica/index.html","42976ac22fc29fa5deab214cacaf9bf3"],["/tags/Submachine/index.html","f29e767392f77ece08f1ff6433d63a4d"],["/tags/index.html","f1d90715e3ec45fe1be0352e41982cb7"],["/tags/业力/index.html","55dd211b6d720c29a3b9983a56db76a5"],["/tags/个人隐私/index.html","35df870dc4a2c116079fb7d91ca3b099"],["/tags/人工智能/index.html","c5dba997267445a79f6ca943080f0c52"],["/tags/信息安全/index.html","ac4a28bf953e74c7457379add8642dc9"],["/tags/兰切斯特战术/index.html","0b3237f9fd5ca431277ec7e3fabf3617"],["/tags/分子轨道/index.html","faf12237e5b6cf0b4e4a24c8c5592218"],["/tags/南昌大学/index.html","7b9e7d0e3f6a95fe4361f0b536d5c791"],["/tags/反抗/index.html","e50406a3f9b92e8f834066723d074170"],["/tags/古埃及/index.html","fea8460a85484faf0914e20417b5b398"],["/tags/同人文/index.html","cc298eacdeeac78b0965c6d595196e16"],["/tags/同人活动/index.html","5220e2768e3ffb03fc0a1e222a723287"],["/tags/同人社团/index.html","284a7fcadfe1426e67d0f9da132b7e7b"],["/tags/四维/index.html","52910179fc1b2a5dfc9b10b6f4aa3c66"],["/tags/坐标系/index.html","1a15b1d05fbfc2a915141288c11d6cf1"],["/tags/夏日之恋/index.html","687ebc905012e1781a5f758cfd8f6b64"],["/tags/大数据时代/index.html","780c8e2f3c9c319771886b1698b48d9a"],["/tags/家族構造/index.html","61bd114bd81e049a5ea142cc051a05ee"],["/tags/尼采/index.html","8e8b7c24fea4d3bab36fb3089af6af76"],["/tags/德国/index.html","8f61b6fac6f56dae78d4563015cbd246"],["/tags/披头士/index.html","34da6e4da4f7822cb9375f950e39e4d1"],["/tags/摇滚/index.html","0ea195cb7ebadc8b8b8938921fb91eb3"],["/tags/教程/index.html","7123952347801ceb48f0dd672f3967d2"],["/tags/日升之屋/index.html","cf21b2a0d1a353547fa15e1cfb7bc012"],["/tags/日语/index.html","2a73ee7feb5c0aaac5163d8b3e28798c"],["/tags/有机合成/index.html","cf5e86d9f50256f30386808d75f962f4"],["/tags/比那名居天子/index.html","426ffaa7ca37c7e50f13a584bfffdbd2"],["/tags/氦合质子/index.html","bed189cdda087839ae6057ac582e4f03"],["/tags/法律/index.html","74bbfe5ebf18ff56cf9fb4bea4d6d384"],["/tags/流行词/index.html","c2ddb00a7a193dfe6bfb8410cc06754b"],["/tags/深空天体/index.html","a721eb382c64cd1aaeb0cb609ba224a3"],["/tags/现代性/index.html","43185aad2212f728fb53355753aca2c7"],["/tags/理性/index.html","897360a34cfb6273b793047dafea0e3c"],["/tags/移动端优化/index.html","69b4306cc48d477be67ae432859c7ce6"],["/tags/羰基反应/index.html","29faa7b6deb19490841ab2ccb788ea57"],["/tags/自由/index.html","32eb7393d2c57002fefafbe4addef442"],["/tags/计算化学/index.html","8c2c2df3f4ddbb7e8a2433aefa0be743"],["/tags/造语法/index.html","f07025333f325e56a519399509a05cc6"],["/tags/風土論/index.html","3db140df70744e0de495e79cfb56303d"],["/tags/高中生活/index.html","17d3d92392f438a2ed1c1a2ab949f36b"]];
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
