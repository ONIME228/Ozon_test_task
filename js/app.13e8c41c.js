(function(e){function t(t){for(var n,c,o=t[0],s=t[1],l=t[2],d=0,h=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},i=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Ozon_test_task/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"18d5":function(e,t,a){e.exports={calendarBlock:"CalendarTile_calendarBlock_3dLB-",calendarTitle:"CalendarTile_calendarTitle_La37l",daysWeek:"CalendarTile_daysWeek_3Vx9o",days:"CalendarTile_days_Rbn1F",chosenDay:"CalendarTile_chosenDay_1gVxF",filledDay:"CalendarTile_filledDay_2Sain"}},"43c9":function(e,t,a){},"4c23":function(e,t,a){e.exports={eventBlock:"UnitEvent_eventBlock_2KLDR",eventLabel:"UnitEvent_eventLabel_34HlF",eventCheckbox:"UnitEvent_eventCheckbox_2eels"}},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("d4ec"),i=a("bee2"),c=a("262e"),o=a("2caf"),s=a("9ab4"),l=a("1b40"),u=(a("d81d"),function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return a}(n["a"])),d=a("8511"),h=(a("a9e3"),function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.store=Object(d["d"])(e.$store),e}return Object(i["a"])(a,[{key:"handleClick",value:function(){this.store.updateWithId(Number(this.id))}},{key:"render",value:function(){var e=arguments[0],t=this.text,a=this.id,n=this.handleClick;return a||t?e("span",{on:{click:n},attrs:{id:a}},[t," "]):e("div")}}]),a}(u));Object(s["a"])([Object(l["b"])()],h.prototype,"text",void 0),Object(s["a"])([Object(l["b"])()],h.prototype,"id",void 0),h=Object(s["a"])([l["a"]],h);var v=h,p=new Date,b=function(){for(var e=[],t=new Date(p.getFullYear(),p.getMonth()).getDay(),a=0===t?7:t,n=a;n>1;n--)e.push(n);return e},f=function(){for(var e=[],t=33-new Date(p.getFullYear(),p.getMonth(),33).getDate(),a=1;a<=t;a++)e.push(a);return e},y=function(){var e=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],t=p.getFullYear(),a=e[p.getMonth()];return a+" "+t},O=function(){return(new Date).getDate()},j=a("18d5"),k=a.n(j),g=k.a.calendarBlock,_=k.a.daysWeek,m=k.a.calendarTitle,T=k.a.days,x=f(),C=b(),w=y(),E=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],D=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.store=Object(d["d"])(e.$store),e}return Object(i["a"])(a,[{key:"getClassName",value:function(e){return e===x[this.store.idToHighlight-1]?k.a.chosenDay:this.store.data[e]&&this.store.data[e].length?k.a.filledDay:""}},{key:"render",value:function(){var e=this,t=arguments[0];return t("article",{class:g},[t("h5",{class:m},[" ",w," "]),t("div",{class:_},[E.map((function(e){return t(v,{key:e,attrs:{text:String(e)}})}))]),t("div",{class:T},[C.length?C.map((function(e){return t(v,{key:String(e),attrs:{id:"",text:""}})})):"",x.map((function(a){return t(v,{class:e.getClassName(a),key:String(a),attrs:{id:a,text:String(a)}})}))])])}}]),a}(u);D=Object(s["a"])([l["a"]],D);var S=D,N=a("4c23"),W=a.n(N),B=W.a.eventBlock,P=W.a.eventLabel,H=W.a.eventCheckbox,M=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.store=Object(d["d"])(e.$store),e}return Object(i["a"])(a,[{key:"handleClick",value:function(e){var t=this.store.idToHighlight;this.store.updateWithTaskStatus({key:t,value:{isCompleted:e.target.checked,id:Number(this.id)}})}},{key:"render",value:function(){var e=arguments[0],t=this.text,a=this.isChecked,n=this.id;return e("div",{class:B},[e("input",{on:{click:this.handleClick},attrs:{type:"checkbox",name:"checkbox",id:n},class:H,domProps:{checked:a}}),e("label",{attrs:{htmlFor:n},class:P},[t])])}}]),a}(u);Object(s["a"])([Object(l["b"])()],M.prototype,"text",void 0),Object(s["a"])([Object(l["b"])()],M.prototype,"isChecked",void 0),Object(s["a"])([Object(l["b"])()],M.prototype,"id",void 0),M=Object(s["a"])([l["a"]],M);var F=M,L=a("ef9c"),$=a.n(L),Y=$.a.eventBlock,I=$.a.events,U=$.a.eventsTitle,J=$.a.eventsNewEvent,R=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.store=Object(d["d"])(e.$store),e}return Object(i["a"])(a,[{key:"handleEnter",value:function(e){"Enter"===e.code&&(this.store.updateWithEvent({key:this.store.idToHighlight,value:e.target.value}),e.target.value="")}},{key:"render",value:function(){var e=arguments[0],t=this.store,a=t.idToHighlight,n=t.data,r=this.handleEnter;return e("article",{class:Y},[e("h5",{class:U},[" События "]),e("section",{class:I},[n[a]&&n[a].map((function(t){return e(F,{attrs:{isChecked:t.isCompleted,text:t.taskName,id:t.id},key:String(t.id)})})),e("input",{attrs:{type:"text",name:"addNote",id:"addNote",placeholder:"Текст"},class:J,on:{keydown:r}})])])}}]),a}(u);R=Object(s["a"])([l["a"]],R);var V=R,X=(a("43c9"),function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"render",value:function(){var e=arguments[0];return e("div",{attrs:{id:"app"}},[e(S),e(V)])}}]),a}(l["c"]));X=Object(s["a"])([l["a"]],X);var z=X,K=(a("99af"),a("4160"),a("159b"),a("2909")),q=a("2f62"),A=O(),G=function(){function e(){Object(r["a"])(this,e),this.idToHighlight=A,this.data={14:[{taskName:"Выполнить тестовое",isCompleted:!0,id:1}]}}return Object(i["a"])(e,[{key:"updateWithId",value:function(e){this.idToHighlight=e}},{key:"updateWithEvent",value:function(e){var t=e.key,a=e.value;this.data[t]?this.data[t]=[].concat(Object(K["a"])(this.data[t]),[{taskName:a,isCompleted:!1,id:Date.now()}]):n["a"].set(this.data,t,[{taskName:a,isCompleted:!1,id:Date.now()}])}},{key:"updateWithTaskStatus",value:function(e){var t=e.key,a=e.value;this.data[t]&&this.data[t].forEach((function(e){e.id===a.id&&(e.isCompleted=a.isCompleted)}))}}]),e}();Object(s["a"])([Object(d["b"])()],G.prototype,"idToHighlight",void 0),Object(s["a"])([Object(d["a"])()],G.prototype,"updateWithId",null),Object(s["a"])([Object(d["a"])()],G.prototype,"updateWithEvent",null),Object(s["a"])([Object(d["a"])()],G.prototype,"updateWithTaskStatus",null),n["a"].use(q["b"]);var Q=new G,Z=Object(d["c"])(Q,{strict:!1,modules:{},plugins:[]});n["a"].config.productionTip=!1,new n["a"]({store:Z,render:function(e){return e(z)}}).$mount("#app")},ef9c:function(e,t,a){e.exports={eventBlock:"EventTile_eventBlock_3S0-O",events:"EventTile_events_M7S6Y",eventsTitle:"EventTile_eventsTitle_3Xu6P",eventsNewEvent:"EventTile_eventsNewEvent_11xsX"}}});
//# sourceMappingURL=app.13e8c41c.js.map