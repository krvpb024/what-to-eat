(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)a=s[d],o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={1:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/what-to-eat/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([17,0]),n()})({"+AVs":function(t,e,n){"use strict";var i=n("KN7o"),o=n.n(i);o.a},"+ras":function(t,e,n){"use strict";var i=n("7Hf0"),o=n.n(i);o.a},"+w/i":function(t,e,n){},"068D":function(t,e,n){"use strict";var i=n("Qb11"),o=n.n(i);o.a},17:function(t,e,n){t.exports=n("Vtdi")},"1Ixu":function(t,e,n){"use strict";var i=n("XyP0"),o=n.n(i);o.a},"3XEg":function(t,e,n){},"3kwr":function(t,e,n){"use strict";var i=n("5Nz9"),o=n.n(i);o.a},"5Nz9":function(t,e,n){},"5fVW":function(t,e,n){t.exports=n.p+"img/settings.231eca81.svg"},"794Q":function(t,e,n){"use strict";var i=n("qo9c"),o=n.n(i);o.a},"7Hf0":function(t,e,n){},"8ACY":function(t,e,n){},"9vnc":function(t,e,n){},B0Jo:function(t,e,n){t.exports=n.p+"img/checked.d6fe7e26.svg"},E3la:function(t,e,n){"use strict";var i=n("9vnc"),o=n.n(i);o.a},EM2B:function(t,e,n){t.exports=n.p+"img/confirm.85985594.svg"},HwuR:function(t,e,n){"use strict";var i=n("3XEg"),o=n.n(i);o.a},KN7o:function(t,e,n){},NVYK:function(t,e,n){t.exports=n.p+"img/edit.aa956612.svg"},NXxc:function(t,e,n){t.exports=n.p+"img/add-black.60ef3f6b.svg"},OKZ8:function(t,e,n){"use strict";var i=n("+w/i"),o=n.n(i);o.a},OPPa:function(t,e,n){t.exports=n.p+"img/trash-white.3df77a74.svg"},PAKR:function(t,e,n){t.exports=n.p+"img/cancel.9f6e4b13.svg"},PgNf:function(t,e,n){"use strict";var i=n("qedn"),o=n.n(i);o.a},Qb11:function(t,e,n){},RlUo:function(t,e,n){t.exports=n.p+"img/send.7b43232c.svg"},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":t.animationActive,"leave-active-class":t.animationLeave}},[n("router-view")],1)],1)},r=[],a=(n("f3/d"),{data:function(){return{animationActive:"",animationLeave:""}},created:function(){this.$store.commit("getInitialData")},watch:{$route:function(t,e){"group"===t.name&&"place"===e.name||"place"===t.name&&"choiceStart"===e.name?(this.animationActive="animated slideInLeft change",this.animationLeave="animated slideOutRight change"):("place"===t.name&&"group"===e.name||"choiceStart"===t.name&&"place"===e.name)&&(this.animationActive="animated slideInRight change",this.animationLeave="animated slideOutLeft change")}}}),s=a,c=(n("ZL7j"),n("KHd+")),l=Object(c["a"])(s,o,r,!1,null,null,null),u=l.exports,d=n("jE9Z"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home-section"},[i("section-header",[t._v("\n    "+t._s(t.title)+"\n    "),i("template",{slot:"right"},[i("transition",{attrs:{appear:"","enter-active-class":t.haveSeenInfo?"":"animated bounce","leave-active-class":t.haveSeenInfo?"":"animated bounce"}},[i("button",{staticClass:"infoBtn",on:{click:t.showInfoFunc}},[i("img",{attrs:{src:n("m77J"),alt:"關於"}})])])],1)],2),i("section-content",[t.groups.length>0?i("ul",t._l(t.groups,function(t){return i("group-item",{key:t.pk,tag:"li",attrs:{pk:t.pk,title:t.title}})})):i("p",{staticClass:"sign"},[t._v("目前沒有任何群組\n      "),i("br"),t._v("請點選下方按鈕新增")])]),i("action-btn",{attrs:{url:"/group/add"}},[i("img",{attrs:{src:n("sbwy"),alt:"新增"}})]),i("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[i("router-view")],1),t.showInfo?i("info",{on:{closeInfo:function(e){t.showInfo=!1}}}):t._e()],1)},h=[],m=n("yT7P"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"home-section-title"},[n("div",{staticClass:"header-nav"},[n("div",{staticClass:"header-nav-btn left"},[t._t("left")],2),n("h1",[t._t("default")],2),n("div",{staticClass:"header-nav-btn right"},[t._t("right")],2)])])},g=[],v=(n("lPDK"),{}),b=Object(c["a"])(v,f,g,!1,null,null,null),k=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-section-listgoup"},[t._t("default")],2)},S=[],_=(n("+AVs"),{}),C=Object(c["a"])(_,w,S,!1,null,null,null),y=C.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[i("section",{staticClass:"groupadd-section info"},[i("scroll-lock",{staticClass:"lock-body-scroll"},[i("section-header",[t._v("\n        關於\n        "),i("template",{slot:"right"},[i("button",{attrs:{to:"/group"},on:{click:t.closeInfo}},[i("img",{attrs:{src:n("pKEH"),alt:"關閉"}})])])],2),i("section-content",[i("article",[i("h2",[t._v("吃什麼")]),i("p",{staticClass:"emoji"},[t._v("🍔🍱🥟🍜🍝")]),i("p",[i("strong",[t._v("吃什麼")]),t._v("是一個透過機率來幫助你下決定的web app。希望至少能幫助你做決定時減少一些痛苦。\n            "),i("br"),i("br"),i("strong",[t._v("吃什麼")]),t._v("支援離線使用，資料只會儲存在你的瀏覽器裡面。\n          ")]),i("p",[t._v("你也可以把這個網頁加入手機的主畫面，之後不用再開啟瀏覽器輸入網址就可以直接使用。")]),i("p",[i("a",{attrs:{target:"_blank",rel:"noopener",href:"/what-to-eat/video/ios_demo.mp4"}},[t._v("iOS Safari 教學")])]),i("p",[i("a",{attrs:{target:"_blank",rel:"noopener",href:"/what-to-eat/video/chrome_demo.mp4"}},[t._v("Android Chrome 教學")])]),i("p",[i("a",{attrs:{target:"_blank",rel:"noopener",href:"/what-to-eat/video/firefox_demo.mp4"}},[t._v("Android Firefox 教學")])])]),i("article",[i("h2",[t._v("作者")]),i("p",[t._v("我是"),i("strong",[t._v("吃什麼")]),t._v("的作者Chen Yi-Chen，如果發現這個App有bug可以到"),i("a",{attrs:{href:"https://github.com/krvpb024/what-to-eat",target:"_blank",rel:"noopener"}},[t._v("github")]),t._v("發issue給我。或是有任何意見也可以直接發信給我")]),i("address",[i("a",{attrs:{href:"mailto:krvpb024@protonmail.com"}},[t._v("krvpb024@protonmail.com")])])])])],1)],1)])},x=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-section-add"},[n("router-link",{staticClass:"home-section-add-link",attrs:{to:t.url,disabled:""}},[t._t("default")],2)],1)},A=[],P={props:{url:String,canGo:Boolean}},F=P,B=(n("068D"),Object(c["a"])(F,I,A,!1,null,null,null)),T=B.exports,E={methods:{closeInfo:function(){this.$emit("closeInfo")}},components:{sectionHeader:k,sectionContent:y,actionBtn:T}},j=E,$=(n("PgNf"),Object(c["a"])(j,O,x,!1,null,"5a2ecc6c",null)),N=$.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"listgoup-item"},[i("div",{staticClass:"listgoup-item-title"},[i("h2",{staticClass:"listgoup-item-h2"},[t._v(t._s(t.title))]),i("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[t.showSettingBtn?i("div",{staticClass:"setting-btn-group"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn small",attrs:{type:"button"},on:{click:t.toEdit}},[i("img",{attrs:{src:n("NVYK"),alt:"編輯"}})])]):t._e()])],1),i("ul",{staticClass:"listgoup-item-ngroup"},[0===t.currentPlaces.length?i("p",{staticClass:"sign"},[t._v("該群組目前沒有任何類別")]):t._e(),i("draggable",{attrs:{options:{handle:".listgoup-item-ngroup-item-controlbtn"}},model:{value:t.currentPlaces,callback:function(e){t.currentPlaces=e},expression:"currentPlaces"}},t._l(t.currentPlaces,function(e){return i("group-item-unit",{key:e.pk,tag:"li",attrs:{pk:t.pk,placePk:e.pk,showSettingBtn:t.showSettingBtn,placeTitle:e.title}})})),i("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},on:{"after-enter":t.afterEnter,leave:t.leave}},[t.showAddForm?i("group-item-unit-add",{key:t.currentGroup+"-addform",tag:"li",attrs:{showAddForm:t.showAddForm,canFoucusAddForm:t.canFoucusAddForm,placeholder:"例如：午晚餐、下午茶、飲料等類別"},on:{addTitle:t.addTitle}}):t._e()]),i("setting-btn",{tag:"li",attrs:{currentGroup:t.currentGroup,showAddForm:t.showAddForm,showSettingBtn:t.showSettingBtn},on:{showAddFormEvent:function(e){t.showAddForm=!t.showAddForm},showSettingBtnEvent:function(e){t.showSettingBtn=!t.showSettingBtn}}})],1)])},J=[],q=(n("xfY5"),n("Vd3H"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[n("li",{staticClass:"listgoup-item-ngroup-item"},[t.showSettingBtn?t._e():n("router-link",{staticClass:"listgoup-item-ngroup-item-link",style:{width:t.fixListWidth?"30%":"100%"},attrs:{to:"/place/"+t.placePk}},[t._v("\n      "+t._s(t.placeTitle)+"\n    ")]),n("edit-Btn-group",{attrs:{showSettingBtn:t.showSettingBtn,editPlaceTitle:t.editPlaceTitle,pk:t.placePk,model:t.model},on:{modeChange:function(e){t.fixListWidth=!t.fixListWidth}}})],1)])}),M=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-btn-wrap"},[i("form",{staticClass:"edit-btn-wrap-form",on:{submit:function(e){return e.preventDefault(),t.controlEdit(e)}}},[t.showSettingBtn?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPlaceTitleData,expression:"editPlaceTitleData"}],ref:"text",class:{editing:!t.notEdit},attrs:{type:"text",disabled:t.notEdit},domProps:{value:t.editPlaceTitleData},on:{change:function(e){t.hasChanged=!0},input:function(e){e.target.composing||(t.editPlaceTitleData=e.target.value)}}}):t._e()]),i("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},on:{enter:t.controlParentWidth,"after-leave":t.controlParentWidth}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSettingBtn,expression:"showSettingBtn"}],staticClass:"edit-btn-group"},[i("transition",{attrs:{mode:"out-in","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft"}},["edit"===t.currentMode?i("div",{key:t.currentMode,staticClass:"btn-group edit-group"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn small",on:{click:t.controlEdit}},[i("img",{attrs:{src:n("NVYK"),alt:"編輯"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn small",on:{click:function(e){t.changeMode("delete")}}},[i("img",{attrs:{src:n("duTF"),alt:"刪除"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn"},[i("img",{attrs:{src:n("bbR6"),alt:"排序"}})])]):"delete"===t.currentMode?i("div",{key:t.currentMode,staticClass:"btn-group delete-group"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",on:{click:function(e){t.changeMode("confirm")}}},[i("img",{attrs:{src:n("EM2B"),alt:"確認"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",on:{click:t.changeMode}},[i("img",{attrs:{src:n("PAKR"),alt:"取消"}})])]):t._e()])],1)])],1)},L=[],D={props:{showSettingBtn:Boolean,editPlaceTitle:String,pk:{type:String,required:!0},model:{type:String,required:!0}},data:function(){return{currentMode:"edit",fixListWidth:!1,notEdit:!0,editPlaceTitleData:this.editPlaceTitle,hasChanged:!1}},methods:{controlEdit:function(){var t=this;this.notEdit=!this.notEdit,this.notEdit?this.hasChanged&&this.$store.commit("edit".concat(this.model),{title:this.editPlaceTitleData,pk:this.pk}):setTimeout(function(){t.$refs.text.focus()},10)},changeMode:function(t){switch(this.currentMode){case"edit":this.currentMode="delete";break;case"delete":"confirm"===t&&this.$store.commit("delete".concat(this.model),{pk:this.pk,title:this.editPlaceTitleData}),this.currentMode="edit";break;default:this.currentMode="edit"}},controlParentWidth:function(){this.$emit("modeChange")}}},H=D,K=(n("vegy"),Object(c["a"])(H,R,L,!1,null,null,null)),W=K.exports,V={props:{showSettingBtn:Boolean,placeTitle:String,placePk:{type:String,required:!0}},data:function(){return{editPlaceTitle:this.placeTitle,fixListWidth:!1,model:"Place"}},components:{editBtnGroup:W}},U=V,Y=(n("dBXO"),Object(c["a"])(U,q,M,!1,null,null,null)),X=Y.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"listgoup-item-ngroup-item"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addTitle(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"text",attrs:{name:"title",placeholder:t.placeholder,type:"text",autocomplete:"off",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._m(0)])])},Q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{attrs:{type:"submit"}},[i("img",{attrs:{src:n("RlUo"),alt:"送出"}})])}],z={props:{showAddForm:{type:Boolean,required:!0},canFoucusAddForm:{type:Boolean,required:!0},placeholder:{type:String,required:!0}},data:function(){return{title:""}},watch:{canFoucusAddForm:function(){this.canFoucusAddForm&&this.$refs.text.focus()}},methods:{addTitle:function(){this.$emit("addTitle",{title:this.title})},afterEnter:function(){this.canFoucusAddForm=!0},leave:function(){this.canFoucusAddForm=!1}}},tt=z,et=(n("1Ixu"),Object(c["a"])(tt,Z,Q,!1,null,null,null)),nt=et.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{key:t.currentGroup+"-controlbtn",staticClass:"listgoup-item-ngroup-item controlbtn"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",attrs:{type:"button"},on:{click:function(e){t.$emit("showAddFormEvent")}}},[i("img",{class:{rotate:t.showAddForm},attrs:{src:n("NXxc"),alt:"新增"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",attrs:{type:"button"},on:{click:function(e){t.$emit("showSettingBtnEvent")}}},[i("img",{staticClass:"gear",attrs:{src:n("5fVW"),alt:"設定"}})])])},ot=[],rt={props:{currentGroup:{type:String,required:!0},showAddForm:{type:Boolean,required:!0},showSettingBtn:{type:Boolean,required:!0}},data:function(){return{canFoucusAddForm:!1}}},at=rt,st=(n("+ras"),Object(c["a"])(at,it,ot,!1,null,null,null)),ct=st.exports,lt=n("FRYs"),ut=n.n(lt),dt=n("L2JU"),pt={props:{pk:{type:String,required:!0},title:{type:String,required:!0}},data:function(){return{currentGroup:this.pk,showSettingBtn:!1,showAddForm:!1,canFoucusAddForm:!1}},watch:{showSettingBtn:function(){this.showSettingBtn&&(this.showAddForm=!1)},showAddForm:function(){this.showAddForm&&(this.showSettingBtn=!1)}},computed:Object(m["a"])({currentPlaces:{get:function(){var t=this;return this.places.filter(function(e){return e.group===t.pk}).sort(function(t,e){return Number(t.order)-Number(e.order)})},set:function(t){var e=t.map(function(t,e){return t.order=e+1,t});this.$store.commit("setPlaceOrder",{orderdPlaces:e})}}},Object(dt["c"])(["places"])),methods:{afterEnter:function(){this.canFoucusAddForm=!0},leave:function(){this.canFoucusAddForm=!1},addTitle:function(t){var e=t.title;this.$store.commit("addPlace",{currentGroup:this.currentGroup,title:e}),this.showAddForm=!this.showAddForm},toEdit:function(){this.$router.push({name:"groupEdit",params:{pk:this.pk}})}},components:{groupItemUnit:X,groupItemUnitAdd:nt,draggable:ut.a,settingBtn:ct}},ht=pt,mt=(n("i4a6"),Object(c["a"])(ht,G,J,!1,null,null,null)),ft=mt.exports,gt={name:"group",props:{title:String},data:function(){return{showInfo:!1}},computed:Object(m["a"])({},Object(dt["c"])(["groups","haveSeenInfo"])),methods:{showInfoFunc:function(){this.showInfo=!0,this.haveSeenInfo||this.$store.commit("clickedInfo")}},created:function(){this.$store.commit("clearCheckArray")},components:{sectionHeader:k,sectionContent:y,groupItem:ft,actionBtn:T,info:N}},vt=gt,bt=(n("794Q"),Object(c["a"])(vt,p,h,!1,null,null,null)),kt=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"groupadd-section"},[i("scroll-lock",{staticClass:"lock-body-scroll"},[i("section-header",[t._v("\n    "+t._s(t.title)+"\n    "),i("template",{slot:"right"},[i("router-link",{attrs:{to:"/group"}},[i("img",{attrs:{src:n("pKEH"),alt:"關閉"}})])],1)],2),i("section-content",[i("form",{staticClass:"groupadd-section-form",attrs:{action:"get"},on:{submit:function(e){return e.preventDefault(),t.addGroup(e)}}},[i("fieldset",{staticClass:"groupadd-section-form-fieldset"},[i("legend",{staticClass:"groupadd-section-legend"},[t._v("群組是為了區隔不同地點的選項")]),i("label",{staticClass:"groupadd-section-label",attrs:{for:"place"}},[t._v("地點")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputGroupTitle,expression:"inputGroupTitle"}],staticClass:"groupadd-section-input",attrs:{type:"text",id:"place",name:"place",placeholder:"例如：學校、公司、家附近",required:"",autocomplete:"off"},domProps:{value:t.inputGroupTitle},on:{input:function(e){e.target.composing||(t.inputGroupTitle=e.target.value)}}})]),i("button",{staticClass:"home-section-add spc",attrs:{type:"submit"}},[i("img",{attrs:{src:n("bw0j"),alt:"新增"}})])])])],1)],1)},St=[],_t={name:"groupAdd",props:{title:String},data:function(){return{inputGroupTitle:""}},methods:{addGroup:function(){this.$store.commit("addGroup",{groupTitle:this.inputGroupTitle}),this.$router.push({name:"index"})}},components:{sectionHeader:k,sectionContent:y,actionBtn:T}},Ct=_t,yt=(n("HwuR"),Object(c["a"])(Ct,wt,St,!1,null,null,null)),Ot=yt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"groupadd-section"},[i("scroll-lock",{staticClass:"lock-body-scroll"},[i("section-header",[t._v("\n    "+t._s(t.title)+"\n    "),i("template",{slot:"right"},[i("router-link",{attrs:{to:"/group"}},[i("img",{attrs:{src:n("pKEH"),alt:"關閉"}})])],1)],2),i("section-content",[i("form",{staticClass:"groupadd-section-form",attrs:{action:"get"},on:{submit:function(e){return e.preventDefault(),t.editGroup(e)}}},[i("fieldset",{staticClass:"groupadd-section-form-fieldset"},[i("legend",{staticClass:"groupadd-section-legend"},[t._v("群組是為了區隔不同地點的選項")]),i("label",{staticClass:"groupadd-section-label",attrs:{for:"place"}},[t._v("地點")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputGroupTitle,expression:"inputGroupTitle"}],staticClass:"groupadd-section-input",attrs:{type:"text",id:"place",name:"place",placeholder:"例如：學校、公司、家附近",required:"",autocomplete:"off"},domProps:{value:t.inputGroupTitle},on:{input:function(e){e.target.composing||(t.inputGroupTitle=e.target.value)}}})]),i("button",{staticClass:"home-section-add spc",attrs:{type:"submit"}},[i("img",{attrs:{src:n("bw0j"),alt:"新增"}})]),i("button",{staticClass:"home-section-add spc delete",attrs:{type:"button"},on:{click:t.deleteGroup}},[i("img",{attrs:{src:n("OPPa"),alt:"刪除"}})])])])],1)],1)},It=[],At={props:{title:String},data:function(){return{inputGroupTitle:"",pk:this.$route.params.pk}},created:function(){this.inputGroupTitle=this.currentGroup.title},computed:Object(m["a"])({currentGroup:function(){var t=this;return this.groups.filter(function(e){return e.pk===t.pk})[0]}},Object(dt["c"])(["groups"])),methods:{editGroup:function(){this.$store.commit("editGroup",{pk:this.pk,editTitle:this.inputGroupTitle}),this.$router.push({name:"index"})},deleteGroup:function(){this.$store.commit("deleteGroup",{pk:this.pk}),this.$router.push({name:"index"})}},components:{sectionHeader:k,sectionContent:y,actionBtn:T}},Pt=At,Ft=(n("OKZ8"),Object(c["a"])(Pt,xt,It,!1,null,"78063eaf",null)),Bt=Ft.exports,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home-section"},[i("section-header",[i("template",{slot:"left"},[i("router-link",{attrs:{to:"/group"}},[i("img",{attrs:{src:n("e2op"),alt:"返回"}})])],1),t._v("\n    "+t._s(t.title)+"\n  ")],2),i("section-content",[i("place-item",{attrs:{choices:t.choices}})],1),i("action-btn",{directives:[{name:"show",rawName:"v-show",value:t.checkedLength>=2,expression:"checkedLength >= 2"}],attrs:{url:"/choiceStart/"+t.id}},[i("img",{attrs:{src:n("bw0j"),alt:"送出"}})])],1)},Et=[],jt=(n("dRSK"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"listgoup-item"},[n("ul",{staticClass:"listgoup-item-ngroup"},[0===t.currentChoice.length?n("p",{staticClass:"sign"},[t._v("該類別目前沒有任何選擇")]):t._e(),n("p",{staticClass:"sign black"},[t._v("請至少勾選兩個項目")]),t.currentChoice.length>0?n("draggable",{attrs:{options:{handle:".listgoup-item-ngroup-item-controlbtn"}},model:{value:t.currentChoice,callback:function(e){t.currentChoice=e},expression:"currentChoice"}},t._l(t.currentChoice,function(e){return n("place-item-unit",{key:e.pk,tag:"li",attrs:{showSettingBtn:t.showSettingBtn,pk:e.pk,placeTitle:e.title}})})):t._e(),n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},on:{"after-enter":t.afterEnter,leave:t.leave}},[t.showAddForm?n("group-item-unit-add",{key:t.currentPlace+"-addform",tag:"li",attrs:{showAddForm:t.showAddForm,canFoucusAddForm:t.canFoucusAddForm,placeholder:"例如：便當、拉麵"},on:{addTitle:t.addTitle}}):t._e()]),n("setting-btn",{tag:"li",attrs:{currentGroup:t.currentPlace,showAddForm:t.showAddForm,showSettingBtn:t.showSettingBtn},on:{showAddFormEvent:function(e){t.showAddForm=!t.showAddForm},showSettingBtnEvent:function(e){t.showSettingBtn=!t.showSettingBtn}}})],1)])}),$t=[],Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[i("li",{staticClass:"listgoup-item-ngroup-item"},[t.showSettingBtn?t._e():i("div",{staticClass:"listgoup-item-ngroup-item-link",style:{width:t.fixListWidth?"30%":"100%"},on:{click:t.checkItem}},[i("div",{staticClass:"listgoup-item-ngroup-item-link-check"},[t.checked?t._e():i("img",{attrs:{src:n("idvU"),alt:"unchecked"}}),t.checked?i("img",{attrs:{src:n("B0Jo"),alt:"checked"}}):t._e()]),i("p",{staticClass:"listgoup-item-ngroup-item-link-title"},[t._v(t._s(t.placeTitle))])]),i("edit-Btn-group",{attrs:{showSettingBtn:t.showSettingBtn,editPlaceTitle:t.editPlaceTitle,pk:t.pk,model:t.model},on:{modeChange:function(e){t.fixListWidth=!t.fixListWidth}}})],1)])},Gt=[],Jt={props:{pk:{type:String,required:!0},showSettingBtn:{type:Boolean,required:!0},placeTitle:{type:String,required:!0}},data:function(){return{editPlaceTitle:this.placeTitle,fixListWidth:!1,model:"Choice"}},computed:Object(m["a"])({checked:function(){return-1!==this.checkedArray.indexOf(this.placeTitle)}},Object(dt["c"])(["choices","checkedArray"])),methods:{checkItem:function(){this.$store.commit("checkChoice",{pk:this.pk,title:this.placeTitle})}},components:{editBtnGroup:W}},qt=Jt,Mt=(n("3kwr"),Object(c["a"])(qt,Nt,Gt,!1,null,null,null)),Rt=Mt.exports,Lt={data:function(){return{showSettingBtn:!1,showAddForm:!1,canFoucusAddForm:!1}},watch:{showSettingBtn:function(){this.showSettingBtn&&(this.showAddForm=!1)},showAddForm:function(){this.showAddForm&&(this.showSettingBtn=!1)}},computed:Object(m["a"])({currentPlace:function(){return this.$route.params.id},currentChoice:{get:function(){var t=this;return this.choices.filter(function(e){return e.place===t.currentPlace}).sort(function(t,e){return Number(t.order)-Number(e.order)})},set:function(t){var e=t.map(function(t,e){return t.order=e+1,t});this.$store.commit("setChoiceOrder",{orderdChoices:e})}}},Object(dt["c"])(["choices","checkedArray"])),methods:{afterEnter:function(){this.canFoucusAddForm=!0},leave:function(){this.canFoucusAddForm=!1},addTitle:function(t){var e=t.title;this.$store.commit("addChoice",{currentPlace:this.currentPlace,title:e}),this.showAddForm=!this.showAddForm}},components:{placeItemUnit:Rt,groupItemUnitAdd:nt,draggable:ut.a,settingBtn:ct}},Dt=Lt,Ht=(n("fXWm"),Object(c["a"])(Dt,jt,$t,!1,null,null,null)),Kt=Ht.exports,Wt={data:function(){return{id:this.$route.params.id}},computed:Object(m["a"])({title:function(){var t=this,e=this.places.find(function(e){return e.pk===t.id}),n=this.groups.find(function(t){return t.pk===e.group});return"".concat(n.title,"-").concat(e.title)},currentChoice:function(){var t=this;return this.choices.filter(function(e){return e.place===t.pk})}},Object(dt["b"])(["checkedLength"]),Object(dt["c"])(["groups","places","choices"])),components:{sectionHeader:k,sectionContent:y,placeItem:Kt,actionBtn:T}},Vt=Wt,Ut=Object(c["a"])(Vt,Tt,Et,!1,null,null,null),Yt=Ut.exports,Xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home-section lock-scroll"},[i("section-header",[i("template",{slot:"left"},[i("a",{on:{click:function(e){t.$router.go(-1)}}},[i("img",{attrs:{src:n("e2op"),alt:"返回"}})])]),t._v("\n    "+t._s(t.title)+"\n  ")],2),i("section-content",[i("h2",{staticClass:"choice-title"},[t._v("向左或向右滑動")]),i("pie-chart")],1)],1)},Zt=[],Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pie-wrap"},[n("div",{staticClass:"pie-outer"},[n("div",{staticClass:"unit-wrap"},[n("pie-chart-canvas",{attrs:{percentage:t.percentage}})],1)])])},zt=[],te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas")},ee=[],ne=(n("bHtr"),n("yLV6")),ie=n.n(ne),oe={props:{percentage:{type:Number,required:!0}},data:function(){return{deg:0}},computed:Object(m["a"])({},Object(dt["c"])(["checkedArray"])),mounted:function(){var t=this,e=document.querySelector("canvas");e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight;var n=e.getContext("2d"),i=function(){var i=["#f8fbfb","#e5f1f1","#d1e8e6","#bededc","#97b4b2"];n.translate(e.width/2+3,e.height/2),n.rotate(-90*Math.PI/180);for(var o=function(o){var r=function(){var t=o;while(t>=i.length)t-=i.length;return i[t]};n.rotate(Math.PI/180*t.percentage),n.beginPath(),n.moveTo(0,0),n.lineTo(e.width/2+3,0),n.arc(0,0,e.width/2,0,Math.PI/180*t.percentage),n.lineTo(0,0),n.fillStyle=r(),n.fill(),n.closePath(),n.save(),n.rotate(Math.PI/180*-90),n.rotate(Math.PI/180*t.percentage/2),n.beginPath(),n.save(),n.translate(0,e.width/3.8),n.rotate(Math.PI),n.font="".concat(t.percentage/15,"vw Arial"),n.fillStyle="black",n.textBaseline="middle",n.textAlign="center",n.fillText(t.checkedArray[o],0,0),n.restore(),n.closePath(),n.restore()},r=0;r<t.checkedArray.length;r++)o(r)};i();var o=document.querySelector("canvas"),r=new ie.a(o,{threshold:50});r.on("panleft panright",function(n){4===n.direction?t.deg-=n.distance/4:t.deg+=n.distance/4,e.style.transform="rotate(".concat(t.deg,"deg)")}),r.on("swipeleft swiperight",function(n){var i=n.distance/n.deltaTime*100,o=setInterval(function(){4===n.direction?t.deg-=i:(n.direction,t.deg+=i),i*=.95,e.style.transform="rotate(".concat(t.deg,"deg)"),0===Math.round(i)&&clearInterval(o)},30)})}},re=oe,ae=Object(c["a"])(re,te,ee,!1,null,null,null),se=ae.exports,ce={computed:Object(m["a"])({percentage:function(){return 360/this.checkedArray.length}},Object(dt["c"])(["checkedArray"])),components:{pieChartCanvas:se}},le=ce,ue=(n("oiZ9"),Object(c["a"])(le,Qt,zt,!1,null,null,null)),de=ue.exports,pe={computed:Object(m["a"])({title:function(){var t=this,e=this.places.find(function(e){return e.pk===t.$route.params.placeId});return e.title}},Object(dt["c"])(["places","checkedArray"])),components:{sectionHeader:k,sectionContent:y,pieChart:de}},he=pe,me=(n("E3la"),Object(c["a"])(he,Xt,Zt,!1,null,null,null)),fe=me.exports;i["a"].use(d["a"]);var ge=new d["a"]({routes:[{path:"/",name:"index",redirect:"/group"},{path:"/group",name:"group",component:kt,props:{title:"選擇群組"},children:[{path:"add",name:"groupAdd",component:Ot,props:{title:"新增群組"}},{path:"edit/:pk",name:"groupEdit",component:Bt,props:{title:"編輯群組"}}]},{path:"/place/:id",name:"place",component:Yt},{path:"/choiceStart/:placeId",name:"choiceStart",component:fe}]}),ve=(n("rGqo"),n("INYr"),n("xDdU")),be=n.n(ve);i["a"].use(dt["a"]);var ke=new dt["a"].Store({state:{groups:[],places:[],choices:[],checkedArray:[],haveSeenInfo:!1},getters:{checkedLength:function(t){return t.checkedArray.length}},mutations:{getInitialData:function(t){if(!localStorage.getItem("groups")){var e=[];e.push({pk:"a2c596b0-9166-11e8-8023-65aca2634d53",title:"公司（範例）",order:1}),localStorage.setItem("groups",JSON.stringify(e))}if(!localStorage.getItem("places")){var n=[];n.push({pk:"a5490d40-9166-11e8-8023-65aca2634d53",group:"a2c596b0-9166-11e8-8023-65aca2634d53",order:1,title:"🍴晚餐"},{pk:"680335e0-9167-11e8-9bf0-19044503d060",group:"a2c596b0-9166-11e8-8023-65aca2634d53",order:2,title:"🥤飲料"}),localStorage.setItem("places",JSON.stringify(n))}if(!localStorage.getItem("choices")){var i=[];i.push({order:1,pk:"a74d1aa0-9166-11e8-8023-65aca2634d53",place:"a5490d40-9166-11e8-8023-65aca2634d53",title:"🍜拉麵"},{order:2,pk:"aabfd330-9166-11e8-8023-65aca2634d53",place:"a5490d40-9166-11e8-8023-65aca2634d53",title:"🍱便當"},{order:3,pk:"a16e9cc0-9167-11e8-9348-c3445e362814",place:"a5490d40-9166-11e8-8023-65aca2634d53",title:"🍔漢堡"},{order:4,pk:"ace79fc0-9167-11e8-9348-c3445e362814",place:"680335e0-9167-11e8-9bf0-19044503d060",title:"二芳"},{order:5,pk:"bca50330-9167-11e8-9348-c3445e362814",place:"680335e0-9167-11e8-9bf0-19044503d060",title:"茶水會"},{order:6,pk:"dec4d260-9167-11e8-9348-c3445e362814",place:"680335e0-9167-11e8-9bf0-19044503d060",title:"珍煮母"}),localStorage.setItem("choices",JSON.stringify(i))}if(!localStorage.getItem("haveSeenInfo")){var o=!1;localStorage.setItem("haveSeenInfo",JSON.stringify(o))}t.groups=JSON.parse(localStorage.getItem("groups")),t.places=JSON.parse(localStorage.getItem("places")),t.choices=JSON.parse(localStorage.getItem("choices")),t.haveSeenInfo=JSON.parse(localStorage.getItem("haveSeenInfo"))},clickedInfo:function(t){t.haveSeenInfo=!0,localStorage.setItem("haveSeenInfo",JSON.stringify(t.haveSeenInfo))},checkChoice:function(t,e){if(-1===t.checkedArray.indexOf(e.title))t.checkedArray.push(e.title);else{var n=t.checkedArray.indexOf(e.title);t.checkedArray.splice(n,1)}},clearCheckArray:function(t){t.checkedArray=[]},addGroup:function(t,e){var n=be()(),i=e.groupTitle,o=Number(t.groups.length)+1;t.groups.push({pk:n,title:i,order:o}),localStorage.setItem("groups",JSON.stringify(t.groups))},editGroup:function(t,e){var n=JSON.parse(localStorage.getItem("groups")),i=n.findIndex(function(t){return t.pk===e.pk});n[i].title=e.editTitle,t.groups=n,localStorage.setItem("groups",JSON.stringify(t.groups))},deleteGroup:function(t,e){var n=JSON.parse(localStorage.getItem("groups")),i=n.findIndex(function(t){return t.pk===e.pk});n.splice(i,1),t.groups=n,localStorage.setItem("groups",JSON.stringify(t.groups))},addPlace:function(t,e){var n=be()(),i=e.currentGroup,o=e.title,r=t.places.filter(function(t){return t.group===i}),a=Number(r.length)+1;t.places.push({pk:n,group:i,title:o,order:a}),localStorage.setItem("places",JSON.stringify(t.places))},addChoice:function(t,e){var n=be()(),i=e.currentPlace,o=e.title,r=Number(t.choices.length)+1;t.choices.push({pk:n,place:i,title:o,order:r}),localStorage.setItem("choices",JSON.stringify(t.choices))},deletePlace:function(t,e){var n=t.places.filter(function(t){return t.pk!==e.pk});t.places=n,localStorage.setItem("places",JSON.stringify(t.places))},deleteChoice:function(t,e){var n=t.choices.filter(function(t){return t.pk!==e.pk});t.choices=n,t.checkedArray=t.checkedArray.filter(function(t){return t!==e.title}),localStorage.setItem("choices",JSON.stringify(t.choices))},editPlace:function(t,e){var n=t.places.findIndex(function(t){return t.pk===e.pk});t.places[n].title=e.title,localStorage.setItem("places",JSON.stringify(t.places))},editChoice:function(t,e){var n=t.choices.findIndex(function(t){return t.pk===e.pk});t.choices[n].title=e.title,localStorage.setItem("choices",JSON.stringify(t.choices))},setPlaceOrder:function(t,e){e.orderdPlaces.forEach(function(e){var n=t.places.findIndex(function(t){return t.pk===e.pk});t.places.splice(n,1,e)}),localStorage.setItem("places",JSON.stringify(t.places))},setChoiceOrder:function(t,e){e.orderdChoices.forEach(function(e){var n=t.choices.findIndex(function(t){return t.pk===e.pk});t.choices.splice(n,1,e)}),localStorage.setItem("choices",JSON.stringify(t.choices))}},actions:{}}),we=n("VBs/"),Se=n.n(we);i["a"].config.productionTip=!1,i["a"].use(Se.a),new i["a"]({router:ge,store:ke,render:function(t){return t(u)}}).$mount("#app")},XyP0:function(t,e,n){},ZL7j:function(t,e,n){"use strict";var i=n("slcd"),o=n.n(i);o.a},bbR6:function(t,e,n){t.exports=n.p+"img/change-order.7196b2c1.svg"},bw0j:function(t,e,n){t.exports=n.p+"img/add-check.8829dc35.svg"},cNk8:function(t,e,n){},dBXO:function(t,e,n){"use strict";var i=n("8ACY"),o=n.n(i);o.a},doKE:function(t,e,n){},duTF:function(t,e,n){t.exports=n.p+"img/trash.f6604ad7.svg"},e2op:function(t,e,n){t.exports=n.p+"img/left-arrow.b65e23ed.svg"},fXWm:function(t,e,n){"use strict";var i=n("vlDQ"),o=n.n(i);o.a},i4a6:function(t,e,n){"use strict";var i=n("doKE"),o=n.n(i);o.a},iHJY:function(t,e,n){},idvU:function(t,e,n){t.exports=n.p+"img/unchecked.0b18d7fc.svg"},lPDK:function(t,e,n){"use strict";var i=n("tn7q"),o=n.n(i);o.a},m77J:function(t,e,n){t.exports=n.p+"img/info.a7281b44.svg"},oiZ9:function(t,e,n){"use strict";var i=n("cNk8"),o=n.n(i);o.a},pKEH:function(t,e,n){t.exports=n.p+"img/add-close.39aae6a0.svg"},qedn:function(t,e,n){},qo9c:function(t,e,n){},sbwy:function(t,e,n){t.exports=n.p+"img/add-btn.8c9f27d0.svg"},slcd:function(t,e,n){},tn7q:function(t,e,n){},vegy:function(t,e,n){"use strict";var i=n("iHJY"),o=n.n(i);o.a},vlDQ:function(t,e,n){}});
//# sourceMappingURL=app.40d1ae25.js.map