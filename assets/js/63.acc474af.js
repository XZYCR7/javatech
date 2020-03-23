(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{341:function(t,a,e){"use strict";e.r(a);var r=e(11),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"shardingsphere"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shardingsphere"}},[t._v("#")]),t._v(" ShardingSphere")]),t._v(" "),e("blockquote",[e("p",[t._v("ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功能，可适用于如 Java 同构、异构语言、云原生等各种多样化的应用场景。")])]),t._v(" "),e("h2",{attrs:{id:"架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://shardingsphere.apache.org/document/current/img/shardingsphere-scope_cn.png",alt:"ShardingSphere Scope"}})]),t._v(" "),e("h3",{attrs:{id:"sharding-jdbc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharding-jdbc"}},[t._v("#")]),t._v(" Sharding-JDBC")]),t._v(" "),e("p",[t._v("定位为轻量级 Java 框架，在 Java 的 JDBC 层提供的额外服务。 它使用客户端直连数据库，以 jar 包形式提供服务，无需额外部署和依赖，可理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。")]),t._v(" "),e("ul",[e("li",[t._v("适用于任何基于 Java 的 ORM 框架，如：JPA, Hibernate, Mybatis, Spring JDBC Template 或直接使用 JDBC。")]),t._v(" "),e("li",[t._v("基于任何第三方的数据库连接池，如：DBCP, C3P0, BoneCP, Druid, HikariCP 等。")]),t._v(" "),e("li",[t._v("支持任意实现 JDBC 规范的数据库。目前支持 MySQL，Oracle，SQLServer 和 PostgreSQL。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://shardingsphere.apache.org/document/current/img/sharding-jdbc-brief.png",alt:"Sharding-JDBC Architecture"}})]),t._v(" "),e("h3",{attrs:{id:"sharding-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharding-proxy"}},[t._v("#")]),t._v(" Sharding-Proxy")]),t._v(" "),e("p",[t._v("定位为透明化的数据库代理端，提供封装了数据库二进制协议的服务端版本，用于完成对异构语言的支持。 目前先提供 MySQL/PostgreSQL 版本，它可以使用任何兼容 MySQL/PostgreSQL 协议的访问客户端(如：MySQL Command Client, MySQL Workbench, Navicat 等)操作数据，对 DBA 更加友好。")]),t._v(" "),e("ul",[e("li",[t._v("向应用程序完全透明，可直接当做 MySQL/PostgreSQL 使用。")]),t._v(" "),e("li",[t._v("适用于任何兼容 MySQL/PostgreSQL 协议的的客户端。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://shardingsphere.apache.org/document/current/img/sharding-proxy-brief_v2.png",alt:"Sharding-Proxy Architecture"}})]),t._v(" "),e("h3",{attrs:{id:"sharding-sidecar（todo）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharding-sidecar（todo）"}},[t._v("#")]),t._v(" Sharding-Sidecar（TODO）")]),t._v(" "),e("p",[t._v("定位为 Kubernetes 的云原生数据库代理，以 Sidecar 的形式代理所有对数据库的访问。 通过无中心、零侵入的方案提供与数据库交互的的啮合层，即 Database Mesh，又可称数据网格。")]),t._v(" "),e("p",[t._v("Database Mesh 的关注重点在于如何将分布式的数据访问应用与数据库有机串联起来，它更加关注的是交互，是将杂乱无章的应用与数据库之间的交互有效的梳理。使用 Database Mesh，访问数据库的应用和数据库终将形成一个巨大的网格体系，应用和数据库只需在网格体系中对号入座即可，它们都是被啮合层所治理的对象。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://shardingsphere.apache.org/document/current/img/sharding-sidecar-brief_v2.png",alt:"Sharding-Sidecar Architecture"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("em",[t._v("Sharding-JDBC")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("em",[t._v("Sharding-Proxy")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("em",[t._v("Sharding-Sidecar")])]),t._v(" "),e("th")])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据库")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("任意")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL")]),t._v(" "),e("td",[t._v("MySQL")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("连接消耗数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("低")]),t._v(" "),e("td",[t._v("高")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("异构语言")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅 Java")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("任意")]),t._v(" "),e("td",[t._v("任意")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("损耗低")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("损耗略高")]),t._v(" "),e("td",[t._v("损耗低")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("无中心化")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("静态入口")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),e("td",[t._v("无")])])])]),t._v(" "),e("h3",{attrs:{id:"混合架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#混合架构"}},[t._v("#")]),t._v(" 混合架构")]),t._v(" "),e("p",[t._v("Sharding-JDBC 采用无中心化架构，适用于 Java 开发的高性能的轻量级 OLTP 应用；Sharding-Proxy 提供静态入口以及异构语言的支持，适用于 OLAP 应用以及对分片数据库进行管理和运维的场景。")]),t._v(" "),e("p",[t._v("ShardingSphere 是多接入端共同组成的生态圈。 通过混合使用 Sharding-JDBC 和 Sharding-Proxy，并采用同一注册中心统一配置分片策略，能够灵活的搭建适用于各种场景的应用系统，架构师可以更加自由的调整适合于当前业务的最佳系统架构。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://shardingsphere.apache.org/document/current/img/shardingsphere-hybrid.png",alt:"ShardingSphere Hybrid Architecture"}})]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/apache/incubator-shardingsphere",target:"_blank",rel:"noopener noreferrer"}},[t._v("shardingsphere"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=i.exports}}]);