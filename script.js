// 在 concerts 数组定义之前添加完整的 tourDates 对象
const tourDates = {
    1: [
        { city: "三亚（已官宣）", venue: "三亚市体育中心白鹭体育场", date: "2025.03.28-03.30" },
        { city: "南宁（已官宣）", venue: "广西体育中心体育场", date: "2025.04.25-04.27" },
        { city: "香港（已官宣）", venue: "启德主场馆", date: "2025.06.27-06.29" }
    ],
    2: [
        { city: "重庆（已官宣）", venue: "华熙LIVE·鱼洞·场馆", date: "2025.03.28-04.06" },
        { city: "深圳（洽谈中）", venue: "宝能广州国际体育演艺中心", date: "时间待定" },
        { city: "成都（未开售）", venue: "东郊记忆", date: "时间待定" }
    ],
    3: [
        { city: "悉尼（已官宣）", venue: "Sydney Accor Stadium", date: "2025.02.22 周六 19:30" },
        { city: "天津（未官宣）", venue: "待定", date: "2025.04.18-20" },
        { city: "南京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "郑州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "厦门（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    4: [
        { city: "杭州（已官宣）", venue: "杭州奥体中心体育馆", date: "2025.02.07-02.09" },
        { city: "南京（预售）", venue: "南京奥体中心体育馆", date: "2025.03.15-03.17" },
        { city: "成都（预售）", venue: "东郊记忆", date: "2025.04.12-04.14" }
    ],
    5: [
        { city: "巴黎（已官宣）", venue: "巴黎拉德芳斯体育馆", date: "2025.03.22 周六 20:00" },
        { city: "伦敦（已官宣）", venue: "The O2 / O2体育馆", date: "2025.03.11 周二 20:00" },
        { city: "墨尔本（已官宣）", venue: "Rod Laver Arena", date: "2025.04.11 周五 20:00" },
        { city: "悉尼（已官宣）", venue: "Qudos Bank Arena", date: "2025.04.05 周六 20:00" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.06.28-06.29" },
        { city: "南宁（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "上海（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "武汉（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "广州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "南京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "福州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "西安（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    6: [
        { city: "南京（已官宣）", venue: "南京奥体中心体育场", date: "2025.03.29 周六 19:00" },
        { city: "石家庄（已官宣）", venue: "河北奥林匹克体育中心体育场", date: "2025.04.12 周六 19:30" },
        { city: "西安（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "沈阳（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "常州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "武汉（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "郑州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "合肥（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "上海（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    7: [
        { city: "新加坡（已官宣）", venue: "新加坡国家体育场 National Stadium, Singapore", date: "2025.03.01 周六 19:30" }
    ],
    8: [
        { city: "福州（已官宣）", venue: "福州海峡奥林匹克体育中心体育场", date: "2025.03.08 周六 19:30" }
    ],
    9: [
        { city: "广州（已结束）", venue: "宝能广州国际体育演艺中心", date: "2024.12.30-2025.01.01" },
        { city: "北京（已官宣）", venue: "待定", date: "2025.03.21-23" },
        { city: "长沙（未官宣）", venue: "待定", date: "2025.04.12-13" },
        { city: "合肥（未官宣）", venue: "待定", date: "2025.04.26-27" },
        { city: "南昌（未官宣）", venue: "待定", date: "2025.05.17-18" },
        { city: "西安（未官宣）", venue: "待定", date: "2025.05.24-25" },
        { city: "济南（未官宣）", venue: "待定", date: "2025.06.21-22" },
        { city: "太原（未官宣）", venue: "待定", date: "2025.07.05-06" },
        { city: "武汉（未官宣）", venue: "待定", date: "2025.07.25-26" }
    ],
    10: [
        { city: "福州（已官宣）", venue: "福州海峡奥林匹克体育中心体育场", date: "2025.02.22-02.23" }
    ],
    11: [
        { city: "香港（已官宣）", venue: "亚洲国际博览馆 Arena", date: "2025.02.07-02.09" },
        { city: "澳门（已官宣）", venue: "银河综艺馆", date: "2025.03.07-03.09" },
        { city: "天津（未官宣）", venue: "待定", date: "2025.03.30-03.31" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.04.18-04.20" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.04.25-04.27" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.05.02-05.04" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.05.09-05.11" },
        { city: "长沙（未官宣）", venue: "待定", date: "2025.05.11-05.12" },
        { city: "深圳（未官宣）", venue: "待定", date: "2025.06.29-06.30" },
        { city: "西安（未官宣）", venue: "待定", date: "2025.07.27-07.28" },
        { city: "大连（未官宣）", venue: "待定", date: "时间待定" },
        { city: "南京（未官宣）", venue: "待定", date: "时间待定" }
    ],
    12: [
        { city: "新加坡（已官宣）", venue: "星宇表演艺术中心 The Star Performing Arts Centre", date: "2025.02.21 周五 20:00" },
        { city: "吉隆坡（已官宣）", venue: "马来西亚云顶世界 云星剧场", date: "2025.02.14 周五 21:00" },
        { city: "深圳（已官宣）", venue: "深圳湾体育中心\"春茧\"体育馆", date: "2025.03.29 周六 19:00" }
    ],
    13: [
        { city: "王心凌", venue: "SUGAR HIGH 2.0 世界巡回演唱会", city: "合肥（已官宣）", date: "2025.04.19-04.20", price: "480-1680", image: "https://example.com/wxl.jpg" }
    ],
    14: [
        { city: "孙燕姿", venue: "《就在日落以后》巡回演唱会", city: "上海（已官宣）", date: "2025.04.26/04.28", price: "480-1680", image: "https://example.com/syz.jpg" }
    ],
    15: [
        { city: "毛不易", venue: "「冒险精神」巡回演唱会", city: "苏州（已官宣）", date: "2025.02.15 周六 19:00", price: "480-1580", image: "https://example.com/mby.jpg" }
    ],
    16: [
        { city: "周兴哲（Eric）", venue: "Odyssey旅程巡回演唱会", city: "厦门（已官宣）", date: "2025.03.29 周六 19:00", price: "480-1180", image: "https://example.com/eric.jpg" }
    ],
    17: [
        { city: "张惠妹", venue: "ASMR MAXXX巡回演唱会", city: "成都（已官宣）", date: "2025.03.22 周六 19:00", price: "380-1380", image: "https://example.com/amei.jpg" }
    ],
    18: [
        { city: "许嵩", venue: "2025「呼吸之野」巡回演唱会", city: "长沙（已官宣）", date: "2025.04.12 周六", price: "318-1618", image: "https://example.com/xs.jpg" }
    ],
    19: [
        { city: "刀郎", venue: "山歌响起的地方·刀郎2025巡回演唱会", city: "上海（已官宣）", date: "2025.03.01-03.02", price: "480-1280", image: "https://example.com/dl.jpg" }
    ],
    20: [
        { city: "王力宏", venue: "「最好的地方」巡回演唱会", city: "南昌（已官宣）", date: "2025.03.15-03.16", price: "480-1680", image: "https://example.com/wlh.jpg" }
    ],
    21: [
        { city: "陶喆", venue: "2025 Soul Power II 世界巡回演唱会", city: "福州（已官宣）", date: "时间待定", price: "380-1380", image: "https://example.com/dt.jpg" }
    ],
    22: [
        { city: "凤凰传奇", venue: "「吉祥如意」2025巡回演唱会", city: "台州（已官宣）", date: "2025.04.11-04.13", price: "380-1380", image: "https://example.com/fhcq.jpg" }
    ],
    23: [
        { city: "张韶涵", venue: "2025张韶涵世界巡回演唱会", city: "广州（已官宣）", date: "2025.04.26 周六 19:00", price: "388-1288", image: "https://example.com/zsh.jpg" }
    ],
    24: [
        { city: "时代少年团", venue: "一起走过的日子 2025巡回演唱会", city: "北京（洽谈中）", date: "时间待定", price: "待定", image: "https://example.com/tnt.jpg" }
    ],
    25: [
        { city: "周传雄", venue: "2025「念念不忘·再遇见」巡回演唱会", city: "太原（已官宣）", date: "2025.04.12 周六 19:30", price: "380-1080", image: "https://example.com/zcx.jpg" }
    ],
    26: [
        { city: "陈楚生", venue: "\"荒芜之境\"2025巡回演唱会", city: "重庆（已官宣）", date: "2025.03.01 周六 19:00", price: "380-1580", image: "https://example.com/ccs.jpg" }
    ],
    27: [
        { city: "王源", venue: "2025王源演唱会", city: "天津（未官宣）", date: "时间待定", price: "待定", image: "https://example.com/wy.jpg" }
    ],
    28: [
        { city: "鹿晗", venue: "2025鹿晗演唱会", city: "北京（未官宣）", date: "时间待定", price: "待定", image: "https://example.com/lh.jpg" }
    ],
    29: [
        { city: "黄子弘凡", venue: "「除了快乐禁止入内」2025巡回演唱会", city: "澳门（已售罄）", date: "2025.02.22-23", price: "480-1280", image: "https://example.com/hzhf.jpg" }
    ],
    30: [
        { city: "沙一汀EL", venue: "「VERSE II」2025巡回演唱会", city: "上海（已官宣）", date: "2025.02.14 周五", price: "298-468", image: "https://example.com/syt.jpg" }
    ],
    31: [
        { city: "薛之谦", venue: "\"天外来物\"海外体育场·返场演唱会", city: "新加坡（已官宣）", date: "2025.02.14-15", price: "617-2037", image: "https://example.com/xzq.jpg" }
    ],
    32: [
        { city: "谢霆锋", venue: "Evolution Nic Live 2025演唱会", city: "香港（已官宣）", date: "2025.04.25-26", price: "HK$680-1380", image: "https://example.com/xtf.jpg" }
    ],
    33: [
        { city: "周深", venue: "2025世界巡回演唱会", city: "伦敦（已官宣）", date: "2025.02.14", price: "待定", image: "https://example.com/zs.jpg" }
    ],
    34: [
        { city: "莫文蔚", venue: "「大秀一场」2025演唱会", city: "苏州（已官宣）", date: "2025.03.15 周六 19:00", price: "399-1399", image: "https://example.com/mww.jpg" }
    ],
    35: [
        { city: "黄绮珊", venue: "「晚霞·不晚」2025巡回演唱会", city: "成都（已官宣）", date: "2025.03.22 周六 19:30", price: "180-1686", image: "https://example.com/hqs.jpg" }
    ],
    36: [
        { city: "「龙娱·闪耀星空 音乐盛典第二季」温州（已官宣）", venue: "温州奥体中心主体育场", date: "时间延期待定", note: "「龙娱·闪耀星空 音乐盛典第二季」" }
    ],
    37: [
        { city: "「龙娱·闪耀星空 音乐盛典第二季」温州（已官宣）", venue: "温州奥体中心主体育场", date: "时间延期待定", note: "「龙娱·闪耀星空 音乐盛典第二季」" }
    ],
    38: [
        { city: "「乐动莱音 群星演唱会」青岛（已官宣）", venue: "莱西市体育中心体育场", date: "时间延期待定", note: "「乐动莱音 群星演唱会」" }
    ],
    39: [
        { city: "广州（已官宣）", venue: "广州亚运城综合体育馆", date: "2025.04.19 周六" }
    ]
};

// 模拟演唱会数据
const concerts = [
    {
        id: 1,
        artist: "周杰伦",
        title: "嘉年华世界巡回演唱会",
        city: "三亚（已官宣）",
        venue: "三亚市体育中心白鹭体育场",
        date: "2025.03.28-03.30",
        price: "600-2000",
        image: "https://example.com/jay.jpg"
    },
    {
        id: 2,
        artist: "陈奕迅",
        title: "FEAR AND DREAMS 巡回演唱会",
        city: "重庆（已官宣）",
        venue: "华熙LIVE·鱼洞·场馆",
        date: "2025.03.28-04.06",
        price: "599-1999",
        image: "https://example.com/eason.jpg"
    },
    {
        id: 3,
        artist: "五月天",
        title: "[ 回到那一天 ]25周年巡回演唱会",
        city: "悉尼（已官宣）",
        venue: "Sydney Accor Stadium",
        date: "2025.02.22 周六 19:30",
        price: "610-2998",
        image: "https://example.com/mayday.jpg"
    },
    {
        id: 4,
        artist: "张学友",
        title: "水井坊·第一坊呈献 张学友60+巡回演唱会",
        city: "杭州（已官宣）",
        venue: "杭州奥体中心体育馆",
        date: "2025.02.07-02.09",
        price: "480-2280",
        image: "https://example.com/jacky.jpg"
    },
    {
        id: 5,
        artist: "林俊杰",
        title: "JJ20 FINAL LAP世界巡回演唱会",
        city: "巴黎（已官宣）",
        venue: "巴黎拉德芳斯体育馆",
        date: "2025.03.22 周六 20:00",
        price: "870-2970",
        image: "https://example.com/jj.jpg"
    },
    {
        id: 6,
        artist: "李荣浩",
        title: "「黑马」世界巡回演唱会",
        city: "南京（已官宣）",
        venue: "南京奥体中心体育场",
        date: "2025.03.29 周六 19:00",
        price: "380-1280",
        image: "https://example.com/lrh.jpg"
    },
    {
        id: 7,
        artist: "邓紫棋",
        title: "G.E.M. 邓紫棋 I AM GLORIA 世界巡回演唱会",
        city: "新加坡（已官宣）",
        venue: "新加坡国家体育场 National Stadium, Singapore",
        date: "2025.03.01 周六 19:30",
        price: "938-1988",
        image: "https://example.com/gem.jpg"
    },
    {
        id: 8,
        artist: "华晨宇",
        title: "2025华晨宇火星演唱会",
        city: "福州（已官宣）",
        venue: "福州海峡奥林匹克体育中心体育场",
        date: "2025.03.08 周六 19:30",
        price: "399-1599",
        image: "https://example.com/hua.jpg"
    },
    {
        id: 9,
        artist: "汪苏泷",
        title: "十万伏特 2025巡回演唱会",
        city: "北京（已官宣）",
        venue: "待定",
        date: "2025.03.21-03.23",
        price: "380-1380",
        image: "https://example.com/wsl.jpg"
    },
    {
        id: 10,
        artist: "十个勤天",
        title: "种下一个未来-十个勤天巡回演唱会",
        city: "福州（已官宣）",
        venue: "福州海峡奥林匹克体育中心体育场",
        date: "2025.02.22-02.23",
        price: "388-1588",
        image: "https://example.com/sgqt.jpg"
    },
    {
        id: 11,
        artist: "张杰",
        title: "2025张杰未·LIVE—「开往1982」演唱会",
        city: "澳门（已官宣）",
        venue: "银河综艺馆",
        date: "2025.03.07-03.09",
        price: "480-1680",
        image: "https://example.com/zj.jpg"
    },
    {
        id: 12,
        artist: "张远",
        title: "2025 张远「白」巡回演唱会",
        city: "新加坡（已官宣）",
        venue: "星宇表演艺术中心 The Star Performing Arts Centre",
        date: "2025.02.21 周五 20:00",
        price: "525-1435",
        image: "https://example.com/zy.jpg"
    },
    {
        id: 13,
        artist: "王心凌",
        title: "SUGAR HIGH 2.0 世界巡回演唱会",
        city: "合肥（已官宣）",
        venue: "合肥少荃体育中心体育馆",
        date: "2025.04.19-04.20",
        price: "480-1680",
        image: "https://example.com/wxl.jpg"
    },
    {
        id: 14,
        artist: "孙燕姿",
        title: "《就在日落以后》巡回演唱会",
        city: "上海（已官宣）",
        venue: "上海体育场",
        date: "2025.04.26/04.28",
        price: "480-1680",
        image: "https://example.com/syz.jpg"
    },
    {
        id: 15,
        artist: "毛不易",
        title: "「冒险精神」巡回演唱会",
        city: "苏州（已官宣）",
        venue: "苏州奥林匹克体育中心体育馆",
        date: "2025.02.15 周六 19:00",
        price: "480-1580",
        image: "https://example.com/mby.jpg"
    },
    {
        id: 16,
        artist: "周兴哲（Eric）",
        title: "Odyssey旅程巡回演唱会",
        city: "厦门（已官宣）",
        venue: "厦门奥林匹克体育中心-凤凰体育馆",
        date: "2025.03.29 周六 19:00",
        price: "480-1180",
        image: "https://example.com/eric.jpg"
    },
    {
        id: 17,
        artist: "张惠妹",
        title: "ASMR MAXXX巡回演唱会",
        city: "成都（已官宣）",
        venue: "成都东安湖体育公园主体育场",
        date: "2025.03.22 周六 19:00",
        price: "380-1380",
        image: "https://example.com/amei.jpg"
    },
    {
        id: 18,
        artist: "许嵩",
        title: "2025「呼吸之野」巡回演唱会",
        city: "长沙（已官宣）",
        venue: "长沙贺龙体育场",
        date: "2025.04.12 周六",
        price: "318-1618",
        image: "https://example.com/xs.jpg"
    },
    {
        id: 19,
        artist: "刀郎",
        title: "山歌响起的地方·刀郎2025巡回演唱会",
        city: "上海（已官宣）",
        venue: "梅赛德斯-奔驰文化中心",
        date: "2025.03.01-03.02",
        price: "480-1280",
        image: "https://example.com/dl.jpg"
    },
    {
        id: 20,
        artist: "王力宏",
        title: "「最好的地方」巡回演唱会",
        city: "南昌（已官宣）",
        venue: "南昌国际体育中心体育馆",
        date: "2025.03.15-03.16",
        price: "480-1680",
        image: "https://example.com/wlh.jpg"
    },
    {
        id: 21,
        artist: "陶喆",
        title: "2025 Soul Power II 世界巡回演唱会",
        city: "福州（已官宣）",
        venue: "福州海峡奥林匹克体育中心体育场",
        date: "时间待定",
        price: "380-1380",
        image: "https://example.com/dt.jpg"
    },
    {
        id: 22,
        artist: "凤凰传奇",
        title: "「吉祥如意」2025巡回演唱会",
        city: "台州（已官宣）",
        venue: "台州市体育中心体育场",
        date: "2025.04.11-04.13",
        price: "380-1380",
        image: "https://example.com/fhcq.jpg"
    },
    {
        id: 23,
        artist: "张韶涵",
        title: "2025张韶涵世界巡回演唱会",
        city: "广州（已官宣）",
        venue: "广州大学城体育中心体育场",
        date: "2025.04.26 周六 19:00",
        price: "388-1288",
        image: "https://example.com/zsh.jpg"
    },
    {
        id: 24,
        artist: "时代少年团",
        title: "一起走过的日子 2025巡回演唱会",
        city: "北京（洽谈中）",
        venue: "待定",
        date: "时间待定",
        price: "待定",
        image: "https://example.com/tnt.jpg"
    },
    {
        id: 25,
        artist: "周传雄",
        title: "2025「念念不忘·再遇见」巡回演唱会",
        city: "太原（已官宣）",
        venue: "山西体育中心体育场",
        date: "2025.04.12 周六 19:30",
        price: "380-1080",
        image: "https://example.com/zcx.jpg"
    },
    {
        id: 26,
        artist: "陈楚生",
        title: "\"荒芜之境\"2025巡回演唱会",
        city: "重庆（已官宣）",
        venue: "华熙LIVE·鱼洞·场馆",
        date: "2025.03.01 周六 19:00",
        price: "380-1580",
        image: "https://example.com/ccs.jpg"
    },
    {
        id: 27,
        artist: "王源",
        title: "2025王源演唱会",
        city: "天津（未官宣）",
        venue: "洽谈中",
        date: "时间待定",
        price: "待定",
        image: "https://example.com/wy.jpg"
    },
    {
        id: 28,
        artist: "鹿晗",
        title: "2025鹿晗演唱会",
        city: "北京（未官宣）",
        venue: "洽谈中",
        date: "时间待定",
        price: "待定",
        image: "https://example.com/lh.jpg"
    },
    {
        id: 29,
        artist: "黄子弘凡",
        title: "「除了快乐禁止入内」2025巡回演唱会",
        city: "澳门（已售罄）",
        venue: "银河综艺馆",
        date: "2025.02.22-23",
        price: "480-1280",
        image: "https://example.com/hzhf.jpg"
    },
    {
        id: 30,
        artist: "沙一汀EL",
        title: "「VERSE II」2025巡回演唱会",
        city: "上海（已官宣）",
        venue: "蜚声上海PHASE LIVE HOUSE SHANGHAI",
        date: "2025.02.14 周五",
        price: "298-468",
        image: "https://example.com/syt.jpg"
    },
    {
        id: 31,
        artist: "薛之谦",
        title: "\"天外来物\"海外体育场·返场演唱会",
        city: "新加坡（已官宣）",
        venue: "新加坡国家体育场 National Stadium, Singapore",
        date: "2025.02.14-15",
        price: "617-2037",
        image: "https://example.com/xzq.jpg"
    },
    {
        id: 32,
        artist: "谢霆锋",
        title: "Evolution Nic Live 2025演唱会",
        city: "香港（已官宣）",
        venue: "香港启德体育园主场馆",
        date: "2025.04.25-26",
        price: "HK$680-1380",
        image: "https://example.com/xtf.jpg"
    },
    {
        id: 33,
        artist: "周深",
        title: "2025世界巡回演唱会",
        city: "伦敦（已官宣）",
        venue: "待定",
        date: "2025.02.14",
        price: "待定",
        image: "https://example.com/zs.jpg"
    },
    {
        id: 34,
        artist: "莫文蔚",
        title: "「大秀一场」2025演唱会",
        city: "苏州（已官宣）",
        venue: "苏州奥林匹克体育中心体育场",
        date: "2025.03.15 周六 19:00",
        price: "399-1399",
        image: "https://example.com/mww.jpg"
    },
    {
        id: 35,
        artist: "黄绮珊",
        title: "「晚霞·不晚」2025巡回演唱会",
        city: "成都（已官宣）",
        venue: "高新区体育中心-体育馆",
        date: "2025.03.22 周六 19:30",
        price: "180-1686",
        image: "https://example.com/hqs.jpg"
    },
    {
        id: 36,
        artist: "喻言",
        title: "2025参演演唱会",
        city: "温州（已官宣）",
        venue: "温州奥体中心主体育场",
        date: "时间延期待定",
        price: "待定",
        image: "https://example.com/yy.jpg"
    },
    {
        id: 37,
        artist: "石凯",
        title: "2025参演演唱会",
        city: "温州（已官宣）",
        venue: "温州奥体中心主体育场",
        date: "时间延期待定",
        price: "380-1280",
        image: "https://example.com/sk.jpg"
    },
    {
        id: 38,
        artist: "张靓颖",
        title: "2025参演演唱会",
        city: "青岛（已官宣）",
        venue: "莱西市体育中心体育场",
        date: "时间延期待定",
        price: "280-980",
        image: "https://example.com/zly.jpg"
    },
    {
        id: 39,
        artist: "袁一琦",
        title: "2025巡回演唱会",
        city: "广州（已官宣）",
        venue: "广州亚运城综合体育馆",
        date: "2025.04.19 周六",
        price: "待定",
        image: "https://example.com/yyq.jpg"
    },
    {
        id: 40,
        artist: "林忆莲",
        title: "《回响 Resonance》2025巡回演唱会",
        city: "深圳（已官宣）",
        venue: "深圳湾体育中心春茧体育场",
        date: "2025.02.22 周六 19:30",
        price: "380-1280",
        image: "https://example.com/lyl.jpg"
    },
    {
        id: 41,
        artist: "黄明昊",
        title: "「渐入贾境」23岁生日系列企划",
        city: "上海（已官宣）",
        venue: "上海华润时代广场7楼",
        date: "2025.02.14-02.19",
        price: "待定",
        image: "https://example.com/hmh.jpg"
    },
    {
        id: 42,
        artist: "周震南",
        title: "2025参演演唱会",
        city: "咸阳（已官宣）",
        venue: "咸阳奥体中心停车场北侧",
        date: "2025.03.29-03.30",
        price: "298-997",
        image: "https://example.com/zzn.jpg"
    },
    {
        id: 43,
        artist: "郑润泽",
        title: "「漩涡人生」2025巡回演唱会",
        city: "郑州（已官宣）",
        venue: "郑州奥林匹克体育中心 洋河·梦之蓝体育馆",
        date: "2025.03.15 周六 19:00",
        price: "398-998",
        image: "https://example.com/zrz.jpg"
    }
];

function searchConcerts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cityFilter = document.getElementById('cityFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;

    const filteredConcerts = concerts.filter(concert => {
        // 检查主信息中的城市和艺人名
        const concertCity = concert.city.split('（')[0];
        const matchesSearch = concert.artist.toLowerCase().includes(searchTerm) ||
                            concert.city.toLowerCase().includes(searchTerm);
        
        // 检查巡演日程中的城市
        const tourCities = tourDates[concert.id] || [];
        const hasCityInTour = tourCities.some(tour => {
            const tourCity = tour.city.split('（')[0];
            return tourCity.toLowerCase().includes(searchTerm);
        });

        const matchesCity = cityFilter === '' || 
                          concertCity === cityFilter || 
                          tourCities.some(tour => tour.city.split('（')[0] === cityFilter);
                          
        const matchesDate = filterByDate(concert.date, dateFilter);
        
        return (matchesSearch || hasCityInTour) && matchesCity && matchesDate;
    });

    displayConcerts(filteredConcerts);
}

function filterByDate(concertDate, filterValue) {
    if (filterValue === '') return true;
    
    const date = new Date(concertDate);
    const now = new Date();
    const currentMonth = now.getMonth();
    const concertMonth = date.getMonth();

    switch(filterValue) {
        case 'thisMonth':
            return currentMonth === concertMonth;
        case 'nextMonth':
            return currentMonth + 1 === concertMonth;
        case 'future':
            return date > now && date <= new Date(now.setMonth(now.getMonth() + 3));
        default:
            return true;
    }
}

function displayConcerts(concertList) {
    const container = document.getElementById('concertList');
    container.innerHTML = '';

    if (concertList.length === 0) {
        container.innerHTML = '<p class="no-results">未找到符合条件的演唱会</p>';
        return;
    }

    concertList.forEach(concert => {
        const concertCard = document.createElement('div');
        concertCard.className = 'concert-card';
        concertCard.onclick = () => window.location.href = `concert-detail.html?id=${concert.id}`;
        concertCard.innerHTML = `
            <h3>${concert.artist} - ${concert.title}</h3>
            <p>城市：${concert.city}</p>
            <p>场馆：${concert.venue}</p>
            <p>日期：${concert.date}</p>
            <p class="price">票价：￥${concert.price}</p>
        `;
        container.appendChild(concertCard);
    });
}

// 页面加载时显示所有演唱会
window.onload = () => {
    displayConcerts(concerts);
};

// 在 script.js 中添加事件监听器
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchConcerts();
    }
}); 