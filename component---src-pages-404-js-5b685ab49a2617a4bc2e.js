(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(156),l=n(157),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=s;var u="1097489062"},152:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(32),l=n.n(c);n.d(e,"a",function(){return l.a});n(154);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i});var a=n(164),r=new(n.n(a).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Myeongjo"],bodyFontFamily:["Nanum Gothic Coding"]});var o=r.scale,i=r.rhythm;r.options},154:function(t,e,n){var a;t.exports=(a=n(155))&&a.default||a},155:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(54),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(152),l=n(153),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?i.a.createElement("header",{className:"section__header"},i.a.createElement("div",null,i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a,"✨"))),i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.a,{to:"/til"},"TIL")),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/til"},"portfolio"))))):i.a.createElement("header",{className:"section__header"},i.a.createElement("h3",{style:{marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a,"✨"))),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,i.a.createElement("main",null,r),i.a.createElement("footer",null,"raina + gatsby"))},e}(i.a.Component);e.a=s},157:function(t,e,n){"use strict";var a=n(158),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(165),s=n.n(l);function u(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,l=a.data.site,u=e||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Raina's log",description:"A log about Web development written by raina",author:"SeongRyeong Kim"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-5b685ab49a2617a4bc2e.js.map