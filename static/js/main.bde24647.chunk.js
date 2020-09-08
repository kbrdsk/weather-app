(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/loading.399cf215.gif"},11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),i=a(3),o=a(4),s=a(2),u=a(6),l=a(5),d=a(0),p=a.n(d),m=a(9),h=a.n(m);function f(e){var t=encodeURI(e);return"https://api.opencagedata.com/geocode/v1/json?q=".concat(t)+"&key=".concat("3ee4ea507c174d90850ab5cd219ced08")}function v(e){var t=e.lat,a=e.lng;return"https://api.openweathermap.org/data/2.5/onecall?"+"lat=".concat(t,"&lon=").concat(a)+"&exclude=minutely"+"&appid=".concat("3e81ce2f6403ab0898bbba96bb2ed63d")+"&units=imperial"}function b(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f(t),e.next=3,fetch(a).then((function(e){return e.json()}));case 3:return n=e.sent,console.log(n),e.abrupt("return",n.results[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v(t),e.next=3,fetch(a).then((function(e){return e.json()}));case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return p.a.createElement("form",{id:"search",onSubmit:this.handleSubmit},p.a.createElement("input",{type:"text",onChange:this.handleChange,name:"location",placeholder:"Location"}),p.a.createElement("input",{type:"submit",value:""}))}},{key:"handleSubmit",value:function(e){this.props.getData(this.state.location),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({location:e.target.value})}}]),a}(p.a.Component),j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],D=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={units:"imperial",timeFrame:"current"},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data.weatherData;return p.a.createElement("div",{id:"weather-display"},p.a.createElement(O,{data:this.props.data.locationData}),p.a.createElement(k,{data:e.current}),p.a.createElement("div",{id:"forecast-week"},e.daily.map(x)))}}]),a}(p.a.Component);function O(e){var t=e.data.components;return p.a.createElement("div",{id:"location"},p.a.createElement("div",{className:"city"},t.city),p.a.createElement("div",{className:"state"},t.state),p.a.createElement("div",{className:"country"},t.country))}function k(e){return p.a.createElement("div",{id:"current-weather"},p.a.createElement("img",{src:S(e.data.weather[0].icon),alt:""}),p.a.createElement("div",{className:"info"},p.a.createElement("div",{className:"temp"},N(e.data.temp)+"F"),p.a.createElement("div",{className:"description"},e.data.weather[0].description)))}function x(e){var t=new Date(1e3*e.dt);return p.a.createElement("div",{className:"day",key:t.getDate()},p.a.createElement("div",{className:"title"},j[t.getDay()].substring(0,3)),p.a.createElement("img",{src:S(e.weather[0].icon),alt:""}),p.a.createElement("div",null,p.a.createElement("span",{className:"temp-day"},N(e.temp.day)),p.a.createElement("span",{className:"temp-night"},N(e.temp.night))))}function S(e){return"http://openweathermap.org/img/wn/".concat(e,"@2x.png")}function N(e){return Math.floor(e)+"\xb0"}a(17);var C=a(10),L=a.n(C),F=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loading:!1},n.getData=n.getData.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{id:"app"},p.a.createElement(w,{getData:this.getData}),this.state.loading?p.a.createElement("img",{class:"loading",src:L.a,alt:""}):this.state.apiData?p.a.createElement(D,{data:this.state.apiData}):this.state.badLocation?p.a.createElement("div",{id:"location-not-found"},"Location not found."):null)}},{key:"getData",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,b(t);case 4:return a=e.sent,e.next=7,y(a.geometry);case 7:n=e.sent,this.setState({apiData:{weatherData:n,locationData:a},loading:!1,badLocation:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),this.setState({loading:!1,apiData:null,badLocation:!0});case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(p.a.Component);h.a.render(p.a.createElement(F,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.bde24647.chunk.js.map