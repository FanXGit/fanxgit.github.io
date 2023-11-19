(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1685:function(t,e,a){t.exports=a.p+"assets/img/arch-xianliu-1.f70453fc.png"},1686:function(t,e,a){t.exports=a.p+"assets/img/arch-xianliu-2.acb05561.png"},3823:function(t,e,a){"use strict";a.r(e);var r=a(7),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"架构之高并发-限流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构之高并发-限流"}},[t._v("#")]),t._v(" 架构之高并发：限流")]),t._v(" "),e("p",[t._v("=========================")]),t._v(" "),e("blockquote",[e("p",[t._v("每个系统都有服务的上线，所以当流量超过服务极限能力时，系统可能会出现卡死、崩溃的情况，所以就有了降级和限流。限流其实就是：当高并发或者瞬时高并发时，为了保证系统的稳定性、可用性，系统以牺牲部分请求为代价或者延迟处理请求为代价，保证系统整体服务可用。@pdai")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E9%99%90%E6%B5%81%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("限流简介"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E5%88%86%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("分类"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E6%96%B9%E6%A1%88%E4%B8%80-%E4%BB%A4%E7%89%8C%E6%A1%B6%E6%96%B9%E5%BC%8F-token-bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("方案一：令牌桶方式(Token Bucket)"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E4%B8%BE%E4%BE%8B-guava-ratelimiter-%E5%B9%B3%E6%BB%91%E7%AA%81%E5%8F%91%E9%99%90%E6%B5%81-smoothbursty",target:"_blank",rel:"noopener noreferrer"}},[t._v("举例：Guava RateLimiter - 平滑突发限流(SmoothBursty)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E4%B8%BE%E4%BE%8B-guava-ratelimiter-smoothwarmingup",target:"_blank",rel:"noopener noreferrer"}},[t._v("举例：Guava RateLimiter - SmoothWarmingUp"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E6%96%B9%E6%A1%88%E4%BA%8C-%E6%BC%8F%E6%A1%B6%E6%96%B9%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("方案二：漏桶方式"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E4%BB%A4%E7%89%8C%E6%A1%B6%E5%92%8C%E6%BC%8F%E6%A1%B6%E5%AF%B9%E6%AF%94",target:"_blank",rel:"noopener noreferrer"}},[t._v("令牌桶和漏桶对比"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E6%96%B9%E6%A1%88%E4%B8%89-%E8%AE%A1%E6%95%B0%E5%99%A8%E6%96%B9%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("方案三：计数器方式"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E9%87%87%E7%94%A8atomicinteger",target:"_blank",rel:"noopener noreferrer"}},[t._v("采用AtomicInteger"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E9%87%87%E7%94%A8%E4%BB%A4%E7%89%8Csemaphore",target:"_blank",rel:"noopener noreferrer"}},[t._v("采用令牌Semaphore"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E9%87%87%E7%94%A8threadpoolexecutor-java%E7%BA%BF%E7%A8%8B%E6%B1%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("采用ThreadPoolExecutor java线程池"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("压力测试"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/arch/arch-y-ratelimit.html#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"限流简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限流简介"}},[t._v("#")]),t._v(" 限流简介")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("每个系统都有服务的上线，所以当流量超过服务极限能力时，系统可能会出现卡死、崩溃的情况，所以就有了降级和限流。限流其实就是：当高并发或者瞬时高并发时，为了保证系统的稳定性、可用性，系统以牺牲部分请求为代价或者延迟处理请求为代价，保证系统整体服务可用。")]),t._v(" "),e("h3",{attrs:{id:"算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),e("p",[t._v("令牌桶(Token Bucket)、漏桶(leaky bucket)和计数器算法是最常用的三种限流的算法。")]),t._v(" "),e("h3",{attrs:{id:"分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),e("h4",{attrs:{id:"应用级-单机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用级-单机"}},[t._v("#")]),t._v(" 应用级 - 单机")]),t._v(" "),e("p",[t._v("应用级限流方式只是单应用内的请求限流，不能进行全局限流。")]),t._v(" "),e("ol",[e("li",[t._v("限流总资源数")]),t._v(" "),e("li",[t._v("限流总并发/连接/请求数")]),t._v(" "),e("li",[t._v("限流某个接口的总并发/请求数")]),t._v(" "),e("li",[t._v("限流某个接口的时间窗请求数")]),t._v(" "),e("li",[t._v("平滑限流某个接口的请求数")]),t._v(" "),e("li",[t._v("Guava RateLimiter")])]),t._v(" "),e("h4",{attrs:{id:"分布式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式"}},[t._v("#")]),t._v(" 分布式")]),t._v(" "),e("p",[t._v("我们需要"),e("strong",[t._v("分布式限流")]),t._v("和"),e("strong",[t._v("接入层限流")]),t._v("来进行全局限流。")]),t._v(" "),e("ol",[e("li",[t._v("redis+lua实现中的lua脚本")]),t._v(" "),e("li",[t._v("使用Nginx+Lua实现的Lua脚本")]),t._v(" "),e("li",[t._v("使用 OpenResty 开源的限流方案")]),t._v(" "),e("li",[t._v("限流框架，比如Sentinel实现降级限流熔断")])]),t._v(" "),e("h1",{attrs:{id:"方案一-令牌桶方式-token-bucket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案一-令牌桶方式-token-bucket"}},[t._v("#")]),t._v(" 方案一：令牌桶方式(Token Bucket)")]),t._v(" "),e("hr"),t._v(" "),e("blockquote",[e("p",[t._v("令牌桶算法是网络流量整形（Traffic Shaping）和速率限制（Rate Limiting）中最常使用的一种算法。先有一个木桶，系统按照固定速度，往桶里加入Token，如果桶已经满了就不再添加。当有请求到来时，会各自拿走一个Token，取到Token 才能继续进行请求处理，没有Token 就拒绝服务。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1685),alt:""}})]),t._v(" "),e("p",[t._v("这里如果一段时间没有请求时，桶内就会积累一些Token，下次一旦有突发流量，只要Token足够，也能一次处理，所以令牌桶算法的特点是_允许突发流量_。")]),t._v(" "),e("h3",{attrs:{id:"举例-guava-ratelimiter-平滑突发限流-smoothbursty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#举例-guava-ratelimiter-平滑突发限流-smoothbursty"}},[t._v("#")]),t._v(" 举例：Guava RateLimiter - 平滑突发限流(SmoothBursty)")]),t._v(" "),e("blockquote",[e("p",[t._v("Guava RateLimiter提供了令牌桶算法实现：平滑突发限流(SmoothBursty)和平滑预热限流(SmoothWarmingUp)实现。")])]),t._v(" "),e("ul",[e("li",[t._v("Case 1")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("RateLimiter limiter = RateLimiter.create(5);\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\n\n// 将得到类似如下的输出：\n0.0\n0.198239\n0.196083\n0.200609\n0.199599\n0.19961\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("p",[t._v("1、RateLimiter.create(5)表示桶容量为5且每秒新增5个令牌，即每隔200毫秒新增一个令牌；")]),t._v(" "),e("p",[t._v("2、limiter.acquire()表示消费一个令牌，如果当前桶中有足够令牌则成功（返回值为0），如果桶中没有令牌则暂停一段时间，比如发令牌间隔是200毫秒，则等待200毫秒后再去消费令牌（如上测试用例返回的为0.198239，差不多等待了200毫秒桶中才有令牌可用），这种实现将突发请求速率平均为了固定请求速率。如果结构不想等待可以采用tryAcquire立刻返回！")]),t._v(" "),e("ul",[e("li",[t._v("Case 2 - RateLimiter的突发情况处理:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("RateLimiter limiter = RateLimiter.create(5);\nSystem.out.println(limiter.acquire(5));\nSystem.out.println(limiter.acquire(1));\nSystem.out.println(limiter.acquire(1))\n\n// 将得到类似如下的输出：\n0.0\n0.98745\n0.183553\n0.199909\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("limiter.acquire(5)表示桶的容量为5且每秒新增5个令牌，令牌桶算法允许一定程度的突发，所以可以一次性消费5个令牌，但接下来的limiter.acquire(1)将等待差不多1秒桶中才能有令牌，且接下来的请求也整形为固定速率了。")]),t._v(" "),e("ul",[e("li",[t._v("Case 3 - RateLimiter的突发情况处理:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("RateLimiter limiter = RateLimiter.create(5);\nSystem.out.println(limiter.acquire(10));\nSystem.out.println(limiter.acquire(1));\nSystem.out.println(limiter.acquire(1));\n\n// 将得到类似如下的输出：\n0.0\n1.997428\n0.192273\n0.200616\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("同上边的例子类似，第一秒突发了10个请求，令牌桶算法也允许了这种突发（允许消费未来的令牌），但接下来的limiter.acquire(1)将等待差不多2秒桶中才能有令牌，且接下来的请求也整形为固定速率了。")]),t._v(" "),e("ul",[e("li",[t._v("Case 4")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("RateLimiter limiter = RateLimiter.create(2);\nSystem.out.println(limiter.acquire());\nThread.sleep(2000L);\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\nSystem.out.println(limiter.acquire());\n\n// 将得到类似如下的输出：\n0.0\n0.0\n0.0\n0.0\n0.499876\n0.495799\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("1、创建了一个桶容量为2且每秒新增2个令牌； 2、首先调用limiter.acquire()消费一个令牌，此时令牌桶可以满足（返回值为0）； 3、然后线程暂停2秒，接下来的两个limiter.acquire()都能消费到令牌，第三个limiter.acquire()也同样消费到了令牌，到第四个时就需要等待500毫秒了。")]),t._v(" "),e("p",[t._v("此处可以看到我们设置的桶容量为2（即允许的突发量），这是因为SmoothBursty中有一个参数：最大突发秒数（maxBurstSeconds）默认值是1s，突发量/桶容量=速率*maxBurstSeconds，所以本示例桶容量/突发量为2，例子中前两个是消费了之前积攒的突发量，而第三个开始就是正常计算的了。令牌桶算法允许将一段时间内没有消费的令牌暂存到令牌桶中，留待未来使用，并允许未来请求的这种突发.")]),t._v(" "),e("p",[t._v("SmoothBursty通过平均速率和最后一次新增令牌的时间计算出下次新增令牌的时间的，另外需要一个桶暂存一段时间内没有使用的令牌（即可以突发的令牌数）。另外RateLimiter还提供了tryAcquire方法来进行无阻塞或可超时的令牌消费。")]),t._v(" "),e("p",[t._v("因为SmoothBursty允许一定程度的突发，会有人担心如果允许这种突发，假设突然间来了很大的流量，那么系统很可能扛不住这种突发。因此需要一种平滑速率的限流工具，从而系统冷启动后慢慢的趋于平均固定速率（即刚开始速率小一些，然后慢慢趋于我们设置的固定速率）。Guava也提供了SmoothWarmingUp来实现这种需求类似漏桶算法;")]),t._v(" "),e("h3",{attrs:{id:"举例-guava-ratelimiter-smoothwarmingup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#举例-guava-ratelimiter-smoothwarmingup"}},[t._v("#")]),t._v(" 举例：Guava RateLimiter - SmoothWarmingUp")]),t._v(" "),e("p",[t._v("SmoothWarmingUp创建方式：RateLimiter.create(doublepermitsPerSecond, long warmupPeriod, TimeUnit unit)")]),t._v(" "),e("p",[t._v("permitsPerSecond表示每秒新增的令牌数，warmupPeriod表示在从冷启动速率过渡到平均速率的时间间隔。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("RateLimiter limiter = RateLimiter.create(5,1000, TimeUnit.MILLISECONDS);\nfor(inti =1; i < 5;i++) {\n    System.out.println(limiter.acquire());\n}\nThread.sleep(1000L);\nfor(inti =1; i < 5;i++) {\n    System.out.println(limiter.acquire());\n}\n\n// 将得到类似如下的输出：\n0.0\n0.51767\n0.357814\n0.219992\n0.199984\n0.0\n0.360826\n0.220166\n0.199723\n0.199555\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br")])]),e("p",[t._v("速率是梯形上升速率的，也就是说冷启动时会以一个比较大的速率慢慢到平均速率；然后趋于平均速率（梯形下降到平均速率）。可以通过调节warmupPeriod参数实现一开始就是平滑固定速率。")]),t._v(" "),e("h1",{attrs:{id:"方案二-漏桶方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案二-漏桶方式"}},[t._v("#")]),t._v(" 方案二：漏桶方式")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("水(请求)先进入到漏桶里,漏桶以一定的速度出水(接口有响应速率),当水流入速度过大会直接溢出（访问频率超过接口响应速率),然后就拒绝请求,可以看出漏桶算法能强行限制数据的传输速率。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1686),alt:""}})]),t._v(" "),e("p",[t._v("可见这里有两个变量,一个是桶的大小,支持流量突发增多时可以存多少的水(burst),另一个是水桶漏洞的大小(rate)。")]),t._v(" "),e("p",[t._v("因为漏桶的漏出速率是固定的参数,所以,即使网络中不存在资源冲突(没有发生拥塞),漏桶算法也不能使流突发(burst)到端口速率.因此,漏桶算法对于存在突发特性的流量来说缺乏效率.")]),t._v(" "),e("h3",{attrs:{id:"令牌桶和漏桶对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令牌桶和漏桶对比"}},[t._v("#")]),t._v(" 令牌桶和漏桶对比")]),t._v(" "),e("ul",[e("li",[t._v("令牌桶是按照固定速率往桶中添加令牌，请求是否被处理需要看桶中令牌是否足够，当令牌数减为零时则拒绝新的请求；")]),t._v(" "),e("li",[t._v("漏桶则是按照常量固定速率流出请求，流入请求速率任意，当流入的请求数累积到漏桶容量时，则新流入的请求被拒绝；")]),t._v(" "),e("li",[t._v("令牌桶限制的是平均流入速率（允许突发请求，只要有令牌就可以处理，支持一次拿3个令牌，4个令牌），并允许一定程度突发流量；")]),t._v(" "),e("li",[t._v("漏桶限制的是常量流出速率（即流出速率是一个固定常量值，比如都是1的速率流出，而不能一次是1，下次又是2），从而平滑突发流入速率；")]),t._v(" "),e("li",[t._v("令牌桶允许一定程度的突发，而漏桶主要目的是平滑流入速率；")]),t._v(" "),e("li",[t._v("两个算法实现可以一样，但是方向是相反的，对于相同的参数得到的限流效果是一样的。")])]),t._v(" "),e("h1",{attrs:{id:"方案三-计数器方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案三-计数器方式"}},[t._v("#")]),t._v(" 方案三：计数器方式")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("计数器限流算法也是比较常用的，主要用来限制总并发数，比如数据库连接池大小、线程池大小、程序访问并发数等都是使用计数器算法。也是最简单粗暴的算法。")]),t._v(" "),e("h3",{attrs:{id:"采用atomicinteger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采用atomicinteger"}},[t._v("#")]),t._v(" 采用AtomicInteger")]),t._v(" "),e("p",[t._v("使用AomicInteger来进行统计当前正在并发执行的次数，如果超过域值就简单粗暴的直接响应给用户，说明系统繁忙，请稍后再试或其它跟业务相关的信息。")]),t._v(" "),e("p",[t._v("弊端：使用 AomicInteger 简单粗暴超过域值就拒绝请求，可能只是瞬时的请求量高，也会拒绝请求。")]),t._v(" "),e("h3",{attrs:{id:"采用令牌semaphore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采用令牌semaphore"}},[t._v("#")]),t._v(" 采用令牌Semaphore")]),t._v(" "),e("p",[t._v("使用Semaphore信号量来控制并发执行的次数，如果超过域值信号量，则进入阻塞队列中排队等待获取信号量进行执行。如果阻塞队列中排队的请求过多超出系统处理能力，则可以在拒绝请求。")]),t._v(" "),e("p",[t._v("相对Atomic优点：如果是瞬时的高并发，可以使请求在阻塞队列中排队，而不是马上拒绝请求，从而达到一个流量削峰的目的。")]),t._v(" "),e("h3",{attrs:{id:"采用threadpoolexecutor-java线程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采用threadpoolexecutor-java线程池"}},[t._v("#")]),t._v(" 采用ThreadPoolExecutor java线程池")]),t._v(" "),e("p",[t._v("固定线程池大小,超出固定先线程池和最大的线程数,拒绝线程请求;")]),t._v(" "),e("h1",{attrs:{id:"压力测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压力测试"}},[t._v("#")]),t._v(" 压力测试")]),t._v(" "),e("hr"),t._v(" "),e("blockquote",[e("p",[t._v("给个思路")])]),t._v(" "),e("ul",[e("li",[t._v("Linux AB")])]),t._v(" "),e("p",[t._v("可以参考"),e("a",{attrs:{href:"https://pdai.tech/md/devops/linux/linux-ab-test.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux - ab压力测试"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("写代码")])]),t._v(" "),e("p",[t._v("比如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@SneakyThrows\npublic static void test(int clientSize) {\n    CountDownLatch downLatch = new CountDownLatch(clientSize);\n    ExecutorService fixedThreadPool = Executors.newFixedThreadPool(clientSize);\n    IntStream.range(0, clientSize).forEach(i ->\n            fixedThreadPool.submit(() -> {\n                RestTemplate restTemplate = new RestTemplate();\n                restTemplate.getForObject("http://localhost:8080/limit1", ResponseResult.class);\n                downLatch.countDown();\n            })\n    );\n    downLatch.await();\n    fixedThreadPool.shutdown();\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("ul",[e("li",[t._v("其它测试工具，LoadRunner，Jmeter...")])]),t._v(" "),e("h1",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[e("p",[t._v("聊聊互联网限流方案 http://www.dczou.com/viemall/852.html")])]),t._v(" "),e("li",[e("p",[t._v("https://www.cnblogs.com/cmfwm/p/8032994.html)")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);