// 获取URL参数中的演唱会ID
const urlParams = new URLSearchParams(window.location.search);
const concertId = urlParams.get('id');

// 从原始数据中获取演唱会基本信息
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
        city: "新加坡",
        venue: "新加坡国家体育场 National Stadium, Singapore",
        date: "2025.03.01 周六 19:30",
        price: "938-1988",
        image: "https://example.com/gem.jpg"
    },
    {
        id: 8,
        artist: "华晨宇",
        title: "2025华晨宇火星演唱会",
        city: "福州",
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
        city: "福州",
        venue: "福州海峡奥林匹克体育中心体育场",
        date: "2025.02.22-02.23",
        price: "388-1588",
        image: "https://example.com/sgqt.jpg"
    },
    {
        id: 11,
        artist: "张杰",
        title: "2025张杰未·LIVE—「开往1982」演唱会",
        city: "澳门",
        venue: "银河综艺馆",
        date: "2025.03.07-03.09",
        price: "480-1680",
        image: "https://example.com/zj.jpg"
    },
    {
        id: 12,
        artist: "张远",
        title: "2025 张远「白」巡回演唱会",
        city: "新加坡",
        venue: "星宇表演艺术中心 The Star Performing Arts Centre",
        date: "2025.02.21 周五 20:00",
        price: "525-1435",
        image: "https://example.com/zy.jpg"
    },
    {
        id: 13,
        artist: "王心凌",
        title: "SUGAR HIGH 2.0 世界巡回演唱会",
        city: "合肥",
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
        city: "苏州",
        venue: "苏州奥林匹克体育中心体育馆",
        date: "2025.02.15 周六 19:00",
        price: "480-1580",
        image: "https://example.com/mby.jpg"
    },
    {
        id: 16,
        artist: "周兴哲（Eric）",
        title: "Odyssey旅程巡回演唱会",
        city: "厦门",
        venue: "厦门奥林匹克体育中心-凤凰体育馆",
        date: "2025.03.29 周六 19:00",
        price: "480-1180",
        image: "https://example.com/eric.jpg"
    },
    {
        id: 17,
        artist: "张惠妹",
        title: "ASMR MAXXX巡回演唱会",
        city: "成都",
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
        city: "上海",
        venue: "梅赛德斯-奔驰文化中心",
        date: "2025.03.01-03.02",
        price: "480-1280",
        image: "https://example.com/dl.jpg"
    },
    {
        id: 20,
        artist: "王力宏",
        title: "「最好的地方」巡回演唱会",
        city: "南昌",
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
        city: "广州",
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
        venue: "待定（洽谈中）",
        date: "时间待定",
        price: "待定",
        image: "https://example.com/tnt.jpg"
    },
    {
        id: 25,
        artist: "周传雄",
        title: "2025「念念不忘·再遇见」巡回演唱会",
        city: "太原",
        venue: "山西体育中心体育场",
        date: "2025.04.12 周六 19:30",
        price: "380-1080",
        image: "https://example.com/zcx.jpg"
    },
    {
        id: 26,
        artist: "陈楚生",
        title: "\"荒芜之境\"2025巡回演唱会",
        city: "重庆",
        venue: "华熙LIVE·鱼洞·场馆",
        date: "2025.03.01 周六 19:00",
        price: "380-1580",
        image: "https://example.com/ccs.jpg"
    },
    {
        id: 27,
        artist: "王源",
        title: "2025王源演唱会",
        city: "天津",
        venue: "洽谈中",
        date: "时间待定",
        price: "待定",
        image: "https://example.com/wy.jpg"
    },
    {
        id: 28,
        artist: "鹿晗",
        title: "2025鹿晗演唱会",
        city: "北京",
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
        city: "上海",
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
    },
    {
        id: 44,
        artist: "XMASw吴骜",
        title: "RED RAIN Live Tour Vol.2",
        city: "上海（已官宣）",
        venue: "MAO Livehouse",
        date: "2025.03.08",
        price: "188-288",
        image: "https://example.com/wa.jpg"
    },
    {
        id: 45,
        artist: "黄誉博",
        title: "梦寐之地演唱会-长沙站",
        city: "长沙（已官宣）",
        venue: "湖南国际会展中心·芒果馆",
        date: "2025.02.22 周六 19:30",
        price: "66-922",
        image: "https://example.com/hyb.jpg"
    }
];

// 模拟演唱会巡演数据
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
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.06.28-06.29" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.07.04-07.06" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.07.11-07.13" },
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
        { city: "新加坡（已官宣）", venue: "新加坡国家体育场 National Stadium, Singapore", date: "2025.03.01 周六 19:30" },
        { city: "吉隆坡（已官宣）", venue: "武吉加里尔国家体育场 Bukit Jalil National Stadium", date: "2025.02.15 周六 20:00" }
    ],
    8: [
        { city: "福州（已官宣）", venue: "福州海峡奥林匹克体育中心体育场", date: "2025.03.08 周六 19:30" },
        { city: "苏州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "成都（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "西安（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "长沙（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "南昌（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "合肥（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "重庆（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "郑州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "太原（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "广州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "天津（未官宣）", venue: "洽谈中", date: "时间待定" }
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
        { city: "武汉（未官宣）", venue: "待定", date: "2025.07.25-26" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.03.21-03.23" }
    ],
    10: [
        { city: "福州（已官宣）", venue: "福州海峡奥林匹克体育中心体育场", date: "2025.02.22-02.23" },
        { city: "青岛（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "南京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "郑州（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    11: [
        { city: "香港（已官宣）", venue: "亚洲国际博览馆 Arena", date: "2025.02.07-02.09" },
        { city: "澳门（已官宣）", venue: "银河综艺馆", date: "2025.03.07-03.09" },
        { city: "天津（未官宣）", venue: "待定", date: "2025.03.30-03.31" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.04.18-04.20" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.04.25-04.27" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.05.02-05.04" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.05.09-05.11" },
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
        { city: "合肥（已官宣）", venue: "合肥少荃体育中心体育馆", date: "2025.04.19-04.20" },
        { city: "重庆（已官宣）", venue: "华熙LIVE·鱼洞·场馆", date: "2025.02.14-02.15" },
        { city: "泉州（已官宣）", venue: "晋江第二体育中心主体育馆", date: "2025.04.05-04.06" },
        { city: "成都（已官宣）", venue: "五粮液文化体育中心综合体育馆", date: "2025.03.15-03.16" },
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育馆", date: "2025.05.30-05.31" },
        { city: "宁波（已官宣）", venue: "宁波奥体中心体育馆", date: "2025.02.21-02.22" },
        { city: "南昌（已官宣）", venue: "南昌国际体育中心体育馆", date: "2025.05.03-05.04" },
        { city: "郑州（已官宣）", venue: "郑州奥林匹克体育中心 洋河·梦之蓝体育馆", date: "2025.06.14-06.15" },
        { city: "广州（已官宣）", venue: "宝能广州国际体育演艺中心", date: "2025.03.29-03.30" }
    ],
    14: [
        { city: "新加坡（已官宣）", venue: "Singapore Indoor Stadium", date: "2025.04.05-06" },
        { city: "新加坡（已官宣）", venue: "Singapore Indoor Stadium", date: "2025.04.12-13" },
        { city: "上海（已官宣）", venue: "上海体育场", date: "2025.04.26/04.28" },
        { city: "深圳（已官宣）", venue: "深圳大运中心体育场", date: "2025.05.16-18" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.06.13/06.15" },
        { city: "重庆（已官宣）", venue: "重庆奥体中心", date: "2025.09.19-21" },
        { city: "南京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "台湾（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "香港（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "马来西亚（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    15: [
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育馆", date: "2025.02.15 周六 19:00" },
        { city: "深圳（已官宣）", venue: "深圳大运中心体育馆", date: "2025.03.01 周六 19:00" },
        { city: "厦门（已官宣）", venue: "厦门奥林匹克体育中心-凤凰体育馆", date: "2025.03.08 周六 19:00" }
    ],
    16: [
        { city: "厦门（已官宣）", venue: "厦门奥林匹克体育中心-凤凰体育馆", date: "2025.03.29 周六 19:00" }
    ],
    17: [
        { city: "成都（已官宣）", venue: "成都东安湖体育公园主体育场", date: "2025.03.22 周六 19:00" },
        { city: "杭州（已官宣）", venue: "黄龙体育中心体育场", date: "2025.03.07-03.08" },
        { city: "郑州（已官宣）", venue: "郑州奥林匹克体育中心 洋河·梦之蓝体育场", date: "2025.05.02 周五 19:30" },
        { city: "北京（已官宣）", venue: "国家体育场-鸟巢", date: "2025.04.05-04.06" },
        { city: "厦门（已官宣）", venue: "厦门奥林匹克体育中心-白鹭体育场", date: "2025.05.24 周六 19:00" },
        { city: "南昌（已官宣）", venue: "南昌国际体育中心体育场", date: "2025.05.31 周六 19:00" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.04.05-04.06" }
    ],
    18: [
        { city: "长沙（已官宣）", venue: "长沙贺龙体育场", date: "2025.04.12 周六" },
        { city: "广州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "深圳（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "天津（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "成都（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "呼和浩特（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "兰州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "杭州（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    19: [
        { city: "济南（已官宣）", venue: "济南奥林匹克体育中心体育馆", date: "2025.02.14-02.15" },
        { city: "上海（已官宣）", venue: "梅赛德斯-奔驰文化中心", date: "2025.03.01-03.02" },
        { city: "杭州（已官宣）", venue: "洽谈中", date: "2025.03.15-03.16" },
        { city: "武汉（已官宣）", venue: "洽谈中", date: "2025.03.29-03.30" }
    ],
    20: [
        { city: "南昌（已官宣）", venue: "南昌国际体育中心体育馆", date: "2025.03.15-03.16" }
    ],
    21: [
        { city: "香港（已官宣）", venue: "红磡香港体育馆 (红馆)", date: "2025.03.01-02" },
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育场", date: "2025.04.19" },
        { city: "成都（未官宣）", venue: "待定", date: "2025.05.03" },
        { city: "贵阳（未官宣）", venue: "待定", date: "2025.05.17" },
        { city: "长沙（未官宣）", venue: "待定", date: "2025.06.21" },
        { city: "杭州（未官宣）", venue: "待定", date: "2025.08.02" },
        { city: "济南（未官宣）", venue: "待定", date: "2025.08.16" },
        { city: "深圳（未官宣）", venue: "待定", date: "2025.08.30" },
        { city: "常州（未官宣）", venue: "待定", date: "2025.09.13" },
        { city: "北京（未官宣）", venue: "待定", date: "2025.09.27" }
    ],
    22: [
        { city: "台州（已官宣）", venue: "台州市体育中心体育场", date: "2025.04.11-04.13" },
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育场", date: "2025.03.28-03.30" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.05.23-05.25" },
        { city: "北京（已官宣）", venue: "国家体育场鸟巢", date: "2025.05.30-06.01" }
    ],
    23: [
        { city: "广州（已官宣）", venue: "广州大学城体育中心体育场", date: "2025.04.26 周六 19:00" }
    ],
    24: [
        { city: "北京（洽谈中）", venue: "洽谈中", date: "时间待定" },
        { city: "上海（洽谈中）", venue: "洽谈中", date: "时间待定" },
        { city: "广州（洽谈中）", venue: "洽谈中", date: "时间待定" }
    ],
    25: [
        { city: "太原（已官宣）", venue: "山西体育中心体育场", date: "2025.04.12 周六 19:30" },
        { city: "杭州（已官宣）", venue: "黄龙体育中心体育场", date: "2025.03.29 周六 19:30" }
    ],
    26: [
        { city: "重庆（已官宣）", venue: "华熙LIVE·鱼洞·场馆", date: "2025.03.01 周六 19:00" },
        { city: "厦门（已官宣）", venue: "厦门奥林匹克体育中心-凤凰体育馆", date: "2025.03.15 周六 19:00" }
    ],
    27: [
        { city: "天津（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "上海（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "杭州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "重庆（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    28: [
        { city: "北京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "上海（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "西安（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "深圳（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "南昌（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    29: [
        { city: "澳门（已售罄）", venue: "银河综艺馆", date: "2025.02.22-23" },
        { city: "西安（已官宣）", venue: "西安奥体中心体育馆", date: "2025.03.22 周六" },
        { city: "杭州（已官宣）", venue: "杭州奥体中心体育馆", date: "2025.04.19-20" },
        { city: "重庆（已官宣）", venue: "华熙LIVE·鱼洞·场馆", date: "2025.05.10 周六" },
        { city: "郑州（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    30: [
        { city: "上海（已官宣）", venue: "蜚声上海PHASE LIVE HOUSE SHANGHAI", date: "2025.02.14 周五" }
    ],
    31: [
        { city: "新加坡（已官宣）", venue: "新加坡国家体育场 National Stadium, Singapore", date: "2025.02.14-15" }
    ],
    32: [
        { city: "香港（已官宣）", venue: "香港启德体育园主场馆", date: "2025.04.25-26" },
        { city: "深圳（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "广州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "北京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "西安（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "成都（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "武汉（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "重庆（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "杭州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "南京（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "上海（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    33: [
        { city: "伦敦（已官宣）", venue: "待定", date: "2025.02.14" },
        { city: "拉斯维加斯（已官宣）", venue: "待定", date: "2025.03.01" },
        { city: "西雅图（已官宣）", venue: "待定", date: "2025.03.05" },
        { city: "纽约（已官宣）", venue: "待定", date: "2025.03.14" },
        { city: "多伦多（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "墨尔本（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "悉尼（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "吉隆坡（未官宣）", venue: "洽谈中", date: "时间待定" }
    ],
    34: [
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育场", date: "2025.03.15 周六 19:00" }
    ],
    35: [
        { city: "成都（已官宣）", venue: "高新区体育中心-体育馆", date: "2025.03.22 周六 19:30" }
    ],
    36: [
        { city: "「龙娱·闪耀星空 音乐盛典第二季」温州（已官宣）", venue: "温州奥体中心主体育场", date: "时间延期待定", note: "「龙娱·闪耀星空 音乐盛典第二季」" },
        { city: "「QQ音乐超级巅峰之夜」成都（已官宣）", venue: "成都东安湖体育公园主体育场", date: "2025.03.08-03.09", note: "「QQ音乐超级巅峰之夜」" }
    ],
    37: [
        { city: "「龙娱·闪耀星空 音乐盛典第二季」温州（已官宣）", venue: "温州奥体中心主体育场", date: "时间延期待定", note: "「龙娱·闪耀星空 音乐盛典第二季」" },
        { city: "「丝路音乐节」咸阳（已官宣）", venue: "咸阳奥体中心停车场北侧", date: "2025.03.29-03.30", note: "「丝路音乐节·咸阳站」" },
        { city: "「QQ音乐超级巅峰之夜」成都（已官宣）", venue: "成都东安湖体育公园主体育场", date: "2025.03.08-03.09", note: "「QQ音乐超级巅峰之夜」" }
    ],
    38: [
        { city: "「乐动莱音 群星演唱会」青岛（已官宣）", venue: "莱西市体育中心体育场", date: "时间延期待定", note: "「乐动莱音 群星演唱会」" }
    ],
    39: [
        { city: "广州（已官宣）", venue: "广州亚运城综合体育馆", date: "2025.04.19 周六" }
    ],
    40: [
        { city: "深圳（已官宣）", venue: "深圳湾体育中心春茧体育场", date: "2025.02.22 周六 19:30" },
        { city: "厦门（已官宣）", venue: "厦门体育中心体育场", date: "2025.03.01 周六 19:00" },
        { city: "南宁（已官宣）", venue: "广西体育中心体育场", date: "2025.03.08 周六 20:00" },
        { city: "昆明（已官宣）", venue: "新亚洲体育城星耀体育场", date: "2025.03.22 周六 19:30" },
        { city: "太原（已官宣）", venue: "山西体育中心体育场", date: "2025.05.31 周六 19:30" }
    ],
    41: [
        { city: "上海（已官宣）", venue: "上海华润时代广场7楼", date: "2025.02.14-02.19", note: "生日主题痛楼 & 线下生趴 PART1「上海」\n2月15日有线下活动，到场均有精美周边领取（部分周边未公开，数量有限，领完为止）" }
    ],
    42: [
        { city: "「丝路音乐节」咸阳（已官宣）", venue: "咸阳奥体中心停车场北侧", date: "2025.03.29-03.30", note: "「丝路音乐节·咸阳站」\n联动艺人：汪苏泷、魏晨、沙一汀、王栎鑫、王铮亮、颜人中、张远、尚雯婕、蒲熠星、石凯、苏菲花园、郭力行、赫兹乐队" },
        { city: "「QQ音乐超级巅峰之夜」成都（已官宣）", venue: "成都东安湖体育公园主体育场", date: "2025.03.08-03.09", note: "「QQ音乐超级巅峰之夜」\n联动艺人：王源、汪苏泷、凤凰传奇、檀健次、伯远、段奥娟、希林娜依·高、黄子弘凡、蒋敦豪、刘宇、刘雨昕、蒲熠星、戚薇、TizzyT、卫兰、万妮达、yamy郭颖、姚琛、银河快递、张碧晨、张云雷、陈楚生、关浩德、何洁、黄誉博、陆虎、刘忻、孟慧圆、米卡MIKA、石凯、苏醒、王栎鑫、王铮亮、徐良、颜人中、喻言、早安、张远" }
    ],
    43: [
        { city: "郑州（已官宣）", venue: "郑州奥林匹克体育中心 洋河·梦之蓝体育馆", date: "2025.03.15 周六 19:00" },
        { city: "厦门（已官宣）", venue: "厦门奥林匹克体育中心-凤凰体育馆", date: "2025.03.22 周六 19:00" },
        { city: "重庆（已官宣）", venue: "华熙LIVE·鱼洞·场馆", date: "2025.04.19 周六 19:00" }
    ],
    44: [
        { city: "上海（已官宣）", venue: "MAO Livehouse", date: "2025.03.08" },
        { city: "长沙（已官宣）", venue: "红节奏 LIVEHOUSE", date: "2025.03.15" },
        { city: "厦门（已官宣）", venue: "福禧 Full House 厦门", date: "2025.03.22" },
        { city: "成都（已官宣）", venue: "正火艺术中心6号馆", date: "2025.03.29" },
        { city: "青岛（已官宣）", venue: "Downtown Live", date: "2025.04.12" },
        { city: "北京（已官宣）", venue: "疆进酒·OMNI SPACE", date: "2025.04.18" },
        { city: "天津（已官宣）", venue: "琉璃 SPACE", date: "2025.04.19" }
    ],
    45: [
        { city: "长沙（已官宣）", venue: "湖南国际会展中心·芒果馆", date: "2025.02.22 周六 19:30" }
    ]
};

// 修改初始化方式
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const concertId = urlParams.get('id');
    
    console.log('URL参数:', concertId);
    const concert = concerts.find(c => c.id === parseInt(concertId));
    console.log('找到的演唱会:', concert);
    
    if (!concert) {
        console.log('未找到演唱会数据');
        document.getElementById('concertDetail').innerHTML = '<p>未找到相关演唱会信息</p>';
        return;
    }

    const tourSchedule = tourDates[concert.id] || [];
    console.log('巡演日程:', tourSchedule);
    
    const detailHTML = `
        <div class="concert-header">
            <p class="disclaimer">仅供参考，一切以官宣为准~</p>
            <h1>${concert.artist} - ${concert.title}</h1>
            <p class="price">参考票价：￥${concert.price}</p>
        </div>
        <div class="tour-schedule">
            <h2>巡演日程安排</h2>
            <div class="schedule-list">
                ${tourSchedule.map(tour => `
                    <div class="schedule-item">
                        <div class="schedule-date">${tour.date}</div>
                        <div class="schedule-location">
                            <h3>${tour.city}</h3>
                            <p>${tour.venue}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('concertDetail').innerHTML = detailHTML;
    document.title = `${concert.artist} - ${concert.title} | 演唱会详情`;
});

// 添加清除搜索状态的函数
function clearSearchState() {
    sessionStorage.removeItem('searchState');
} 