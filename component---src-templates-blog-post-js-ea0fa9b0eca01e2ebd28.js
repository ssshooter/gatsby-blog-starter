(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),s=n.n(i),l=n(161),o=n.n(l),u=n(152),c=(n(162),n(165),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={submitState:"发送留言"},t.submit=function(){var e=new XMLHttpRequest;e.open("POST","https://ufb-comment.herokuapp.com/v2/entry/ssshooter/usubeni-fantasy/master/comments",!0),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status||304==e.status)console.log(e.responseText),t.name.value="",t.email.value="",t.message.value="",alert("留言已发送，将在数分钟后显示"),t.setState({submitState:"已发送"});else{var n=JSON.parse(e.responseText);n.errorCode&&alert(n.errorCode),t.button.disabled=!1,t.setState({submitState:"发送留言"})}};var n={fields:{url:t.props.url,name:t.name.value,email:t.email.value,message:t.message.value}};e.send(JSON.stringify(n)),t.setState({submitState:"发送中"}),t.button.disabled=!0},t}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("div",{className:"css-comment-submit"},s.a.createElement("h3",null,"留言",s.a.createElement("span",null,"（将在数分钟后显示）")),s.a.createElement("p",null,"昵称"),s.a.createElement("input",{ref:function(t){return e.name=t},type:"text",placeholder:"必填 请输入你的昵称",required:!0}),s.a.createElement("p",null,"联系方式"),s.a.createElement("input",{ref:function(t){return e.email=t},type:"email",placeholder:"非必填 请输入你的联系方式"}),s.a.createElement("p",null,"留言内容"),s.a.createElement("textarea",{ref:function(t){return e.message=t},placeholder:"必填 请输入留言内容",required:!0}),s.a.createElement("button",{ref:function(t){return e.button=t},onClick:this.submit},this.state.submitState))},t}(i.Component)),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=new Date(1e3*this.props.data.date),t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return s.a.createElement("div",{className:"css-comment-display"},s.a.createElement("div",{className:"name"},this.props.data.name,s.a.createElement("span",{className:"date"},t)),s.a.createElement("div",{className:"message"},this.props.data.message))},t}(i.Component),p=n(154);n.d(t,"pageQuery",function(){return f});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.allCommentsYaml?this.props.data.allCommentsYaml.edges:[],n=this.props.data.site.siteMetadata.title,a=e.excerpt,r=this.props.pageContext,i=r.slug,l=r.previous,d=r.next;return s.a.createElement(p.a,{location:this.props.location,title:n},s.a.createElement(o.a,{htmlAttributes:{lang:"zh"},meta:[{name:"description",content:a}],title:e.frontmatter.title+" | "+n}),s.a.createElement("h1",{className:"css-title"},e.frontmatter.title),s.a.createElement("div",{className:"css-info"},e.frontmatter.date,e.frontmatter.tags?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"css-tag"},"Tags:"),e.frontmatter.tags.map(function(t,n){return s.a.createElement("span",{key:t,onClick:function(){return Object(u.navigate)("/tag/"+t.toLowerCase())},className:"css-tag"},t,n+1===e.frontmatter.tags.length?null:",")})):null),e.tableOfContents?s.a.createElement("div",{className:"css-toc",dangerouslySetInnerHTML:{__html:"<div>目录</div>"+e.tableOfContents}}):null,s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{margin:"3rem 0"}}),t.map(function(e){return s.a.createElement(m,{key:e.node.id,data:e.node})}),s.a.createElement(c,{url:i}),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,l&&s.a.createElement(u.Link,{to:l.fields.slug,rel:"prev"},"← ",l.frontmatter.title)),s.a.createElement("li",null,d&&s.a.createElement(u.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →"))))},t}(s.a.Component),f=(t.default=d,"2030210734")},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),l=n(151),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(153),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),s=n.n(i),l=n(152),o=(n(157),n(156),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pageName,n=e.pageDescript,a=e.title,r=e.children,i=s.a.createElement("div",null,s.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontSize:"2rem",fontWeight:200,paddingRight:"0.2rem"},to:"/"},a),t?s.a.createElement("span",{style:{verticalAlign:"top"}},"# "+t):null),o=s.a.createElement("div",{style:{marginBottom:"3rem"}},n);return s.a.createElement("div",{style:{margin:"auto",maxWidth:"672px",padding:"1.2rem 3rem"}},i,n?o:null,r)},t}(s.a.Component));t.a=o},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),l=n(52),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},156:function(e,t,n){},162:function(e,t){},165:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ea0fa9b0eca01e2ebd28.js.map