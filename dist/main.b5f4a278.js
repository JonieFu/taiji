parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
window.addEventListener("load",function(){var n='/* 大家好，我是付玉\n * 今天展示一下最近所学的前端功底\n * 以下是个太极\n * 首先设定动画 */\n@keyframes bagua {\n     from{\n         transform: rotate(0deg);\n     }\n     to{\n         transform: rotate(360deg);\n     }\n } \n /* 首先画一个圆，一半黑一半白 */\n#box {\n  border: 1px solid red;\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%);\n  border-radius: 50%;\n  box-shadow: -2px -2px 5px 0px rgba(0,0,0,0.75);\n  border: none;\n}\n\n/* 画阴阳鱼,一黑一白 */\n#box::before {\n  content: "";\n  display: block;\n  border: 1px solid red;\n  width: 50%;\n  height: 50%;\n  background-color: black;\n  position:absolute;\n  left:50%;\n  top:0;\n  transform:translateX(-50%);\n  border-radius: 50%;\n  border:none;\n}\n#box::after {\n  content: "";\n  display: block;\n  border: 1px solid red;\n  width: 50%;\n  height: 50%;\n  background-color:white;\n  position:absolute;\n  left:50%;\n  top:50%;\n  transform:translateX(-50%);\n  border-radius: 50%;\n  border:none;\n}\n/* 让八卦图转起来 */\n #box {\n     animation: bagua  5s linear infinite;\n }\n\n#box::before {\n  background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);\n}\n#box::after{\n  background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%);\n}\n \n ',r=document.querySelector("#demo"),o=document.querySelector("#style"),e=0,a="";!function t(){setTimeout(function(){e<n.length&&("\n"===n[e]?a+="<br>":" "===n[e]?a+="&nbsp;":a+=n[e],r.innerHTML=a,r.scrollTo(0,9999),window.scrollTo(0,9999),o.innerHTML=n.slice(0,e),e+=1,t())},10)}()});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.b5f4a278.js.map