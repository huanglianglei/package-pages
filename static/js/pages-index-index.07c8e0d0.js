(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0491":function(n,t,e){var i=e("6285");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("4233c8fa",i,!0,{sourceMap:!1,shadowMode:!1})},"2c1c":function(n,t,e){"use strict";var i=e("0491"),a=e.n(i);a.a},6285:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-ef5f7a3c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.content .downloadBtn[data-v-ef5f7a3c]{margin-top:%?400?%;width:%?600?%;height:%?88?%;text-align:center;line-height:%?88?%;background-color:red;border-radius:%?44?%;font-size:%?32?%;font-weight:500}',""]),n.exports=t},"9f5f":function(n,t,e){"use strict";e.r(t);var i=e("f8ba"),a=e("cc58");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("2c1c");var c,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"ef5f7a3c",null,!1,i["a"],c);t["default"]=u.exports},cc58:function(n,t,e){"use strict";e.r(t);var i=e("e512"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},e512:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{url:"itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/huanglianglei/package-pages/main/Source/package-test/manifest.plist"}},onLoad:function(){},methods:{download:function(){window.location=this.url}}};t.default=i},f8ba:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-button",{staticClass:"downloadBtn",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.download.apply(void 0,arguments)}}},[n._v("点击安装")])],1)},o=[]}}]);