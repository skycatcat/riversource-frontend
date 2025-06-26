<template>
    <div class="news-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">新闻动态</h1>
                    <p class="page-subtitle">最新研究进展与学术活动</p>
                </div>
            </div>
        </section>

        <!-- 新闻列表 -->
        <section class="news-list py-5">
            <div class="container">
                <div class="news-grid">
                    <article class="news-article" v-for="article in newsArticles" :key="article.id" data-aos="fade-up"
                        :data-aos-delay="article.delay">
                        <div class="news-image">
                            <div class="news-placeholder"></div>
                            <div class="news-category">{{ article.category }}</div>
                        </div>
                        <div class="news-content">
                            <div class="news-meta">
                                <span class="news-date">{{ article.date }}</span>
                                <span class="news-author">{{ article.author }}</span>
                            </div>
                            <h2 class="news-title">{{ article.title }}</h2>
                            <p class="news-excerpt">{{ article.excerpt }}</p>
                            <div class="news-tags">
                                <span class="tag" v-for="tag in article.tags" :key="tag">{{ tag }}</span>
                            </div>
                            <a href="#" class="read-more-btn">阅读全文 →</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- 学术活动 -->
        <section class="events-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">学术活动</h2>
                    <p class="section-subtitle">近期举办的会议与研讨会</p>
                </div>
                <div class="events-list">
                    <div class="event-item" v-for="event in events" :key="event.id" data-aos="fade-right"
                        :data-aos-delay="event.delay">
                        <div class="event-date">
                            <div class="month">{{ event.month }}</div>
                            <div class="day">{{ event.day }}</div>
                        </div>
                        <div class="event-content">
                            <h3 class="event-title">{{ event.title }}</h3>
                            <p class="event-location">地点：{{ event.location }}</p>
                            <p class="event-desc">{{ event.description }}</p>
                            <div class="event-status" :class="event.status">{{ event.statusText }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'NewsPage',
    data() {
        return {
            newsArticles: [
                {
                    id: 1,
                    title: '实验室在河流生态修复技术方面取得重大突破',
                    excerpt: '近期，我实验室张伟教授团队在河流生态修复技术研究方面取得重要进展，开发出一套适用于江西省水域特点的生态修复技术体系，相关成果已在国际权威期刊《Water Research》发表。该技术已在鄱阳湖流域成功应用...',
                    date: '2024-06-20',
                    author: '张伟',
                    category: '科研成果',
                    tags: ['生态修复', '技术突破', '论文发表'],
                    delay: 100
                },
                {
                    id: 2,
                    title: '国际水生态保护学术研讨会在我实验室成功举办',
                    excerpt: '6月15日，由我实验室主办的"国际水生态保护学术研讨会"在南昌成功举办。来自美国、德国、日本等国家的知名专家学者以及国内高校、科研院所的代表共计200余人参加了本次会议。会议围绕水生态保护的最新理论与实践展开深入交流...',
                    date: '2024-06-15',
                    author: '李明',
                    category: '学术会议',
                    tags: ['国际会议', '学术交流', '水生态保护'],
                    delay: 200
                },
                {
                    id: 3,
                    title: '实验室与某知名企业签署产学研合作协议',
                    excerpt: '6月10日，我实验室与江西某环保科技有限公司正式签署产学研合作协议。此次合作将重点围绕水质智能监测设备的研发和产业化展开，推动科研成果向实际应用转化，为江西省生态文明建设贡献力量...',
                    date: '2024-06-10',
                    author: '王芳',
                    category: '合作交流',
                    tags: ['产学研合作', '技术转化', '智能监测'],
                    delay: 300
                },
                {
                    id: 4,
                    title: '实验室获批江西省重点研发计划项目',
                    excerpt: '近日，由我实验室主持申报的"赣江流域水生态保护关键技术研究与示范"项目成功获批江西省重点研发计划支持，项目总经费达500万元。该项目将在未来三年内开展赣江流域水生态保护的关键技术研究...',
                    date: '2024-06-05',
                    author: '刘华',
                    category: '项目资助',
                    tags: ['重点项目', '赣江流域', '技术研究'],
                    delay: 400
                },
                {
                    id: 5,
                    title: '实验室博士生在国际顶级期刊发表重要论文',
                    excerpt: '我实验室博士研究生小李作为第一作者在环境科学领域顶级期刊《Environmental Science & Technology》发表了题为"Novel Biomarkers for Early Detection of Aquatic Ecosystem Stress"的研究论文，该研究提出了水生态系统早期胁迫检测的新型生物标志物...',
                    date: '2024-05-28',
                    author: '李小明',
                    category: '学术成果',
                    tags: ['博士生', '顶级期刊', '生物标志物'],
                    delay: 500
                }
            ],
            events: [
                {
                    id: 1,
                    title: '第三届长江流域水生态保护国际论坛',
                    location: '南昌喜来登酒店',
                    description: '邀请国内外知名专家学者，共同探讨长江流域水生态保护的理论与实践',
                    month: '07',
                    day: '15',
                    status: 'upcoming',
                    statusText: '即将举办',
                    delay: 100
                },
                {
                    id: 2,
                    title: '水质监测技术培训班',
                    location: '实验室培训中心',
                    description: '面向政府部门和企业技术人员的专业培训',
                    month: '06',
                    day: '25',
                    status: 'completed',
                    statusText: '已举办',
                    delay: 200
                },
                {
                    id: 3,
                    title: '江西省水环境保护技术研讨会',
                    location: '江西大学学术报告厅',
                    description: '省内水环境保护领域的学术交流活动',
                    month: '06',
                    day: '12',
                    status: 'completed',
                    statusText: '已举办',
                    delay: 300
                }
            ]
        }
    }
}
</script>

<style scoped>
.page-header {
    background: var(--gradient-primary);
    color: var(--white);
    padding: 120px 0 80px;
    margin-top: 85px;
}

.header-content {
    text-align: center;
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.page-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
}

/* 新闻列表 */
.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.news-article {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.news-article:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.news-image {
    position: relative;
    height: 240px;
}

.news-placeholder {
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0.8;
}

.news-category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--primary-blue);
}

.news-content {
    padding: 2rem;
}

.news-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--gray);
}

.news-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
    line-height: 1.4;
}

.news-excerpt {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.news-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tag {
    background: var(--light-blue);
    color: var(--primary-blue);
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
}

.read-more-btn {
    color: var(--primary-blue);
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
}

.read-more-btn:hover {
    color: var(--secondary-blue);
}

/* 学术活动 */
.events-section {
    background: var(--light-gray);
}

.events-list {
    max-width: 800px;
    margin: 0 auto;
}

.event-item {
    display: flex;
    background: var(--white);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    margin-bottom: 2rem;
    overflow: hidden;
    transition: var(--transition);
}

.event-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
}

.event-date {
    background: var(--gradient-secondary);
    color: var(--white);
    padding: 2rem 1.5rem;
    text-align: center;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.month {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.day {
    font-size: 2rem;
    font-weight: 700;
}

.event-content {
    padding: 2rem;
    flex: 1;
}

.event-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
}

.event-location {
    color: var(--primary-blue);
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.event-desc {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.event-status {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 600;
}

.event-status.upcoming {
    background: var(--light-green);
    color: var(--primary-green);
}

.event-status.completed {
    background: var(--light-gray);
    color: var(--gray);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .news-grid {
        grid-template-columns: 1fr;
    }

    .event-item {
        flex-direction: column;
    }

    .event-date {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        min-width: auto;
    }

    .month {
        margin-bottom: 0;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .news-content {
        padding: 1.5rem;
    }

    .event-content {
        padding: 1.5rem;
    }
}
</style>