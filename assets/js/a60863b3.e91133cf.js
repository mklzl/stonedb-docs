"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[308],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5205:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={id:"regular-change-operations",sidebar_position:4.1},s="Regular Change Operations",p={unversionedId:"O&M-Guide/regular-change-operations",id:"O&M-Guide/regular-change-operations",title:"Regular Change Operations",description:"Change operations on schemas and data of tables",source:"@site/docs/03-O&M-Guide/regular-change-operations.md",sourceDirName:"03-O&M-Guide",slug:"/O&M-Guide/regular-change-operations",permalink:"/docs/O&M-Guide/regular-change-operations",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/03-O&M-Guide/regular-change-operations.md",tags:[],version:"current",lastUpdatedBy:"leizzboy",lastUpdatedAt:1655901423,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:4.1,frontMatter:{id:"regular-change-operations",sidebar_position:4.1},sidebar:"autoSidebar",previous:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"},next:{title:"Please wait for release",permalink:"/docs/download"}},u={},d=[{value:"Change operations on schemas and data of tables",id:"change-operations-on-schemas-and-data-of-tables",level:2},{value:"Create tables using the same schema",id:"create-tables-using-the-same-schema",level:3},{value:"Clear data in a table",id:"clear-data-in-a-table",level:3},{value:"Add a field",id:"add-a-field",level:3},{value:"Drop a field",id:"drop-a-field",level:3},{value:"Rename a table",id:"rename-a-table",level:3},{value:"Change operations on user permissions",id:"change-operations-on-user-permissions",level:2},{value:"Create a user",id:"create-a-user",level:3},{value:"Grant user permissions",id:"grant-user-permissions",level:3},{value:"Revoke permissions",id:"revoke-permissions",level:3},{value:"Drop a user",id:"drop-a-user",level:3}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regular-change-operations"},"Regular Change Operations"),(0,o.kt)("h2",{id:"change-operations-on-schemas-and-data-of-tables"},"Change operations on schemas and data of tables"),(0,o.kt)("p",null,"This section describes the supported change operations on schemas and data of tables."),(0,o.kt)("h3",{id:"create-tables-using-the-same-schema"},"Create tables using the same schema"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Execute a ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")," statement to create a StoneDB table.")),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_name(\n  col1 INT NOT NULL AUTO_INCREMENT,\n  col2 VARCHAR(10) NOT NULL,\n  ......\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Execute a ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE TABLE... LIKE "),"statement to create another table that uses the same schema as the table created in the step 1.")),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"create table t_other like t_name;\n")),(0,o.kt)("h3",{id:"clear-data-in-a-table"},"Clear data in a table"),(0,o.kt)("p",null,"Execute a ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE")," statement to clear data in a table and retain the table schema."),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"truncate table t_name;\n")),(0,o.kt)("h3",{id:"add-a-field"},"Add a field"),(0,o.kt)("p",null,"Execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE... ADD COLUMN")," statement to add a field in a given table. The added field is the last field, by default.\nCode example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table t_name add column c_name varchar(10);\n")),(0,o.kt)("h3",{id:"drop-a-field"},"Drop a field"),(0,o.kt)("p",null,"Execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE... DROP")," statement to drop a field from a table.",(0,o.kt)("br",null),"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table t_name drop c_name;\n")),(0,o.kt)("h3",{id:"rename-a-table"},"Rename a table"),(0,o.kt)("p",null,"Execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE... RENAME TO")," statement to rename a given table.",(0,o.kt)("br",null),"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table t_name rename to t_name_new;\n")),(0,o.kt)("h2",{id:"change-operations-on-user-permissions"},"Change operations on user permissions"),(0,o.kt)("h3",{id:"create-a-user"},"Create a user"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"create user 'u_name'@'hostname' identified by 'xxx';\n")),(0,o.kt)("h3",{id:"grant-user-permissions"},"Grant user permissions"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grant all on *.* to 'u_name'@'hostname';\ngrant select on db_name.* to 'u_name'@'hostname';\ngrant select(column_name) on db_name.t_name to 'u_name'@'hostname';\n")),(0,o.kt)("h3",{id:"revoke-permissions"},"Revoke permissions"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"revoke all privileges on *.* from 'u_name'@'hostname';\nrevoke select on db_name.* from 'u_name'@'hostname';\nrevoke select(column_name) on db_name.t_name from 'u_name'@'hostname';\n")),(0,o.kt)("h3",{id:"drop-a-user"},"Drop a user"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"drop user 'u_name'@'hostname';\n")))}m.isMDXComponent=!0}}]);