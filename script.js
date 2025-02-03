// 模拟演唱会数据
const concerts = [
    {
        id: 1,
        artist: "周杰伦",
        title: "嘉年华世界巡回演唱会",
        city: "三亚（已开售）",
        venue: "三亚市体育中心白鹭体育场",
        date: "2025.03.28-03.30",
        price: "600-2000",
        image: "https://example.com/jay.jpg"
    },
    {
        id: 2,
        artist: "陈奕迅",
        title: "FEAR AND DREAMS 巡回演唱会",
        city: "重庆（已开售）",
        venue: "华熙LIVE·鱼洞·场馆",
        date: "2025.03.28-04.06",
        price: "599-1999",
        image: "https://example.com/eason.jpg"
    },
    {
        id: 3,
        artist: "五月天",
        title: "[ 回到那一天 ]25周年巡回演唱会",
        city: "悉尼（已开售）",
        venue: "Sydney Accor Stadium",
        date: "2025.02.22 周六 19:30",
        price: "610-2998",
        image: "https://example.com/mayday.jpg"
    },
    {
        id: 4,
        artist: "张学友",
        title: "水井坊·第一坊呈献 张学友60+巡回演唱会",
        city: "杭州（已开售）",
        venue: "杭州奥体中心体育馆",
        date: "2025.02.07-02.09",
        price: "480-2280",
        image: "https://example.com/jacky.jpg"
    },
    {
        id: 5,
        artist: "林俊杰",
        title: "JJ20 FINAL LAP世界巡回演唱会",
        city: "巴黎（售票中）",
        venue: "巴黎拉德芳斯体育馆",
        date: "2025.03.22 周六 20:00",
        price: "870-2970",
        image: "https://example.com/jj.jpg"
    },
    {
        id: 6,
        artist: "李荣浩",
        title: "「黑马」世界巡回演唱会",
        city: "南京（售票中）",
        venue: "南京奥体中心体育场",
        date: "2025.03.29 周六 19:00",
        price: "380-1280",
        image: "https://example.com/lrh.jpg"
    },
    {
        id: 7,
        artist: "邓紫棋",
        title: "G.E.M. 邓紫棋 I AM GLORIA 世界巡回演唱会",
        city: "新加坡（售票中）",
        venue: "新加坡国家体育场 National Stadium, Singapore",
        date: "2025.03.01 周六 19:30",
        price: "938-1988",
        image: "https://example.com/gem.jpg"
    },
    {
        id: 8,
        artist: "华晨宇",
        title: "2025华晨宇火星演唱会",
        city: "福州（售票中）",
        venue: "福州海峡奥林匹克体育中心体育场",
        date: "2025.03.08 周六 19:30",
        price: "399-1599",
        image: "https://example.com/hua.jpg"
    },
    {
        id: 9,
        artist: "汪苏泷",
        title: "大娱乐家 跨年演唱会",
        city: "广州（已结束）",
        venue: "宝能广州国际体育演艺中心",
        date: "2024.12.30-2025.01.01",
        price: "380-2280",
        image: "https://example.com/wsl.jpg"
    },
    {
        id: 10,
        artist: "十个勤天",
        title: "种下一个未来-十个勤天巡回演唱会",
        city: "福州（售票中）",
        venue: "福州海峡奥林匹克体育中心体育场",
        date: "2025.02.22-02.23",
        price: "388-1588",
        image: "https://example.com/sgqt.jpg"
    },
    {
        id: 11,
        artist: "张杰",
        title: "2025张杰未·LIVE—「开往1982」演唱会",
        city: "澳门（售票中）",
        venue: "银河综艺馆",
        date: "2025.03.07-03.09",
        price: "480-1680",
        image: "https://example.com/zj.jpg"
    },
    {
        id: 12,
        artist: "张远",
        title: "2025 张远「白」巡回演唱会",
        city: "新加坡（售票中）",
        venue: "星宇表演艺术中心 The Star Performing Arts Centre",
        date: "2025.02.21 周五 20:00",
        price: "525-1435",
        image: "https://example.com/zy.jpg"
    },
    {
        id: 13,
        artist: "王心凌",
        title: "SUGAR HIGH 2.0 世界巡回演唱会",
        city: "合肥（售票中）",
        venue: "合肥少荃体育中心体育馆",
        date: "2025.04.19-04.20",
        price: "480-1680",
        image: "https://example.com/wxl.jpg"
    },
    {
        id: 14,
        artist: "孙燕姿",
        title: "《就在日落以后》巡回演唱会",
        city: "上海（售票中）",
        venue: "上海体育场",
        date: "2025.04.26/04.28",
        price: "480-1680",
        image: "https://example.com/syz.jpg"
    },
    {
        id: 15,
        artist: "毛不易",
        title: "「冒险精神」巡回演唱会",
        city: "苏州（售票中）",
        venue: "苏州奥林匹克体育中心体育馆",
        date: "2025.02.15 周六 19:00",
        price: "480-1580",
        image: "https://example.com/mby.jpg"
    },
    {
        id: 16,
        artist: "周兴哲（Eric）",
        title: "Odyssey旅程巡回演唱会",
        city: "厦门（售票中）",
        venue: "厦门奥林匹克体育中心-凤凰体育馆",
        date: "2025.03.29 周六 19:00",
        price: "480-1180",
        image: "https://example.com/eric.jpg"
    },
    {
        id: 17,
        artist: "张惠妹",
        title: "ASMR MAXXX巡回演唱会",
        city: "成都（售票中）",
        venue: "成都东安湖体育公园主体育场",
        date: "2025.03.22 周六 19:00",
        price: "380-1380",
        image: "https://example.com/amei.jpg"
    },
    {
        id: 18,
        artist: "许嵩",
        title: "许嵩演唱会",
        city: "广州（洽谈中）",
        venue: "待定",
        date: "待定",
        price: "待定",
        image: "https://example.com/xs.jpg"
    },
    {
        id: 19,
        artist: "刀郎",
        title: "山歌响起的地方·刀郎2025巡回演唱会",
        city: "上海（售票中）",
        venue: "梅赛德斯-奔驰文化中心",
        date: "2025.03.01-03.02",
        price: "480-1280",
        image: "https://example.com/dl.jpg"
    },
    {
        id: 20,
        artist: "王力宏",
        title: "「最好的地方」巡回演唱会",
        city: "南昌（售票中）",
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
        city: "台州（售票中）",
        venue: "台州市体育中心体育场",
        date: "2025.04.11-04.13",
        price: "380-1380",
        image: "https://example.com/fhcq.jpg"
    },
    {
        id: 23,
        artist: "张韶涵",
        title: "2025张韶涵世界巡回演唱会",
        city: "广州（售票中）",
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
    }
];

function searchConcerts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cityFilter = document.getElementById('cityFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;

    const filteredConcerts = concerts.filter(concert => {
        const concertCity = concert.city.split('（')[0]; // 提取纯城市名称
        const matchesSearch = concert.artist.toLowerCase().includes(searchTerm) ||
                            concert.city.toLowerCase().includes(searchTerm);
        const matchesCity = cityFilter === '' || concertCity === cityFilter;
        const matchesDate = filterByDate(concert.date, dateFilter);
        
        return matchesSearch && matchesCity && matchesDate;
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