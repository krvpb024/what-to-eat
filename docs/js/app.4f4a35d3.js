(function(t){function e(e){for(var i,a,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)a=c[d],r[a]&&p.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={1:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/what-to-eat/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([15,0]),n()})({"+AVs":function(t,e,n){"use strict";var i=n("KN7o"),r=n.n(i);r.a},"+ras":function(t,e,n){"use strict";var i=n("7Hf0"),r=n.n(i);r.a},"068D":function(t,e,n){"use strict";var i=n("Qb11"),r=n.n(i);r.a},15:function(t,e,n){t.exports=n("Vtdi")},"1Ixu":function(t,e,n){"use strict";var i=n("XyP0"),r=n.n(i);r.a},"3XEg":function(t,e,n){},"3kwr":function(t,e,n){"use strict";var i=n("5Nz9"),r=n.n(i);r.a},"5Nz9":function(t,e,n){},"5fVW":function(t,e,n){t.exports=n.p+"img/settings.231eca81.svg"},"794Q":function(t,e,n){"use strict";var i=n("qo9c"),r=n.n(i);r.a},"7Hf0":function(t,e,n){},"8ACY":function(t,e,n){},"9vnc":function(t,e,n){},B0Jo:function(t,e,n){t.exports=n.p+"img/checked.d6fe7e26.svg"},E3la:function(t,e,n){"use strict";var i=n("9vnc"),r=n.n(i);r.a},EM2B:function(t,e,n){t.exports=n.p+"img/confirm.85985594.svg"},HwuR:function(t,e,n){"use strict";var i=n("3XEg"),r=n.n(i);r.a},KN7o:function(t,e,n){},NVYK:function(t,e,n){t.exports=n.p+"img/edit.aa956612.svg"},NXxc:function(t,e,n){t.exports=n.p+"img/add-black.60ef3f6b.svg"},PAKR:function(t,e,n){t.exports=n.p+"img/cancel.9f6e4b13.svg"},Qb11:function(t,e,n){},RlUo:function(t,e,n){t.exports=n.p+"img/send.7b43232c.svg"},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":t.animationActive,"leave-active-class":t.animationLeave}},[n("router-view")],1)],1)},o=[],a=(n("f3/d"),{data:function(){return{animationActive:"",animationLeave:""}},created:function(){this.$store.commit("getInitialData")},watch:{$route:function(t,e){"group"===t.name&&"place"===e.name||"place"===t.name&&"choiceStart"===e.name?(this.animationActive="animated slideInLeft change",this.animationLeave="animated slideOutRight change"):("place"===t.name&&"group"===e.name||"choiceStart"===t.name&&"place"===e.name)&&(this.animationActive="animated slideInRight change",this.animationLeave="animated slideOutLeft change")}}}),c=a,s=(n("ZL7j"),n("KHd+")),l=Object(s["a"])(c,r,o,!1,null,null,null),u=l.exports,d=n("jE9Z"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home-section"},[i("section-header",[t._v("\n    "+t._s(t.title)+"\n  ")]),i("section-content",[i("ul",t._l(t.groups,function(t){return i("group-item",{key:t.pk,tag:"li",attrs:{pk:t.pk,title:t.title}})}))]),i("action-btn",{attrs:{url:"/group/add"}},[i("img",{attrs:{src:n("sbwy"),alt:"新增"}})]),i("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[i("router-view")],1)],1)},h=[],m=n("yT7P"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"home-section-title"},[n("div",{staticClass:"header-nav"},[n("div",{staticClass:"header-nav-btn left"},[t._t("left")],2),n("h1",[t._t("default")],2),n("div",{staticClass:"header-nav-btn right"},[t._t("right")],2)])])},g=[],v=(n("lPDK"),{}),b=Object(s["a"])(v,f,g,!1,null,null,null),k=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-section-listgoup"},[t._t("default")],2)},S=[],y=(n("+AVs"),{}),C=Object(s["a"])(y,w,S,!1,null,null,null),_=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-section-add"},[n("router-link",{staticClass:"home-section-add-link",attrs:{to:t.url}},[t._t("default")],2)],1)},O=[],A={props:{url:String}},P=A,F=(n("068D"),Object(s["a"])(P,x,O,!1,null,null,null)),B=F.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"listgoup-item"},[n("h2",{staticClass:"listgoup-item-h2"},[t._v(t._s(t.title))]),n("ul",{staticClass:"listgoup-item-ngroup"},[n("draggable",{attrs:{options:{handle:".listgoup-item-ngroup-item-controlbtn"}},model:{value:t.currentPlaces,callback:function(e){t.currentPlaces=e},expression:"currentPlaces"}},t._l(t.currentPlaces,function(e){return n("group-item-unit",{key:e.pk,tag:"li",attrs:{pk:t.pk,placePk:e.pk,showSettingBtn:t.showSettingBtn,placeTitle:e.title}})})),n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},on:{"after-enter":t.afterEnter,leave:t.leave}},[t.showAddForm?n("group-item-unit-add",{key:t.currentGroup+"-addform",tag:"li",attrs:{showAddForm:t.showAddForm,canFoucusAddForm:t.canFoucusAddForm},on:{addTitle:t.addTitle}}):t._e()]),n("setting-btn",{tag:"li",attrs:{currentGroup:t.currentGroup,showAddForm:t.showAddForm,showSettingBtn:t.showSettingBtn},on:{showAddFormEvent:function(e){t.showAddForm=!t.showAddForm},showSettingBtnEvent:function(e){t.showSettingBtn=!t.showSettingBtn}}})],1)])},I=[],E=(n("xfY5"),n("Vd3H"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"listgoup-item-ngroup-item"},[t.showSettingBtn?t._e():n("router-link",{staticClass:"listgoup-item-ngroup-item-link",style:{width:t.fixListWidth?"30%":"100%"},attrs:{to:"/place/"+t.placePk}},[t._v("\n    "+t._s(t.placeTitle)+"\n  ")]),n("edit-Btn-group",{attrs:{showSettingBtn:t.showSettingBtn,editPlaceTitle:t.editPlaceTitle,pk:t.placePk,model:t.model},on:{modeChange:function(e){t.fixListWidth=!t.fixListWidth}}})],1)}),j=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-btn-wrap"},[i("form",{staticClass:"edit-btn-wrap-form",on:{submit:function(e){return e.preventDefault(),t.controlEdit(e)}}},[t.showSettingBtn?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editPlaceTitleData,expression:"editPlaceTitleData"}],ref:"text",class:{editing:!t.notEdit},attrs:{type:"text",disabled:t.notEdit},domProps:{value:t.editPlaceTitleData},on:{change:function(e){t.hasChanged=!0},input:function(e){e.target.composing||(t.editPlaceTitleData=e.target.value)}}}):t._e()]),i("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},on:{enter:t.controlParentWidth,"after-leave":t.controlParentWidth}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSettingBtn,expression:"showSettingBtn"}],staticClass:"edit-btn-group"},[i("transition",{attrs:{mode:"out-in","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft"}},["edit"===t.currentMode?i("div",{key:t.currentMode,staticClass:"btn-group edit-group"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn small",on:{click:t.controlEdit}},[i("img",{attrs:{src:n("NVYK"),alt:"編輯"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn small",on:{click:function(e){t.changeMode("delete")}}},[i("img",{attrs:{src:n("duTF"),alt:"刪除"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn"},[i("img",{attrs:{src:n("bbR6"),alt:"排序"}})])]):"delete"===t.currentMode?i("div",{key:t.currentMode,staticClass:"btn-group delete-group"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",on:{click:function(e){t.changeMode("confirm")}}},[i("img",{attrs:{src:n("EM2B"),alt:"確認"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",on:{click:t.changeMode}},[i("img",{attrs:{src:n("PAKR"),alt:"取消"}})])]):t._e()])],1)])],1)},N=[],M={props:{showSettingBtn:Boolean,editPlaceTitle:String,pk:{type:String,required:!0},model:{type:String,required:!0}},data:function(){return{currentMode:"edit",fixListWidth:!1,notEdit:!0,editPlaceTitleData:this.editPlaceTitle,hasChanged:!1}},methods:{controlEdit:function(){var t=this;this.notEdit=!this.notEdit,this.notEdit?this.hasChanged&&this.$store.commit("edit".concat(this.model),{title:this.editPlaceTitleData,pk:this.pk}):setTimeout(function(){t.$refs.text.focus()},10)},changeMode:function(t){switch(this.currentMode){case"edit":this.currentMode="delete";break;case"delete":"confirm"===t&&this.$store.commit("delete".concat(this.model),{pk:this.pk}),this.currentMode="edit";break;default:this.currentMode="edit"}},controlParentWidth:function(){this.$emit("modeChange")}}},G=M,J=(n("vegy"),Object(s["a"])(G,$,N,!1,null,null,null)),L=J.exports,R={props:{showSettingBtn:Boolean,placeTitle:String,placePk:{type:String,required:!0}},data:function(){return{editPlaceTitle:this.placeTitle,fixListWidth:!1,model:"Place"}},components:{editBtnGroup:L}},q=R,D=(n("dBXO"),Object(s["a"])(q,E,j,!1,null,null,null)),W=D.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"listgoup-item-ngroup-item"},[i("form",{attrs:{action:""}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"text",attrs:{name:"title",type:"text",autocomplete:"off"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("button",{on:{click:function(e){return e.preventDefault(),t.addTitle(e)}}},[i("img",{attrs:{src:n("RlUo"),alt:"送出"}})])])])},K=[],V={props:{showAddForm:Boolean,canFoucusAddForm:Boolean},data:function(){return{title:""}},watch:{canFoucusAddForm:function(){this.canFoucusAddForm&&this.$refs.text.focus()}},methods:{addTitle:function(){this.$emit("addTitle",{title:this.title})}}},U=V,X=(n("1Ixu"),Object(s["a"])(U,H,K,!1,null,null,null)),Y=X.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{key:t.currentGroup+"-controlbtn",staticClass:"listgoup-item-ngroup-item controlbtn"},[i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",attrs:{type:"button"},on:{click:function(e){t.$emit("showAddFormEvent")}}},[i("img",{class:{rotate:t.showAddForm},attrs:{src:n("NXxc"),alt:"新增"}})]),i("button",{staticClass:"listgoup-item-ngroup-item-controlbtn",attrs:{type:"button"},on:{click:function(e){t.$emit("showSettingBtnEvent")}}},[i("img",{staticClass:"gear",attrs:{src:n("5fVW"),alt:"設定"}})])])},Z=[],z={props:{currentGroup:{type:String,required:!0},showAddForm:{type:Boolean,required:!0},showSettingBtn:{type:Boolean,required:!0}},data:function(){return{canFoucusAddForm:!1}}},tt=z,et=(n("+ras"),Object(s["a"])(tt,Q,Z,!1,null,null,null)),nt=et.exports,it=n("FRYs"),rt=n.n(it),ot=n("L2JU"),at={props:{pk:{type:String,required:!0},title:{type:String,required:!0}},data:function(){return{currentGroup:this.pk,showSettingBtn:!1,showAddForm:!1,canFoucusAddForm:!1}},computed:Object(m["a"])({currentPlaces:{get:function(){var t=this;return this.places.filter(function(e){return e.group===t.pk}).sort(function(t,e){return Number(t.order)-Number(e.order)})},set:function(t){var e=t.map(function(t,e){return t.order=e+1,t});this.$store.commit("setPlaceOrder",{orderdPlaces:e})}}},Object(ot["b"])(["places"])),methods:{afterEnter:function(){this.canFoucusAddForm=!0},leave:function(){this.canFoucusAddForm=!1},addTitle:function(t){var e=t.title;this.$store.commit("addPlace",{currentGroup:this.currentGroup,title:e}),this.showAddForm=!this.showAddForm}},components:{groupItemUnit:W,groupItemUnitAdd:Y,draggable:rt.a,settingBtn:nt}},ct=at,st=(n("i4a6"),Object(s["a"])(ct,T,I,!1,null,null,null)),lt=st.exports,ut={name:"group",props:{title:String},computed:Object(m["a"])({},Object(ot["b"])(["groups"])),created:function(){this.$store.commit("clearCheckArray")},components:{sectionHeader:k,sectionContent:_,groupItem:lt,actionBtn:B}},dt=ut,pt=(n("794Q"),Object(s["a"])(dt,p,h,!1,null,null,null)),ht=pt.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"groupadd-section"},[i("scroll-lock",{staticClass:"lock-body-scroll"},[i("section-header",[t._v("\n    "+t._s(t.title)+"\n    "),i("template",{slot:"right"},[i("router-link",{attrs:{to:"/group"}},[i("img",{attrs:{src:n("pKEH"),alt:"關閉"}})])],1)],2),i("section-content",[i("form",{staticClass:"groupadd-section-form",attrs:{action:"get"}},[i("fieldset",{staticClass:"groupadd-section-form-fieldset"},[i("legend",{staticClass:"groupadd-section-legend"},[t._v("群組是為了區隔不同地點的選項")]),i("label",{staticClass:"groupadd-section-label",attrs:{for:"place"}},[t._v("地點")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputGroupTitle,expression:"inputGroupTitle"}],staticClass:"groupadd-section-input",attrs:{type:"text",id:"place",name:"place",placeholder:"例如：學校、公司、家附近"},domProps:{value:t.inputGroupTitle},on:{input:function(e){e.target.composing||(t.inputGroupTitle=e.target.value)}}})])]),i("action-btn",{attrs:{url:"/"},nativeOn:{click:function(e){return t.addGroup(e)}}},[i("img",{attrs:{src:n("bw0j"),alt:"新增"}})])],1)],1)],1)},ft=[],gt={name:"groupAdd",props:{title:String},data:function(){return{inputGroupTitle:""}},methods:{addGroup:function(){this.$store.commit("addGroup",{groupTitle:this.inputGroupTitle})}},components:{sectionHeader:k,sectionContent:_,actionBtn:B}},vt=gt,bt=(n("HwuR"),Object(s["a"])(vt,mt,ft,!1,null,null,null)),kt=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home-section"},[i("section-header",[i("template",{slot:"left"},[i("router-link",{attrs:{to:"/group"}},[i("img",{attrs:{src:n("e2op"),alt:"返回"}})])],1),t._v("\n    "+t._s(t.title)+"\n  ")],2),i("section-content",[i("place-item",{attrs:{choices:t.choices}})],1),i("action-btn",{attrs:{url:"/choiceStart/"+t.id}},[i("img",{attrs:{src:n("bw0j"),alt:"新增"}})])],1)},St=[],yt=(n("dRSK"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"listgoup-item"},[n("ul",{staticClass:"listgoup-item-ngroup"},[t.currentChoice.length>0?n("draggable",{attrs:{options:{handle:".listgoup-item-ngroup-item-controlbtn"}},model:{value:t.currentChoice,callback:function(e){t.currentChoice=e},expression:"currentChoice"}},t._l(t.currentChoice,function(e){return n("place-item-unit",{key:e.pk,tag:"li",attrs:{showSettingBtn:t.showSettingBtn,pk:e.pk,placeTitle:e.title}})})):t._e(),n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},on:{"after-enter":t.afterEnter,leave:t.leave}},[t.showAddForm?n("group-item-unit-add",{key:t.currentPlace+"-addform",tag:"li",attrs:{showAddForm:t.showAddForm,canFoucusAddForm:t.canFoucusAddForm},on:{addTitle:t.addTitle}}):t._e()]),n("setting-btn",{tag:"li",attrs:{currentGroup:t.currentPlace,showAddForm:t.showAddForm,showSettingBtn:t.showSettingBtn},on:{showAddFormEvent:function(e){t.showAddForm=!t.showAddForm},showSettingBtnEvent:function(e){t.showSettingBtn=!t.showSettingBtn}}})],1)])}),Ct=[],_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"listgoup-item-ngroup-item"},[t.showSettingBtn?t._e():i("div",{staticClass:"listgoup-item-ngroup-item-link",style:{width:t.fixListWidth?"30%":"100%"},on:{click:t.checkItem}},[i("div",{staticClass:"listgoup-item-ngroup-item-link-check"},[t.checked?t._e():i("img",{attrs:{src:n("idvU"),alt:"unchecked"}}),t.checked?i("img",{attrs:{src:n("B0Jo"),alt:"checked"}}):t._e()]),i("p",{staticClass:"listgoup-item-ngroup-item-link-title"},[t._v(t._s(t.placeTitle))])]),i("edit-Btn-group",{attrs:{showSettingBtn:t.showSettingBtn,editPlaceTitle:t.editPlaceTitle,pk:t.pk,model:t.model},on:{modeChange:function(e){t.fixListWidth=!t.fixListWidth}}})],1)},xt=[],Ot={props:{pk:{type:String,required:!0},showSettingBtn:{type:Boolean,required:!0},placeTitle:{type:String,required:!0}},data:function(){return{editPlaceTitle:this.placeTitle,fixListWidth:!1,model:"Choice"}},computed:Object(m["a"])({checked:function(){return-1!==this.checkedArray.indexOf(this.placeTitle)}},Object(ot["b"])(["choices","checkedArray"])),methods:{checkItem:function(){this.$store.commit("checkChoice",{pk:this.pk,title:this.placeTitle})}},components:{editBtnGroup:L}},At=Ot,Pt=(n("3kwr"),Object(s["a"])(At,_t,xt,!1,null,null,null)),Ft=Pt.exports,Bt={data:function(){return{showSettingBtn:!1,showAddForm:!1,canFoucusAddForm:!1}},computed:Object(m["a"])({currentPlace:function(){return this.$route.params.id},currentChoice:{get:function(){var t=this;return this.choices.filter(function(e){return e.place===t.currentPlace}).sort(function(t,e){return Number(t.order)-Number(e.order)})},set:function(t){var e=t.map(function(t,e){return t.order=e+1,t});this.$store.commit("setChoiceOrder",{orderdChoices:e})}}},Object(ot["b"])(["choices","checkedArray"])),methods:{afterEnter:function(){this.canFoucusAddForm=!0},leave:function(){this.canFoucusAddForm=!1},addTitle:function(t){var e=t.title;this.$store.commit("addChoice",{currentPlace:this.currentPlace,title:e}),this.showAddForm=!this.showAddForm}},components:{placeItemUnit:Ft,groupItemUnitAdd:Y,draggable:rt.a,settingBtn:nt}},Tt=Bt,It=(n("fXWm"),Object(s["a"])(Tt,yt,Ct,!1,null,null,null)),Et=It.exports,jt={data:function(){return{id:this.$route.params.id}},computed:Object(m["a"])({title:function(){var t=this,e=this.places.find(function(e){return e.pk===t.id}),n=this.groups.find(function(t){return t.pk===e.group});return"".concat(n.title,"-").concat(e.title)},currentChoice:function(){var t=this;return this.choices.filter(function(e){return e.place===t.pk})}},Object(ot["b"])(["groups","places","choices"])),components:{sectionHeader:k,sectionContent:_,placeItem:Et,actionBtn:B}},$t=jt,Nt=Object(s["a"])($t,wt,St,!1,null,null,null),Mt=Nt.exports,Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home-section"},[i("section-header",[i("template",{slot:"left"},[i("a",{on:{click:function(e){t.$router.go(-1)}}},[i("img",{attrs:{src:n("e2op"),alt:"返回"}})])]),t._v("\n    "+t._s(t.title)+"\n  ")],2),i("section-content",[i("h2",{staticClass:"choice-title"},[t._v("向左或向右滑動")]),i("pie-chart")],1)],1)},Jt=[],Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pie-wrap"},[n("div",{staticClass:"pie-outer"},[n("div",{staticClass:"unit-wrap"},[n("pie-chart-canvas",{attrs:{percentage:t.percentage}})],1)])])},Rt=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas")},Dt=[],Wt=(n("bHtr"),n("yLV6")),Ht=n.n(Wt),Kt={props:{percentage:{type:Number,required:!0}},data:function(){return{deg:0}},computed:Object(m["a"])({},Object(ot["b"])(["checkedArray"])),mounted:function(){var t=this,e=document.querySelector("canvas");e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight;var n=e.getContext("2d"),i=function(){var i=["#f8fbfb","#e5f1f1","#d1e8e6","#bededc","#97b4b2"];n.translate(e.width/2+3,e.height/2),n.rotate(-90*Math.PI/180);for(var r=function(r){var o=function(){var t=r;while(t>=i.length)t-=i.length;return i[t]};n.rotate(Math.PI/180*t.percentage),n.beginPath(),n.moveTo(0,0),n.lineTo(e.width/2+3,0),n.arc(0,0,e.width/2,0,Math.PI/180*t.percentage),n.lineTo(0,0),n.fillStyle=o(),n.fill(),n.closePath(),n.save(),n.rotate(Math.PI/180*-90),n.rotate(Math.PI/180*t.percentage/2),n.beginPath(),n.save(),n.translate(0,e.width/3.8),n.rotate(Math.PI),n.font="".concat(t.percentage/15,"vw Arial"),n.fillStyle="black",n.textBaseline="middle",n.textAlign="center",n.fillText(t.checkedArray[r],0,0),n.restore(),n.closePath(),n.restore()},o=0;o<t.checkedArray.length;o++)r(o)};i();var r=document.querySelector("canvas"),o=new Ht.a(r,{threshold:50});o.on("panleft panright",function(n){4===n.direction?t.deg-=n.distance/4:t.deg+=n.distance/4,e.style.transform="rotate(".concat(t.deg,"deg)")}),o.on("swipeleft swiperight",function(n){var i=n.distance/n.deltaTime*100,r=setInterval(function(){4===n.direction?t.deg-=i:(n.direction,t.deg+=i),i*=.9,e.style.transform="rotate(".concat(t.deg,"deg)"),0===Math.round(i)&&clearInterval(r)},30)})}},Vt=Kt,Ut=Object(s["a"])(Vt,qt,Dt,!1,null,null,null),Xt=Ut.exports,Yt={computed:Object(m["a"])({percentage:function(){return 360/this.checkedArray.length}},Object(ot["b"])(["checkedArray"])),components:{pieChartCanvas:Xt}},Qt=Yt,Zt=(n("oiZ9"),Object(s["a"])(Qt,Lt,Rt,!1,null,null,null)),zt=Zt.exports,te={computed:Object(m["a"])({title:function(){var t=this,e=this.places.find(function(e){return e.pk===t.$route.params.placeId});return e.title}},Object(ot["b"])(["places","checkedArray"])),components:{sectionHeader:k,sectionContent:_,pieChart:zt}},ee=te,ne=(n("E3la"),Object(s["a"])(ee,Gt,Jt,!1,null,null,null)),ie=ne.exports,re=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],ae={},ce=Object(s["a"])(ae,re,oe,!1,null,null,null),se=ce.exports;i["a"].use(d["a"]);var le=new d["a"]({routes:[{path:"/",name:"index",redirect:"/group"},{path:"/group",name:"group",component:ht,props:{title:"選擇群組"},children:[{path:"add",name:"groupAdd",component:kt,props:{title:"新增群組"}}]},{path:"/place/:id",name:"place",component:Mt},{path:"/choiceStart/:placeId",name:"choiceStart",component:ie},{path:"/about",name:"about",component:se}]}),ue=(n("rGqo"),n("INYr"),n("xDdU")),de=n.n(ue);i["a"].use(ot["a"]);var pe=new ot["a"].Store({state:{groups:[],places:[],choices:[],checkedArray:[]},mutations:{getInitialData:function(t){if(!localStorage.getItem("groups")){var e=[];localStorage.setItem("groups",JSON.stringify(e))}if(!localStorage.getItem("places")){var n=[];localStorage.setItem("places",JSON.stringify(n))}if(!localStorage.getItem("choices")){var i=[];localStorage.setItem("choices",JSON.stringify(i))}t.groups=JSON.parse(localStorage.getItem("groups")),t.places=JSON.parse(localStorage.getItem("places")),t.choices=JSON.parse(localStorage.getItem("choices"))},checkChoice:function(t,e){if(-1===t.checkedArray.indexOf(e.title))t.checkedArray.push(e.title);else{var n=t.checkedArray.indexOf(e.title);t.checkedArray.splice(n,1)}},clearCheckArray:function(t){t.checkedArray=[]},addGroup:function(t,e){var n=de()(),i=e.groupTitle,r=Number(t.groups.length)+1;t.groups.push({pk:n,title:i,order:r}),localStorage.setItem("groups",JSON.stringify(t.groups))},addPlace:function(t,e){var n=de()(),i=e.currentGroup,r=e.title,o=t.places.filter(function(t){return t.group===i}),a=Number(o.length)+1;t.places.push({pk:n,group:i,title:r,order:a}),localStorage.setItem("places",JSON.stringify(t.places))},addChoice:function(t,e){var n=de()(),i=e.currentPlace,r=e.title,o=Number(t.choices.length)+1;t.choices.push({pk:n,place:i,title:r,order:o}),localStorage.setItem("choices",JSON.stringify(t.choices))},deletePlace:function(t,e){var n=t.places.filter(function(t){return t.pk!==e.pk});t.places=n,localStorage.setItem("places",JSON.stringify(t.places))},deleteChoice:function(t,e){var n=t.choices.filter(function(t){return t.pk!==e.pk});t.choices=n,localStorage.setItem("choices",JSON.stringify(t.choices))},editPlace:function(t,e){var n=t.places.findIndex(function(t){return t.pk===e.pk});t.places[n].title=e.title,localStorage.setItem("places",JSON.stringify(t.places))},editChoice:function(t,e){var n=t.choices.findIndex(function(t){return t.pk===e.pk});t.choices[n].title=e.title,localStorage.setItem("choices",JSON.stringify(t.choices))},setPlaceOrder:function(t,e){e.orderdPlaces.forEach(function(e){var n=t.places.findIndex(function(t){return t.pk===e.pk});t.places.splice(n,1,e)}),localStorage.setItem("places",JSON.stringify(t.places))},setChoiceOrder:function(t,e){e.orderdChoices.forEach(function(e){var n=t.choices.findIndex(function(t){return t.pk===e.pk});t.choices.splice(n,1,e)}),localStorage.setItem("choices",JSON.stringify(t.choices))}},actions:{}}),he=n("VBs/"),me=n.n(he);i["a"].config.productionTip=!1,i["a"].use(me.a),new i["a"]({router:le,store:pe,render:function(t){return t(u)}}).$mount("#app")},XyP0:function(t,e,n){},ZL7j:function(t,e,n){"use strict";var i=n("slcd"),r=n.n(i);r.a},bbR6:function(t,e,n){t.exports=n.p+"img/change-order.7196b2c1.svg"},bw0j:function(t,e,n){t.exports=n.p+"img/add-check.8829dc35.svg"},cNk8:function(t,e,n){},dBXO:function(t,e,n){"use strict";var i=n("8ACY"),r=n.n(i);r.a},doKE:function(t,e,n){},duTF:function(t,e,n){t.exports=n.p+"img/trash.f6604ad7.svg"},e2op:function(t,e,n){t.exports=n.p+"img/left-arrow.b65e23ed.svg"},fXWm:function(t,e,n){"use strict";var i=n("vlDQ"),r=n.n(i);r.a},i4a6:function(t,e,n){"use strict";var i=n("doKE"),r=n.n(i);r.a},iHJY:function(t,e,n){},idvU:function(t,e,n){t.exports=n.p+"img/unchecked.0b18d7fc.svg"},lPDK:function(t,e,n){"use strict";var i=n("tn7q"),r=n.n(i);r.a},oiZ9:function(t,e,n){"use strict";var i=n("cNk8"),r=n.n(i);r.a},pKEH:function(t,e,n){t.exports=n.p+"img/add-close.39aae6a0.svg"},qo9c:function(t,e,n){},sbwy:function(t,e,n){t.exports=n.p+"img/add-btn.8c9f27d0.svg"},slcd:function(t,e,n){},tn7q:function(t,e,n){},vegy:function(t,e,n){"use strict";var i=n("iHJY"),r=n.n(i);r.a},vlDQ:function(t,e,n){}});
//# sourceMappingURL=app.4f4a35d3.js.map