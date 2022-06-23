"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],d={id:"quick-deployment",sidebar_position:3.1},s="Quick Deployment",l={unversionedId:"getting-started/quick-deployment",id:"getting-started/quick-deployment",title:"Quick Deployment",description:"Upload and decompress the TAR package",source:"@site/docs/02-getting-started/quick-deployment.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deployment",permalink:"/docs/getting-started/quick-deployment",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/02-getting-started/quick-deployment.md",tags:[],version:"current",lastUpdatedBy:"cieldon",lastUpdatedAt:1655949335,formattedLastUpdatedAt:"6/23/2022",sidebarPosition:3.1,frontMatter:{id:"quick-deployment",sidebar_position:3.1},sidebar:"autoSidebar",previous:{title:"Server Configuration Requirements",permalink:"/docs/environment-requirements/server-configuration-requirements"},next:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},c={},p=[{value:"Upload and decompress the TAR package",id:"upload-and-decompress-the-tar-package",level:2},{value:"Check dependencies",id:"check-dependencies",level:2},{value:"Modify the configuration file",id:"modify-the-configuration-file",level:2},{value:"Create an account and directories",id:"create-an-account-and-directories",level:2},{value:"Initialize StoneDB",id:"initialize-stonedb",level:2},{value:"Start or stop StoneDB",id:"start-or-stop-stonedb",level:2},{value:"Log in as admin and reset the password",id:"log-in-as-admin-and-reset-the-password",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-deployment"},"Quick Deployment"),(0,a.kt)("h2",{id:"upload-and-decompress-the-tar-package"},"Upload and decompress the TAR package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar -zxvf stonedb-build_stonedb5.7_0.1_x86_64_CentOS7.9.2009_Release_2022-05-17_12_06.bin.tar.gz\n")),(0,a.kt)("p",null,"Upload the installation package to the directory. The name of the folder extracted from the package is ",(0,a.kt)("strong",{parentName:"p"},"stonedb"),"."),(0,a.kt)("h2",{id:"check-dependencies"},"Check dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd stonedb/install/bin\nldd mysqld\nldd mysql\n")),(0,a.kt)("p",null,"If the command output contains keywords ",(0,a.kt)("strong",{parentName:"p"},"not found"),", some dependencies are missing and must be installed."),(0,a.kt)("h2",{id:"modify-the-configuration-file"},"Modify the configuration file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd stonedb/install/\ncp stonedb.cnf stonedb.cnf.bak\nvi stonedb.cnf\n")),(0,a.kt)("p",null,"Modify the path and parameters. If the installation folder is ",(0,a.kt)("strong",{parentName:"p"},"stonedb"),", you only need to modify the parameters."),(0,a.kt)("h2",{id:"create-an-account-and-directories"},"Create an account and directories"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"groupadd stonedb\nuseradd -g stonedb stonedb\npasswd stonedb\ncd stonedb/install/\nmkdir binlog\nmkdir log\nmkdir tmp\nmkdir redolog\nmkdir undolog\nchown -R stonedb:stonedb stonedb\n")),(0,a.kt)("h2",{id:"initialize-stonedb"},"Initialize StoneDB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/stonedb/install/bin/mysqld --defaults-file=/stonedb/install/stonedb.cnf --initialize-insecure --user=stonedb\n")),(0,a.kt)("p",null,"When you initialize StoneDB, add",(0,a.kt)("strong",{parentName:"p"}," parameter --initialize-insecure")," to allow the admin to initially log in without the need to enter a password. The admin is required to set a password after the initial login."),(0,a.kt)("h2",{id:"start-or-stop-stonedb"},"Start or stop StoneDB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/stonedb/install/bin/mysqld_safe --defaults-file=/stonedb/install/stonedb.cnf --user=stonedb &\nmysqladmin -uroot -p -S /stonedb/install/tmp/mysql.sock shutdown\n")),(0,a.kt)("h2",{id:"log-in-as-admin-and-reset-the-password"},"Log in as admin and reset the password"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql -uroot -p -S /stonedb/install/tmp/mysql.sock\n>set password = password('MYPASSWORD');\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("strong",{parentName:"p"},"MYPASSWORD")," with your password."))}m.isMDXComponent=!0}}]);