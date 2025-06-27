<template>
    <div class="achievements-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">科研成果</h1>
                    <p class="page-subtitle">科研创新成果与学术贡献</p>
                </div>
            </div>
        </section>

        <!-- 成果统计 -->
        <section class="stats-overview py-4">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-card" v-for="stat in achievementStats" :key="stat.id" data-aos="zoom-in"
                        :data-aos-delay="stat.delay">
                        <div class="stat-icon" v-html="stat.icon"></div>
                        <div class="stat-content">
                            <div class="stat-number">{{ stat.number }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 学术论文 -->
        <section class="papers-section py-5">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <h2 class="section-title">学术论文</h2>
                    <p class="section-subtitle">高质量学术成果发表</p>
                </div>
                <div class="papers-list">
                    <div class="paper-item" v-for="paper in academicPapers" :key="paper.id" data-aos="fade-up"
                        :data-aos-delay="paper.delay">
                        <div class="paper-content">
                            <h3 class="paper-title">{{ paper.title }}</h3>
                            <div class="paper-meta">
                                <span class="paper-authors">{{ paper.authors }}</span>
                                <span class="paper-journal">{{ paper.journal }}</span>
                                <span class="paper-year">{{ paper.year }}</span>
                            </div>
                            <p class="paper-abstract">{{ paper.abstract }}</p>
                        </div>
                        <div class="paper-badge">
                            <span class="impact-factor">IF: {{ paper.impactFactor }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 专利技术 -->
        <section class="patents-section py-5">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <h2 class="section-title">专利技术</h2>
                    <p class="section-subtitle">技术创新与知识产权保护</p>
                </div>
                <div class="patents-grid">
                    <div class="patent-card" v-for="patent in patents" :key="patent.id" data-aos="fade-up"
                        :data-aos-delay="patent.delay">
                        <div class="patent-header">
                            <div class="patent-type">{{ patent.type }}</div>
                            <div class="patent-status">{{ patent.status }}</div>
                        </div>
                        <div class="patent-content">
                            <h3 class="patent-title">{{ patent.title }}</h3>
                            <p class="patent-inventors">发明人：{{ patent.inventors }}</p>
                            <p class="patent-number">专利号：{{ patent.number }}</p>
                            <p class="patent-date">申请日期：{{ patent.applicationDate }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 获奖荣誉 -->
        <section class="awards-section py-5">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <h2 class="section-title">获奖荣誉</h2>
                    <p class="section-subtitle">专业认可与社会肯定</p>
                </div>
                <div class="awards-timeline">
                    <div class="award-item" v-for="award in awards" :key="award.id" data-aos="fade-right"
                        :data-aos-delay="award.delay">
                        <div class="award-year">{{ award.year }}</div>
                        <div class="award-content">
                            <h3 class="award-title">{{ award.title }}</h3>
                            <p class="award-org">颁发机构：{{ award.organization }}</p>
                            <p class="award-desc">{{ award.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AchievementsPage',
    data() {
        return {
            achievementStats: [
                {
                    id: 1,
                    number: '100+',
                    label: '高水平论文',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>',
                    delay: 100
                },
                {
                    id: 2,
                    number: '50+',
                    label: '授权发明专利',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19Z" /></svg>',
                    delay: 200
                },
                {
                    id: 3,
                    number: '8+',
                    label: '省部级科技奖',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L13.09,8.26L22,9L17,14L18.18,22.91L12,19.5L5.82,22.91L7,14L2,9L10.91,8.26L12,2Z" /></svg>',
                    delay: 300
                },
                {
                    id: 4,
                    number: '150+',
                    label: '承担项目',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16,4C18.11,4 19.81,5.69 19.81,7.8C19.81,9.91 18.11,11.6 16,11.6C13.89,11.6 12.19,9.91 12.19,7.8C12.19,5.69 13.89,4 16,4M16,13.4C18.67,13.4 24,14.73 24,17.4V20H8V17.4C8,14.73 13.33,13.4 16,13.4M8.5,6.5A2.5,2.5 0 0,1 11,9A2.5,2.5 0 0,1 8.5,11.5A2.5,2.5 0 0,1 6,9A2.5,2.5 0 0,1 8.5,6.5M8.5,13.25C11,13.25 16,14.63 16,17.13V19.75H1V17.13C1,14.63 6,13.25 8.5,13.25Z" /></svg>',
                    delay: 400
                }
            ],
            academicPapers: [
                {
                    id: 1,
                    title: 'Advanced Technologies for River Ecosystem Restoration in Jiangxi Province',
                    authors: '张伟, 李明, 王芳等',
                    journal: 'Water Research',
                    year: '2024',
                    impactFactor: '11.236',
                    abstract: '本研究提出了适用于江西省河流生态系统修复的先进技术体系，包括植被重建、水质改善和生物多样性恢复等方面...',
                    delay: 100
                },
                {
                    id: 2,
                    title: 'Smart Water Quality Monitoring System Using IoT and Machine Learning',
                    authors: '刘华, 陈建国, 赵丽等',
                    journal: 'Environmental Science & Technology',
                    year: '2023',
                    impactFactor: '10.508',
                    abstract: '开发了基于物联网和机器学习的智能水质监测系统，实现了水质参数的实时监测和预警...',
                    delay: 200
                },
                {
                    id: 3,
                    title: 'Ecological Health Assessment of Watershed Systems in South China',
                    authors: '孙燕, 马强, 周敏等',
                    journal: 'Ecological Indicators',
                    year: '2023',
                    impactFactor: '6.263',
                    abstract: '构建了适用于南方流域的生态健康评估指标体系，为流域生态保护提供了科学依据...',
                    delay: 300
                }
            ],
            patents: [
                {
                    id: 1,
                    title: '一种河流生态修复用复合植物配置系统',
                    type: '发明专利',
                    status: '已授权',
                    inventors: '张伟, 李明, 王芳',
                    number: 'ZL202110123456.8',
                    applicationDate: '2021-02-15',
                    delay: 100
                },
                {
                    id: 2,
                    title: '水质在线监测装置及监测方法',
                    type: '发明专利',
                    status: '已授权',
                    inventors: '刘华, 陈建国',
                    number: 'ZL202010987654.3',
                    applicationDate: '2020-09-20',
                    delay: 200
                },
                {
                    id: 3,
                    title: '流域生态风险评估系统',
                    type: '软件著作权',
                    status: '已登记',
                    inventors: '孙燕, 马强, 周敏',
                    number: '2023SR0567890',
                    applicationDate: '2023-03-10',
                    delay: 300
                }
            ],
            awards: [
                {
                    id: 1,
                    year: '2023',
                    title: '江西省科学技术进步奖二等奖',
                    organization: '江西省人民政府',
                    description: '在河流源头水生态保护技术研究方面取得突出成果',
                    delay: 100
                },
                {
                    id: 2,
                    year: '2022',
                    title: '中国环境科学学会环境科技奖',
                    organization: '中国环境科学学会',
                    description: '水质智能监测技术创新应用获得认可',
                    delay: 200
                },
                {
                    id: 3,
                    year: '2021',
                    title: '江西省重点实验室建设优秀奖',
                    organization: '江西省科技厅',
                    description: '实验室建设和管理工作表现突出',
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

/* 成果统计 */
.stats-overview {
    background: var(--light-gray);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.stat-card {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: var(--transition);
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.stat-icon {
    color: var(--primary-blue);
    flex-shrink: 0;
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--dark-gray);
    margin-bottom: 0.25rem;
}

.stat-label {
    color: var(--gray);
    font-weight: 500;
}

/* 学术论文 */
.papers-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.paper-item {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    transition: var(--transition);
}

.paper-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
}

.paper-content {
    flex: 1;
}

.paper-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
    line-height: 1.4;
}

.paper-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.paper-authors {
    color: var(--primary-blue);
    font-weight: 500;
}

.paper-journal {
    color: var(--primary-green);
    font-style: italic;
}

.paper-year {
    color: var(--gray);
}

.paper-abstract {
    color: var(--gray);
    line-height: 1.6;
}

.paper-badge {
    flex-shrink: 0;
    margin-left: 2rem;
}

.impact-factor {
    background: var(--gradient-primary);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
    font-weight: 600;
}

/* 专利技术 */
.patents-section {
    background: var(--light-gray);
}

.patents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.patent-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.patent-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.patent-header {
    background: var(--gradient-secondary);
    color: var(--white);
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.patent-type {
    font-weight: 600;
}

.patent-status {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
}

.patent-content {
    padding: 1.5rem;
}

.patent-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
    line-height: 1.4;
}

.patent-content p {
    margin-bottom: 0.5rem;
    color: var(--gray);
    font-size: 0.9rem;
}

/* 获奖荣誉 */
.awards-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.awards-timeline::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient-primary);
}

.award-item {
    position: relative;
    margin-bottom: 3rem;
    margin-left: 80px;
}

.award-year {
    position: absolute;
    left: -80px;
    top: 0;
    width: 60px;
    height: 60px;
    background: var(--primary-blue);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9rem;
}

.award-content {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.award-content:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
}

.award-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
}

.award-org {
    color: var(--primary-green);
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.award-desc {
    color: var(--gray);
    line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .paper-item {
        flex-direction: column;
        gap: 1rem;
    }

    .paper-badge {
        margin-left: 0;
        align-self: flex-start;
    }

    .paper-meta {
        flex-direction: column;
        gap: 0.5rem;
    }

    .patents-grid {
        grid-template-columns: 1fr;
    }

    .award-item {
        margin-left: 40px;
    }

    .award-year {
        left: -40px;
        width: 50px;
        height: 50px;
        font-size: 0.8rem;
    }

    .awards-timeline::before {
        left: 20px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .stat-card {
        padding: 1.5rem;
    }
}
</style>