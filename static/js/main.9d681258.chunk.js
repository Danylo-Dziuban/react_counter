(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c=e(3),r=e.n(c),a=e(1),s=e.n(a),o=(e(12),e(4)),d=e(5),i=e(7),u=e(6),b=e(0),l=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={count:0},t.addOne=function(){t.setState((function(t){var n=t.count;return{count:n+=1}}))},t.add100=function(){t.setState((function(t){var n=t.count;return{count:n+=100}}))},t.increase=function(){t.setState((function(n){n.count%5===0?(t.addOne(),t.add100()):t.addOne()}))},t}return Object(d.a)(e,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:" d-flex justify-content-center flex-wrap w-25 mt-5 p-3 border border-primary rounded-4 ",children:[Object(b.jsxs)("h1",{className:"p-2 d-block",children:["Count: ",this.state.count]}),Object(b.jsxs)("div",{className:"d-flex gap-2",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.addOne,children:"Add one"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.add100,children:"Add one hundred"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.increase,children:"Increase"})]})]})}}]),e}(s.a.Component),j=function(){return Object(b.jsx)("div",{className:"d-flex justify-content-center w-100",children:Object(b.jsx)(l,{})})};r.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9d681258.chunk.js.map