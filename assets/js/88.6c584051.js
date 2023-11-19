(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1941:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-1.bfae2097.png"},1942:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-2.b8678c87.png"},1943:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-3.ea410789.png"},1944:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-4.bbb97675.png"},1945:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-5.26cd528f.png"},1946:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-6.ed7ec2ca.png"},1947:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-7.adfb45b2.png"},1948:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-8.f599e3f0.png"},1949:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-9.43978417.png"},1950:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-10.0fbf4b56.png"},1951:function(r,t,e){r.exports=e.p+"assets/img/log-jd-store-11.8cf23186.png"},3857:function(r,t,e){"use strict";e.r(t);var _=e(7),o=Object(_.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"京东-秒级百g日志传输存储架构设计与实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#京东-秒级百g日志传输存储架构设计与实战"}},[r._v("#")]),r._v(" 京东: 秒级百G日志传输存储架构设计与实战")]),r._v(" "),t("p",[r._v("================================================")]),r._v(" "),t("blockquote",[t("p",[r._v("在日常工作中，通常需要存储一些日志，譬如用户请求的出入参、系统运行时打印的一些info、error之类的日志，从而对系统在运行时出现的问题有排查的依据。日志存储和检索是个很常见且简单的工作，市面也有很多关于日志搜集、存储、检索的框架可供使用。譬如在只有个位数机器时，可以通过登录服务器，查看log4j之类的框架打印到本地文件的日志。当日志多起来后，可以用elk三剑客处理日志。当日志量进一步增多，可以上消息队列，譬如kafka之类来承接，然后消费入库。或者写本地文件，再采用filebeat之类上报再入库。以上都是较为常见的日志传输和存储的方案，成本可控的情况下，可适用于绝大多数场景。"),t("strong",[r._v("可以简单总结一下日志框架的功能，大概是暂存、传输、入库保存、快速检索")]),r._v("。")])]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E9%87%8F%E7%BA%A7%E4%B8%8A%E5%8D%87-%E6%88%90%E6%9C%AC%E9%AB%98%E6%98%82",target:"_blank",rel:"noopener noreferrer"}},[r._v("量级上升 成本高昂"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E7%BC%A9%E7%9F%AD%E6%B5%81%E7%A8%8B-%E7%BC%A9%E5%87%8F%E6%B5%81%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[r._v("缩短流程 缩减流量"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E6%9B%B4%E5%BC%BA%E6%82%8D%E7%9A%84%E6%97%A5%E5%BF%97%E6%90%9C%E9%9B%86%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[r._v("更强悍的日志搜集系统"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#client%E7%AB%AF%E8%81%9A%E5%90%88%E6%97%A5%E5%BF%97",target:"_blank",rel:"noopener noreferrer"}},[r._v("Client端聚合日志"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#worker%E7%AB%AF%E6%B6%88%E8%B4%B9%E6%97%A5%E5%BF%97%E5%B9%B6%E5%85%A5%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[r._v("Worker端消费日志并入库"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E5%BC%BA%E6%82%8D%E7%9A%84clickhouse",target:"_blank",rel:"noopener noreferrer"}},[r._v("强悍的Clickhouse"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E5%A4%9A%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2%E6%8E%A7%E5%88%B6%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[r._v("多条件查询控制台"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E6%80%BB%E7%BB%93%E4%B8%8E%E5%AF%B9%E6%AF%94",target:"_blank",rel:"noopener noreferrer"}},[r._v("总结与对比"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://pdai.tech/md/arch/log/arch-log-example-jd-store.html#%E6%96%87%E7%AB%A0%E6%9D%A5%E6%BA%90",target:"_blank",rel:"noopener noreferrer"}},[r._v("文章来源"),t("OutboundLink")],1)])]),r._v(" "),t("h1",{attrs:{id:"量级上升-成本高昂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#量级上升-成本高昂"}},[r._v("#")]),r._v(" 量级上升 成本高昂")]),r._v(" "),t("hr"),r._v(" "),t("blockquote",[t("p",[r._v("技术方案的设计和取舍，往往强受限于成本。当成本高企到难以承受时，将必须导致技术方案的升级换代。那么问题来了，仅仅是存个日志怎么就成本难以承受了呢？")])]),r._v(" "),t("p",[r._v("以一个常见的日志传输及存储方案来举例，如下图，暂存就是采用客户端写本地文件存日志，传输即是采用MQ，消费入库常见的如ES。下图方案，为了减少部分存储成本，将日志详情存储于压缩更好的Hbase，仅将查询时需要的一些索引字段放在了ES。")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1941),alt:""}})]),r._v(" "),t("p",[r._v("以上作为一个常用的方案，为什么会成本高昂呢。")]),r._v(" "),t("p",[r._v("简单计算一下，京东App某个模块（是一个模块，非整个App累计），单次用户请求，用户的入参+返回值+流程中打印的日志占用的大小在40k-2M之间，中位数在60k左右。该模块日常每秒约2-5万次访问，高峰时会翻10倍，极高峰可达百万。")]),r._v(" "),t("p",[r._v("以3万每秒来算，产生的日志大小为1.8G，也就是说即便是低负载时，这个日志框架要吞下1.8G的传输与存储。但这是远远不够的，因为即便放弃极高峰，仅仅支撑偶现的高峰，也需要该系统能支撑秒级15G以上的吞吐。但是这仅仅才是一个模块而已，算上前中台这样的模块还有很多。")]),r._v(" "),t("p",[r._v("那么就可以来算一算了，一秒1.5G，一个小时就是5.4TB。小高峰是肯定要支撑的，也就是秒级30万是要保的，那么系统就要能支撑秒级15G单模块，算上各模块，200G秒级是跑不了了。")]),r._v(" "),t("p",[r._v("这只是各个机器所打印在各自本地的原始日志文件占用的大小，然后要发到MQ集群，众所周知，MQ也是写磁盘的，这200G一点不少的在MQ机器上做了保存，并且MQ还有备份机制，就以最简陋的单备份来说，MQ每秒要承接400G的磁盘，并且离删除后释放磁盘还有挺长一段时间，哪怕只存1个小时，也是一个巨大的数字。")]),r._v(" "),t("p",[r._v("一般服务器在磁盘还不错的情况下，单机秒级写入量200多M算比较不错的情况，通过上面的了解，仅仅做到日志的暂存和传输就需要2千台以上的服务器资源。")]),r._v(" "),t("p",[r._v("然后就到了worker消费集群，该集群只是纯粹的内存数据交换，不占磁盘，worker消费后写入数据库。基本可以想象到，数据库的占用是如何。OK，终于把数据存了进去，查询问题就成了另外一个必须面对的事情，如何快速从无数亿中找到要查询的那个用户的链路日志。")]),r._v(" "),t("p",[r._v("到了此时，成本就成了非常要命的事情，尤其方案的设计，会导致原本就很庞大的数据，在链路上再次放大多倍，那么巨大的硬件成本如何解决呢？")]),r._v(" "),t("h1",{attrs:{id:"缩短流程-缩减流量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缩短流程-缩减流量"}},[r._v("#")]),r._v(" 缩短流程 缩减流量")]),r._v(" "),t("hr"),r._v(" "),t("blockquote",[t("p",[r._v("通过上面的分析，可以发现，即便是市面上最通用的日志方案，在如此巨大的流量面前，也难以持续下去，高昂的硬件成本，需要去寻找更合适的技术方案。")])]),r._v(" "),t("p",[r._v('世界上有一个著名的法则叫"奥卡姆剃刀定律"，讲的是程序员该如何选择合适的剃刀，来让自己的秀发光滑柔顺有光泽。')]),r._v(" "),t("p",[r._v('其实不是的，该定律主要就是八个字"'),t("strong",[r._v("如无必要，勿增实体")]),r._v('"。当一个流程难以支撑当前的业务时，就该审视一下，哪些步骤是不必要的。')]),r._v(" "),t("p",[t("img",{attrs:{src:e(1942),alt:""}})]),r._v(" "),t("p",[r._v("从这个通用流程中，其实很容易就能发现，经历了很多读写，每次读写都伴随着磁盘的读写（包括MQ也是写磁盘的），和频繁的序列化反序列化，以及翻倍的网络IO。")]),r._v(" "),t("p",[r._v("那么需要挥舞起奥卡姆的剃刀，做一些删减，把非必要的部分给删掉，就变成了下图的流程：")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1943),alt:""}})]),r._v(" "),t("p",[r._v("可以发现，"),t("strong",[r._v("其实写本地磁盘、和MQ都是没有必要的，完全可以将日志数据写到本地内存，然后搞个线程，定时通过UDP将日志直接发送到worker端即可")]),r._v("。")]),r._v(" "),t("p",[r._v("worker接收到之后，解析一下，写入自己的内存队列，再起数个异步线程，批量将队列的数据写入ClickHouse数据库即可。")]),r._v(" "),t("p",[r._v("可以看到，下图的流程中，那个圆圈明显比上图的圆圈要小，这是为什么呢？因为做了压缩。")]),r._v(" "),t("p",[r._v("前文讲过，单条报文40k-2M，这是一个非常大的报文，这里面都是一些用户请求的入参Json和出参Json以及一些中途日志，完全没有必要将原文原封不动往外传输。")]),r._v(" "),t("p",[t("strong",[r._v("通过采用主流的snappy、zstd等压缩工具类，可以直接将字符串压缩成"),t("code",[r._v("byte[]")]),r._v("再往外传输，这个被压缩后的字符串，直至入库都是"),t("code",[r._v("byte[]")]),r._v("，全程不对大报文解压")]),r._v("。")]),r._v(" "),t("p",[r._v("那么这个压缩能压多少呢，80%-90%，一个60k的报文，往外送时就剩6-8k了，可想而知，仅仅压缩一下原始数据，就在整个流程中，节省了巨大的带宽，同时也大幅提升了worker的吞吐量。")]),r._v(" "),t("p",[r._v("这里有个小细节，udp单个最大报文是64kb，如果压缩后，还是超过了64kb的话，udp是送不出去的，这里可以选择发个http请求送到worker即可。")]),r._v(" "),t("blockquote",[t("p",[r._v("通过上图，可以看到，"),t("strong",[r._v("当流程中的某些环节并不是必需的时，应该果断砍掉，不要轻易照搬网上的方案，而应该选择更适合的方案")]),r._v("。下面详细讲一下系统是如何设计、运转的。")])]),r._v(" "),t("h1",{attrs:{id:"更强悍的日志搜集系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更强悍的日志搜集系统"}},[r._v("#")]),r._v(" 更强悍的日志搜集系统")]),r._v(" "),t("hr"),r._v(" "),t("p",[t("img",{attrs:{src:e(1944),alt:""}})]),r._v(" "),t("p",[r._v("来审视一下这个链路、极短的日志搜集系统。")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("配置中心")]),r._v("：用来存储worker的IP地址，供客户端获取自己模块所分配的worker集群的ip。")]),r._v(" "),t("li",[t("strong",[r._v("client")]),r._v("：客户端启动后，从配置中心拉取分配给自己这个模块的worker集群的IP，并轮询将搜集的日志压缩后发送过去，通过UDP的方式。")]),r._v(" "),t("li",[t("strong",[r._v("worker")]),r._v("：每个模块会分配数量不等的worker机器，启动后上报自己的IP地址到配置中心。接受到客户端发来的日志后，解析相应的字段，批量写入clickhouse数据库。")]),r._v(" "),t("li",[t("strong",[r._v("clickhouse")]),r._v("：一个强大的数据库，压缩比很高，写入性能极强，按天分片，查询速度佳。非常适合应用于日志系统这种写入极大，查询较少的系统。")]),r._v(" "),t("li",[t("strong",[r._v("dashboard")]),r._v("：可视化界面，从clickhouse查询数据展示给用户，具有多条件多维度查询功能。")])]),r._v(" "),t("p",[r._v("可以看出，这其中最关键的地方是worker端，它的承接流量、消费性能、入库性能将决定着整个链路能否良好地运转。")]),r._v(" "),t("p",[r._v("主要分别讲解一下client端和worker端的实现。")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1945),alt:""}})]),r._v(" "),t("h1",{attrs:{id:"client端聚合日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client端聚合日志"}},[r._v("#")]),r._v(" Client端聚合日志")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("一次请求中，通常要保留的日志信息主要有：")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("请求的出入参")])])]),r._v(" "),t("p",[r._v("如果是http web应用，要获取出入参比较简单的方式就是通过自定义filter即可。client的sdk里定义了一个filter，接入方通过配置该filter生效即可搜集到出入参。")]),r._v(" "),t("p",[r._v("如果是其他rpc应用非http请求的，也提供了对应的filter拦截器来获取出入参。")]),r._v(" "),t("p",[r._v("在获取到出入参后，sdk对其中大报文，主要是出参进行了压缩，并将整个数据定义为一个JAVA对象，做protobuf序列化，通过UDP方式往自己对应的worker集群轮询传输。")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("链路上自己打印的一些关键信息，如调用其他系统的的出入参，自己打印的一些info、error信息")])])]),r._v(" "),t("p",[r._v("sdk分别提供了log4j、logback、log4j2三个常用日志框架的自定义appender，用户可以通过在自己的日志配置文件（如logback.xml）中，将自定义的appender定义出来即可，那么后续用户在代码里所有打印的info、error等日志都会执行这个自定义appender。")]),r._v(" "),t("p",[r._v("同样，这个自定义appender也是将日志暂存内存，然后异步UDP外送到worker。")]),r._v(" "),t("p",[r._v("这里主要有两个地方需要注意")]),r._v(" "),t("ol",[t("li",[r._v("一是当压缩后的报文依旧超出udp最大报文值时，即通过http送出。")]),r._v(" "),t("li",[r._v("二是这一次请求，链路中可能会使用多线程、线程池技术，为避免链路tracer的唯一id在线程池丢失，sdk采用了TransmittableThreadLocal来保持链路的ID，可以查阅进行了解。")])]),r._v(" "),t("p",[r._v("总体来说，client端实现较为简单，省略了写本地磁盘、消费文件发MQ等等步骤，整体只有一次Protobuf序列化操作，对CPU、接入方性能影响极小，采用UDP外送，不需要worker的任何回复，也不用考虑tcp模式下worker消费慢导致自己阻塞的问题。整体非常简洁高效。")]),r._v(" "),t("h1",{attrs:{id:"worker端消费日志并入库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#worker端消费日志并入库"}},[r._v("#")]),r._v(" Worker端消费日志并入库")]),r._v(" "),t("hr"),r._v(" "),t("blockquote",[t("p",[r._v("worker端是调优的重点，由于要接收海量客户端发来的日志，解析后入库，所以worker需要具备很强的缓冲能力。")])]),r._v(" "),t("p",[r._v("可以看出，系统的瓶颈点肯定在入库这个阶段，解析日志，抽取字段都是效率很高的，而且完全可以通过控制线程的数量来控制住，而入库将强受限于clickhouse的写入性能。至于clickhouse是如何做的优化，后面会有clickhouse集群负责人来讲一下做了哪些优化。")]),r._v(" "),t("p",[r._v("为了做好这个缓冲，即便日志接收量大于入库量，也要能接下来这些数据，尽量不丢失。"),t("strong",[r._v("首先硬件上，采用大内存机器，8核32G的容器，来尽量多屯一些数据。其次，采用了双缓冲队列，先将所有接收的数据放一个队列，然后多线程消费、解析成可供入库的行数据，再放入一个待入库队列，然后批量入库")]),r._v("。")]),r._v(" "),t("p",[r._v("那么做的这些操作，能支撑什么样的数据量呢？")]),r._v(" "),t("p",[r._v("通过线上的应用和严苛的压测，这样一台单机docker容器，每秒可以处理原始日志1-5千万行，譬如一条用户请求，中途产生了共计1千多行日志，"),t("strong",[r._v("那么这样的一台worker单机，每秒可以处理2万客户端QPS。对外写clickhouse数据库，每秒可以写160M-200M比较稳定")]),r._v("。")]),r._v(" "),t("p",[r._v("通过对上文的了解，可以知道，这些数据都是被压缩过的，直至库里面的都是压缩过的，只有当最终用户查询时，才会进行解压。所以，这200M，基本相当于原始数据1G多的大小。")]),r._v(" "),t("p",[r._v("也就是说，只要clickhouse写入速度跟的上，这个系统仅需100台就可以极其高效地处理原始秒级百G的日志。对比写MQ的方案，中途所有会出现瓶颈的点如MQ写磁盘速度、消费拉取速度等，都将不复存在。这是一个纯内存交换的链路系统。")]),r._v(" "),t("h1",{attrs:{id:"强悍的clickhouse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强悍的clickhouse"}},[r._v("#")]),r._v(" 强悍的Clickhouse")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("通过以上的了解，可以清楚的看到，worker作为一个纯内存计算的组件，client端通过worker的数量进行hash均匀分发到各个worker，所以worker可以动态扩容而且不存在性能瓶颈，其唯一受限制的就是写入库的速度。")]),r._v(" "),t("p",[r._v("倘若写库速度跟不上，则worker必须要拿有限的内存去屯下发来的大量数据，一旦写满则就会开始丢弃接收到的数据。所以整个系统的瓶颈点，就是写库的速度。")]),r._v(" "),t("p",[r._v("Clickhouse是面向海量数据实时、多维分析、高性能的新一代OLAP数据库管理系统，实现了向量化执行和SIMD指令，对内存中的列式数据，一个batch调用一次SIMD指令，大幅缩短了计算耗时，带来数倍的性能提升。目前已成为驱动京东集团业务增长、创新的“超级引擎”。那么在京东App秒级百G日志传输存储架构中，Clickhouse如何支撑大吞吐量数据的写入，主要在于两点")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("集群高可用架构")])])]),r._v(" "),t("p",[r._v("EasyOLAP部署CH集群是三层结构：域名 + CHProxy + CH节点，域名转发请求到CHProxy，再由CHProxy根据集群节点状态来转发。CHProxy的引入是为了让Query均匀分布在每个节点上，，并对CHProxy做了一定的改进，自动感知集群节点的状态变化。")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1946),alt:""}})]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("本地表写入")])])]),r._v(" "),t("p",[r._v("大吞吐量的数据写入分布式表时，分布式表会将接收的insert数据拆分成多个parts，并通过rand或者shard_key方式转发到各个分片，会引起ch节点网络带宽和merge的工作量增加，导致写入性能下降，并且会增加too many parts的风险和加大zookeeper的压力，另外数据会在分布式表所在节点进行临时落盘，然后异步的发送到本地表所在的节点进行物理存储，中间没有一致性校验，如果分布式表所在的节点出现故障，会存在数据丢失的风险。所以针对以上风险，大吞吐量的数据可直接写入本地表，相较于写入分布式表可以大幅度提升2-3倍的写入性能。")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1947),alt:""}})]),r._v(" "),t("h1",{attrs:{id:"多条件查询控制台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多条件查询控制台"}},[r._v("#")]),r._v(" 多条件查询控制台")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("控制台比较简单，主要就是做一些sql语句查询，做好clickhouse的高效查询，这里简单提一些知识点。")]),r._v(" "),t("p",[r._v("做好数据的分片，如按天分片。用好prewhere查询功能，可以带来性能的提升。做好索引字段的设计，譬如检索常用的时间、pin。")]),r._v(" "),t("p",[r._v("细节难以尽述，要从百亿千亿数据中，做好极速的查询，还需要对clickhouse的一些查询特性有所了解。")]),r._v(" "),t("p",[r._v("下图界面展示的即为一些索引项，点击查看详情，则从数据库捞出压缩过的数据，此时才解压并展示给前端。查看链路，则是该次请求中，整个链路用户打印的log（包括线程池内的）。")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1948),alt:""}})]),r._v(" "),t("p",[t("img",{attrs:{src:e(1949),alt:""}})]),r._v(" "),t("h1",{attrs:{id:"总结与对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结与对比"}},[r._v("#")]),r._v(" 总结与对比")]),r._v(" "),t("hr"),r._v(" "),t("blockquote",[t("p",[r._v("可以简单的做一些对比，主要在于硬件成本和软件性能的对比。")])]),r._v(" "),t("p",[t("img",{attrs:{src:e(1950),alt:""}})]),r._v(" "),t("p",[r._v("从上文可知，磁盘的占用原始方案占用了磁盘（1份），MQ（2份），数据库（1份）。而在新的方案中，磁盘的占用仅剩下clickhouse的（0.8份），clickhouse自身又对数据做了压缩，实际占用空间不到入库容量的80%。")]),r._v(" "),t("p",[r._v("那么"),t("strong",[r._v("仅磁盘即可节省75%以上的存储成本")]),r._v("。")]),r._v(" "),t("p",[r._v("大家都知道，秒级的吞吐量，是伴随着服务器Cpu的耗费的，并不是说只给个大硬盘，即可一台服务器每秒吞吐1个G的。每台服务器秒级的吞吐量是有上限的，秒级占用磁盘的上升，即对应Cpu数量的上升，要支撑一秒1G的磁盘写入，需要5台或以上的服务器。")]),r._v(" "),t("p",[t("img",{attrs:{src:e(1951),alt:""}})]),r._v(" "),t("p",[r._v("那么在磁盘的大幅节约下，线性地节省了大量的中间过程Cpu服务器。实际粗略统计效果，"),t("strong",[r._v("流程中服务器可节约70%以上")]),r._v("。")]),r._v(" "),t("p",[r._v("在软件性能上，过程很好理解。对Client端的消耗主要就是序列化、写磁盘、读磁盘、反序列化这几步的消耗，Udp则仅有一步序列化。假设MQ集群是有无限的写入能力，可以吞下所有的发过去的日志，那么就是worker端的消费性能对比。")]),r._v(" "),t("p",[r._v("从MQ拉取并消费，这个过程如果MQ没有积压，则有零拷贝在支撑高速的拉取，如果积压了，则可能产生大量的MQ磁盘IO，拉取速度会大幅下降。这个过程效率会明显低于Udp发送到worker的处理效率，而且占用双份的网络带宽。实际表现上，worker表现出的强劲性能，较之前单条拉取MQ集群时，消费性能提升在10倍以上。")]),r._v(" "),t("p",[r._v('本文简略介绍了一个新的日志搜集系统的设计方案，以及该方案能带来的巨大的成本节省。相关代码日后会开源于"开源中国旗下gitee.com"的京东零售账号下，届时有相关需求的同学可以加以关注。')]),r._v(" "),t("h1",{attrs:{id:"文章来源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章来源"}},[r._v("#")]),r._v(" 文章来源")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("转载说明:")]),r._v(" "),t("ul",[t("li",[r._v("作者：武伟峰 李阳")]),r._v(" "),t("li",[r._v("版权声明：本文为「京东技术团队」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。")]),r._v(" "),t("li",[r._v("原文链接：https://mp.weixin.qq.com/s/IEK4WeFmiz9TzZWIJ40Whg)")])])])}),[],!1,null,null,null);t.default=o.exports}}]);