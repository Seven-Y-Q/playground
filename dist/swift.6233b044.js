parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GKZh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var e={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]};exports.conf=e;var t={defaultToken:"",tokenPostfix:".swift",identifier:/[a-zA-Z_][\w$]*/,attributes:["@autoclosure","@noescape","@noreturn","@NSApplicationMain","@NSCopying","@NSManaged","@objc","@UIApplicationMain","@noreturn","@availability","@IBAction","@IBDesignable","@IBInspectable","@IBOutlet"],accessmodifiers:["public","private","internal"],keywords:["__COLUMN__","__FILE__","__FUNCTION__","__LINE__","as","as!","as?","associativity","break","case","catch","class","continue","convenience","default","deinit","didSet","do","dynamic","dynamicType","else","enum","extension","fallthrough","final","for","func","get","guard","if","import","in","infix","init","inout","internal","is","lazy","left","let","mutating","nil","none","nonmutating","operator","optional","override","postfix","precedence","prefix","private","protocol","Protocol","public","repeat","required","return","right","self","Self","set","static","struct","subscript","super","switch","throw","throws","try","try!","Type","typealias","unowned","var","weak","where","while","willSet","FALSE","TRUE"],symbols:/[=(){}\[\].,:;@#\_&\-<>`?!+*\\\/]/,operatorstart:/[\/=\-+!*%<>&|^~?\u00A1-\u00A7\u00A9\u00AB\u00AC\u00AE\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7\u2016-\u2017\u2020-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3030]/,operatorend:/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE00-\uFE0F\uFE20-\uFE2F\uE0100-\uE01EF]/,operators:/(@operatorstart)((@operatorstart)|(@operatorend))*/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},{include:"@attribute"},{include:"@literal"},{include:"@keyword"},{include:"@invokedmethod"},{include:"@symbol"}],whitespace:[[/\s+/,"white"],[/"""/,"string.quote","@endDblDocString"]],endDblDocString:[[/[^"]+/,"string"],[/\\"/,"string"],[/"""/,"string.quote","@popall"],[/"/,"string"]],symbol:[[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/[.]/,"delimiter"],[/@operators/,"operator"],[/@symbols/,"operator"]],comment:[[/\/\/\/.*$/,"comment.doc"],[/\/\*\*/,"comment.doc","@commentdocbody"],[/\/\/.*$/,"comment"],[/\/\*/,"comment","@commentbody"]],commentdocbody:[[/\/\*/,"comment","@commentbody"],[/\*\//,"comment.doc","@pop"],[/\:[a-zA-Z]+\:/,"comment.doc.param"],[/./,"comment.doc"]],commentbody:[[/\/\*/,"comment","@commentbody"],[/\*\//,"comment","@pop"],[/./,"comment"]],attribute:[[/\@@identifier/,{cases:{"@attributes":"keyword.control","@default":""}}]],literal:[[/"/,{token:"string.quote",next:"@stringlit"}],[/0[b]([01]_?)+/,"number.binary"],[/0[o]([0-7]_?)+/,"number.octal"],[/0[x]([0-9a-fA-F]_?)+([pP][\-+](\d_?)+)?/,"number.hex"],[/(\d_?)*\.(\d_?)+([eE][\-+]?(\d_?)+)?/,"number.float"],[/(\d_?)+/,"number"]],stringlit:[[/\\\(/,{token:"operator",next:"@interpolatedexpression"}],[/@escapes/,"string"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",next:"@pop"}],[/./,"string"]],interpolatedexpression:[[/\(/,{token:"operator",next:"@interpolatedexpression"}],[/\)/,{token:"operator",next:"@pop"}],{include:"@literal"},{include:"@keyword"},{include:"@symbol"}],keyword:[[/`/,{token:"operator",next:"@escapedkeyword"}],[/@identifier/,{cases:{"@keywords":"keyword","[A-Z][a-zA-Z0-9$]*":"type.identifier","@default":"identifier"}}]],escapedkeyword:[[/`/,{token:"operator",next:"@pop"}],[/./,"identifier"]],invokedmethod:[[/([.])(@identifier)/,{cases:{$2:["delimeter","type.identifier"],"@default":""}}]]}};exports.language=t;
},{}]},{},["GKZh"], null)
//# sourceMappingURL=swift.6233b044.js.map