(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{3530:function(a,s,e){"use strict";e.r(s);var n=e(7),t=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"关键字-volatile详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键字-volatile详解"}},[a._v("#")]),a._v(" 关键字: volatile详解")]),a._v(" "),s("p",[a._v("====================================")]),a._v(" "),s("blockquote",[s("p",[a._v("相比Sychronized(重量级锁，对系统性能影响较大)，volatile提供了另一种解决可见性和有序性问题的方案。@pdai")])]),a._v(" "),s("h2",{attrs:{id:"带着bat大厂的面试问题去理解volatile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带着bat大厂的面试问题去理解volatile"}},[a._v("#")]),a._v(" 带着BAT大厂的面试问题去理解volatile")]),a._v(" "),s("p",[a._v("提示")]),a._v(" "),s("p",[a._v("请带着这些问题继续后文，会很大程度上帮助你更好的理解volatile。@pdai")]),a._v(" "),s("ul",[s("li",[a._v("volatile关键字的作用是什么?")]),a._v(" "),s("li",[a._v("volatile能保证原子性吗?")]),a._v(" "),s("li",[a._v("之前32位机器上共享的long和double变量的为什么要用volatile? 现在64位机器上是否也要设置呢?")]),a._v(" "),s("li",[a._v("i++为什么不能保证原子性?")]),a._v(" "),s("li",[a._v("volatile是如何实现可见性的? 内存屏障。")]),a._v(" "),s("li",[a._v("volatile是如何实现有序性的? happens-before等")]),a._v(" "),s("li",[a._v("说下volatile的应用场景?")])]),a._v(" "),s("h2",{attrs:{id:"volatile的作用详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile的作用详解"}},[a._v("#")]),a._v(" volatile的作用详解")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"防重排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防重排序"}},[a._v("#")]),a._v(" 防重排序")]),a._v(" "),s("p",[a._v("我们从一个最经典的例子来分析重排序问题。大家应该都很熟悉单例模式的实现，而在并发环境下的单例实现方式，我们通常可以采用双重检查加锁(DCL)的方式来实现。其源码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public class Singleton {\n    public static volatile Singleton singleton;\n    /**\n     * 构造函数私有，禁止外部实例化\n     */\n    private Singleton() {};\n    public static Singleton getInstance() {\n        if (singleton == null) {\n            synchronized (singleton.class) {\n                if (singleton == null) {\n                    singleton = new Singleton();\n                }\n            }\n        }\n        return singleton;\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("现在我们分析一下为什么要在变量singleton之间加上volatile关键字。要理解这个问题，先要了解对象的构造过程，实例化一个对象其实可以分为三个步骤：")]),a._v(" "),s("ul",[s("li",[a._v("分配内存空间。")]),a._v(" "),s("li",[a._v("初始化对象。")]),a._v(" "),s("li",[a._v("将内存空间的地址赋值给对应的引用。")])]),a._v(" "),s("p",[a._v("但是由于操作系统可以"),s("code",[a._v("对指令进行重排序")]),a._v("，所以上面的过程也可能会变成如下过程：")]),a._v(" "),s("ul",[s("li",[a._v("分配内存空间。")]),a._v(" "),s("li",[a._v("将内存空间的地址赋值给对应的引用。")]),a._v(" "),s("li",[a._v("初始化对象")])]),a._v(" "),s("p",[a._v("如果是这个流程，多线程环境下就可能将一个未初始化的对象引用暴露出来，从而导致不可预料的结果。因此，为了防止这个过程的重排序，我们需要将变量设置为volatile类型的变量。")]),a._v(" "),s("h3",{attrs:{id:"实现可见性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现可见性"}},[a._v("#")]),a._v(" 实现可见性")]),a._v(" "),s("p",[a._v("可见性问题主要指一个线程修改了共享变量值，而另一个线程却看不到。引起可见性问题的主要原因是每个线程拥有自己的一个高速缓存区——线程工作内存。volatile关键字能有效的解决这个问题，我们看下下面的例子，就可以知道其作用：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class TestVolatile {\n    private static boolean stop = false;\n\n    public static void main(String[] args) {\n        // Thread-A\n        new Thread("Thread A") {\n            @Override\n            public void run() {\n                while (!stop) {\n                }\n                System.out.println(Thread.currentThread() + " stopped");\n            }\n        }.start();\n\n        // Thread-main\n        try {\n            TimeUnit.SECONDS.sleep(1);\n            System.out.println(Thread.currentThread() + " after 1 seconds");\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        stop = true;\n    }\n} \n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("p",[a._v("执行输出如下")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Thread[main,5,main] after 1 seconds\n\n// Thread A一直在loop, 因为Thread A 由于可见性原因看不到Thread Main 已经修改stop的值 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("可以看到 Thread-main 休眠1秒之后，设置 stop = ture，但是Thread A根本没停下来，这就是可见性问题。如果通过在stop变量前面加上volatile关键字则会真正stop:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Thread[main,5,main] after 1 seconds\nThread[Thread A,5,main] stopped\n\nProcess finished with exit code 0 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"保证原子性-单次读-写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保证原子性-单次读-写"}},[a._v("#")]),a._v(" 保证原子性:单次读/写")]),a._v(" "),s("p",[a._v("volatile不能保证完全的原子性，只能保证单次的读/写操作具有原子性。先从如下两个问题来理解（后文再从内存屏障的角度理解）：")]),a._v(" "),s("h4",{attrs:{id:"问题1-i-为什么不能保证原子性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题1-i-为什么不能保证原子性"}},[a._v("#")]),a._v(" 问题1： i++为什么不能保证原子性?")]),a._v(" "),s("p",[a._v("对于原子性，需要强调一点，也是大家容易误解的一点：对volatile变量的单次读/写操作可以保证原子性的，如long和double类型变量，但是并不能保证i++这种操作的原子性，因为本质上i++是读、写两次操作。")]),a._v(" "),s("p",[a._v("现在我们就通过下列程序来演示一下这个问题：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public class VolatileTest01 {\n    volatile int i;\n\n    public void addI(){\n        i++;\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        final  VolatileTest01 test01 = new VolatileTest01();\n        for (int n = 0; n < 1000; n++) {\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    try {\n                        Thread.sleep(10);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    test01.addI();\n                }\n            }).start();\n        }\n        Thread.sleep(10000);//等待10秒，保证上面程序执行完成\n        System.out.println(test01.i);\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br")])]),s("p",[a._v("大家可能会误认为对变量i加上关键字volatile后，这段程序就是线程安全的。大家可以尝试运行上面的程序。下面是我本地运行的结果：981 可能每个人运行的结果不相同。不过应该能看出，volatile是无法保证原子性的(否则结果应该是1000)。原因也很简单，i++其实是一个复合操作，包括三步骤：")]),a._v(" "),s("ul",[s("li",[a._v("读取i的值。")]),a._v(" "),s("li",[a._v("对i加1。")]),a._v(" "),s("li",[a._v("将i的值写回内存。 volatile是无法保证这三个操作是具有原子性的，我们可以通过AtomicInteger或者Synchronized来保证+1操作的原子性。 注：上面几段代码中多处执行了Thread.sleep()方法，目的是为了增加并发问题的产生几率，无其他作用。")])]),a._v(" "),s("h4",{attrs:{id:"问题2-共享的long和double变量的为什么要用volatile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题2-共享的long和double变量的为什么要用volatile"}},[a._v("#")]),a._v(" 问题2： 共享的long和double变量的为什么要用volatile?")]),a._v(" "),s("p",[a._v("因为long和double两种数据类型的操作可分为高32位和低32位两部分，因此普通的long或double类型读/写可能不是原子的。因此，鼓励大家将共享的long和double变量设置为volatile类型，这样能保证任何情况下对long和double的单次读/写操作都具有原子性。")]),a._v(" "),s("p",[a._v("如下是JLS中的解释：")]),a._v(" "),s("blockquote",[s("p",[a._v("17.7 Non-Atomic Treatment of double and long")])]),a._v(" "),s("ul",[s("li",[a._v("For the purposes of the Java programming language memory model, a single write to a non-volatile long or double value is treated as two separate writes: one to each 32-bit half. This can result in a situation where a thread sees the first 32 bits of a 64-bit value from one write, and the second 32 bits from another write.")]),a._v(" "),s("li",[a._v("Writes and reads of volatile long and double values are always atomic.")]),a._v(" "),s("li",[a._v("Writes to and reads of references are always atomic, regardless of whether they are implemented as 32-bit or 64-bit values.")]),a._v(" "),s("li",[a._v("Some implementations may find it convenient to divide a single write action on a 64-bit long or double value into two write actions on adjacent 32-bit values. For efficiency’s sake, this behavior is implementation-specific; an implementation of the Java Virtual Machine is free to perform writes to long and double values atomically or in two parts.")]),a._v(" "),s("li",[a._v("Implementations of the Java Virtual Machine are encouraged to avoid splitting 64-bit values where possible. Programmers are encouraged to declare shared 64-bit values as volatile or synchronize their programs correctly to avoid possible complications.")])]),a._v(" "),s("p",[a._v("目前各种平台下的商用虚拟机都选择把 64 位数据的读写操作作为原子操作来对待，因此我们在编写代码时一般不把long 和 double 变量专门声明为 volatile多数情况下也是不会错的。")]),a._v(" "),s("h2",{attrs:{id:"volatile-的实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的实现原理"}},[a._v("#")]),a._v(" volatile 的实现原理")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"volatile-可见性实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-可见性实现"}},[a._v("#")]),a._v(" volatile 可见性实现")]),a._v(" "),s("blockquote",[s("p",[a._v("volatile 变量的内存可见性是基于内存屏障(Memory Barrier)实现:")])]),a._v(" "),s("ul",[s("li",[a._v("内存屏障，又称内存栅栏，是一个 CPU 指令。")]),a._v(" "),s("li",[a._v("在程序运行时，为了提高执行性能，编译器和处理器会对指令进行重排序，JMM 为了保证在不同的编译器和 CPU 上有相同的结果，通过插入特定类型的内存屏障来禁止+ 特定类型的编译器重排序和处理器重排序，插入一条内存屏障会告诉编译器和 CPU：不管什么指令都不能和这条 Memory Barrier 指令重排序。")])]),a._v(" "),s("p",[a._v("写一段简单的 Java 代码，声明一个 volatile 变量，并赋值。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public class Test {\n    private volatile int a;\n    public void update() {\n        a = 1;\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        test.update();\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("通过 hsdis 和 jitwatch 工具可以得到编译后的汇编代码:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("......\n  0x0000000002951563: and    $0xffffffffffffff87,%rdi\n  0x0000000002951567: je     0x00000000029515f8\n  0x000000000295156d: test   $0x7,%rdi\n  0x0000000002951574: jne    0x00000000029515bd\n  0x0000000002951576: test   $0x300,%rdi\n  0x000000000295157d: jne    0x000000000295159c\n  0x000000000295157f: and    $0x37f,%rax\n  0x0000000002951586: mov    %rax,%rdi\n  0x0000000002951589: or     %r15,%rdi\n  0x000000000295158c: lock cmpxchg %rdi,(%rdx)  //在 volatile 修饰的共享变量进行写操作的时候会多出 lock 前缀的指令\n  0x0000000002951591: jne    0x0000000002951a15\n  0x0000000002951597: jmpq   0x00000000029515f8\n  0x000000000295159c: mov    0x8(%rdx),%edi\n  0x000000000295159f: shl    $0x3,%rdi\n  0x00000000029515a3: mov    0xa8(%rdi),%rdi\n  0x00000000029515aa: or     %r15,%rdi\n...... \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("p",[a._v("lock 前缀的指令在多核处理器下会引发两件事情:")]),a._v(" "),s("ul",[s("li",[a._v("将当前处理器缓存行的数据写回到系统内存。")]),a._v(" "),s("li",[a._v("写回内存的操作会使在其他 CPU 里缓存了该内存地址的数据无效。")])]),a._v(" "),s("p",[a._v("为了提高处理速度，处理器不直接和内存进行通信，而是先将系统内存的数据读到内部缓存(L1，L2 或其他)后再进行操作，但操作完不知道何时会写到内存。")]),a._v(" "),s("p",[a._v("如果对声明了 volatile 的变量进行写操作，JVM 就会向处理器发送一条 lock 前缀的指令，将这个变量所在缓存行的数据写回到系统内存。")]),a._v(" "),s("p",[a._v("为了保证各个处理器的缓存是一致的，实现了缓存一致性协议(MESI)，每个处理器通过嗅探在总线上传播的数据来检查自己缓存的值是不是过期了，当处理器发现自己缓存行对应的内存地址被修改，就会将当前处理器的缓存行设置成无效状态，当处理器对这个数据进行修改操作的时候，会重新从系统内存中把数据读到处理器缓存里。")]),a._v(" "),s("p",[a._v("所有多核处理器下还会完成：当处理器发现本地缓存失效后，就会从内存中重读该变量数据，即可以获取当前最新值。")]),a._v(" "),s("p",[a._v("volatile 变量通过这样的机制就使得每个线程都能获得该变量的最新值。")]),a._v(" "),s("h4",{attrs:{id:"lock-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lock-指令"}},[a._v("#")]),a._v(" lock 指令")]),a._v(" "),s("p",[a._v("在 Pentium 和早期的 IA-32 处理器中，lock 前缀会使处理器执行当前指令时产生一个 LOCK# 信号，会对总线进行锁定，其它 CPU 对内存的读写请求都会被阻塞，直到锁释放。 后来的处理器，加锁操作是由高速缓存锁代替总线锁来处理。 因为锁总线的开销比较大，锁总线期间其他 CPU 没法访问内存。 这种场景多缓存的数据一致通过缓存一致性协议(MESI)来保证。")]),a._v(" "),s("h4",{attrs:{id:"缓存一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存一致性"}},[a._v("#")]),a._v(" 缓存一致性")]),a._v(" "),s("p",[a._v('缓存是分段(line)的，一个段对应一块存储空间，称之为缓存行，它是 CPU 缓存中可分配的最小存储单元，大小 32 字节、64 字节、128 字节不等，这与 CPU 架构有关，通常来说是 64 字节。 LOCK# 因为锁总线效率太低，因此使用了多组缓存。 为了使其行为看起来如同一组缓存那样。因而设计了 缓存一致性协议。 缓存一致性协议有多种，但是日常处理的大多数计算机设备都属于 " 嗅探(snooping)" 协议。 所有内存的传输都发生在一条共享的总线上，而所有的处理器都能看到这条总线。 缓存本身是独立的，但是内存是共享资源，所有的内存访问都要经过仲裁(同一个指令周期中，只有一个 CPU 缓存可以读写内存)。 CPU 缓存不仅仅在做内存传输的时候才与总线打交道，而是不停在嗅探总线上发生的数据交换，跟踪其他缓存在做什么。 当一个缓存代表它所属的处理器去读写内存时，其它处理器都会得到通知，它们以此来使自己的缓存保持同步。 只要某个处理器写内存，其它处理器马上知道这块内存在它们的缓存段中已经失效。')]),a._v(" "),s("h3",{attrs:{id:"volatile-有序性实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-有序性实现"}},[a._v("#")]),a._v(" volatile 有序性实现")]),a._v(" "),s("h4",{attrs:{id:"volatile-的-happens-before-关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的-happens-before-关系"}},[a._v("#")]),a._v(" volatile 的 happens-before 关系")]),a._v(" "),s("p",[a._v("happens-before 规则中有一条是 volatile 变量规则：对一个 volatile 域的写，happens-before 于任意后续对这个 volatile 域的读。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//假设线程A执行writer方法，线程B执行reader方法\nclass VolatileExample {\n    int a = 0;\n    volatile boolean flag = false;\n    \n    public void writer() {\n        a = 1;              // 1 线程A修改共享变量\n        flag = true;        // 2 线程A写volatile变量\n    } \n    \n    public void reader() {\n        if (flag) {         // 3 线程B读同一个volatile变量\n        int i = a;          // 4 线程B读共享变量\n        ……\n        }\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("根据 happens-before 规则，上面过程会建立 3 类 happens-before 关系。")]),a._v(" "),s("ul",[s("li",[a._v("根据程序次序规则：1 happens-before 2 且 3 happens-before 4。")]),a._v(" "),s("li",[a._v("根据 volatile 规则：2 happens-before 3。")]),a._v(" "),s("li",[a._v("根据 happens-before 的传递性规则：1 happens-before 4。")])]),a._v(" "),s("p",[s("img",{attrs:{src:e(461),alt:""}})]),a._v(" "),s("p",[a._v("因为以上规则，当线程 A 将 volatile 变量 flag 更改为 true 后，线程 B 能够迅速感知。")]),a._v(" "),s("h4",{attrs:{id:"volatile-禁止重排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-禁止重排序"}},[a._v("#")]),a._v(" volatile 禁止重排序")]),a._v(" "),s("p",[a._v("为了性能优化，JMM 在不改变正确语义的前提下，会允许编译器和处理器对指令序列进行重排序。JMM 提供了内存屏障阻止这种重排序。")]),a._v(" "),s("p",[a._v("Java 编译器会在生成指令系列时在适当的位置会插入内存屏障指令来禁止特定类型的处理器重排序。")]),a._v(" "),s("p",[a._v("JMM 会针对编译器制定 volatile 重排序规则表。")]),a._v(" "),s("p",[s("img",{attrs:{src:e(462),alt:""}})]),a._v(" "),s("p",[a._v('" NO " 表示禁止重排序。')]),a._v(" "),s("p",[a._v("为了实现 volatile 内存语义时，编译器在生成字节码时，会在指令序列中插入内存屏障来禁止特定类型的处理器重排序。")]),a._v(" "),s("p",[a._v("对于编译器来说，发现一个最优布置来最小化插入屏障的总数几乎是不可能的，为此，JMM 采取了保守的策略。")]),a._v(" "),s("ul",[s("li",[a._v("在每个 volatile 写操作的前面插入一个 StoreStore 屏障。")]),a._v(" "),s("li",[a._v("在每个 volatile 写操作的后面插入一个 StoreLoad 屏障。")]),a._v(" "),s("li",[a._v("在每个 volatile 读操作的后面插入一个 LoadLoad 屏障。")]),a._v(" "),s("li",[a._v("在每个 volatile 读操作的后面插入一个 LoadStore 屏障。")])]),a._v(" "),s("p",[a._v("volatile 写是在前面和后面分别插入内存屏障，而 volatile 读操作是在后面插入两个内存屏障。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("内存屏障")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("StoreStore 屏障")]),a._v(" "),s("td",[a._v("禁止上面的普通写和下面的 volatile 写重排序。")])]),a._v(" "),s("tr",[s("td",[a._v("StoreLoad 屏障")]),a._v(" "),s("td",[a._v("防止上面的 volatile 写与下面可能有的 volatile 读/写重排序。")])]),a._v(" "),s("tr",[s("td",[a._v("LoadLoad 屏障")]),a._v(" "),s("td",[a._v("禁止下面所有的普通读操作和上面的 volatile 读重排序。")])]),a._v(" "),s("tr",[s("td",[a._v("LoadStore 屏障")]),a._v(" "),s("td",[a._v("禁止下面所有的普通写操作和上面的 volatile 读重排序。")])])])]),a._v(" "),s("p",[s("img",{attrs:{src:e(463),alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:e(464),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"volatile-的应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的应用场景"}},[a._v("#")]),a._v(" volatile 的应用场景")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("使用 volatile 必须具备的条件")]),a._v(" "),s("ul",[s("li",[a._v("对变量的写操作不依赖于当前值。")]),a._v(" "),s("li",[a._v("该变量没有包含在具有其他变量的不变式中。")]),a._v(" "),s("li",[a._v("只有在状态真正独立于程序内其他内容时才能使用 volatile。")])]),a._v(" "),s("h3",{attrs:{id:"模式1-状态标志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式1-状态标志"}},[a._v("#")]),a._v(" 模式1：状态标志")]),a._v(" "),s("p",[a._v("也许实现 volatile 变量的规范使用仅仅是使用一个布尔状态标志，用于指示发生了一个重要的一次性事件，例如完成初始化或请求停机。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("volatile boolean shutdownRequested;\n......\npublic void shutdown() { shutdownRequested = true; }\npublic void doWork() { \n    while (!shutdownRequested) { \n        // do stuff\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"模式2-一次性安全发布-one-time-safe-publication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式2-一次性安全发布-one-time-safe-publication"}},[a._v("#")]),a._v(" 模式2：一次性安全发布(one-time safe publication)")]),a._v(" "),s("p",[a._v("缺乏同步会导致无法实现可见性，这使得确定何时写入对象引用而不是原始值变得更加困难。在缺乏同步的情况下，可能会遇到某个对象引用的更新值(由另一个线程写入)和该对象状态的旧值同时存在。(这就是造成著名的双重检查锁定(double-checked-locking)问题的根源，其中对象引用在没有同步的情况下进行读操作，产生的问题是您可能会看到一个更新的引用，但是仍然会通过该引用看到不完全构造的对象)。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public class BackgroundFloobleLoader {\n    public volatile Flooble theFlooble;\n \n    public void initInBackground() {\n        // do lots of stuff\n        theFlooble = new Flooble();  // this is the only write to theFlooble\n    }\n}\n \npublic class SomeOtherClass {\n    public void doWork() {\n        while (true) { \n            // do some stuff...\n            // use the Flooble, but only if it is ready\n            if (floobleLoader.theFlooble != null) \n                doSomething(floobleLoader.theFlooble);\n        }\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("h3",{attrs:{id:"模式3-独立观察-independent-observation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式3-独立观察-independent-observation"}},[a._v("#")]),a._v(" 模式3：独立观察(independent observation)")]),a._v(" "),s("p",[a._v("安全使用 volatile 的另一种简单模式是定期 发布 观察结果供程序内部使用。例如，假设有一种环境传感器能够感觉环境温度。一个后台线程可能会每隔几秒读取一次该传感器，并更新包含当前文档的 volatile 变量。然后，其他线程可以读取这个变量，从而随时能够看到最新的温度值。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public class UserManager {\n    public volatile String lastUser;\n \n    public boolean authenticate(String user, String password) {\n        boolean valid = passwordIsValid(user, password);\n        if (valid) {\n            User u = new User();\n            activeUsers.add(u);\n            lastUser = user;\n        }\n        return valid;\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h3",{attrs:{id:"模式4-volatile-bean-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式4-volatile-bean-模式"}},[a._v("#")]),a._v(" 模式4：volatile bean 模式")]),a._v(" "),s("p",[a._v("在 volatile bean 模式中，JavaBean 的所有数据成员都是 volatile 类型的，并且 getter 和 setter 方法必须非常普通 —— 除了获取或设置相应的属性外，不能包含任何逻辑。此外，对于对象引用的数据成员，引用的对象必须是有效不可变的。(这将禁止具有数组值的属性，因为当数组引用被声明为 volatile 时，只有引用而不是数组本身具有 volatile 语义)。对于任何 volatile 变量，不变式或约束都不能包含 JavaBean 属性。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@ThreadSafe\npublic class Person {\n    private volatile String firstName;\n    private volatile String lastName;\n    private volatile int age;\n \n    public String getFirstName() { return firstName; }\n    public String getLastName() { return lastName; }\n    public int getAge() { return age; }\n \n    public void setFirstName(String firstName) { \n        this.firstName = firstName;\n    }\n \n    public void setLastName(String lastName) { \n        this.lastName = lastName;\n    }\n \n    public void setAge(int age) { \n        this.age = age;\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br")])]),s("h3",{attrs:{id:"模式5-开销较低的读-写锁策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式5-开销较低的读-写锁策略"}},[a._v("#")]),a._v(" 模式5：开销较低的读－写锁策略")]),a._v(" "),s("p",[a._v("volatile 的功能还不足以实现计数器。因为 ++x 实际上是三种操作(读、添加、存储)的简单组合，如果多个线程凑巧试图同时对 volatile 计数器执行增量操作，那么它的更新值有可能会丢失。 如果读操作远远超过写操作，可以结合使用内部锁和 volatile 变量来减少公共代码路径的开销。 安全的计数器使用 synchronized 确保增量操作是原子的，并使用 volatile 保证当前结果的可见性。如果更新不频繁的话，该方法可实现更好的性能，因为读路径的开销仅仅涉及 volatile 读操作，这通常要优于一个无竞争的锁获取的开销。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@ThreadSafe\npublic class CheesyCounter {\n    // Employs the cheap read-write lock trick\n    // All mutative operations MUST be done with the 'this' lock held\n    @GuardedBy(\"this\") private volatile int value;\n \n    public int getValue() { return value; }\n \n    public synchronized int increment() {\n        return value++;\n    }\n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h3",{attrs:{id:"模式6-双重检查-double-checked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式6-双重检查-double-checked"}},[a._v("#")]),a._v(" 模式6：双重检查(double-checked)")]),a._v(" "),s("p",[a._v("就是我们上文举的例子。")]),a._v(" "),s("p",[a._v("单例模式的一种实现方式，但很多人会忽略 volatile 关键字，因为没有该关键字，程序也可以很好的运行，只不过代码的稳定性总不是 100%，说不定在未来的某个时刻，隐藏的 bug 就出来了。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("class Singleton {\n    private volatile static Singleton instance;\n    private Singleton() {\n    }\n    public static Singleton getInstance() {\n        if (instance == null) {\n            syschronized(Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    } \n} \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[a._v("https://blog.csdn.net/devotion987/article/details/68486942")]),a._v(" "),s("li",[a._v("https://www.jianshu.com/p/ccfe24b63d87")])])])}),[],!1,null,null,null);s.default=t.exports},461:function(a,s,e){a.exports=e.p+"assets/img/thread_java-thread-x-key-volatile-1.21d0e6dd.png"},462:function(a,s,e){a.exports=e.p+"assets/img/thread_java-thread-x-key-volatile-2.164676b9.png"},463:function(a,s,e){a.exports=e.p+"assets/img/thread_java-thread-x-key-volatile-3.4e39f46f.png"},464:function(a,s,e){a.exports=e.p+"assets/img/thread_java-thread-x-key-volatile-4.8b699b0a.png"}}]);