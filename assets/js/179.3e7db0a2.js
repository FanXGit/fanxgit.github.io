(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{3435:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-7.75591723.png"},3436:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-8.a4140aeb.png"},3437:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-9.6a86c210.png"},3438:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-10.f831920b.png"},3439:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-11.b5fa03ff.png"},3440:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-12.e9eb6c68.png"},3441:function(a,e,t){a.exports=t.p+"assets/img/mybatis-y-cache-21.9e70400b.png"},4222:function(a,e,t){"use strict";t.r(e);var s=t(7),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mybatis详解-二级缓存实现机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis详解-二级缓存实现机制"}},[a._v("#")]),a._v(" MyBatis详解 - 二级缓存实现机制")]),a._v(" "),e("p",[a._v("=============================================")]),a._v(" "),e("blockquote",[e("p",[a._v("MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。@pdai")])]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#mybatis%E8%AF%A6%E8%A7%A3---%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6"}},[a._v("MyBatis详解 - 二级缓存实现机制")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#mybatis%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E5%AE%9E%E7%8E%B0"}},[a._v("MyBatis二级缓存实现")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#mybatis%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E6%95%B4%E4%BD%93%E8%AE%BE%E8%AE%A1%E4%BB%A5%E5%8F%8A%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F"}},[a._v("MyBatis的缓存机制整体设计以及二级缓存的工作模式")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#mybatis%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E5%88%92%E5%88%86"}},[a._v("MyBatis二级缓存的划分")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E5%BF%85%E9%A1%BB%E8%A6%81%E5%85%B7%E5%A4%87%E7%9A%84%E6%9D%A1%E4%BB%B6"}},[a._v("使用二级缓存，必须要具备的条件")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%80%E7%BA%A7%E7%BC%93%E5%AD%98%E5%92%8C%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E4%BD%BF%E7%94%A8%E9%A1%BA%E5%BA%8F"}},[a._v("一级缓存和二级缓存的使用顺序")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E5%AE%9E%E7%8E%B0%E7%9A%84%E9%80%89%E6%8B%A9"}},[a._v("二级缓存实现的选择")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#mybatis%E8%87%AA%E8%BA%AB%E6%8F%90%E4%BE%9B%E7%9A%84%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E5%AE%9E%E7%8E%B0"}},[a._v("MyBatis自身提供的二级缓存的实现")])])])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E7%BB%86%E7%B2%92%E5%BA%A6%E5%9C%B0%E6%8E%A7%E5%88%B6%E4%BD%A0%E7%9A%84mybatis%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98"}},[a._v("如何细粒度地控制你的MyBatis二级缓存")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E4%B8%AA%E5%85%B3%E4%BA%8Emybatis%E7%9A%84%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E5%AE%9E%E9%99%85%E9%97%AE%E9%A2%98"}},[a._v("一个关于MyBatis的二级缓存的实际问题")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%BD%93%E5%89%8Dmybatis%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6"}},[a._v("当前MyBatis二级缓存的工作机制")])])])])])])]),a._v(" "),e("h1",{attrs:{id:"mybatis二级缓存实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis二级缓存实现"}},[a._v("#")]),a._v(" MyBatis二级缓存实现")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("MyBatis的二级缓存是Application级别的缓存，它可以提高对数据库查询的效率，以提高应用的性能。")]),a._v(" "),e("h3",{attrs:{id:"mybatis的缓存机制整体设计以及二级缓存的工作模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的缓存机制整体设计以及二级缓存的工作模式"}},[a._v("#")]),a._v(" MyBatis的缓存机制整体设计以及二级缓存的工作模式")]),a._v(" "),e("p",[e("img",{attrs:{src:t(3435),alt:""}})]),a._v(" "),e("p",[a._v('如图所示，当开一个会话时，一个SqlSession对象会使用一个Executor对象来完成会话操作，MyBatis的二级缓存机制的关键就是对这个Executor对象做文章。如果用户配置了"cacheEnabled=true"，那么MyBatis在为SqlSession对象创建Executor对象时，会对Executor对象加上一个装饰者：CachingExecutor，这时SqlSession使用CachingExecutor对象来完成操作请求。CachingExecutor对于查询请求，会先判断该查询请求在Application级别的二级缓存中是否有缓存结果，如果有查询结果，则直接返回缓存结果；如果缓存中没有，再交给真正的Executor对象来完成查询操作，之后CachingExecutor会将真正Executor返回的查询结果放置到缓存中，然后在返回给用户。')]),a._v(" "),e("p",[e("img",{attrs:{src:t(3436),alt:""}})]),a._v(" "),e("p",[a._v("CachingExecutor是Executor的装饰者，以增强Executor的功能，使其具有缓存查询的功能，这里用到了设计模式中的装饰者模式，CachingExecutor和Executor的接口的关系如下类图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:t(3437),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"mybatis二级缓存的划分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis二级缓存的划分"}},[a._v("#")]),a._v(" MyBatis二级缓存的划分")]),a._v(" "),e("p",[a._v("MyBatis并不是简单地对整个Application就只有一个Cache缓存对象，它将缓存划分的更细，即是Mapper级别的，即每一个Mapper都可以拥有一个Cache对象，具体如下：")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("为每一个Mapper分配一个Cache缓存对象")]),a._v("（使用"),e("code",[a._v("<cache>")]),a._v("节点配置）")])]),a._v(" "),e("p",[a._v("MyBatis将Application级别的二级缓存细分到Mapper级别，即对于每一个Mapper.xml,如果在其中使用了"),e("code",[a._v("<cache>")]),a._v(" 节点，则MyBatis会为这个Mapper创建一个Cache缓存对象，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:t(3438),alt:""}})]),a._v(" "),e("p",[a._v("注：上述的每一个Cache对象，都会有一个自己所属的namespace命名空间，并且会将Mapper的 namespace作为它们的ID；")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("多个Mapper共用一个Cache缓存对象")]),a._v("（使用"),e("code",[a._v("<cache-ref>")]),a._v("节点配置）")])]),a._v(" "),e("p",[a._v("如果你想让多个Mapper公用一个Cache的话，你可以使用"),e("code",[a._v('<cache-ref namespace="">')]),a._v("节点，来指定你的这个Mapper使用到了哪一个Mapper的Cache缓存。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(3439),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"使用二级缓存-必须要具备的条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用二级缓存-必须要具备的条件"}},[a._v("#")]),a._v(" 使用二级缓存，必须要具备的条件")]),a._v(" "),e("p",[a._v("MyBatis对二级缓存的支持粒度很细，它会指定某一条查询语句是否使用二级缓存。")]),a._v(" "),e("p",[a._v("虽然在Mapper中配置了"),e("code",[a._v("<cache>")]),a._v(",并且为此Mapper分配了Cache对象，这并不表示我们使用Mapper中定义的查询语句查到的结果都会放置到Cache对象之中，我们必须指定Mapper中的某条选择语句是否支持缓存，即如下所示，在"),e("code",[a._v("<select>")]),a._v(' 节点中配置useCache="true"，Mapper才会对此Select的查询支持缓存特性，否则，不会对此Select查询，不会经过Cache缓存。如下所示，Select语句配置了useCache="true"，则表明这条Select语句的查询会使用二级缓存。')]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<select id="selectByMinSalary" resultMap="BaseResultMap" parameterType="java.util.Map" useCache="true">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("总之，要想使某条Select查询支持二级缓存，你需要保证：")]),a._v(" "),e("ul",[e("li",[a._v("MyBatis支持二级缓存的总开关：全局配置变量参数 cacheEnabled=true")]),a._v(" "),e("li",[a._v("该select语句所在的Mapper，配置了"),e("code",[a._v("<cache>")]),a._v(" 或"),e("code",[a._v("<cached-ref>")]),a._v("节点，并且有效")]),a._v(" "),e("li",[a._v("该select语句的参数 useCache=true")])]),a._v(" "),e("h3",{attrs:{id:"一级缓存和二级缓存的使用顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一级缓存和二级缓存的使用顺序"}},[a._v("#")]),a._v(" 一级缓存和二级缓存的使用顺序")]),a._v(" "),e("p",[a._v("请注意，如果你的MyBatis使用了二级缓存，并且你的Mapper和select语句也配置使用了二级缓存，那么在执行select查询的时候，MyBatis会先从二级缓存中取输入，其次才是一级缓存，即"),e("strong",[a._v("MyBatis查询数据的顺序是：二级缓存 ———> 一级缓存 ——> 数据库")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"二级缓存实现的选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二级缓存实现的选择"}},[a._v("#")]),a._v(" 二级缓存实现的选择")]),a._v(" "),e("p",[a._v("MyBatis对二级缓存的设计非常灵活，它自己内部实现了一系列的Cache缓存实现类，并提供了各种缓存刷新策略如LRU，FIFO等等；另外，MyBatis还允许用户自定义Cache接口实现，用户是需要实现org.apache.ibatis.cache.Cache接口，然后将Cache实现类配置在"),e("code",[a._v('<cache type="">')]),a._v("节点的type属性上即可；除此之外，MyBatis还支持跟第三方内存缓存库如Memecached的集成，总之，使用MyBatis的二级缓存有三个选择:")]),a._v(" "),e("ul",[e("li",[a._v("MyBatis自身提供的缓存实现；")]),a._v(" "),e("li",[a._v("用户自定义的Cache接口实现；")]),a._v(" "),e("li",[a._v("跟第三方内存缓存库的集成；")])]),a._v(" "),e("h3",{attrs:{id:"mybatis自身提供的二级缓存的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis自身提供的二级缓存的实现"}},[a._v("#")]),a._v(" MyBatis自身提供的二级缓存的实现")]),a._v(" "),e("blockquote",[e("p",[a._v("MyBatis自身提供了丰富的，并且功能强大的二级缓存的实现，它拥有一系列的Cache接口装饰者，可以满足各种对缓存操作和更新的策略。")])]),a._v(" "),e("p",[a._v("MyBatis定义了大量的Cache的装饰器来增强Cache缓存的功能，如下类图所示。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(3440),alt:""}})]),a._v(" "),e("p",[a._v("对于每个Cache而言，都有一个容量限制，MyBatis各供了各种策略来对Cache缓存的容量进行控制，以及对Cache中的数据进行刷新和置换。MyBatis主要提供了以下几个刷新和置换策略：")]),a._v(" "),e("ul",[e("li",[a._v("LRU：（Least Recently Used）,最近最少使用算法，即如果缓存中容量已经满了，会将缓存中最近最少被使用的缓存记录清除掉，然后添加新的记录；")]),a._v(" "),e("li",[a._v("FIFO：（First in first out）,先进先出算法，如果缓存中的容量已经满了，那么会将最先进入缓存中的数据清除掉；")]),a._v(" "),e("li",[a._v("Scheduled：指定时间间隔清空算法，该算法会以指定的某一个时间间隔将Cache缓存中的数据清空；")])]),a._v(" "),e("h1",{attrs:{id:"如何细粒度地控制你的mybatis二级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何细粒度地控制你的mybatis二级缓存"}},[a._v("#")]),a._v(" 如何细粒度地控制你的MyBatis二级缓存")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"一个关于mybatis的二级缓存的实际问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个关于mybatis的二级缓存的实际问题"}},[a._v("#")]),a._v(" 一个关于MyBatis的二级缓存的实际问题")]),a._v(" "),e("p",[a._v("现有AMapper.xml中定义了对数据库表 ATable 的CRUD操作，BMapper定义了对数据库表BTable的CRUD操作；")]),a._v(" "),e("p",[a._v("假设 MyBatis 的二级缓存开启，并且 AMapper 中使用了二级缓存，AMapper对应的二级缓存为ACache；")]),a._v(" "),e("p",[a._v("除此之外，AMapper 中还定义了一个跟BTable有关的查询语句，类似如下所述：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<select id="selectATableWithJoin" resultMap="BaseResultMap" useCache="true">  \n      select * from ATable left join BTable on ....  \n</select>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("执行以下操作：")]),a._v(" "),e("ul",[e("li",[a._v('执行AMapper中的"selectATableWithJoin" 操作，此时会将查询到的结果放置到AMapper对应的二级缓存ACache中；')]),a._v(" "),e("li",[a._v("执行BMapper中对BTable的更新操作(update、delete、insert)后，BTable的数据更新；")]),a._v(" "),e("li",[a._v("再执行1完全相同的查询，这时候会直接从AMapper二级缓存ACache中取值，将ACache中的值直接返回；")])]),a._v(" "),e("p",[a._v("好，"),e("strong",[a._v("问题就出现在第3步")]),a._v("上：")]),a._v(" "),e("p",[a._v("由于AMapper的“selectATableWithJoin” 对应的SQL语句需要和BTable进行join查找，而在第 2 步BTable的数据已经更新了，但是第 3 步查询的值是第 1 步的缓存值，已经极有可能跟真实数据库结果不一样，即ACache中缓存数据过期了！")]),a._v(" "),e("p",[a._v("总结来看，就是：")]),a._v(" "),e("p",[a._v("对于某些使用了 join连接的查询，如果其关联的表数据发生了更新，join连接的查询由于先前缓存的原因，导致查询结果和真实数据不同步；")]),a._v(" "),e("p",[a._v("从MyBatis的角度来看，这个问题可以这样表述：")]),a._v(" "),e("p",[e("strong",[a._v("对于某些表执行了更新(update、delete、insert)操作后，如何去清空跟这些表有关联的查询语句所造成的缓存")])]),a._v(" "),e("h3",{attrs:{id:"当前mybatis二级缓存的工作机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前mybatis二级缓存的工作机制"}},[a._v("#")]),a._v(" 当前MyBatis二级缓存的工作机制")]),a._v(" "),e("blockquote",[e("p",[a._v("MyBatis二级缓存的一个重要特点：即松散的Cache缓存管理和维护")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(3441),alt:""}})]),a._v(" "),e("p",[a._v("一个Mapper中定义的增删改查操作只能影响到自己关联的Cache对象。如上图所示的Mapper namespace1中定义的若干CRUD语句，产生的缓存只会被放置到相应关联的Cache1中，即Mapper namespace2,namespace3,namespace4 中的CRUD的语句不会影响到Cache1。")]),a._v(" "),e("p",[a._v("可以看出，"),e("strong",[a._v("Mapper之间的缓存关系比较松散，相互关联的程度比较弱")]),a._v("。")]),a._v(" "),e("p",[a._v("现在再回到上面描述的问题，如果我们将AMapper和BMapper共用一个Cache对象，那么，当BMapper执行更新操作时，可以清空对应Cache中的所有的缓存数据，这样的话，数据不是也可以保持最新吗？")]),a._v(" "),e("p",[a._v("确实这个也是一种解决方案，不过，它会使缓存的使用效率变的很低！AMapper和BMapper的任意的更新操作都会将共用的Cache清空，会频繁地清空Cache，导致Cache实际的命中率和使用率就变得很低了，所以这种策略实际情况下是不可取的。")]),a._v(" "),e("p",[a._v("最理想的解决方案就是：")]),a._v(" "),e("p",[e("strong",[a._v("对于某些表执行了更新(update、delete、insert)操作后，去清空跟这些指定的表有关联的查询语句所造成的缓存")]),a._v("; 这样，就是以很细的粒度管理MyBatis内部的缓存，使得缓存的使用率和准确率都能大大地提升。)")])])}),[],!1,null,null,null);e.default=r.exports}}]);