(this.webpackJsonpstair=this.webpackJsonpstair||[]).push([[0],{123:function(e,t,n){e.exports={option:"currencySelect_option__uy2I4"}},124:function(e,t,n){e.exports={container:"flightExplorer_container__37dL2"}},218:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var r=n(126),c=n(0),i=n.n(c),a=n(36),o=n.n(a),l=n(17),s=n(128),u=n(285),d=n(60),j=n.n(d),h=n(93),f=n.n(h),b=n(3),g=function(e){return{name:e.name,key:"city"===e.type?"city:".concat(e.code):e.code}},p=function(e,t){var n;if(t=null!==(n=t)&&void 0!==n?n:[],0===e.length)return[];var r={limit:5,sort:"name",term:e,location_types:"airport"},c=t.map((function(e){return e.key}));return j()({url:"https://tequila-api.kiwi.com/locations/query?location_types=city",headers:{apikey:"9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ"},params:r}).then((function(e){return e.data.locations.map(g).filter((function(e){return!c.includes(e.key)}))}))},x=function(e,t){var n=!e.key.toString().includes("city");return Object(b.jsxs)("div",{className:"ms-TagItem-TextOverflow ".concat(f.a.suggestionItem),children:[Object(b.jsx)(s.a,{className:f.a.icon,iconName:n?"AirplaneSolid":"CityNext"}),e.name," ",n?"(".concat(e.key,")"):null]})},O={root:{"& div.ms-TagItem":{background:"unset"},"& div.ms-TagItem:focus-within":{color:"initial"},"& button.ms-TagItem-close:active":{background:"initial",color:"initial"},"& button.ms-TagItem-close:hover":{background:"initial",color:"initial"},"& div.ms-BasePicker-text":{background:"#eee"}},itemsWrapper:{background:"#eee"},input:{background:"#eee"}},m=function(e){var t=Object(c.useMemo)((function(){return e.selected.map(g)}),[e.selected]),n=Object(c.useMemo)((function(){return 0===e.selected.length?e.label:null}),[e.selected]);return Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{selectedItems:t,onResolveSuggestions:p,inputProps:{placeholder:n},onChange:function(t){if(null!==t){var n=t.map((function(e){return{name:e.name,code:e.key,type:e.key.includes("city")?"city":"airport"}}));e.onChange(n)}},onRenderSuggestionsItem:x,styles:O})})},v=n(120),y=n.n(v),_=function(e){var t,n,r;return Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{dateFormat:"yyyy-MM-dd",selected:null===(t=e.value)||void 0===t?void 0:t.start,onChange:function(t){var n=Object(l.a)(t,2),r=n[0],c=n[1];e.onChange({start:r,end:c})},startDate:null===(n=e.value)||void 0===n?void 0:n.start,endDate:null===(r=e.value)||void 0===r?void 0:r.end,selectsRange:!0,placeholderText:e.placeholder})})},k=n(286),C=[{text:"Economy",key:"M"},{text:"Economy premium",key:"W"},{text:"Business",key:"C"},{text:"First",key:"F"}],S=function(e){return Object(b.jsx)(k.a,{options:C,selectedKey:e.value,onChange:function(t,n){null!==n&&e.onChange(n.key.toString())}})},w=n(5),A=n(293),N=n(30),R=function(){var e=Object(w.B)({container:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"100vh","& > div > div.ms-Spinner-circle":{width:158,height:158}}});return Object(b.jsxs)("div",{className:e.container,children:[Object(b.jsx)(A.a,{size:N.a.large}),Object(b.jsx)("h1",{children:"Finding the best flights for you."})]})},T=[{text:"Alliance",key:"alliance"},{text:"SkyTeam",key:"SU,AR,AM,UX,AF,AZ,CI,MU,OK,DL,GA,KQ,KL,KE,ME,SV,RO,VN,MF"},{text:"Star Alliance",key:"JP,A3,AC,CA,AI,NZ,NH,OZ,OS,AV,SN,CM,OU,MS,OV,BR,LO,LH,SK,ZH,SQ,SA,LX,TP,TG,TK,UA"},{text:"Oneworld",key:"AA,BA,CX,AY,IB,JL,LA,MH,QF,QR,RJ,S7,UL"},{text:"Milageplan",key:"AS,EI,AA,BA,CX,DE,LY,EK,FJ,AY,HU,FI,JL,KE,LA,7H,QF,SQ"},{text:"SkyWards",key:"EK,TP,SA,S7,QF,MH,KE,JQ,B6,JL,G3,CM,AS,MK"},{text:"Etihad Guest",key:"EY,NZ,JU,UX,HM,AZ,NH,AA,OZ,PG,SN,OK,GA,HU,9W,KE,MH,WY,PR,AT,SK,UL,VA,G3"}],F=function(e){return Object(b.jsx)(k.a,{options:T,selectedKey:e.value,placeholder:"Alliance",onChange:function(t,n){"alliance"===n.key?e.onChange(null):e.onChange(n.key.toString())}})},M=n(123),P=n.n(M),U=[{key:"EUR",text:"\u20ac"},{key:"USD",text:"US$"},{key:"JPY",text:"\xa5"},{key:"GBP",text:"\xa3"},{key:"CAD",text:"C$"},{key:"CHF",text:"CHF"}],D={EUR:"eu",USD:"us",JPY:"jp",GBP:"gb",CAD:"ca",CHF:"ch"},E=function(e){return e.hasOwnProperty("length")&&(e=e[0]),Object(b.jsxs)("div",{className:P.a.option,children:[Object(b.jsx)("img",{src:"https://flagicons.lipis.dev/flags/4x3/".concat(D[e.key],".svg")})," ",Object(b.jsx)("p",{children:e.text})]})},L=function(e){return Object(b.jsx)(k.a,{options:U,onChange:function(t,n){return e.onChange(n.key.toString())},selectedKey:e.value,defaultSelectedKey:"EUR",onRenderOption:E,onRenderTitle:E})},I=n(124),H=n.n(I),K=n(125),J=n(127),B=function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60);return"".concat(t,"H ").concat(n,"M")},V=function(e){return new Date(e).toUTCString().split(" ").slice(0,3).join(" ")},Q=function(e,t,n){var r,i=Object(c.useState)(null!==t&&void 0!==t?t:null),a=Object(l.a)(i,2),o=a[0],s=a[1];return n=null!==(r=n)&&void 0!==r?r:{},Object(c.useEffect)((function(){var t=new URLSearchParams(window.location.search).get(e);n.hasOwnProperty("parse")&&(t=n.parse(t)),s(t)}),[]),Object(c.useEffect)((function(){if(null!==o){var t=new URLSearchParams(window.location.search),r=o;n.hasOwnProperty("serialize")&&(r=n.serialize(r)),t.set(e,r),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(t.toString()))}}),[o]),[o,s]},G=function(e){var t="";switch(e){case"AY":t="https://logodix.com/logo/992919.png";break;default:return console.log("no image for: ",e),null}return t},Y=function(e){var t="";switch(e){case"AY":t="Finnair";break;case"SQ":t="Singapore Airlines";break;default:return console.log("no name for: ",e),null}return t},Z=function(e,t){var n=new Date(e),r=new Date(t).getTime()-n.getTime();return B(r/1e3)},z=function(e){return"".concat(e.flyFrom,"-").concat(e.flyTo,"-").concat(e.airline,"-").concat(e.fare_classes)},X=n(33),q=n.n(X),W=n(96),$=n.n(W),ee=function(e){return Object(b.jsxs)("div",{className:e.className,children:[Object(b.jsx)("p",{className:$.a.duration,children:Z(e.from.local_arrival,e.to.local_departure)}),Object(b.jsxs)("p",{className:$.a.stop,children:["Stop in ",e.from.cityTo," (",e.from.flyTo,")"]})]})},te=function(e){var t=new Date(e);return"".concat(t.getHours(),":").concat(t.getMinutes())},ne=function(e){var t,n,r=Object(b.jsxs)("div",{className:q.a.outbound,children:[Object(b.jsx)("p",{children:V(e.route.local_departure)}),Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Outbound"})})]});return Object(b.jsxs)(b.Fragment,{children:[e.route.flyFrom===e.routes[0]?r:null,Object(b.jsxs)("div",{className:q.a.flight,children:[Object(b.jsx)("p",{className:q.a.duration,children:Z(e.route.local_departure,e.route.local_arrival)}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:q.a.time,children:[Object(b.jsx)("div",{children:te(e.route.local_departure)}),Object(b.jsxs)("div",{children:[e.route.cityFrom," (",e.route.flyFrom,")"]})]}),Object(b.jsxs)("div",{className:q.a.time,children:[Object(b.jsxs)("div",{children:[e.route.airline,null!==(t=e.route.operating_flight_no)&&void 0!==t?t:e.route.flight_no]}),Object(b.jsx)("div",{children:Y(e.route.airline)})]}),Object(b.jsxs)("div",{className:q.a.time,children:[Object(b.jsx)("div",{children:te(e.route.local_arrival)}),Object(b.jsxs)("div",{children:[e.route.cityTo," (",e.route.flyTo,")"]})]})]}),Object(b.jsxs)("div",{className:q.a.info,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Fareclass "})}),Object(b.jsx)("p",{children:e.route.fare_classes})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Recheck "})}),Object(b.jsx)("p",{children:e.route.bags_recheck_required?"Yes":"No"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Points "})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:(n=e.route,"https://www.wheretocredit.com/calculator#".concat(z(n))),children:"wheretocredit.com"})})]})]})]}),null!==e.nextRoute?Object(b.jsx)(ee,{className:q.a.flight,from:e.route,to:e.nextRoute}):null]})},re=n(34),ce=n.n(re),ie={EUR:"\u20ac",USD:"US$",JPY:"\xa5",GBP:"\xa3",CAD:"C$",CHF:"CHF"},ae=function(e){var t=e.map(z);return"https://www.wheretocredit.com/calculator#".concat(t.join("/"))},oe=function(e){var t,n=Object(c.useState)(!1),r=Object(l.a)(n,2),i=r[0],a=r[1],o=function(){var t;return null!==(t=Object.keys(e.flight.conversion).find((function(e){return"EUR"!=e})))&&void 0!==t?t:"EUR"},u=[e.flight.flyFrom],d=[e.flight.cityFrom],j=(Object(J.a)(e.flight.route.slice(1,e.flight.route.length-1)),Object(K.a)(e.flight.route));try{for(j.s();!(t=j.n()).done;){var h=t.value;u.push(h.flyTo),d.push(h.cityTo)}}catch(f){j.e(f)}finally{j.f()}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:ce.a.container,children:[Object(b.jsxs)("div",{className:ce.a.textCombo,children:[Object(b.jsx)("p",{children:B(e.flight.duration.departure)}),Object(b.jsx)("p",{children:V(e.flight.local_departure)})]}),Object(b.jsxs)("div",{className:ce.a.textCombo,children:[Object(b.jsx)("p",{children:u.join(" \u2192 ")}),Object(b.jsx)("p",{children:d.join(" \u2192 ")})]}),Object(b.jsxs)("div",{className:ce.a.textCombo,children:[Object(b.jsx)("p",{children:e.flight.airlines.join(", ")}),Object(b.jsx)("p",{children:e.flight.airlines.map((function(e){return Object(b.jsx)("img",{className:ce.a.logo,src:G(e)},e)}))})]}),Object(b.jsxs)("div",{className:ce.a.price,children:[Object(b.jsx)(s.a,{iconName:i?"chevronUp":"chevronDown",onClick:function(e){return a((function(e){return!e}))}}),Object(b.jsxs)("p",{children:[ie[o()]," ",e.flight.conversion[o()]]})]})]})}),i?Object(b.jsx)("div",{children:e.flight.route.map((function(t,n,r){return Object(b.jsx)(ne,{route:t,routes:e.flight.routes[0],nextRoute:n+1<e.flight.route.length?e.flight.route[n+1]:null},t.id)}))}):null,Object(b.jsxs)("div",{className:ce.a.bottomBar,children:[Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.flight.deep_link,children:"Book this flight with Kiwi."}),Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:"http://www.gcmap.com/map?MS=wls&MR=300&MX=720x360&PM=*&P="+e.flight.route.map((function(e){return"".concat(e.flyFrom,"-").concat(e.flyTo)})).join(),children:"Route (GCM)"}),Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:ae(e.flight.route),children:"Points (wheretocredit)"})]})]})},le=function(e){return null===e.flights?null:Object(b.jsx)("div",{className:H.a.container,children:e.flights.map((function(e){return Object(b.jsx)(oe,{flight:e},e.id)}))})},se=n(291),ue=n(288),de=n(290),je=Object(w.p)({palette:{themePrimary:"#88a09e",themeLighterAlt:"#fafbfb",themeLighter:"#eaf0ef",themeLight:"#d8e3e2",themeTertiary:"#b5c6c5",themeSecondary:"#95acaa",themeDarkAlt:"#7b918f",themeDark:"#687a79",themeDarker:"#4c5a59",neutralLighterAlt:"#faf9f8",neutralLighter:"#f3f2f1",neutralLight:"#edebe9",neutralQuaternaryAlt:"#e1dfdd",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c6c4",neutralTertiary:"#c2c2c2",neutralSecondary:"#858585",neutralPrimaryAlt:"#4b4b4b",neutralPrimary:"#333333",neutralDark:"#272727",black:"#1d1d1d",white:"#eeeeee"}}),he=(n(217),n(218),n(40)),fe=n.n(he),be=function(e){return e?"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear()):null},ge=function(){try{return window.location.href}catch(e){return""}},pe=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],a=n[1],o=function(e){return JSON.stringify(e)},u={parse:function(e){return e?JSON.parse(e):null},serialize:o},d={parse:function(e){if(!e)return null;var t=JSON.parse(e);return t.end=new Date(t.end),t.start=new Date(t.start),t},serialize:o},h={parse:function(e){return parseInt(e)},serialize:function(e){return e.toString()}},f=Q("departure",null,d),g=Object(l.a)(f,2),p=g[0],x=g[1],O=Q("cabin","W"),v=Object(l.a)(O,2),y=v[0],k=v[1],C=Q("return",null,d),w=Object(l.a)(C,2),A=w[0],N=w[1],T=Q("adults",1,h),M=Object(l.a)(T,2),P=M[0],U=M[1],D=Q("stops",-1,h),E=Object(l.a)(D,2),I=E[0],H=E[1],K=Q("alliance"),J=Object(l.a)(K,2),B=J[0],V=J[1],G=Q("currency","eur"),Y=Object(l.a)(G,2),Z=Y[0],z=Y[1],X=Object(c.useState)(null),q=Object(l.a)(X,2),W=q[0],$=q[1],ee=Q("from",null,u),te=Object(l.a)(ee,2),ne=te[0],re=te[1],ce=Q("to",null,u),ie=Object(l.a)(ce,2),ae=ie[0],oe=ie[1];Object(c.useEffect)((function(){return Object(r.a)()}),[]);var he=function(){return navigator.clipboard.writeText(window.location.href)};return Object(b.jsx)(ue.a,{theme:je,children:i?Object(b.jsx)(R,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:fe.a.header,children:[Object(b.jsx)("h1",{children:"Stair"}),Object(b.jsx)("p",{children:"Travel hacking made easy."})]}),Object(b.jsxs)("div",{className:fe.a.container,children:[Object(b.jsxs)("div",{className:fe.a.fieldContainer,children:[Object(b.jsx)(m,{selected:null!==ne&&void 0!==ne?ne:[],onChange:function(e){return re(e)},label:"Departure location"}),Object(b.jsx)(m,{selected:null!==ae&&void 0!==ae?ae:[],onChange:function(e){return oe(e)},label:"Arrival location"})]}),Object(b.jsxs)("div",{className:fe.a.fieldContainer,children:[Object(b.jsx)(_,{value:p,onChange:x,placeholder:"Departure period"}),Object(b.jsx)(_,{value:A,onChange:N,placeholder:"Return period (optional)"})]}),Object(b.jsxs)("div",{className:fe.a.fieldContainer,children:[Object(b.jsx)(S,{value:y,onChange:k}),Object(b.jsx)(de.a,{type:"number",suffix:P>1?"adults":"adult",value:"".concat(P),defaultValue:"1",onChange:function(e,t){return U(parseInt(t))}}),Object(b.jsx)(de.a,{type:"number",suffix:I>1?"stops":"stop",defaultValue:"-1",value:"".concat(I),onChange:function(e,t){return H(parseInt(t))}}),Object(b.jsx)(F,{value:B,onChange:V})]}),Object(b.jsx)(se.a,{onClick:function(e){return function(){var e,t,n={fly_from:(null!==ne&&void 0!==ne?ne:[]).map((function(e){return e.code})).join(","),fly_to:(null!==ae&&void 0!==ae?ae:[]).map((function(e){return e.code})).join(","),date_from:be(p.start),date_to:be(null!==(e=p.end)&&void 0!==e?e:p.start),return_from:be(null===A||void 0===A?void 0:A.start),return_to:be(null!==(t=null===A||void 0===A?void 0:A.end)&&void 0!==t?t:null===A||void 0===A?void 0:A.start),flight_type:null!==A?"round":"oneway",adults:null!==P&&void 0!==P?P:1,curr:Z};I&&I>0&&(n.max_stopovers=I),B&&(n.select_airlines=B),a(!0),j()({url:"https://tequila-api.kiwi.com/v2/search",params:n,headers:{apikey:"9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ"}}).then((function(e){return $(e.data.data)})).then((function(e){return a(!1)}))}()},children:"Find flights!"}),Object(b.jsx)(de.a,{readOnly:!0,value:ge(),onRenderPrefix:function(){return Object(b.jsx)(s.a,{iconName:"MiniLink"})},onRenderSuffix:function(){return Object(b.jsx)(se.a,{text:"Copy",onClick:he})},styles:{suffix:{padding:0}}})]}),Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:fe.a.currencySelectContainer,children:Object(b.jsx)(L,{value:Z,onChange:z})}),Object(b.jsx)(le,{flights:W})]})})};Object(r.a)(),o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(pe,{})}),document.getElementById("root"))},33:function(e,t,n){e.exports={outbound:"flightRoute_outbound__3sdsD",flight:"flightRoute_flight__8lFqI",time:"flightRoute_time__3o5Q-",logo:"flightRoute_logo__1tlO9",info:"flightRoute_info__18tL9"}},34:function(e,t,n){e.exports={container:"flightView_container__1gTK7",textCombo:"flightView_textCombo__2qgSu",logo:"flightView_logo__22tq4",price:"flightView_price__3C22r",bottomBar:"flightView_bottomBar__Hza7G"}},40:function(e,t,n){e.exports={fieldContainer:"App_fieldContainer__zjkO8",container:"App_container__1MQN3",currencySelectContainer:"App_currencySelectContainer__10vhf",header:"App_header__3ZZ1n"}},93:function(e,t,n){e.exports={suggestionItem:"airportPicker_suggestionItem__V8yLh",icon:"airportPicker_icon__1MJ63"}},96:function(e,t,n){e.exports={duration:"flightStop_duration__1mDOW",stop:"flightStop_stop__VFoEv"}}},[[220,1,2]]]);
//# sourceMappingURL=main.dd7021e8.chunk.js.map