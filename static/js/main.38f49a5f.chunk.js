(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/logo.72ffe8d4.png"},26:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(5),c=n.n(o),i=(n(19),n(2)),l=n.n(i),s=n(6),u=n(7),p=n(8),m=n(12),d=n(9),h=n(13),f=(n(23),n(28)),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={data:[]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ghibliapi.herokuapp.com/films",e.prev=1,e.next=4,fetch("https://ghibliapi.herokuapp.com/films");case 4:if((t=e.sent).ok){e.next=7;break}throw Error(t.statusText);case 7:return e.next=9,t.json();case 9:n=e.sent,this.setState({data:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[1,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.description.substring(0,150)))});return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("thead",null,r.a.createElement("tr",{key:"-1"},r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Description"))),r.a.createElement("tbody",null,e)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.38f49a5f.chunk.js.map