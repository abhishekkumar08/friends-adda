(this["webpackJsonpfriends-adda"]=this["webpackJsonpfriends-adda"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),i=t.n(r),a=t(3),s=t.n(a),d=(t(13),t(4)),o=t(5),h=t(7),u=t(6),l=(t(14),t(15),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:"friend",src:"https://robohash.org/".concat(e.friend.id,"?set=set2&size=180x180")}),Object(c.jsx)("h2",{children:e.friend.name}),Object(c.jsx)("p",{children:e.friend.email})]})}),f=(t(16),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.friends.map((function(e){return Object(c.jsx)(l,{friend:e},e.id)}))})}),j=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return Object(c.jsx)("input",{type:"search",className:"search",placeholder:n,onChange:t})}),b=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(d.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={friends:[],searchField:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({friends:n})}))}},{key:"render",value:function(){var e=this.state,n=e.friends,t=e.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Friends Adda"}),Object(c.jsx)(j,{placeholder:"Seach friend",handleChange:this.handleChange}),Object(c.jsx)(f,{friends:r})]})}}]),t}(r.Component),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.efffcaf6.chunk.js.map