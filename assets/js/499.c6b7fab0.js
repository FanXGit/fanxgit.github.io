(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{3543:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"juc集合-copyonwritearraylist详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#juc集合-copyonwritearraylist详解"}},[s._v("#")]),s._v(" JUC集合: CopyOnWriteArrayList详解")]),s._v(" "),n("p",[s._v("================================================================")]),s._v(" "),n("blockquote",[n("p",[s._v("CopyOnWriteArrayList是ArrayList 的一个线程安全的变体，其中所有可变操作(add、set 等等)都是通过对底层数组进行一次新的拷贝来实现的。COW模式的体现。@pdai")])]),s._v(" "),n("h2",{attrs:{id:"带着bat大厂的面试问题去理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带着bat大厂的面试问题去理解"}},[s._v("#")]),s._v(" 带着BAT大厂的面试问题去理解")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("提示")]),s._v(" "),n("p",[s._v("请带着这些问题继续后文，会很大程度上帮助你更好的理解相关知识点。@pdai")]),s._v(" "),n("ul",[n("li",[s._v("请先说说非并发集合中Fail-fast机制?")]),s._v(" "),n("li",[s._v("再为什么说ArrayList查询快而增删慢?")]),s._v(" "),n("li",[s._v("对比ArrayList说说CopyOnWriteArrayList的增删改查实现原理? COW基于拷贝")]),s._v(" "),n("li",[s._v("再说下弱一致性的迭代器原理是怎么样的? "),n("code",[s._v("COWIterator<E>")])]),s._v(" "),n("li",[s._v("CopyOnWriteArrayList为什么并发安全且性能比Vector好?")]),s._v(" "),n("li",[s._v("CopyOnWriteArrayList有何缺陷，说说其应用场景?")])]),s._v(" "),n("h2",{attrs:{id:"copyonwritearraylist源码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist源码分析"}},[s._v("#")]),s._v(" CopyOnWriteArrayList源码分析")]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"类的继承关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类的继承关系"}},[s._v("#")]),s._v(" 类的继承关系")]),s._v(" "),n("p",[s._v("CopyOnWriteArrayList实现了List接口，List接口定义了对列表的基本操作；同时实现了RandomAccess接口，表示可以随机访问(数组具有随机访问的特性)；同时实现了Cloneable接口，表示可克隆；同时也实现了Serializable接口，表示可被序列化。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public class CopyOnWriteArrayList<E> implements List<E>, RandomAccess, Cloneable, java.io.Serializable {} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"类的内部类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类的内部类"}},[s._v("#")]),s._v(" 类的内部类")]),s._v(" "),n("ul",[n("li",[s._v("COWIterator类")])]),s._v(" "),n("p",[s._v("COWIterator表示迭代器，其也有一个Object类型的数组作为CopyOnWriteArrayList数组的快照，这种快照风格的迭代器方法在创建迭代器时使用了对当时数组状态的引用。此数组在迭代器的生存期内不会更改，因此不可能发生冲突，并且迭代器保证不会抛出 ConcurrentModificationException。创建迭代器以后，迭代器就不会反映列表的添加、移除或者更改。在迭代器上进行的元素更改操作(remove、set 和 add)不受支持。这些方法将抛出 UnsupportedOperationException。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('static final class COWIterator<E> implements ListIterator<E> {\n    /** Snapshot of the array */\n    // 快照\n    private final Object[] snapshot;\n    /** Index of element to be returned by subsequent call to next.  */\n    // 游标\n    private int cursor;\n    // 构造函数\n    private COWIterator(Object[] elements, int initialCursor) {\n        cursor = initialCursor;\n        snapshot = elements;\n    }\n    // 是否还有下一项\n    public boolean hasNext() {\n        return cursor < snapshot.length;\n    }\n    // 是否有上一项\n    public boolean hasPrevious() {\n        return cursor > 0;\n    }\n    // next项\n    @SuppressWarnings("unchecked")\n    public E next() {\n        if (! hasNext()) // 不存在下一项，抛出异常\n            throw new NoSuchElementException();\n        // 返回下一项\n        return (E) snapshot[cursor++];\n    }\n\n    @SuppressWarnings("unchecked")\n    public E previous() {\n        if (! hasPrevious())\n            throw new NoSuchElementException();\n        return (E) snapshot[--cursor];\n    }\n    \n    // 下一项索引\n    public int nextIndex() {\n        return cursor;\n    }\n    \n    // 上一项索引\n    public int previousIndex() {\n        return cursor-1;\n    }\n\n    /**\n        * Not supported. Always throws UnsupportedOperationException.\n        * @throws UnsupportedOperationException always; {@code remove}\n        *         is not supported by this iterator.\n        */\n    // 不支持remove操作\n    public void remove() {\n        throw new UnsupportedOperationException();\n    }\n\n    /**\n        * Not supported. Always throws UnsupportedOperationException.\n        * @throws UnsupportedOperationException always; {@code set}\n        *         is not supported by this iterator.\n        */\n    // 不支持set操作\n    public void set(E e) {\n        throw new UnsupportedOperationException();\n    }\n\n    /**\n        * Not supported. Always throws UnsupportedOperationException.\n        * @throws UnsupportedOperationException always; {@code add}\n        *         is not supported by this iterator.\n        */\n    // 不支持add操作\n    public void add(E e) {\n        throw new UnsupportedOperationException();\n    }\n\n    @Override\n    public void forEachRemaining(Consumer<? super E> action) {\n        Objects.requireNonNull(action);\n        Object[] elements = snapshot;\n        final int size = elements.length;\n        for (int i = cursor; i < size; i++) {\n            @SuppressWarnings("unchecked") E e = (E) elements[i];\n            action.accept(e);\n        }\n        cursor = size;\n    }\n} \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br")])]),n("h3",{attrs:{id:"类的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类的属性"}},[s._v("#")]),s._v(" 类的属性")]),s._v(" "),n("p",[s._v("属性中有一个可重入锁，用来保证线程安全访问，还有一个Object类型的数组，用来存放具体的元素。当然，也使用到了反射机制和CAS来保证原子性的修改lock域。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class CopyOnWriteArrayList<E>\n    implements List<E>, RandomAccess, Cloneable, java.io.Serializable {\n    // 版本序列号\n    private static final long serialVersionUID = 8673264195747942595L;\n    // 可重入锁\n    final transient ReentrantLock lock = new ReentrantLock();\n    // 对象数组，用于存放元素\n    private transient volatile Object[] array;\n    // 反射机制\n    private static final sun.misc.Unsafe UNSAFE;\n    // lock域的内存偏移量\n    private static final long lockOffset;\n    static {\n        try {\n            UNSAFE = sun.misc.Unsafe.getUnsafe();\n            Class<?> k = CopyOnWriteArrayList.class;\n            lockOffset = UNSAFE.objectFieldOffset\n                (k.getDeclaredField("lock"));\n        } catch (Exception e) {\n            throw new Error(e);\n        }\n    }\n} \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"类的构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类的构造函数"}},[s._v("#")]),s._v(" 类的构造函数")]),s._v(" "),n("ul",[n("li",[s._v("默认构造函数")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public CopyOnWriteArrayList() {\n    // 设置数组\n    setArray(new Object[0]);\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("CopyOnWriteArrayList(Collection<? extends E>)")]),s._v("型构造函数　 该构造函数用于创建一个按 collection 的迭代器返回元素的顺序包含指定 collection 元素的列表。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public CopyOnWriteArrayList(Collection<? extends E> c) {\n    Object[] elements;\n    if (c.getClass() == CopyOnWriteArrayList.class) // 类型相同\n        // 获取c集合的数组\n        elements = ((CopyOnWriteArrayList<?>)c).getArray();\n    else { // 类型不相同\n        // 将c集合转化为数组并赋值给elements\n        elements = c.toArray();\n        // c.toArray might (incorrectly) not return Object[] (see 6260652)\n        if (elements.getClass() != Object[].class) // elements类型不为Object[]类型\n            // 将elements数组转化为Object[]类型的数组\n            elements = Arrays.copyOf(elements, elements.length, Object[].class);\n    }\n    // 设置数组\n    setArray(elements);\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("该构造函数的处理流程如下")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("判断传入的集合c的类型是否为CopyOnWriteArrayList类型，若是，则获取该集合类型的底层数组(Object[])，并且设置当前CopyOnWriteArrayList的数组(Object[]数组)，进入步骤③；否则，进入步骤②")])]),s._v(" "),n("li",[n("p",[s._v("将传入的集合转化为数组elements，判断elements的类型是否为Object[]类型(toArray方法可能不会返回Object类型的数组)，若不是，则将elements转化为Object类型的数组。进入步骤③")])]),s._v(" "),n("li",[n("p",[s._v("设置当前CopyOnWriteArrayList的Object[]为elements。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("CopyOnWriteArrayList(E[])")]),s._v("型构造函数")])])]),s._v(" "),n("p",[s._v("该构造函数用于创建一个保存给定数组的副本的列表。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public CopyOnWriteArrayList(E[] toCopyIn) {\n    // 将toCopyIn转化为Object[]类型数组，然后设置当前数组\n    setArray(Arrays.copyOf(toCopyIn, toCopyIn.length, Object[].class));\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"核心函数分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心函数分析"}},[s._v("#")]),s._v(" 核心函数分析")]),s._v(" "),n("p",[s._v("对于CopyOnWriteArrayList的函数分析，主要明白Arrays.copyOf方法即可理解CopyOnWriteArrayList其他函数的意义。")]),s._v(" "),n("h4",{attrs:{id:"copyof函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyof函数"}},[s._v("#")]),s._v(" copyOf函数")]),s._v(" "),n("p",[s._v("该函数用于复制指定的数组，截取或用 null 填充(如有必要)，以使副本具有指定的长度。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static <T,U> T[] copyOf(U[] original, int newLength, Class<? extends T[]> newType) {\n    @SuppressWarnings("unchecked")\n    // 确定copy的类型(将newType转化为Object类型，将Object[].class转化为Object类型，判断两者是否相等，若相等，则生成指定长度的Object数组\n    // 否则,生成指定长度的新类型的数组)\n    T[] copy = ((Object)newType == (Object)Object[].class)\n        ? (T[]) new Object[newLength]\n        : (T[]) Array.newInstance(newType.getComponentType(), newLength);\n    // 将original数组从下标0开始，复制长度为(original.length和newLength的较小者),复制到copy数组中(也从下标0开始)\n    System.arraycopy(original, 0, copy, 0,\n                        Math.min(original.length, newLength));\n    return copy;\n} \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h4",{attrs:{id:"add函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add函数"}},[s._v("#")]),s._v(" add函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public boolean add(E e) {\n    // 可重入锁\n    final ReentrantLock lock = this.lock;\n    // 获取锁\n    lock.lock();\n    try {\n        // 元素数组\n        Object[] elements = getArray();\n        // 数组长度\n        int len = elements.length;\n        // 复制数组\n        Object[] newElements = Arrays.copyOf(elements, len + 1);\n        // 存放元素e\n        newElements[len] = e;\n        // 设置数组\n        setArray(newElements);\n        return true;\n    } finally {\n        // 释放锁\n        lock.unlock();\n    }\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("此函数用于将指定元素添加到此列表的尾部，处理流程如下")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("获取锁(保证多线程的安全访问)，获取当前的Object数组，获取Object数组的长度为length，进入步骤②。")])]),s._v(" "),n("li",[n("p",[s._v("根据Object数组复制一个长度为length+1的Object数组为newElements(此时，newElements[length]为null)，进入下一步骤。")])]),s._v(" "),n("li",[n("p",[s._v("将下标为length的数组元素newElements[length]设置为元素e，再设置当前Object[]为newElements，释放锁，返回。这样就完成了元素的添加。")])])]),s._v(" "),n("h4",{attrs:{id:"addifabsent方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#addifabsent方法"}},[s._v("#")]),s._v(" addIfAbsent方法")]),s._v(" "),n("p",[s._v("该函数用于添加元素(如果数组中不存在，则添加；否则，不添加，直接返回)，可以保证多线程环境下不会重复添加元素。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("private boolean addIfAbsent(E e, Object[] snapshot) {\n    // 重入锁\n    final ReentrantLock lock = this.lock;\n    // 获取锁\n    lock.lock();\n    try {\n        // 获取数组\n        Object[] current = getArray();\n        // 数组长度\n        int len = current.length;\n        if (snapshot != current) { // 快照不等于当前数组，对数组进行了修改\n            // Optimize for lost race to another addXXX operation\n            // 取较小者\n            int common = Math.min(snapshot.length, len);\n            for (int i = 0; i < common; i++) // 遍历\n                if (current[i] != snapshot[i] && eq(e, current[i])) // 当前数组的元素与快照的元素不相等并且e与当前元素相等\n                    // 表示在snapshot与current之间修改了数组，并且设置了数组某一元素为e，已经存在\n                    // 返回\n                    return false;\n            if (indexOf(e, current, common, len) >= 0) // 在当前数组中找到e元素\n                    // 返回\n                    return false;\n        }\n        // 复制数组\n        Object[] newElements = Arrays.copyOf(current, len + 1);\n        // 对数组len索引的元素赋值为e\n        newElements[len] = e;\n        // 设置数组\n        setArray(newElements);\n        return true;\n    } finally {\n        // 释放锁\n        lock.unlock();\n    }\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("该函数的流程如下:")]),s._v(" "),n("p",[s._v("① 获取锁，获取当前数组为current，current长度为len，判断数组之前的快照snapshot是否等于当前数组current，若不相等，则进入步骤②；否则，进入步骤④")]),s._v(" "),n("p",[s._v("② 不相等，表示在snapshot与current之间，对数组进行了修改(如进行了add、set、remove等操作)，获取长度(snapshot与current之间的较小者)，对current进行遍历操作，若遍历过程发现snapshot与current的元素不相等并且current的元素与指定元素相等(可能进行了set操作)，进入步骤⑤，否则，进入步骤③")]),s._v(" "),n("p",[s._v("③ 在当前数组中索引指定元素，若能够找到，进入步骤⑤，否则，进入步骤④")]),s._v(" "),n("p",[s._v("④ 复制当前数组current为newElements，长度为len+1，此时newElements[len]为null。再设置newElements[len]为指定元素e，再设置数组，进入步骤⑤")]),s._v(" "),n("p",[s._v("⑤ 释放锁，返回。")]),s._v(" "),n("h4",{attrs:{id:"set函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set函数"}},[s._v("#")]),s._v(" set函数")]),s._v(" "),n("p",[s._v("此函数用于用指定的元素替代此列表指定位置上的元素，也是基于数组的复制来实现的。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public E set(int index, E element) {\n    // 可重入锁\n    final ReentrantLock lock = this.lock;\n    // 获取锁\n    lock.lock();\n    try {\n        // 获取数组\n        Object[] elements = getArray();\n        // 获取index索引的元素\n        E oldValue = get(elements, index);\n\n        if (oldValue != element) { // 旧值等于element\n            // 数组长度\n            int len = elements.length;\n            // 复制数组\n            Object[] newElements = Arrays.copyOf(elements, len);\n            // 重新赋值index索引的值\n            newElements[index] = element;\n            // 设置数组\n            setArray(newElements);\n        } else {\n            // Not quite a no-op; ensures volatile write semantics\n            // 设置数组\n            setArray(elements);\n        }\n        // 返回旧值\n        return oldValue;\n    } finally {\n        // 释放锁\n        lock.unlock();\n    }\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h4",{attrs:{id:"remove函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove函数"}},[s._v("#")]),s._v(" remove函数")]),s._v(" "),n("p",[s._v("此函数用于移除此列表指定位置上的元素。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public E remove(int index) {\n    // 可重入锁\n    final ReentrantLock lock = this.lock;\n    // 获取锁\n    lock.lock();\n    try {\n        // 获取数组\n        Object[] elements = getArray();\n        // 数组长度\n        int len = elements.length;\n        // 获取旧值\n        E oldValue = get(elements, index);\n        // 需要移动的元素个数\n        int numMoved = len - index - 1;\n        if (numMoved == 0) // 移动个数为0\n            // 复制后设置数组\n            setArray(Arrays.copyOf(elements, len - 1));\n        else { // 移动个数不为0\n            // 新生数组\n            Object[] newElements = new Object[len - 1];\n            // 复制index索引之前的元素\n            System.arraycopy(elements, 0, newElements, 0, index);\n            // 复制index索引之后的元素\n            System.arraycopy(elements, index + 1, newElements, index,\n                                numMoved);\n            // 设置索引\n            setArray(newElements);\n        }\n        // 返回旧值\n        return oldValue;\n    } finally {\n        // 释放锁\n        lock.unlock();\n    }\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("处理流程如下")]),s._v(" "),n("p",[s._v("① 获取锁，获取数组elements，数组长度为length，获取索引的值elements[index]，计算需要移动的元素个数(length - index - 1),若个数为0，则表示移除的是数组的最后一个元素，复制elements数组，复制长度为length-1，然后设置数组，进入步骤③；否则，进入步骤②")]),s._v(" "),n("p",[s._v("② 先复制index索引前的元素，再复制index索引后的元素，然后设置数组。")]),s._v(" "),n("p",[s._v("③ 释放锁，返回旧值。")]),s._v(" "),n("h2",{attrs:{id:"copyonwritearraylist示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist示例"}},[s._v("#")]),s._v(" CopyOnWriteArrayList示例")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("下面通过一个示例来了解CopyOnWriteArrayList的使用: 在程序中，有一个PutThread线程会每隔50ms就向CopyOnWriteArrayList中添加一个元素，并且两次使用了迭代器，迭代器输出的内容都是生成迭代器时，CopyOnWriteArrayList的Object数组的快照的内容，在迭代的过程中，往CopyOnWriteArrayList中添加元素也不会抛出异常。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import java.util.Iterator;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\nclass PutThread extends Thread {\n    private CopyOnWriteArrayList<Integer> cowal;\n\n    public PutThread(CopyOnWriteArrayList<Integer> cowal) {\n        this.cowal = cowal;\n    }\n\n    public void run() {\n        try {\n            for (int i = 100; i < 110; i++) {\n                cowal.add(i);\n                Thread.sleep(50);\n            }\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\npublic class CopyOnWriteArrayListDemo {\n    public static void main(String[] args) {\n        CopyOnWriteArrayList<Integer> cowal = new CopyOnWriteArrayList<Integer>();\n        for (int i = 0; i < 10; i++) {\n            cowal.add(i);\n        }\n        PutThread p1 = new PutThread(cowal);\n        p1.start();\n        Iterator<Integer> iterator = cowal.iterator();\n        while (iterator.hasNext()) {\n            System.out.print(iterator.next() + " ");\n        }\n        System.out.println();\n        try {\n            Thread.sleep(200);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        \n        iterator = cowal.iterator();\n        while (iterator.hasNext()) {\n            System.out.print(iterator.next() + " ");\n        }\n    }\n} \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("p",[s._v("运行结果(某一次)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0 1 2 3 4 5 6 7 8 9 100 \n0 1 2 3 4 5 6 7 8 9 100 101 102 103 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"更深入理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更深入理解"}},[s._v("#")]),s._v(" 更深入理解")]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"copyonwritearraylist的缺陷和使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist的缺陷和使用场景"}},[s._v("#")]),s._v(" CopyOnWriteArrayList的缺陷和使用场景")]),s._v(" "),n("p",[s._v("CopyOnWriteArrayList 有几个缺点：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("由于写操作的时候，需要拷贝数组，会消耗内存，如果原数组的内容比较多的情况下，可能导致young gc或者full gc")])]),s._v(" "),n("li",[n("p",[s._v("不能用于实时读的场景，像拷贝数组、新增元素都需要时间，所以调用一个set操作后，读取到数据可能还是旧的,虽然CopyOnWriteArrayList 能做到最终一致性,但是还是没法满足实时性要求；")])])]),s._v(" "),n("p",[n("strong",[s._v("CopyOnWriteArrayList 合适读多写少的场景，不过这类慎用")])]),s._v(" "),n("p",[s._v("因为谁也没法保证CopyOnWriteArrayList 到底要放置多少数据，万一数据稍微有点多，每次add/set都要重新复制数组，这个代价实在太高昂了。在高性能的互联网应用中，这种操作分分钟引起故障。")]),s._v(" "),n("h3",{attrs:{id:"copyonwritearraylist为什么并发安全且性能比vector好"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist为什么并发安全且性能比vector好"}},[s._v("#")]),s._v(" CopyOnWriteArrayList为什么并发安全且性能比Vector好?")]),s._v(" "),n("p",[s._v("Vector对单独的add，remove等方法都是在方法上加了synchronized; 并且如果一个线程A调用size时，另一个线程B 执行了remove，然后size的值就不是最新的，然后线程A调用remove就会越界(这时就需要再加一个Synchronized)。这样就导致有了双重锁，效率大大降低，何必呢。于是vector废弃了，要用就用CopyOnWriteArrayList 吧。")]),s._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),n("hr"),s._v(" "),n("ul",[n("li",[s._v("文章主要参考自leesf的https://www.cnblogs.com/leesf456/p/5547853.html，在此基础上做了增改。")]),s._v(" "),n("li",[s._v("https://blog.csdn.net/LuoZheng4698729/article/details/102824923")]),s._v(" "),n("li",[s._v("https://blog.csdn.net/chuanyingcao2675/article/details/101048889")])])])}),[],!1,null,null,null);n.default=t.exports}}]);