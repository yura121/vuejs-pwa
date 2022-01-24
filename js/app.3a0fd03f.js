(function(e){function t(t){for(var r,i,u=t[0],c=t[1],d=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("friend-list"),r("friend-adder"),e.prompt?r("div",{staticClass:"update-dialog"},[r("div",{staticClass:"update-dialog__content"},[e._v(" A new version is found. Refresh to load it? ")]),r("div",{staticClass:"update-dialog__actions"},[r("button",{staticClass:"update-dialog__button update-dialog__button--confirm",on:{click:e.update}},[e._v(" Update ")]),r("button",{staticClass:"update-dialog__button update-dialog__button--cancel",on:{click:function(t){e.prompt=!1}}},[e._v(" Cancel ")])])]):e._e()],1)},o=[],i=n("1da1"),u=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.items,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t.name)+", "+e._s(t.age)+" ")])})),0)}),c=[],d=(n("d3b7"),n("4dec")),s=n("3ca3"),l=new d["a"]("myDatabase");l.version(1).stores({friends:"++id, name, age"});var f,p={name:"FriendList",setup:function(){return{db:l,items:Object(s["a"])(Object(d["b"])((function(){return l.friends.toArray()})))}}},m=p,v=n("2877"),g=Object(v["a"])(m,u,c,!1,null,null,null),b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",[n("legend",[e._v("Add new friend")]),n("label",[e._v(" Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.friendName,expression:"friendName"}],attrs:{type:"text"},domProps:{value:e.friendName},on:{input:function(t){t.target.composing||(e.friendName=t.target.value)}}})]),n("br"),n("label",[e._v(" Age: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.friendAge,expression:"friendAge"}],attrs:{type:"number"},domProps:{value:e.friendAge},on:{input:function(t){t.target.composing||(e.friendAge=t.target.value)}}})]),n("br"),n("button",{on:{click:e.addFriend}},[e._v("Add Friend")]),n("p",[e._v(e._s(e.status))])])},h=[],w=(n("99af"),21),y={name:"FriendAdder",data:function(){return{status:"",friendName:"",friendAge:w}},methods:{addFriend:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.friends.add({name:e.friendName,age:e.friendAge});case 3:n=t.sent,e.status="Friend ".concat(e.friendName,"\n          successfully added. Got id ").concat(n),e.friendName="",e.friendAge=w,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.status="Failed to add\n          ".concat(e.friendName,": ").concat(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},x=y,O=Object(v["a"])(x,_,h,!1,null,null,null),j=O.exports,k={name:"App",components:{FriendAdder:j,FriendList:b},methods:{update:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.prompt=!1,t.next=3,e.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return t.stop()}}),t)})))()}},data:function(){return{prompt:!1}},created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.prompt=!0}))}},A=k,N=(n("034f"),Object(v["a"])(A,a,o,!1,null,null,null)),P=N.exports,F=n("acfa");"serviceWorker"in navigator?(f=new F["a"]("".concat("","service-worker.js")),f.addEventListener("controlling",(function(){window.location.reload()})),f.register()):f=null;var $=f;r["default"].prototype.$workbox=$,r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3a0fd03f.js.map