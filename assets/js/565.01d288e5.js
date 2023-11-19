(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{3757:function(n,s,e){"use strict";e.r(s);var t=e(7),a=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"线性表-散列-哈希表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性表-散列-哈希表"}},[n._v("#")]),n._v(" 线性表(散列) - 哈希表")]),n._v(" "),s("p",[n._v("==============================")]),n._v(" "),s("blockquote",[s("p",[n._v("散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。@pdai")])]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://pdai.tech/md/algorithm/alg-basic-hashtable.html#%E5%93%88%E5%B8%8C%E8%A1%A8%E7%9B%B8%E5%85%B3%E9%A2%98%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"}},[n._v("哈希表相关题目"),s("OutboundLink")],1)])]),n._v(" "),s("h1",{attrs:{id:"哈希表相关题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希表相关题目"}},[n._v("#")]),n._v(" 哈希表相关题目")]),n._v(" "),s("hr"),n._v(" "),s("p",[n._v("哈希表使用 O(N) 空间复杂度存储数据，并且以 O(1) 时间复杂度求解问题。")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("Java 中的 "),s("strong",[n._v("HashSet")]),n._v(" 用于存储一个集合，可以查找元素是否在集合中。如果元素有穷，并且范围不大，那么可以用一个布尔数组来存储一个元素是否存在。例如对于只有小写字符的元素，就可以用一个长度为 26 的布尔数组来存储一个字符集合，使得空间复杂度降低为 O(1)。")])]),n._v(" "),s("li",[s("p",[n._v("Java 中的 "),s("strong",[n._v("HashMap")]),n._v(" 主要用于映射关系，从而把两个元素联系起来。HashMap 也可以用来对元素进行计数统计，此时键为元素，值为计数。和 HashSet 类似，如果元素有穷并且范围不大，可以用整型数组来进行统计。在对一个内容进行压缩或者其它转换时，利用 HashMap 可以把原始内容和转换后的内容联系起来。例如在一个简化 url 的系统中 "),s("a",{attrs:{href:"https://leetcode.com/problems/encode-and-decode-tinyurl/description/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Leetcdoe : 535. Encode and Decode TinyURL (Medium) 在新窗口打开"),s("OutboundLink")],1),n._v("，利用 HashMap 就可以存储精简后的 url 到原始 url 的映射，使得不仅可以显示简化的 url，也可以根据简化的 url 得到原始 url 从而定位到正确的资源。")])])]),n._v(" "),s("p",[s("strong",[n._v("数组中两个数的和为给定值")])]),n._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.com/problems/two-sum/description/",target:"_blank",rel:"noopener noreferrer"}},[n._v("1. Two Sum (Easy) 在新窗口打开"),s("OutboundLink")],1)]),n._v(" "),s("p",[n._v("可以先对数组进行排序，然后使用双指针方法或者二分查找方法。这样做的时间复杂度为 O(NlogN)，空间复杂度为 O(1)。")]),n._v(" "),s("p",[n._v("用 HashMap 存储数组元素和索引的映射，在访问到 nums[i] 时，判断 HashMap 中是否存在 target - nums[i]，如果存在说明 target - nums[i] 所在的索引和 i 就是要找的两个数。该方法的时间复杂度为 O(N)，空间复杂度为 O(N)，使用空间来换取时间。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public int[] twoSum(int[] nums, int target) {\n    HashMap<Integer, Integer> indexForNum = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        if (indexForNum.containsKey(target - nums[i])) {\n            return new int[]{indexForNum.get(target - nums[i]), i};\n        } else {\n            indexForNum.put(nums[i], i);\n        }\n    }\n    return null;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[s("strong",[n._v("判断数组是否含有重复元素")])]),n._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.com/problems/contains-duplicate/description/",target:"_blank",rel:"noopener noreferrer"}},[n._v("217. Contains Duplicate (Easy) 在新窗口打开"),s("OutboundLink")],1)]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public boolean containsDuplicate(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) {\n        set.add(num);\n    }\n    return set.size() < nums.length;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[s("strong",[n._v("最长和谐序列")])]),n._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.com/problems/longest-harmonious-subsequence/description/",target:"_blank",rel:"noopener noreferrer"}},[n._v("594. Longest Harmonious Subsequence (Easy) 在新窗口打开"),s("OutboundLink")],1)]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Input: [1,3,2,2,5,2,3,7]\nOutput: 5\nExplanation: The longest harmonious subsequence is [3,2,2,2,3].\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("和谐序列中最大数和最小数只差正好为 1，应该注意的是序列的元素不一定是数组的连续元素。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public int findLHS(int[] nums) {\n    Map<Integer, Integer> countForNum = new HashMap<>();\n    for (int num : nums) {\n        countForNum.put(num, countForNum.getOrDefault(num, 0) + 1);\n    }\n    int longest = 0;\n    for (int num : countForNum.keySet()) {\n        if (countForNum.containsKey(num + 1)) {\n            longest = Math.max(longest, countForNum.get(num + 1) + countForNum.get(num));\n        }\n    }\n    return longest;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("p",[s("strong",[n._v("最长连续序列")])]),n._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.com/problems/longest-consecutive-sequence/description/",target:"_blank",rel:"noopener noreferrer"}},[n._v("128. Longest Consecutive Sequence (Hard) 在新窗口打开"),s("OutboundLink")],1)]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Given [100, 4, 200, 1, 3, 2],\nThe longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("要求以 O(N) 的时间复杂度求解。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public int longestConsecutive(int[] nums) {\n    Map<Integer, Integer> countForNum = new HashMap<>();\n    for (int num : nums) {\n        countForNum.put(num, 1);\n    }\n    for (int num : nums) {\n        forward(countForNum, num);\n    }\n    return maxCount(countForNum);\n}\n\nprivate int forward(Map<Integer, Integer> countForNum, int num) {\n    if (!countForNum.containsKey(num)) {\n        return 0;\n    }\n    int cnt = countForNum.get(num);\n    if (cnt > 1) {\n        return cnt;\n    }\n    cnt = forward(countForNum, num + 1) + 1;\n    countForNum.put(num, cnt);\n    return cnt;\n}\n\nprivate int maxCount(Map<Integer, Integer> countForNum) {\n    int max = 0;\n    for (int num : countForNum.keySet()) {\n        max = Math.max(max, countForNum.get(num));\n    }\n    return max;\n}\n```)")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);