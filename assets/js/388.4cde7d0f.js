(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{286:function(a,s,n){a.exports=n.p+"assets/img/tomcat-x-start-1.e6eda8c2.png"},3337:function(a,s,n){a.exports=n.p+"assets/img/tomcat-x-start-2.a511c103.png"},4196:function(a,s,n){"use strict";n.r(s);var t=n(7),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"tomcat-启动过程-初始化和启动流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-启动过程-初始化和启动流程"}},[a._v("#")]),a._v(" Tomcat - 启动过程：初始化和启动流程")]),a._v(" "),s("p",[a._v("=================================================")]),a._v(" "),s("blockquote",[s("p",[a._v("在有了Tomcat架构设计和源码入口以后，我们便可以开始真正读源码了。@pdai")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#tomcat---%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B%E5%88%9D%E5%A7%8B%E5%8C%96%E5%92%8C%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B"}},[a._v("Tomcat - 启动过程：初始化和启动流程")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E6%80%BB%E4%BD%93%E6%B5%81%E7%A8%8B"}},[a._v("总体流程")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E6%B5%85%E6%9E%90"}},[a._v("代码浅析")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#bootstrap%E4%B8%BB%E5%85%A5%E5%8F%A3"}},[a._v("Bootstrap主入口？")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#bootstrap%E5%A6%82%E4%BD%95%E5%88%9D%E5%A7%8B%E5%8C%96catalina%E7%9A%84"}},[a._v("Bootstrap如何初始化Catalina的？")])])])])])])]),a._v(" "),s("h1",{attrs:{id:"总体流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总体流程"}},[a._v("#")]),a._v(" 总体流程")]),a._v(" "),s("hr"),a._v(" "),s("blockquote",[s("p",[a._v("很多人在看框架代码的时候会很难抓住重点的，而一开始了解整体流程会很大程度提升理解的效率。@pdai")])]),a._v(" "),s("p",[a._v("我们看下整体的初始化和启动的流程，在"),s("strong",[a._v("理解的时候可以直接和Tomcat架构设计中组件关联上")]),a._v("：")]),a._v(" "),s("p",[s("img",{attrs:{src:n(286),alt:""}})]),a._v(" "),s("h1",{attrs:{id:"代码浅析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码浅析"}},[a._v("#")]),a._v(" 代码浅析")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("看了下网上关于Tomcat的文章，很多直接关注在纯代码的分析，这种是很难的；我建议你一定要把代码加载进来自己看一下，然后这里我把它转化为核心的几个问题来帮助你理解。@pdai")]),a._v(" "),s("h3",{attrs:{id:"bootstrap主入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap主入口"}},[a._v("#")]),a._v(" Bootstrap主入口？")]),a._v(" "),s("p",[a._v("Tomcat源码就从它的main方法开始。Tomcat的main方法在org.apache.catalina.startup.Bootstrap 里。 如下代码我们就是创建一个 Bootstrap 对象，调用它的 init 方法初始化，然后根据启动参数，分别调用 Bootstrap 对象的不同方法。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public final class Bootstrap {\n    ……\n    \n    /**\n     * Daemon object used by main.\n     */\n    private static final Object daemonLock = new Object();\n    \n    ……\n    \n    \n   /**\n     * Main method and entry point when starting Tomcat via the provided\n     * scripts.\n     *\n     * @param args Command line arguments to be processed\n     */\n    public static void main(String args[]) {\n        // 创建一个 Bootstrap 对象，调用它的 init 方法初始化\n        synchronized (daemonLock) {\n            if (daemon == null) {\n                // Don\'t set daemon until init() has completed\n                Bootstrap bootstrap = new Bootstrap();\n                try {\n                    bootstrap.init();\n                } catch (Throwable t) {\n                    handleThrowable(t);\n                    t.printStackTrace();\n                    return;\n                }\n                daemon = bootstrap;\n            } else {\n                // When running as a service the call to stop will be on a new\n                // thread so make sure the correct class loader is used to\n                // prevent a range of class not found exceptions.\n                Thread.currentThread().setContextClassLoader(daemon.catalinaLoader);\n            }\n        }\n\n        // 根据启动参数，分别调用 Bootstrap 对象的不同方法\n        try {\n            String command = "start"; // 默认是start\n            if (args.length > 0) {\n                command = args[args.length - 1];\n            }\n\n            if (command.equals("startd")) {\n                args[args.length - 1] = "start";\n                daemon.load(args);\n                daemon.start();\n            } else if (command.equals("stopd")) {\n                args[args.length - 1] = "stop";\n                daemon.stop();\n            } else if (command.equals("start")) {\n                daemon.setAwait(true);\n                daemon.load(args);\n                daemon.start();\n                if (null == daemon.getServer()) {\n                    System.exit(1);\n                }\n            } else if (command.equals("stop")) {\n                daemon.stopServer(args);\n            } else if (command.equals("configtest")) {\n                daemon.load(args);\n                if (null == daemon.getServer()) {\n                    System.exit(1);\n                }\n                System.exit(0);\n            } else {\n                log.warn("Bootstrap: command \\"" + command + "\\" does not exist.");\n            }\n        } catch (Throwable t) {\n            // Unwrap the Exception for clearer error reporting\n            if (t instanceof InvocationTargetException &&\n                    t.getCause() != null) {\n                t = t.getCause();\n            }\n            handleThrowable(t);\n            t.printStackTrace();\n            System.exit(1);\n        }\n\n    }\n    \n    ……\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br"),s("span",{staticClass:"line-number"},[a._v("61")]),s("br"),s("span",{staticClass:"line-number"},[a._v("62")]),s("br"),s("span",{staticClass:"line-number"},[a._v("63")]),s("br"),s("span",{staticClass:"line-number"},[a._v("64")]),s("br"),s("span",{staticClass:"line-number"},[a._v("65")]),s("br"),s("span",{staticClass:"line-number"},[a._v("66")]),s("br"),s("span",{staticClass:"line-number"},[a._v("67")]),s("br"),s("span",{staticClass:"line-number"},[a._v("68")]),s("br"),s("span",{staticClass:"line-number"},[a._v("69")]),s("br"),s("span",{staticClass:"line-number"},[a._v("70")]),s("br"),s("span",{staticClass:"line-number"},[a._v("71")]),s("br"),s("span",{staticClass:"line-number"},[a._v("72")]),s("br"),s("span",{staticClass:"line-number"},[a._v("73")]),s("br"),s("span",{staticClass:"line-number"},[a._v("74")]),s("br"),s("span",{staticClass:"line-number"},[a._v("75")]),s("br"),s("span",{staticClass:"line-number"},[a._v("76")]),s("br"),s("span",{staticClass:"line-number"},[a._v("77")]),s("br"),s("span",{staticClass:"line-number"},[a._v("78")]),s("br"),s("span",{staticClass:"line-number"},[a._v("79")]),s("br"),s("span",{staticClass:"line-number"},[a._v("80")]),s("br"),s("span",{staticClass:"line-number"},[a._v("81")]),s("br"),s("span",{staticClass:"line-number"},[a._v("82")]),s("br"),s("span",{staticClass:"line-number"},[a._v("83")]),s("br"),s("span",{staticClass:"line-number"},[a._v("84")]),s("br"),s("span",{staticClass:"line-number"},[a._v("85")]),s("br"),s("span",{staticClass:"line-number"},[a._v("86")]),s("br")])]),s("h3",{attrs:{id:"bootstrap如何初始化catalina的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap如何初始化catalina的"}},[a._v("#")]),a._v(" Bootstrap如何初始化Catalina的？")]),a._v(" "),s("p",[a._v("我们用"),s("code",[a._v("Sequence Diagram")]),a._v("插件来看main方法的时序图，但是可以发现它并没有帮我们画出Bootstrap初始化Catalina的过程，这和上面的组件初始化不符合？")]),a._v(" "),s("p",[s("img",{attrs:{src:n(3337),alt:""}})]),a._v(" "),s("p",[a._v("让我们带着这个为看下Catalina的初始化的")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('/**\n  * 初始化守护进程\n  * \n  * @throws Exception Fatal initialization error\n  */\npublic void init() throws Exception {\n\n    // 初始化classloader（包括catalinaLoader），下文将具体分析\n    initClassLoaders();\n\n    // 设置当前的线程的contextClassLoader为catalinaLoader\n    Thread.currentThread().setContextClassLoader(catalinaLoader);\n\n    SecurityClassLoad.securityClassLoad(catalinaLoader);\n\n    // 通过catalinaLoader加载Catalina，并初始化startupInstance 对象\n    if (log.isDebugEnabled())\n        log.debug("Loading startup class");\n    Class<?> startupClass = catalinaLoader.loadClass("org.apache.catalina.startup.Catalina");\n    Object startupInstance = startupClass.getConstructor().newInstance();\n\n    // 通过反射调用了setParentClassLoader 方法\n    if (log.isDebugEnabled())\n        log.debug("Setting startup class properties");\n    String methodName = "setParentClassLoader";\n    Class<?> paramTypes[] = new Class[1];\n    paramTypes[0] = Class.forName("java.lang.ClassLoader");\n    Object paramValues[] = new Object[1];\n    paramValues[0] = sharedLoader;\n    Method method =\n        startupInstance.getClass().getMethod(methodName, paramTypes);\n    method.invoke(startupInstance, paramValues);\n\n    catalinaDaemon = startupInstance;\n\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br")])]),s("p",[a._v("通过上面几行关键代码的注释，我们就可以看出Catalina是如何初始化的。这里还留下一个问题，tomcat为什么要初始化不同的classloader呢？我们将在下文进行详解。)")])])}),[],!1,null,null,null);s.default=e.exports}}]);