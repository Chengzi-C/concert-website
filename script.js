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
        city: "泰国曼谷（已取消）",
        venue: " Impact Arena",
        date: "时间待定",
        price: "价格待定",
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

function searchConcerts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cityFilter = document.getElementById('cityFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;

    const filteredConcerts = concerts.filter(concert => {
        const matchesSearch = concert.artist.toLowerCase().includes(searchTerm) ||
                            concert.city.toLowerCase().includes(searchTerm);
        const matchesCity = cityFilter === '' || concert.city === cityFilter;
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