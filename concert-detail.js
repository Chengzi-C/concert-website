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
        city: "上海",
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
        city: "台州",
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
        city: "澳门",
        venue: "银河综艺馆",
        date: "2025.02.22-23",
        price: "待定",
        image: "https://example.com/hzhf.jpg"
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
        { city: "成都（未开售）", venue: "东郊记忆", date: "2025年" }
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
        { city: "悉尼（已官宣）", venue: "Qudos Bank Arena", date: "2025.04.05 周六 20:00" }
    ],
    6: [
        { city: "南京（已官宣）", venue: "南京奥体中心体育场", date: "2025.03.29 周六 19:00" },
        { city: "石家庄（已官宣）", venue: "河北奥林匹克体育中心体育场", date: "2025.04.12 周六 19:30" }
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
        { city: "北京（已官宣）", venue: "待定", date: "2025.03.21-03.23" }
    ],
    10: [
        { city: "福州（已官宣）", venue: "福州海峡奥林匹克体育中心体育场", date: "2025.02.22-02.23" }
    ],
    11: [
        { city: "澳门（已官宣）", venue: "银河综艺馆", date: "2025.03.07-03.09" },
        { city: "香港（已官宣）", venue: "亚洲国际博览馆 Arena", date: "2025.02.07-02.09" }
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
        { city: "上海（已官宣）", venue: "上海体育场", date: "2025.04.26/04.28" }
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
        { city: "南昌（已官宣）", venue: "南昌国际体育中心体育场", date: "2025.05.31 周六 19:00" }
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
        { city: "上海（已官宣）", venue: "梅赛德斯-奔驰文化中心", date: "2025.03.01-03.02" },
        { city: "济南（已官宣）", venue: "济南奥林匹克体育中心体育馆", date: "2025.02.14-02.15" }
    ],
    20: [
        { city: "南昌（已官宣）", venue: "南昌国际体育中心体育馆", date: "2025.03.15-03.16" }
    ],
    21: [
        { city: "福州（已官宣）", venue: "福州海峡奥林匹克体育中心体育场", date: "时间待定" },
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育场", date: "2025.04.19 周六 19:00" },
        { city: "中国香港（已官宣）", venue: "红磡香港体育馆 (红馆)", date: "2025.03.01-03.02" }
    ],
    22: [
        { city: "台州（已官宣）", venue: "台州市体育中心体育场", date: "2025.04.11-04.13" },
        { city: "苏州（已官宣）", venue: "苏州奥林匹克体育中心体育场", date: "2025.03.28-03.30" }
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
        { city: "澳门（已官宣）", venue: "银河综艺馆", date: "2025.02.22-23" },
        { city: "西安（未官宣）", venue: "待定", date: "2025.03.22-23" },
        { city: "杭州（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "重庆（未官宣）", venue: "洽谈中", date: "时间待定" },
        { city: "郑州（未官宣）", venue: "洽谈中", date: "时间待定" }
    ]
};

function displayConcertDetail() {
    console.log('URL参数:', concertId); // 调试：检查URL参数
    const concert = concerts.find(c => c.id === parseInt(concertId));
    console.log('找到的演唱会:', concert); // 调试：检查是否找到演唱会
    
    if (!concert) {
        console.log('未找到演唱会数据'); // 调试：记录未找到的情况
        document.getElementById('concertDetail').innerHTML = '<p>未找到相关演唱会信息</p>';
        return;
    }

    const tourSchedule = tourDates[concert.id] || [];
    console.log('巡演日程:', tourSchedule); // 调试：检查巡演数据
    
    const detailHTML = `
        <div class="concert-header">
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

    console.log('生成的HTML:', detailHTML); // 调试：检查生成的HTML
    document.getElementById('concertDetail').innerHTML = detailHTML;
    document.title = `${concert.artist} - ${concert.title} | 演唱会详情`;
}

window.onload = displayConcertDetail; 