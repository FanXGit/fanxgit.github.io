(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{3521:function(e,a,s){"use strict";s.r(a);var n=s(7),t=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"map-linkedhashset-map源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-linkedhashset-map源码解析"}},[e._v("#")]),e._v(" Map - LinkedHashSet&Map源码解析")]),e._v(" "),a("blockquote",[a("p",[e._v("本文主要对Map - LinkedHashSet&Map 源码解析。@pdai")])]),e._v(" "),a("h2",{attrs:{id:"java-7-linkedhashset-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-7-linkedhashset-map"}},[e._v("#")]),e._v(" Java 7 - LinkedHashSet&Map")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"总体介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总体介绍"}},[e._v("#")]),e._v(" 总体介绍")]),e._v(" "),a("p",[e._v("如果你已看过前面关于"),a("em",[e._v("HashSet")]),e._v("和"),a("em",[e._v("HashMap")]),e._v("，以及"),a("em",[e._v("TreeSet")]),e._v("和"),a("em",[e._v("TreeMap")]),e._v("的讲解，一定能够想到本文将要讲解的"),a("em",[e._v("LinkedHashSet")]),e._v("和"),a("em",[e._v("LinkedHashMap")]),e._v("其实也是一回事。"),a("em",[e._v("LinkedHashSet")]),e._v("和"),a("em",[e._v("LinkedHashMap")]),e._v("在Java里也有着相同的实现，前者仅仅是对后者做了一层包装，也就是说"),a("strong",[e._v("LinkedHashSet里面有一个LinkedHashMap(适配器模式)")]),e._v("。因此本文将重点分析"),a("em",[e._v("LinkedHashMap")]),e._v("。")]),e._v(" "),a("p",[a("em",[e._v("LinkedHashMap")]),e._v("实现了"),a("em",[e._v("Map")]),e._v("接口，即允许放入"),a("code",[e._v("key")]),e._v("为"),a("code",[e._v("null")]),e._v("的元素，也允许插入"),a("code",[e._v("value")]),e._v("为"),a("code",[e._v("null")]),e._v("的元素。从名字上可以看出该容器是LinkedList和"),a("em",[e._v("HashMap")]),e._v("的混合体，也就是说它同时满足"),a("em",[e._v("HashMap")]),e._v("和LinkedList的某些特性。"),a("strong",[e._v("可将"),a("em",[e._v("LinkedHashMap")]),e._v("看作采用LinkedList增强的"),a("em",[e._v("HashMap")]),e._v("。")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(419),alt:"LinkedHashMap_base.png"}})]),e._v(" "),a("p",[e._v("事实上"),a("em",[e._v("LinkedHashMap")]),e._v("是"),a("em",[e._v("HashMap")]),e._v("的直接子类，"),a("strong",[e._v("二者唯一的区别是"),a("em",[e._v("LinkedHashMap")]),e._v("在"),a("em",[e._v("HashMap")]),e._v("的基础上，采用双向链表(doubly-linked list)的形式将所有"),a("code",[e._v("entry")]),e._v("连接起来，这样是为保证元素的迭代顺序跟插入顺序相同")]),e._v("。上图给出了"),a("em",[e._v("LinkedHashMap")]),e._v("的结构图，主体部分跟"),a("em",[e._v("HashMap")]),e._v("完全一样，多了"),a("code",[e._v("header")]),e._v("指向双向链表的头部(是一个哑元)，"),a("strong",[e._v("该双向链表的迭代顺序就是"),a("code",[e._v("entry")]),e._v("的插入顺序")]),e._v("。")]),e._v(" "),a("p",[e._v("除了可以保迭代历顺序，这种结构还有一个好处 : "),a("strong",[e._v("迭代"),a("em",[e._v("LinkedHashMap")]),e._v("时不需要像"),a("em",[e._v("HashMap")]),e._v("那样遍历整个"),a("code",[e._v("table")]),e._v("，而只需要直接遍历"),a("code",[e._v("header")]),e._v("指向的双向链表即可")]),e._v("，也就是说"),a("em",[e._v("LinkedHashMap")]),e._v("的迭代时间就只跟"),a("code",[e._v("entry")]),e._v("的个数相关，而跟"),a("code",[e._v("table")]),e._v("的大小无关。")]),e._v(" "),a("p",[e._v("有两个参数可以影响"),a("em",[e._v("LinkedHashMap")]),e._v("的性能: 初始容量(inital capacity)和负载系数(load factor)。初始容量指定了初始"),a("code",[e._v("table")]),e._v("的大小，负载系数用来指定自动扩容的临界值。当"),a("code",[e._v("entry")]),e._v("的数量超过"),a("code",[e._v("capacity*load_factor")]),e._v("时，容器将自动扩容并重新哈希。对于插入元素较多的场景，将初始容量设大可以减少重新哈希的次数。")]),e._v(" "),a("p",[e._v("将对象放入到"),a("em",[e._v("LinkedHashMap")]),e._v("或"),a("em",[e._v("LinkedHashSet")]),e._v("中时，有两个方法需要特别关心: "),a("code",[e._v("hashCode()")]),e._v("和"),a("code",[e._v("equals()")]),e._v("。"),a("strong",[a("code",[e._v("hashCode()")]),e._v("方法决定了对象会被放到哪个"),a("code",[e._v("bucket")]),e._v("里，当多个对象的哈希值冲突时，"),a("code",[e._v("equals()")]),e._v("方法决定了这些对象是否是“同一个对象”")]),e._v("。所以，如果要将自定义的对象放入到"),a("code",[e._v("LinkedHashMap")]),e._v("或"),a("code",[e._v("LinkedHashSet")]),e._v("中，需要@Override "),a("code",[e._v("hashCode()")]),e._v("和"),a("code",[e._v("equals()")]),e._v("方法。")]),e._v(" "),a("p",[e._v("通过如下方式可以得到一个跟源"),a("em",[e._v("Map")]),e._v(" "),a("strong",[e._v("迭代顺序")]),e._v("一样的"),a("em",[e._v("LinkedHashMap")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("void foo(Map m) {\n    Map copy = new LinkedHashMap(m);\n    ...\n} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("出于性能原因，"),a("em",[e._v("LinkedHashMap")]),e._v("是非同步的(not synchronized)，如果需要在多线程环境使用，需要程序员手动同步；或者通过如下方式将"),a("em",[e._v("LinkedHashMap")]),e._v("包装成(wrapped)同步的:")]),e._v(" "),a("p",[a("code",[e._v("Map m = Collections.synchronizedMap(new LinkedHashMap(...));")])]),e._v(" "),a("h3",{attrs:{id:"方法剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法剖析"}},[e._v("#")]),e._v(" 方法剖析")]),e._v(" "),a("h4",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" get()")]),e._v(" "),a("p",[a("code",[e._v("get(Object key)")]),e._v("方法根据指定的"),a("code",[e._v("key")]),e._v("值返回对应的"),a("code",[e._v("value")]),e._v("。该方法跟"),a("code",[e._v("HashMap.get()")]),e._v("方法的流程几乎完全一样，读者可自行"),a("a",{attrs:{href:"https://github.com/CarpenterLee/JCFInternals/blob/master/markdown/6-HashSet%20and%20HashMap.md#get",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考前文在新窗口打开"),a("OutboundLink")],1),e._v("，这里不再赘述。")]),e._v(" "),a("h4",{attrs:{id:"put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[e._v("#")]),e._v(" put()")]),e._v(" "),a("p",[a("code",[e._v("put(K key, V value)")]),e._v("方法是将指定的"),a("code",[e._v("key, value")]),e._v("对添加到"),a("code",[e._v("map")]),e._v("里。该方法首先会对"),a("code",[e._v("map")]),e._v("做一次查找，看是否包含该元组，如果已经包含则直接返回，查找过程类似于"),a("code",[e._v("get()")]),e._v("方法；如果没有找到，则会通过"),a("code",[e._v("addEntry(int hash, K key, V value, int bucketIndex)")]),e._v("方法插入新的"),a("code",[e._v("entry")]),e._v("。")]),e._v(" "),a("p",[e._v("注意，这里的"),a("strong",[e._v("插入有两重含义")]),e._v(":")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("从"),a("code",[e._v("table")]),e._v("的角度看，新的"),a("code",[e._v("entry")]),e._v("需要插入到对应的"),a("code",[e._v("bucket")]),e._v("里，当有哈希冲突时，采用头插法将新的"),a("code",[e._v("entry")]),e._v("插入到冲突链表的头部。")]),e._v(" "),a("li",[e._v("从"),a("code",[e._v("header")]),e._v("的角度看，新的"),a("code",[e._v("entry")]),e._v("需要插入到双向链表的尾部。")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(420),alt:"LinkedHashMap_addEntry.png"}})]),e._v(" "),a("p",[a("code",[e._v("addEntry()")]),e._v("代码如下:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// LinkedHashMap.addEntry()\nvoid addEntry(int hash, K key, V value, int bucketIndex) {\n    if ((size >= threshold) && (null != table[bucketIndex])) {\n        resize(2 * table.length);// 自动扩容，并重新哈希\n        hash = (null != key) ? hash(key) : 0;\n        bucketIndex = hash & (table.length-1);// hash%table.length\n    }\n    // 1.在冲突链表头部插入新的entry\n    HashMap.Entry<K,V> old = table[bucketIndex];\n    Entry<K,V> e = new Entry<>(hash, key, value, old);\n    table[bucketIndex] = e;\n    // 2.在双向链表的尾部插入新的entry\n    e.addBefore(header);\n    size++;\n} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("p",[e._v("上述代码中用到了"),a("code",[e._v("addBefore()")]),e._v("方法将新"),a("code",[e._v("entry e")]),e._v("插入到双向链表头引用"),a("code",[e._v("header")]),e._v("的前面，这样"),a("code",[e._v("e")]),e._v("就成为双向链表中的最后一个元素。"),a("code",[e._v("addBefore()")]),e._v("的代码如下:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// LinkedHashMap.Entry.addBefor()，将this插入到existingEntry的前面\nprivate void addBefore(Entry<K,V> existingEntry) {\n    after  = existingEntry;\n    before = existingEntry.before;\n    before.after = this;\n    after.before = this;\n} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("上述代码只是简单修改相关"),a("code",[e._v("entry")]),e._v("的引用而已。")]),e._v(" "),a("h4",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[e._v("#")]),e._v(" remove()")]),e._v(" "),a("p",[a("code",[e._v("remove(Object key)")]),e._v("的作用是删除"),a("code",[e._v("key")]),e._v("值对应的"),a("code",[e._v("entry")]),e._v("，该方法的具体逻辑是在"),a("code",[e._v("removeEntryForKey(Object key)")]),e._v("里实现的。"),a("code",[e._v("removeEntryForKey()")]),e._v("方法会首先找到"),a("code",[e._v("key")]),e._v("值对应的"),a("code",[e._v("entry")]),e._v("，然后删除该"),a("code",[e._v("entry")]),e._v("(修改链表的相应引用)。查找过程跟"),a("code",[e._v("get()")]),e._v("方法类似。")]),e._v(" "),a("p",[e._v("注意，这里的"),a("strong",[e._v("删除也有两重含义")]),e._v(":")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("从"),a("code",[e._v("table")]),e._v("的角度看，需要将该"),a("code",[e._v("entry")]),e._v("从对应的"),a("code",[e._v("bucket")]),e._v("里删除，如果对应的冲突链表不空，需要修改冲突链表的相应引用。")]),e._v(" "),a("li",[e._v("从"),a("code",[e._v("header")]),e._v("的角度来看，需要将该"),a("code",[e._v("entry")]),e._v("从双向链表中删除，同时修改链表中前面以及后面元素的相应引用。")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(421),alt:"LinkedHashMap_removeEntryForKey.png"}})]),e._v(" "),a("p",[a("code",[e._v("removeEntryForKey()")]),e._v("对应的代码如下:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// LinkedHashMap.removeEntryForKey()，删除key值对应的entry\nfinal Entry<K,V> removeEntryForKey(Object key) {\n\t......\n\tint hash = (key == null) ? 0 : hash(key);\n    int i = indexFor(hash, table.length);// hash&(table.length-1)\n    Entry<K,V> prev = table[i];// 得到冲突链表\n    Entry<K,V> e = prev;\n    while (e != null) {// 遍历冲突链表\n        Entry<K,V> next = e.next;\n        Object k;\n        if (e.hash == hash &&\n            ((k = e.key) == key || (key != null && key.equals(k)))) {// 找到要删除的entry\n            modCount++; size--;\n            // 1. 将e从对应bucket的冲突链表中删除\n            if (prev == e) table[i] = next;\n            else prev.next = next;\n            // 2. 将e从双向链表中删除\n            e.before.after = e.after;\n            e.after.before = e.before;\n            return e;\n        }\n        prev = e; e = next;\n    }\n    return e;\n} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br")])]),a("h3",{attrs:{id:"linkedhashset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset"}},[e._v("#")]),e._v(" LinkedHashSet")]),e._v(" "),a("p",[e._v("前面已经说过"),a("em",[e._v("LinkedHashSet")]),e._v("是对"),a("em",[e._v("LinkedHashMap")]),e._v("的简单包装，对"),a("em",[e._v("LinkedHashSet")]),e._v("的函数调用都会转换成合适的"),a("em",[e._v("LinkedHashMap")]),e._v("方法，因此"),a("em",[e._v("LinkedHashSet")]),e._v("的实现非常简单，这里不再赘述。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public class LinkedHashSet<E>\n    extends HashSet<E>\n    implements Set<E>, Cloneable, java.io.Serializable {\n    ......\n    // LinkedHashSet里面有一个LinkedHashMap\n    public LinkedHashSet(int initialCapacity, float loadFactor) {\n        map = new LinkedHashMap<>(initialCapacity, loadFactor);\n    }\n\t......\n    public boolean add(E e) {//简单的方法转换\n        return map.put(e, PRESENT)==null;\n    }\n    ......\n} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("h3",{attrs:{id:"linkedhashmap经典用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap经典用法"}},[e._v("#")]),e._v(" LinkedHashMap经典用法")]),e._v(" "),a("p",[a("em",[e._v("LinkedHashMap")]),e._v("除了可以保证迭代顺序外，还有一个非常有用的用法: 可以轻松实现一个采用了FIFO替换策略的缓存。具体说来，LinkedHashMap有一个子类方法"),a("code",[e._v("protected boolean removeEldestEntry(Map.Entry<K,V> eldest)")]),e._v("，该方法的作用是告诉Map是否要删除“最老”的Entry，所谓最老就是当前Map中最早插入的Entry，如果该方法返回"),a("code",[e._v("true")]),e._v("，最老的那个元素就会被删除。在每次插入新元素的之后LinkedHashMap会自动询问removeEldestEntry()是否要删除最老的元素。这样只需要在子类中重载该方法，当元素个数超过一定数量时让removeEldestEntry()返回true，就能够实现一个固定大小的FIFO策略的缓存。示例代码如下:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/** 一个固定大小的FIFO替换策略的缓存 */\nclass FIFOCache<K, V> extends LinkedHashMap<K, V>{\n    private final int cacheSize;\n    public FIFOCache(int cacheSize){\n        this.cacheSize = cacheSize;\n    }\n\n    // 当Entry个数超过cacheSize时，删除最老的Entry\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {\n       return size() > cacheSize;\n    }\n} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports},419:function(e,a,s){e.exports=s.p+"assets/img/collection_LinkedHashMap_base.5bdff9de.png"},420:function(e,a,s){e.exports=s.p+"assets/img/collection_LinkedHashMap_addEntry.156707c5.png"},421:function(e,a,s){e.exports=s.p+"assets/img/collection_LinkedHashMap_removeEntryForKey.cddd33bc.png"}}]);