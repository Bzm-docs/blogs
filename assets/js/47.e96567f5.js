(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{526:function(t,a,s){t.exports=s.p+"assets/img/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NjU1NjAy,size_16,color_FFFFFF,t_70.ad657f07.png"},722:function(t,a,s){"use strict";s.r(a);var r=s(6),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"容器问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器问题"}},[t._v("#")]),t._v(" 容器问题")]),t._v(" "),r("h2",{attrs:{id:"分布式缓存问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存问题"}},[t._v("#")]),t._v(" 分布式缓存问题")]),t._v(" "),r("p",[t._v("比如有 1 ～ 2 亿的数据需要缓存，如何设计存储方案？")]),t._v(" "),r("p",[t._v("单机单台 100%不可能,肯定是分布式存储，如何用 Redis 落地？")]),t._v(" "),r("h3",{attrs:{id:"哈希取余分区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#哈希取余分区"}},[t._v("#")]),t._v(" 哈希取余分区")]),t._v(" "),r("p",[t._v("比如我们有三台 Redis 的主服务器，我们要存储用户 id 为 10 的数据。这时我们的公式为：hash(10) % 3 = 1(hash(10) = 10)，我们就可以定位到将用户用户 id 为 10 的数据存入到 master1 的服务器节点中。当我们获取数据时一样通过公式能定位到 master1 主节点，这们就省去了遍历所有服务器的时间，从而大大提升了性能。")]),t._v(" "),r("p",[r("strong",[t._v("缺点分析")])]),t._v(" "),r("p",[t._v("节点取余分区方式有一个问题：即当增加或减少节点时，原来节点中的 80% 的数据会进行迁移操作，对所有数据重新进行分布")]),t._v(" "),r("p",[r("img",{attrs:{src:s(526),alt:"节点取余"}})]),t._v(" "),r("h3",{attrs:{id:"一致性哈希算法分区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一致性哈希算法分区"}},[t._v("#")]),t._v(" 一致性哈希算法分区")]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qq_35655602/article/details/116034418",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Redis】哈希分布的三种方式"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);