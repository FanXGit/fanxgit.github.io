(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1613:function(n,s,a){n.exports=a.p+"assets/img/arch-z-id-3.f229cc88.png"},3811:function(n,s,a){"use strict";a.r(s);var e=a(7),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"分布式算法-snowflake算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式算法-snowflake算法"}},[n._v("#")]),n._v(" 分布式算法 - Snowflake算法")]),n._v(" "),s("p",[n._v("===========================================")]),n._v(" "),s("blockquote",[s("p",[n._v("Snowflake，雪花算法是由Twitter开源的分布式ID生成算法，以划分命名空间的方式将 64-bit位分割成多个部分，每个部分代表不同的含义。这种就是将64位划分为不同的段，每段代表不同的涵义，基本就是时间戳、机器ID和序列数。为什么如此重要？因为它提供了一种ID生成及生成的思路，当然这种方案就是需要考虑时钟回拨的问题以及做一些 buffer的缓冲设计提高性能。@pdai")])]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pdai.tech/md/algorithm/alg-domain-id-snowflake.html#%E9%9B%AA%E8%8A%B1%E7%AE%97%E6%B3%95-snowflake",target:"_blank",rel:"noopener noreferrer"}},[n._v("雪花算法-Snowflake"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/algorithm/alg-domain-id-snowflake.html#%E5%85%B6%E5%AE%83%E7%9B%B8%E5%85%B3%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[n._v("其它相关算法"),s("OutboundLink")],1)])]),n._v(" "),s("h1",{attrs:{id:"雪花算法-snowflake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪花算法-snowflake"}},[n._v("#")]),n._v(" 雪花算法-Snowflake")]),n._v(" "),s("hr"),n._v(" "),s("p",[n._v("Snowflake，雪花算法是由Twitter开源的分布式ID生成算法，以划分命名空间的方式将 64-bit位分割成多个部分，每个部分代表不同的含义。而 Java中64bit的整数是Long类型，所以在 Java 中 SnowFlake 算法生成的 ID 就是 long 来存储的。")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("第1位")]),n._v("占用1bit，其值始终是0，可看做是符号位不使用。")]),n._v(" "),s("li",[s("strong",[n._v("第2位")]),n._v("开始的41位是时间戳，41-bit位可表示2^41个数，每个数代表毫秒，那么雪花算法可用的时间年限是"),s("code",[n._v("(1L<<41)/(1000L360024*365)")]),n._v("=69 年的时间。")]),n._v(" "),s("li",[s("strong",[n._v("中间的10-bit位")]),n._v("可表示机器数，即2^10 = 1024台机器，但是一般情况下我们不会部署这么台机器。如果我们对IDC（互联网数据中心）有需求，还可以将 10-bit 分 5-bit 给 IDC，分5-bit给工作机器。这样就可以表示32个IDC，每个IDC下可以有32台机器，具体的划分可以根据自身需求定义。")]),n._v(" "),s("li",[s("strong",[n._v("最后12-bit位")]),n._v("是自增序列，可表示2^12 = 4096个数。")])]),n._v(" "),s("p",[n._v("这样的划分之后相当于"),s("strong",[n._v("在一毫秒一个数据中心的一台机器上可产生4096个有序的不重复的ID")]),n._v("。但是我们 IDC 和机器数肯定不止一个，所以毫秒内能生成的有序ID数是翻倍的。")]),n._v(" "),s("p",[s("img",{attrs:{src:a(1613),alt:""}})]),n._v(" "),s("p",[n._v("Snowflake 的Twitter官方原版是用Scala写的，对Scala语言有研究的同学可以去阅读下，以下是 Java 版本的写法。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('package com.jajian.demo.distribute;\n\n/**\n * Twitter_Snowflake<br>\n * SnowFlake的结构如下(每部分用-分开):<br>\n * 0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000 <br>\n * 1位标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0<br>\n * 41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截)\n * 得到的值），这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。41位的时间截，可以使用69年，年T = (1L << 41) / (1000L * 60 * 60 * 24 * 365) = 69<br>\n * 10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId<br>\n * 12位序列，毫秒内的计数，12位的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号<br>\n * 加起来刚好64位，为一个Long型。<br>\n * SnowFlake的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞(由数据中心ID和机器ID作区分)，并且效率较高，经测试，SnowFlake每秒能够产生26万ID左右。\n */\npublic class SnowflakeDistributeId {\n\n\n    // ==============================Fields===========================================\n    /**\n     * 开始时间截 (2015-01-01)\n     */\n    private final long twepoch = 1420041600000L;\n\n    /**\n     * 机器id所占的位数\n     */\n    private final long workerIdBits = 5L;\n\n    /**\n     * 数据标识id所占的位数\n     */\n    private final long datacenterIdBits = 5L;\n\n    /**\n     * 支持的最大机器id，结果是31 (这个移位算法可以很快的计算出几位二进制数所能表示的最大十进制数)\n     */\n    private final long maxWorkerId = -1L ^ (-1L << workerIdBits);\n\n    /**\n     * 支持的最大数据标识id，结果是31\n     */\n    private final long maxDatacenterId = -1L ^ (-1L << datacenterIdBits);\n\n    /**\n     * 序列在id中占的位数\n     */\n    private final long sequenceBits = 12L;\n\n    /**\n     * 机器ID向左移12位\n     */\n    private final long workerIdShift = sequenceBits;\n\n    /**\n     * 数据标识id向左移17位(12+5)\n     */\n    private final long datacenterIdShift = sequenceBits + workerIdBits;\n\n    /**\n     * 时间截向左移22位(5+5+12)\n     */\n    private final long timestampLeftShift = sequenceBits + workerIdBits + datacenterIdBits;\n\n    /**\n     * 生成序列的掩码，这里为4095 (0b111111111111=0xfff=4095)\n     */\n    private final long sequenceMask = -1L ^ (-1L << sequenceBits);\n\n    /**\n     * 工作机器ID(0~31)\n     */\n    private long workerId;\n\n    /**\n     * 数据中心ID(0~31)\n     */\n    private long datacenterId;\n\n    /**\n     * 毫秒内序列(0~4095)\n     */\n    private long sequence = 0L;\n\n    /**\n     * 上次生成ID的时间截\n     */\n    private long lastTimestamp = -1L;\n\n    //==============================Constructors=====================================\n\n    /**\n     * 构造函数\n     *\n     * @param workerId     工作ID (0~31)\n     * @param datacenterId 数据中心ID (0~31)\n     */\n    public SnowflakeDistributeId(long workerId, long datacenterId) {\n        if (workerId > maxWorkerId || workerId < 0) {\n            throw new IllegalArgumentException(String.format("worker Id can\'t be greater than %d or less than 0", maxWorkerId));\n        }\n        if (datacenterId > maxDatacenterId || datacenterId < 0) {\n            throw new IllegalArgumentException(String.format("datacenter Id can\'t be greater than %d or less than 0", maxDatacenterId));\n        }\n        this.workerId = workerId;\n        this.datacenterId = datacenterId;\n    }\n\n    // ==============================Methods==========================================\n\n    /**\n     * 获得下一个ID (该方法是线程安全的)\n     *\n     * @return SnowflakeId\n     */\n    public synchronized long nextId() {\n        long timestamp = timeGen();\n\n        //如果当前时间小于上一次ID生成的时间戳，说明系统时钟回退过这个时候应当抛出异常\n        if (timestamp < lastTimestamp) {\n            throw new RuntimeException(\n                    String.format("Clock moved backwards.  Refusing to generate id for %d milliseconds", lastTimestamp - timestamp));\n        }\n\n        //如果是同一时间生成的，则进行毫秒内序列\n        if (lastTimestamp == timestamp) {\n            sequence = (sequence + 1) & sequenceMask;\n            //毫秒内序列溢出\n            if (sequence == 0) {\n                //阻塞到下一个毫秒,获得新的时间戳\n                timestamp = tilNextMillis(lastTimestamp);\n            }\n        }\n        //时间戳改变，毫秒内序列重置\n        else {\n            sequence = 0L;\n        }\n\n        //上次生成ID的时间截\n        lastTimestamp = timestamp;\n\n        //移位并通过或运算拼到一起组成64位的ID\n        return ((timestamp - twepoch) << timestampLeftShift) //\n                | (datacenterId << datacenterIdShift) //\n                | (workerId << workerIdShift) //\n                | sequence;\n    }\n\n    /**\n     * 阻塞到下一个毫秒，直到获得新的时间戳\n     *\n     * @param lastTimestamp 上次生成ID的时间截\n     * @return 当前时间戳\n     */\n    protected long tilNextMillis(long lastTimestamp) {\n        long timestamp = timeGen();\n        while (timestamp <= lastTimestamp) {\n            timestamp = timeGen();\n        }\n        return timestamp;\n    }\n\n    /**\n     * 返回以毫秒为单位的当前时间\n     *\n     * @return 当前时间(毫秒)\n     */\n    protected long timeGen() {\n        return System.currentTimeMillis();\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br"),s("span",{staticClass:"line-number"},[n._v("92")]),s("br"),s("span",{staticClass:"line-number"},[n._v("93")]),s("br"),s("span",{staticClass:"line-number"},[n._v("94")]),s("br"),s("span",{staticClass:"line-number"},[n._v("95")]),s("br"),s("span",{staticClass:"line-number"},[n._v("96")]),s("br"),s("span",{staticClass:"line-number"},[n._v("97")]),s("br"),s("span",{staticClass:"line-number"},[n._v("98")]),s("br"),s("span",{staticClass:"line-number"},[n._v("99")]),s("br"),s("span",{staticClass:"line-number"},[n._v("100")]),s("br"),s("span",{staticClass:"line-number"},[n._v("101")]),s("br"),s("span",{staticClass:"line-number"},[n._v("102")]),s("br"),s("span",{staticClass:"line-number"},[n._v("103")]),s("br"),s("span",{staticClass:"line-number"},[n._v("104")]),s("br"),s("span",{staticClass:"line-number"},[n._v("105")]),s("br"),s("span",{staticClass:"line-number"},[n._v("106")]),s("br"),s("span",{staticClass:"line-number"},[n._v("107")]),s("br"),s("span",{staticClass:"line-number"},[n._v("108")]),s("br"),s("span",{staticClass:"line-number"},[n._v("109")]),s("br"),s("span",{staticClass:"line-number"},[n._v("110")]),s("br"),s("span",{staticClass:"line-number"},[n._v("111")]),s("br"),s("span",{staticClass:"line-number"},[n._v("112")]),s("br"),s("span",{staticClass:"line-number"},[n._v("113")]),s("br"),s("span",{staticClass:"line-number"},[n._v("114")]),s("br"),s("span",{staticClass:"line-number"},[n._v("115")]),s("br"),s("span",{staticClass:"line-number"},[n._v("116")]),s("br"),s("span",{staticClass:"line-number"},[n._v("117")]),s("br"),s("span",{staticClass:"line-number"},[n._v("118")]),s("br"),s("span",{staticClass:"line-number"},[n._v("119")]),s("br"),s("span",{staticClass:"line-number"},[n._v("120")]),s("br"),s("span",{staticClass:"line-number"},[n._v("121")]),s("br"),s("span",{staticClass:"line-number"},[n._v("122")]),s("br"),s("span",{staticClass:"line-number"},[n._v("123")]),s("br"),s("span",{staticClass:"line-number"},[n._v("124")]),s("br"),s("span",{staticClass:"line-number"},[n._v("125")]),s("br"),s("span",{staticClass:"line-number"},[n._v("126")]),s("br"),s("span",{staticClass:"line-number"},[n._v("127")]),s("br"),s("span",{staticClass:"line-number"},[n._v("128")]),s("br"),s("span",{staticClass:"line-number"},[n._v("129")]),s("br"),s("span",{staticClass:"line-number"},[n._v("130")]),s("br"),s("span",{staticClass:"line-number"},[n._v("131")]),s("br"),s("span",{staticClass:"line-number"},[n._v("132")]),s("br"),s("span",{staticClass:"line-number"},[n._v("133")]),s("br"),s("span",{staticClass:"line-number"},[n._v("134")]),s("br"),s("span",{staticClass:"line-number"},[n._v("135")]),s("br"),s("span",{staticClass:"line-number"},[n._v("136")]),s("br"),s("span",{staticClass:"line-number"},[n._v("137")]),s("br"),s("span",{staticClass:"line-number"},[n._v("138")]),s("br"),s("span",{staticClass:"line-number"},[n._v("139")]),s("br"),s("span",{staticClass:"line-number"},[n._v("140")]),s("br"),s("span",{staticClass:"line-number"},[n._v("141")]),s("br"),s("span",{staticClass:"line-number"},[n._v("142")]),s("br"),s("span",{staticClass:"line-number"},[n._v("143")]),s("br"),s("span",{staticClass:"line-number"},[n._v("144")]),s("br"),s("span",{staticClass:"line-number"},[n._v("145")]),s("br"),s("span",{staticClass:"line-number"},[n._v("146")]),s("br"),s("span",{staticClass:"line-number"},[n._v("147")]),s("br"),s("span",{staticClass:"line-number"},[n._v("148")]),s("br"),s("span",{staticClass:"line-number"},[n._v("149")]),s("br"),s("span",{staticClass:"line-number"},[n._v("150")]),s("br"),s("span",{staticClass:"line-number"},[n._v("151")]),s("br"),s("span",{staticClass:"line-number"},[n._v("152")]),s("br"),s("span",{staticClass:"line-number"},[n._v("153")]),s("br"),s("span",{staticClass:"line-number"},[n._v("154")]),s("br"),s("span",{staticClass:"line-number"},[n._v("155")]),s("br"),s("span",{staticClass:"line-number"},[n._v("156")]),s("br"),s("span",{staticClass:"line-number"},[n._v("157")]),s("br"),s("span",{staticClass:"line-number"},[n._v("158")]),s("br"),s("span",{staticClass:"line-number"},[n._v("159")]),s("br"),s("span",{staticClass:"line-number"},[n._v("160")]),s("br"),s("span",{staticClass:"line-number"},[n._v("161")]),s("br"),s("span",{staticClass:"line-number"},[n._v("162")]),s("br"),s("span",{staticClass:"line-number"},[n._v("163")]),s("br"),s("span",{staticClass:"line-number"},[n._v("164")]),s("br"),s("span",{staticClass:"line-number"},[n._v("165")]),s("br"),s("span",{staticClass:"line-number"},[n._v("166")]),s("br"),s("span",{staticClass:"line-number"},[n._v("167")]),s("br"),s("span",{staticClass:"line-number"},[n._v("168")]),s("br"),s("span",{staticClass:"line-number"},[n._v("169")]),s("br"),s("span",{staticClass:"line-number"},[n._v("170")]),s("br")])]),s("p",[n._v("测试的代码如下")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public static void main(String[] args) {\n    SnowflakeDistributeId idWorker = new SnowflakeDistributeId(0, 0);\n    for (int i = 0; i < 1000; i++) {\n        long id = idWorker.nextId();\n//      System.out.println(Long.toBinaryString(id));\n        System.out.println(id);\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("p",[s("strong",[n._v("雪花算法提供了一个很好的设计思想，雪花算法生成的ID是趋势递增，不依赖数据库等第三方系统，以服务的方式部署，稳定性更高，生成ID的性能也是非常高的，而且可以根据自身业务特性分配bit位，非常灵活")]),n._v("。")]),n._v(" "),s("p",[n._v("但是雪花算法强"),s("strong",[n._v("依赖机器时钟")]),n._v("，如果机器上时钟回拨，会导致发号重复或者服务会处于不可用状态。如果恰巧回退前生成过一些ID，而时间回退后，生成的ID就有可能重复。官方对于此并没有给出解决方案，而是简单的抛错处理，这样会造成在时间被追回之前的这段时间服务不可用。")]),n._v(" "),s("p",[n._v("很多其他类雪花算法也是在此思想上的设计然后改进规避它的缺陷，后面介绍的"),s("code",[n._v("百度 UidGenerator")]),n._v(" 和 "),s("code",[n._v("美团分布式ID生成系统 Leaf")]),n._v(" 中snowflake模式都是在 snowflake 的基础上演进出来的。")]),n._v(" "),s("h1",{attrs:{id:"其它相关算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它相关算法"}},[n._v("#")]),n._v(" 其它相关算法")]),n._v(" "),s("hr"),n._v(" "),s("p",[n._v("在如下文章中已经包含了所有主流的全局唯一ID实现方案：")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F---%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80id%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[n._v("分布式系统 - 全局唯一ID实现方案"),s("OutboundLink")],1)])]),n._v(" "),s("p",[n._v("这里给出相关的链接：")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80id",target:"_blank",rel:"noopener noreferrer"}},[n._v("为什么需要全局唯一ID"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#uuid",target:"_blank",rel:"noopener noreferrer"}},[n._v("UUID"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E6%95%B0%E6%8D%AE%E5%BA%93%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"}},[n._v("数据库生成"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E4%BD%BF%E7%94%A8redis%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[n._v("使用redis实现"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E9%9B%AA%E8%8A%B1%E7%AE%97%E6%B3%95-snowflake",target:"_blank",rel:"noopener noreferrer"}},[n._v("雪花算法-Snowflake"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E7%99%BE%E5%BA%A6-uidgenerator",target:"_blank",rel:"noopener noreferrer"}},[n._v("百度-UidGenerator"),s("OutboundLink")],1),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#defaultuidgenerator-%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[n._v("DefaultUidGenerator 实现"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#cacheduidgenerator-%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[n._v("CachedUidGenerator 实现"),s("OutboundLink")],1)])])]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#%E7%BE%8E%E5%9B%A2leaf",target:"_blank",rel:"noopener noreferrer"}},[n._v("美团Leaf"),s("OutboundLink")],1),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#leaf-segment-%E6%95%B0%E6%8D%AE%E5%BA%93%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[n._v("Leaf-segment 数据库方案"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#leaf-snowflake%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[n._v("Leaf-snowflake方案"),s("OutboundLink")],1)])])]),n._v(" "),s("li",[s("a",{attrs:{href:"https://pdai.tech/md/arch/arch-z-id.html#mist-%E8%96%84%E9%9B%BE%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[n._v("Mist 薄雾算法"),s("OutboundLink")],1),n._v(")")])])])}),[],!1,null,null,null);s.default=t.exports}}]);