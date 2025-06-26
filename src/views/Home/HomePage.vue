<template>
    <div class="home-page">
        <!-- 英雄区域 -->
        <section class="hero-section">
            <div class="hero-background">
                <div class="hero-overlay"></div>
                <div class="hero-particles"></div>
            </div>
            <div class="container">
                <div class="hero-content" data-aos="fade-up">
                    <h1 class="hero-title">
                        河流源头水生态保护江西省重点实验室
                    </h1>
                    <p class="hero-subtitle">
                        守护生命之源，更高标准打造美丽中国"江西样板"
                    </p>
                    <div class="hero-actions">
                        <router-link to="/about" class="btn btn-primary">了解更多</router-link>
                        <router-link to="/research" class="btn btn-outline">研究方向</router-link>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="scroll-arrow"></div>
            </div>
        </section>

        <!-- 实验室简介 -->
        <section class="lab-intro py-5" data-aos="fade-up">
            <div class="container">
                <div class="section-header text-center mb-5">
                    <h2 class="section-title">实验室简介</h2>
                    <p class="section-subtitle">赣南地区战略性矿产资源与生态环境协调发展的科技支撑</p>
                </div>
                <div class="intro-content">
                    <p class="intro-text">
                        赣南地区是"世界钨都"和"稀土王国"，同时也是赣江、东江等河流源头。基于源区生态环境现状以及产业发展的迫切需求，亟需解决战略性矿产资源开采和流域源头环境污染加剧的矛盾，协同推进降碳、减污、扩绿、增长，全面落实江西省"1269"和"2+6+N"行动计划，为粤港澳大湾区建设及流域生态补偿提供基础资料和决策依据。
                    </p>
                    <div class="intro-note">
                        <em>注：背景图片将使用赣江或东江源头的壮丽航拍图</em>
                    </div>
                </div>
            </div>
        </section>

        <!-- 核心数据 -->
        <section class="core-data py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">核心数据</h2>
                    <p class="section-subtitle">Lab by the Numbers</p>
                </div>
                <div class="stats-grid">
                    <div class="stat-item" v-for="stat in coreStats" :key="stat.id" data-aos="fade-up"
                        :data-aos-delay="stat.delay">
                        <div class="stat-number">{{ stat.number }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 研究方向 -->
        <section class="research-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">研究方向</h2>
                    <p class="section-subtitle">Quick Links to Research</p>
                </div>
                <div class="research-grid">
                    <div class="research-card" v-for="research in researchAreas" :key="research.id" data-aos="fade-up"
                        :data-aos-delay="research.delay">
                        <div class="research-image">
                            <div class="research-placeholder">
                                <em>{{ research.imageNote }}</em>
                            </div>
                        </div>
                        <div class="research-content">
                            <h3 class="research-title">{{ research.title }}</h3>
                            <p class="research-desc">{{ research.description }}</p>
                            <router-link to="/research" class="research-link">了解更多 →</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 数据统计 -->
        <section class="stats-section py-5">
            <div class="stats-background"></div>
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item" v-for="stat in stats" :key="stat.id" data-aos="fade-up"
                        :data-aos-delay="stat.delay">
                        <div class="stat-number">{{ stat.number }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 最新动态 -->
        <section class="news-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">最新动态</h2>
                    <p class="section-subtitle">了解实验室最新研究进展</p>
                </div>
                <div class="news-grid">
                    <article class="news-card" v-for="news in latestNews" :key="news.id" data-aos="fade-up"
                        :data-aos-delay="news.delay">
                        <div class="news-image">
                            <div class="news-placeholder"></div>
                            <div class="news-date">{{ news.date }}</div>
                        </div>
                        <div class="news-content">
                            <h3 class="news-title">{{ news.title }}</h3>
                            <p class="news-excerpt">{{ news.excerpt }}</p>
                            <a href="#" class="read-more">阅读更多 →</a>
                        </div>
                    </article>
                </div>
                <div class="text-center mt-4" data-aos="fade-up">
                    <router-link to="/news" class="btn btn-outline">查看更多动态</router-link>
                </div>
            </div>
        </section>

        <!-- 合作伙伴 -->
        <section class="partners-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">合作单位</h2>
                    <p class="section-subtitle">携手共建水生态保护事业</p>
                </div>
                <div class="partners-grid">
                    <div class="partner-item" v-for="partner in partners" :key="partner.id" data-aos="zoom-in"
                        :data-aos-delay="partner.delay">
                        <div class="partner-logo">
                            <div class="logo-placeholder">{{ partner.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            coreStats: [
                { id: 1, number: '150+', label: '科研项目', delay: 100 },
                { id: 2, number: '8+', label: '省部级奖励', delay: 200 },
                { id: 3, number: '50+', label: '授权发明专利', delay: 300 },
                { id: 4, number: '48', label: '科研团队', delay: 400 },
                { id: 5, number: '3000万元', label: '设备总值', delay: 500 },
                { id: 6, number: '3800+', label: '实验场地(m²)', delay: 600 }
            ],
            researchAreas: [
                {
                    id: 1,
                    title: '河流源头矿区典型污染物源解析与评估',
                    description: '查明残留浸矿剂赋存状态，揭示重金属和放射性元素的活化机制，建立污染物的源汇模型。',
                    imageNote: '配图：矿区环境或污染物微观图',
                    delay: 100
                },
                {
                    id: 2,
                    title: '矿区污染物迁移理论与数值模拟',
                    description: '明确多孔介质水气驱替渗流规律，构建岩土体固-液-气耦合动力学模型，研发大规模数值模拟技术。',
                    imageNote: '配图：数值模拟效果图或多孔介质示意图',
                    delay: 200
                },
                {
                    id: 3,
                    title: '流域污染物的迁移与环境污染防治',
                    description: '形成入河污染负荷削减技术体系，研发水质净化和生态修复集成技术。',
                    imageNote: '配图：流域水体或生态修复场景图',
                    delay: 300
                },
                {
                    id: 4,
                    title: '流域水环境数字孪生与智慧监管',
                    description: '构建流域环境数字孪生平台，实现流域环境智能计算与智慧监管。',
                    imageNote: '配图：数字孪生平台界面或星空地一体化监测示意图',
                    delay: 400
                }
            ],
            stats: [
                { id: 1, number: '150+', label: '承担项目', delay: 100 },
                { id: 2, number: '8+', label: '省部级科技奖', delay: 200 },
                { id: 3, number: '50+', label: '授权发明专利', delay: 300 },
                { id: 4, number: '48', label: '核心研究人员', delay: 400 }
            ],
            latestNews: [
                {
                    id: 1,
                    title: '[学术交流] XX院士莅临我室指导工作',
                    excerpt: '院士对实验室在河流源头水生态保护领域的研究成果给予高度评价，并对未来发展方向提出了宝贵建议...',
                    date: '2024-06-20',
                    delay: 100
                },
                {
                    id: 2,
                    title: '[科研进展] 我室XX成果荣获202X年度江西省科学技术进步一等奖',
                    excerpt: '该成果在离子型稀土资源溶浸采矿流场高效调控关键技术及应用方面取得重大突破...',
                    date: '2024-06-15',
                    delay: 200
                },
                {
                    id: 3,
                    title: '[通知公告] 202X年度开放基金课题申请指南',
                    excerpt: '为促进学术交流与合作，实验室现面向国内外学者开放基金课题申请，欢迎相关领域专家积极申报...',
                    date: '2024-06-10',
                    delay: 300
                }
            ],
            partners: [
                { id: 1, name: '江西省水利厅', delay: 100 },
                { id: 2, name: '江西省生态环境厅', delay: 200 },
                { id: 3, name: '中科院赣江创新研究院', delay: 300 },
                { id: 4, name: '中国稀土集团有限公司', delay: 400 },
                { id: 5, name: '江西理工大学', delay: 500 },
                { id: 6, name: '赣州稀土矿业有限公司', delay: 600 }
            ]
        }
    }
}
</script>

<style scoped>
/* 英雄区域 */
.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}

.hero-particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 100px 100px, 80px 80px, 120px 120px;
    animation: float 20s ease-in-out infinite;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--white);
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.gradient-text {
    background: linear-gradient(135deg, #ffffff 0%, #e8f5e8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    opacity: 0.9;
}

.hero-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.scroll-arrow {
    width: 2px;
    height: 40px;
    background: var(--white);
    position: relative;
    animation: scroll 2s ease-in-out infinite;
}

.scroll-arrow::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid var(--white);
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
}

/* 实验室简介 */
.lab-intro {
    background: var(--light-gray);
}

.intro-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.intro-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray);
    margin-bottom: 1.5rem;
}

.intro-note {
    padding: 1rem;
    background: rgba(var(--primary-blue-rgb), 0.1);
    border-radius: var(--border-radius);
    color: var(--primary-blue);
    font-size: 0.9rem;
}

/* 核心数据 */
.core-data {
    background: var(--white);
}

.core-data .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.core-data .stat-item {
    text-align: center;
    padding: 2rem 1rem;
    background: var(--light-gray);
    border-radius: var(--border-radius-lg);
    transition: var(--transition);
    cursor: pointer;
}

.core-data .stat-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.core-data .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--primary-blue);
}

.core-data .stat-label {
    font-size: 1rem;
    color: var(--dark-gray);
    font-weight: 500;
}

/* 研究方向 */
.research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.research-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.research-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.research-image {
    height: 200px;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    position: relative;
}

.research-placeholder {
    text-align: center;
    font-style: italic;
    padding: 1rem;
}

.research-content {
    padding: 2rem;
}

.research-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--dark-gray);
    line-height: 1.4;
}

.research-desc {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.research-link {
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
}

.research-link:hover {
    color: var(--secondary-blue);
}

/* 数据统计 */
.stats-section {
    position: relative;
    background: var(--dark-gray);
    color: var(--white);
}

.stats-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-secondary);
    opacity: 0.9;
}

.stats-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    z-index: 1;
}

.stat-item {
    text-align: center;
    padding: 2rem 1rem;
    transition: var(--transition);
    cursor: pointer;
}

.stat-item:hover {
    transform: translateY(-5px);
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--white);
}

.stat-label {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* 新闻动态 */
.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.news-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.news-image {
    position: relative;
    height: 200px;
}

.news-placeholder {
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0.8;
}

.news-date {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
    font-weight: 500;
}

.news-content {
    padding: 1.5rem;
}

.news-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--dark-gray);
    line-height: 1.4;
}

.news-excerpt {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.read-more {
    color: var(--primary-blue);
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
}

.read-more:hover {
    color: var(--secondary-blue);
}

/* 动画 */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes scroll {
    0% {
        opacity: 0;
    }

    10% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(20px);
        opacity: 0;
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .features-grid,
    .research-grid,
    .news-grid {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .stat-number {
        font-size: 2.5rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }
}
</style>
/* 合作伙伴 */
.partners-section {
background: var(--light-gray);
}

.partners-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 2rem;
max-width: 1000px;
margin: 0 auto;
}

.partner-item {
background: var(--white);
border-radius: var(--border-radius-lg);
padding: 2rem 1rem;
text-align: center;
box-shadow: var(--shadow-sm);
transition: var(--transition);
}

.partner-item:hover {
transform: translateY(-5px);
box-shadow: var(--shadow-md);
}

.partner-logo {
display: flex;
align-items: center;
justify-content: center;
height: 80px;
}

.logo-placeholder {
color: var(--primary-blue);
font-weight: 600;
font-size: 1rem;
text-align: center;
line-height: 1.3;
}

@media (max-width: 768px) {
.partners-grid {
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
}

.partner-item {
padding: 1.5rem 0.75rem;
}
}

@media (max-width: 480px) {
.partners-grid {
grid-template-columns: 1fr;
}
}