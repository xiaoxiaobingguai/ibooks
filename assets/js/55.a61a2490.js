(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{410:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"更改mysql的存储目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改mysql的存储目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 更改MySQL的存储目录")]),a._v(" "),t("h5",{attrs:{id:"重要步骤：一定要先停止mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要步骤：一定要先停止mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" 重要步骤：一定要先停止Mysql")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# service mysqld stop")]),a._v("\n")])])]),t("h5",{attrs:{id:"_1、创建目标文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建目标文件夹","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、创建目标文件夹")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mkdir -p /data/mysql")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# chown -R mysql.mysql /data/mysql/")]),a._v("\n")])])]),t("h5",{attrs:{id:"_2、迁移命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、迁移命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、迁移命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mysql_install_db --user=mysql --basedir=/usr --datadir=/data/mysql")]),a._v("\n")])])]),t("h5",{attrs:{id:"_3、为避免麻烦，删掉原文件夹-var-lib-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、为避免麻烦，删掉原文件夹-var-lib-mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、为避免麻烦，删掉原文件夹/var/lib/mysql")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rm -rf /var/lib/mysql/*")]),a._v("\n")])])]),t("h5",{attrs:{id:"_4、修改-etc-my-cnf配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、修改-etc-my-cnf配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、修改/etc/my.cnf配置文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ndatadir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/mysql\n")])])]),t("h5",{attrs:{id:"_5、启动mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、启动mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" 5、启动mysql")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# chkconfig mysqld on")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# service mysqld restart")]),a._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);