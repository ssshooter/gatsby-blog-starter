(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(161),s=n.n(l),c=n(152),u=(n(162),n(165),i.Component,i.Component,n(154));n.d(t,"pageQuery",function(){return p});var m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=(this.props.data.allCommentsYaml&&this.props.data.allCommentsYaml.edges,this.props.data.site.siteMetadata.title),n=e.excerpt,a=this.props.pageContext,r=(a.slug,a.previous),i=a.next;return o.a.createElement(u.a,{location:this.props.location,title:t},o.a.createElement(s.a,{htmlAttributes:{lang:"zh"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),o.a.createElement("h1",{className:"css-title"},e.frontmatter.title),o.a.createElement("div",{className:"css-info"},e.frontmatter.date,e.frontmatter.tags?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"css-tag"},"Tags:"),e.frontmatter.tags.map(function(t,n){return o.a.createElement("span",{key:t,onClick:function(){return Object(c.navigate)("/tag/"+t.toLowerCase())},className:"css-tag"},t,n+1===e.frontmatter.tags.length?null:",")})):null),e.tableOfContents?o.a.createElement("div",{className:"css-toc",dangerouslySetInnerHTML:{__html:"<div>目录</div>"+e.tableOfContents}}):null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{margin:"3rem 0"}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(c.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(c.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component),p=(t.default=m,"2030210734")},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(151),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(153),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(152),s=(n(157),n(156),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pageName,n=e.pageDescript,a=e.title,r=e.children,i=o.a.createElement("div",null,o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontSize:"2rem",fontWeight:200,paddingRight:"0.2rem"},to:"/"},a),t?o.a.createElement("span",{style:{verticalAlign:"top"}},"# "+t):null),s=o.a.createElement("div",{style:{marginBottom:"3rem"}},n);return o.a.createElement("div",{style:{margin:"auto",maxWidth:"672px",padding:"1.2rem 3rem"}},i,n?s:null,r)},t}(o.a.Component));t.a=s},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){},162:function(e,t){},165:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b882fabf0369b19ca6ea.js.map