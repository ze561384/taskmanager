(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],{35:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n(11),a=n.n(i),r=(n(35),n(16)),j=n(9),d=(n(39),function(){return Object(c.jsxs)("div",{className:"Navbar",children:[Object(c.jsx)(j.b,{to:"/todo",children:"Todo"})," ",Object(c.jsx)(j.b,{to:"/contact",children:"Contact"})," "]})}),o=(n(44),n(2)),l=n(13),u=n(14),b=n(7),h=n(17),m=n(15),O=n(28),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).createTasks=c.createTasks.bind(Object(b.a)(c)),c}return Object(u.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return Object(c.jsxs)("li",{children:[e.text,Object(c.jsx)("button",{onClick:function(n){t.delete(e.key)},children:"x"})]},e.key)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(c.jsx)("ul",{className:"theList",children:Object(c.jsx)(O.a,{duration:250,easing:"ease-out",children:e})})}}]),n}(s.Component),p=(n(45),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={items:[]},c.addItem=c.addItem.bind(Object(b.a)(c)),c.deleteItem=c.deleteItem.bind(Object(b.a)(c)),c}return Object(u.a)(n,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"todoListMain",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("form",{onSubmit:this.addItem,children:[Object(c.jsx)("input",{ref:function(t){return e._inputElement=t},placeholder:"enter task"}),Object(c.jsx)("button",{type:"submit",children:"add"})]})}),Object(c.jsx)(x,{entries:this.state.items,delete:this.deleteItem})]})}}]),n}(s.Component)),v=n(29);n(46);var f=function(){var e=Object(r.b)("contactForm"),t=Object(v.a)(e,2),n=t[0],s=t[1];return n.succeeded?Object(c.jsx)("p",{children:"Thanks for contacting us, we'll reach out as soon as possible"}):Object(c.jsxs)("div",{className:"Contact",children:[Object(c.jsx)("h1",{children:"Contact Us"}),Object(c.jsxs)("form",{onSubmit:s,children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{id:"firstName",type:"text",name:"firstName"})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{id:"lastName",type:"text",name:"lastName"})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{id:"email",type:"email",name:"email"})}),Object(c.jsx)("div",{children:Object(c.jsx)("textarea",{id:"text",type:"text",name:"text"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",disabled:n.submitting,children:"Send"})})]})]})};var k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{}),Object(c.jsx)("div",{className:"pageContent",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/todo",component:p}),Object(c.jsx)(r.a,{project:"1615235090206424165",children:Object(c.jsx)(o.a,{path:"/contact",component:f})})]})})]})},y=document.querySelector("#container");a.a.render(Object(c.jsx)(j.a,{children:Object(c.jsx)("div",{children:Object(c.jsx)(k,{})})}),y)}},[[47,1,2]]]);
//# sourceMappingURL=main.d58f56ad.chunk.js.map