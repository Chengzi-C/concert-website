// 获取URL参数中的演唱会ID
const urlParams = new URLSearchParams(window.location.search);
const concertId = urlParams.get('id');

// 从原始数据中获取演唱会基本信息
const concerts = [
    {
        id: 1,
        artist: "周杰伦",
        title: "嘉年华世界巡回演唱会",
        city: "三亚",
        venue: "三亚市体育中心白鹭体育场",
        date: "2025.03.28-03.30",
        price: "600-2000",
        image: "https://example.com/jay.jpg"
    },
    {
        id: 2,
        artist: "陈奕迅",
        title: "FEAR AND DREAMS 巡回演唱会",
        city: "上海",
        venue: "梅赛德斯奔驰文化中心",
        date: "2024-06-01",
        price: "480-1680",
        image: "https://example.com/eason.jpg"
    },
    {
        id: 3,
        artist: "五月天",
        title: "好好好想见到你演唱会",
        city: "广州",
        venue: "海心沙亚运公园",
        date: "2024-07-15",
        price: "377-1577",
        image: "https://example.com/mayday.jpg"
    },
    {
        id: 4,
        artist: "张学友",
        title: "经典巡回演唱会",
        city: "深圳",
        venue: "深圳湾体育中心",
        date: "2024-05-28",
        price: "588-1988",
        image: "https://example.com/jacky.jpg"
    },
    {
        id: 5,
        artist: "林俊杰",
        title: "JJ20世界巡回演唱会",
        city: "北京",
        venue: "五棵松体育馆",
        date: "2024-08-08",
        price: "499-1699",
        image: "https://example.com/jj.jpg"
    },
    {
        id: 6,
        artist: "薛之谦",
        title: "天外来物巡回演唱会",
        city: "上海",
        venue: "上海体育馆",
        date: "2024-06-22",
        price: "380-1580",
        image: "https://example.com/xue.jpg"
    },
    {
        id: 7,
        artist: "邓紫棋",
        title: "摩天动物园世界巡回演唱会",
        city: "广州",
        venue: "广州体育馆",
        date: "2024-09-30",
        price: "388-1688",
        image: "https://example.com/gem.jpg"
    },
    {
        id: 8,
        artist: "华晨宇",
        title: "火星演唱会2024",
        city: "深圳",
        venue: "深圳春茧体育馆",
        date: "2024-07-07",
        price: "399-1599",
        image: "https://example.com/hua.jpg"
    }
];

// 模拟演唱会巡演数据
const tourDates = {
    1: [
        { city: "三亚（已官宣）", venue: "三亚市体育中心白鹭体育场", date: "2025.03.28-03.30" },
        { city: "南宁（已官宣）", venue: "广西体育中心体育场", date: "2025.04.25-04.27" },
        { city: "香港（已官宣）", venue: "启德主场馆", date: "2025.06.27 - 06.29" }
    ],
    2: [
        { city: "泰国曼谷（已取消）", venue: "Impact Arena", date: "时间待定" },
        { city: "重庆（已官宣）", venue: "华熙LIVE·鱼洞·场馆", date: "2025.03.28-04.06" },
        { city: "深圳（洽谈中）", venue: "宝能广州国际体育演艺中心", date: "时间待定" }
    ],
    3: [
        { city: "广州", venue: "海心沙亚运公园", date: "2024-07-15" },
        { city: "深圳", venue: "春茧体育馆", date: "2024-07-22" },
        { city: "成都", venue: "东郊记忆", date: "2024-07-29" }
    ],
    4: [
        { city: "深圳", venue: "深圳湾体育中心", date: "2024-05-28" },
        { city: "广州", venue: "广州体育馆", date: "2024-06-04" },
        { city: "香港", venue: "红馆", date: "2024-06-11" }
    ],
    5: [
        { city: "北京", venue: "五棵松体育馆", date: "2024-08-08" },
        { city: "南京", venue: "奥体中心", date: "2024-08-15" },
        { city: "杭州", venue: "黄龙体育馆", date: "2024-08-22" }
    ],
    6: [
        { city: "上海", venue: "上海体育馆", date: "2024-06-22" },
        { city: "武汉", venue: "光谷国际网球中心", date: "2024-06-29" },
        { city: "重庆", venue: "重庆国际博览中心", date: "2024-07-06" }
    ],
    7: [
        { city: "广州", venue: "广州体育馆", date: "2024-09-30" },
        { city: "长沙", venue: "贺龙体育馆", date: "2024-10-07" },
        { city: "厦门", venue: "厦门体育馆", date: "2024-10-14" }
    ],
    8: [
        { city: "深圳", venue: "深圳春茧体育馆", date: "2024-07-07" },
        { city: "佛山", venue: "佛山世纪莲体育馆", date: "2024-07-14" },
        { city: "东莞", venue: "东莞篮球中心", date: "2024-07-21" }
    ]
};

function displayConcertDetail() {
    const concert = concerts.find(c => c.id === parseInt(concertId));
    if (!concert) {
        document.getElementById('concertDetail').innerHTML = '<p>未找到相关演唱会信息</p>';
        return;
    }

    const tourSchedule = tourDates[concert.id] || [];
    
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

    document.getElementById('concertDetail').innerHTML = detailHTML;
    document.title = `${concert.artist} - ${concert.title} | 演唱会详情`;
}

window.onload = displayConcertDetail; 