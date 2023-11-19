(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{3598:function(a,s,e){"use strict";e.r(s);var t=e(7),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"调试排错-java-问题排查之工具单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试排错-java-问题排查之工具单"}},[a._v("#")]),a._v(" 调试排错 - Java 问题排查之工具单")]),a._v(" "),s("p",[a._v("=============================================")]),a._v(" "),s("blockquote",[s("p",[a._v("Java 在线问题排查主要分两篇：本文是第二篇，通过java调试/排查工具进行问题定位。@pdai")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E8%B0%83%E8%AF%95%E6%8E%92%E9%94%99---java-%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5%E4%B9%8B%E5%B7%A5%E5%85%B7%E5%8D%95"}},[a._v("调试排错 - Java 问题排查之工具单")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#java-%E8%B0%83%E8%AF%95%E5%85%A5%E9%97%A8%E5%B7%A5%E5%85%B7"}},[a._v("Java 调试入门工具")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#jps"}},[a._v("jps")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#jstack"}},[a._v("jstack")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#jinfo"}},[a._v("jinfo")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#jmap"}},[a._v("jmap")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#jstat"}},[a._v("jstat")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#jdb"}},[a._v("jdb")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#chlsdb"}},[a._v("CHLSDB")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#java-%E8%B0%83%E8%AF%95%E8%BF%9B%E9%98%B6%E5%B7%A5%E5%85%B7"}},[a._v("Java 调试进阶工具")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#btrace"}},[a._v("btrace")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#greys"}},[a._v("Greys")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#arthas"}},[a._v("Arthas")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#javosize"}},[a._v("javOSize")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#jprofiler"}},[a._v("JProfiler")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%B6%E5%AE%83%E5%B7%A5%E5%85%B7"}},[a._v("其它工具")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#dmesg"}},[a._v("dmesg")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[a._v("参考文章")])])])])]),a._v(" "),s("h1",{attrs:{id:"java-调试入门工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-调试入门工具"}},[a._v("#")]),a._v(" Java 调试入门工具")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"jps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jps"}},[a._v("#")]),a._v(" jps")]),a._v(" "),s("blockquote",[s("p",[a._v("jps是jdk提供的一个查看当前java进程的小工具， 可以看做是JavaVirtual Machine Process Status Tool的缩写。")])]),a._v(" "),s("p",[a._v("jps常用命令")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jps # 显示进程的ID 和 类的名称\njps –l # 输出输出完全的包名，应用主类名，jar的完全路径名 \njps –v # 输出jvm参数\njps –q # 显示java进程号\njps -m # main 方法\njps -l xxx.xxx.xx.xx # 远程查看 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("jps参数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-q：仅输出VM标识符，不包括classname,jar name,arguments in main method \n-m：输出main method的参数 \n-l：输出完全的包名，应用主类名，jar的完全路径名 \n-v：输出jvm参数 \n-V：输出通过flag文件传递到JVM中的参数(.hotspotrc文件或-XX:Flags=所指定的文件 \n-Joption：传递参数到vm,例如:-J-Xms512m\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("jps原理")]),a._v(" "),s("blockquote",[s("p",[a._v("java程序在启动以后，会在java.io.tmpdir指定的目录下，就是临时文件夹里，生成一个类似于hsperfdata_User的文件夹，这个文件夹里（在Linux中为/tmp/hsperfdata_{userName}/），有几个文件，名字就是java进程的pid，因此列出当前运行的java进程，只是把这个目录里的文件名列一下而已。 至于系统的参数什么，就可以解析这几个文件获得。")])]),a._v(" "),s("p",[a._v("更多请参考 "),s("a",{attrs:{href:"https://docs.oracle.com/javase/1.5.0/docs/tooldocs/share/jps.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jps - Java Virtual Machine Process Status Tool 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"jstack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[a._v("#")]),a._v(" jstack")]),a._v(" "),s("blockquote",[s("p",[a._v("jstack是jdk自带的线程堆栈分析工具，使用该命令可以查看或导出 Java 应用程序中线程堆栈信息。")])]),a._v(" "),s("p",[a._v("jstack常用命令:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 基本\njstack 2815\n\n# java和native c/c++框架的所有栈信息\njstack -m 2815\n\n# 额外的锁信息列表，查看是否死锁\njstack -l 2815\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("jstack参数：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-l 长列表. 打印关于锁的附加信息,例如属于java.util.concurrent 的 ownable synchronizers列表.\n\n-F 当’jstack [-l] pid’没有相应的时候强制打印栈信息\n\n-m 打印java和native c/c++框架的所有栈信息.\n\n-h | -help 打印帮助信息\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("更多请参考: "),s("a",{attrs:{href:"https://www.jianshu.com/p/025cb069cb69",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvm 性能调优工具之 jstack 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"jinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jinfo"}},[a._v("#")]),a._v(" jinfo")]),a._v(" "),s("blockquote",[s("p",[a._v("jinfo 是 JDK 自带的命令，可以用来查看正在运行的 java 应用程序的扩展参数，包括Java System属性和JVM命令行参数；也可以动态的修改正在运行的 JVM 一些参数。当系统崩溃时，jinfo可以从core文件里面知道崩溃的Java应用程序的配置信息")])]),a._v(" "),s("p",[a._v("jinfo常用命令:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 输出当前 jvm 进程的全部参数和系统属性\njinfo 2815\n\n# 输出所有的参数\njinfo -flags 2815\n\n# 查看指定的 jvm 参数的值\njinfo -flag PrintGC 2815\n\n# 开启/关闭指定的JVM参数\njinfo -flag +PrintGC 2815\n\n# 设置flag的参数\njinfo -flag name=value 2815\n\n# 输出当前 jvm 进行的全部的系统属性\njinfo -sysprops 2815\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("jinfo参数：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("no option 输出全部的参数和系统属性\n-flag name 输出对应名称的参数\n-flag [+|-]name 开启或者关闭对应名称的参数\n-flag name=value 设定对应名称的参数\n-flags 输出全部的参数\n-sysprops 输出系统属性\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("更多请参考："),s("a",{attrs:{href:"https://www.jianshu.com/p/8d8aef212b25",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvm 性能调优工具之 jinfo 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"jmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[a._v("#")]),a._v(" jmap")]),a._v(" "),s("blockquote",[s("p",[a._v("命令jmap是一个多功能的命令。它可以生成 java 程序的 dump 文件， 也可以查看堆内对象示例的统计信息、查看 ClassLoader 的信息以及 finalizer 队列。")])]),a._v(" "),s("p",[a._v("两个用途")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 查看堆的情况\njmap -heap 2815\n\n# dump\njmap -dump:live,format=b,file=/tmp/heap2.bin 2815\njmap -dump:format=b,file=/tmp/heap3.bin 2815\n\n# 查看堆的占用\njmap -histo 2815 | head -10\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("jmap参数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("no option： 查看进程的内存映像信息,类似 Solaris pmap 命令。\nheap： 显示Java堆详细信息\nhisto[:live]： 显示堆中对象的统计信息\nclstats：打印类加载器信息\nfinalizerinfo： 显示在F-Queue队列等待Finalizer线程执行finalizer方法的对象\ndump:<dump-options>：生成堆转储快照\nF： 当-dump没有响应时，使用-dump或者-histo参数. 在这个模式下,live子参数无效.\nhelp：打印帮助信息\nJ<flag>：指定传递给运行jmap的JVM的参数\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("更多请参考："),s("a",{attrs:{href:"https://www.jianshu.com/p/a4ad53179df3",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvm 性能调优工具之 jmap 在新窗口打开"),s("OutboundLink")],1),a._v(" 和 "),s("a",{attrs:{href:"https://docs.oracle.com/javase/1.5.0/docs/tooldocs/share/jmap.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jmap - Memory Map 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"jstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[a._v("#")]),a._v(" jstat")]),a._v(" "),s("p",[a._v("jstat参数众多，但是使用一个就够了")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jstat -gcutil 2815 1000 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"jdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdb"}},[a._v("#")]),a._v(" jdb")]),a._v(" "),s("p",[a._v("jdb可以用来预发debug,假设你预发的java_home是/opt/java/，远程调试端口是8000.那么")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jdb -attach 8000\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("出现以上代表jdb启动成功。后续可以进行设置断点进行调试。")]),a._v(" "),s("p",[a._v("具体参数可见oracle官方说明"),s("a",{attrs:{href:"http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jdb.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jdb - The Java Debugger 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"chlsdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chlsdb"}},[a._v("#")]),a._v(" CHLSDB")]),a._v(" "),s("p",[a._v("CHLSDB感觉很多情况下可以看到更好玩的东西，不详细叙述了。 查询资料听说jstack和jmap等工具就是基于它的。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -classpath /opt/taobao/java/lib/sa-jdi.jar sun.jvm.hotspot.CLHSDB\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("更详细的可见R大此贴 http://rednaxelafx.iteye.com/blog/1847971")]),a._v(" "),s("h1",{attrs:{id:"java-调试进阶工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-调试进阶工具"}},[a._v("#")]),a._v(" Java 调试进阶工具")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"btrace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#btrace"}},[a._v("#")]),a._v(" btrace")]),a._v(" "),s("p",[a._v("首当其冲的要说的是btrace。真是生产环境&预发的排查问题大杀器。 简介什么的就不说了。直接上代码干")]),a._v(" "),s("ul",[s("li",[a._v("查看当前谁调用了ArrayList的add方法，同时只打印当前ArrayList的size大于500的线程调用栈")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('@OnMethod(clazz = "java.util.ArrayList", method="add", location = @Location(value = Kind.CALL, clazz = "/./", method = "/./"))\npublic static void m(@ProbeClassName String probeClass, @ProbeMethodName String probeMethod, @TargetInstance Object instance, @TargetMethodOrField String method) {\n\n    if(getInt(field("java.util.ArrayList", "size"), instance) > 479){\n        println("check who ArrayList.add method:" + probeClass + "#" + probeMethod  + ", method:" + method + ", size:" + getInt(field("java.util.ArrayList", "size"), instance));\n        jstack();\n        println();\n        println("===========================");\n        println();\n    }\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("ul",[s("li",[a._v("监控当前服务方法被调用时返回的值以及请求的参数")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('@OnMethod(clazz = "com.taobao.sellerhome.transfer.biz.impl.C2CApplyerServiceImpl", method="nav", location = @Location(value = Kind.RETURN))\npublic static void mt(long userId, int current, int relation, String check, String redirectUrl, @Return AnyType result) {\n\n    println("parameter# userId:" + userId + ", current:" + current + ", relation:" + relation + ", check:" + check + ", redirectUrl:" + redirectUrl + ", result:" + result);\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("btrace 具体可以参考这里：https://github.com/btraceio/btrace")]),a._v(" "),s("p",[a._v("注意:")]),a._v(" "),s("ul",[s("li",[a._v("经过观察，1.3.9的release输出不稳定，要多触发几次才能看到正确的结果")]),a._v(" "),s("li",[a._v("正则表达式匹配trace类时范围一定要控制，否则极有可能出现跑满CPU导致应用卡死的情况")]),a._v(" "),s("li",[a._v("由于是字节码注入的原理，想要应用恢复到正常情况，需要重启应用。")])]),a._v(" "),s("h3",{attrs:{id:"greys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#greys"}},[a._v("#")]),a._v(" Greys")]),a._v(" "),s("p",[a._v("Greys是@杜琨的大作吧。说几个挺棒的功能(部分功能和btrace重合):")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("sc -df xxx")]),a._v(": 输出当前类的详情,包括源码位置和classloader结构")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("trace class method")]),a._v(": 打印出当前方法调用的耗时情况，细分到每个方法, 对排查方法性能时很有帮助。")])])]),a._v(" "),s("h3",{attrs:{id:"arthas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[a._v("#")]),a._v(" Arthas")]),a._v(" "),s("blockquote",[s("p",[a._v("Arthas是基于Greys。")])]),a._v(" "),s("p",[a._v("具体请参考："),s("a",{attrs:{href:"https://pdai.tech/md/java/jvm/java-jvm-agent-arthas.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("调试排错 - Java应用在线调试Arthas"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"javosize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javosize"}},[a._v("#")]),a._v(" javOSize")]),a._v(" "),s("p",[a._v("就说一个功能:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("classes")]),a._v("：通过修改了字节码，改变了类的内容，即时生效。 所以可以做到快速的在某个地方打个日志看看输出，缺点是对代码的侵入性太大。但是如果自己知道自己在干嘛，的确是不错的玩意儿。")])]),a._v(" "),s("p",[a._v("其他功能Greys和btrace都能很轻易做的到，不说了。")]),a._v(" "),s("p",[a._v("更多请参考："),s("a",{attrs:{href:"http://www.javosize.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"jprofiler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jprofiler"}},[a._v("#")]),a._v(" JProfiler")]),a._v(" "),s("p",[a._v("之前判断许多问题要通过JProfiler，但是现在Greys和btrace基本都能搞定了。再加上出问题的基本上都是生产环境(网络隔离)，所以基本不怎么使用了，但是还是要标记一下。")]),a._v(" "),s("p",[a._v("更多请参考："),s("a",{attrs:{href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网 在新窗口打开"),s("OutboundLink")],1)]),a._v(" "),s("h1",{attrs:{id:"其它工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它工具"}},[a._v("#")]),a._v(" 其它工具")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"dmesg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dmesg"}},[a._v("#")]),a._v(" dmesg")]),a._v(" "),s("p",[a._v("如果发现自己的java进程悄无声息的消失了，几乎没有留下任何线索，那么dmesg一发，很有可能有你想要的。")]),a._v(" "),s("p",[a._v("sudo dmesg|grep -i kill|less 去找关键字oom_killer。找到的结果类似如下:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[6710782.021013] java invoked oom-killer: gfp_mask=0xd0, order=0, oom_adj=0, oom_scoe_adj=0\n[6710782.070639] [<ffffffff81118898>] ? oom_kill_process+0x68/0x140 \n[6710782.257588] Task in /LXC011175068174 killed as a result of limit of /LXC011175068174 \n[6710784.698347] Memory cgroup out of memory: Kill process 215701 (java) score 854 or sacrifice child \n[6710784.707978] Killed process 215701, UID 679, (java) total-vm:11017300kB, anon-rss:7152432kB, file-rss:1232kB\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("以上表明，对应的java进程被系统的OOM Killer给干掉了，得分为854. 解释一下OOM killer（Out-Of-Memory killer），该机制会监控机器的内存资源消耗。当机器内存耗尽前，该机制会扫描所有的进程（按照一定规则计算，内存占用，时间等），挑选出得分最高的进程，然后杀死，从而保护机器。")]),a._v(" "),s("p",[a._v("dmesg日志时间转换公式: log实际时间=格林威治1970-01-01+(当前时间秒数-系统启动至今的秒数+dmesg打印的log时间)秒数：")]),a._v(" "),s("p",[a._v('date -d "1970-01-01 UTC '),s("code",[a._v("echo \"$(date +%s)-$(cat /proc/uptime|cut -f 1 -d' ')+12288812.926194\"|bc")]),a._v(' seconds" 剩下的，就是看看为什么内存这么大，触发了OOM-Killer了。')]),a._v(" "),s("h1",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[a._v("文章主要参考了如下， 在此基础上重新整理，和添加新内容。")]),a._v(" "),s("li",[a._v("作者：红魔七号")]),a._v(" "),s("li",[a._v("文章来源：https://yq.aliyun.com/articles/69520")]),a._v(" "),s("li",[a._v("https://www.cnblogs.com/xuchunlin/p/5671572.html)")])])])}),[],!1,null,null,null);s.default=r.exports}}]);