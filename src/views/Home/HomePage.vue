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
                        河流源头水生态保护
                        <span class="gradient-text">江西省重点实验室</span>
                    </h1>
                    <p class="hero-subtitle">
                        致力于河流源头水生态系统保护与修复技术研究，推动江西省水生态环境可持续发展
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

        <!-- 实验室特色 -->
        <section class="features-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">实验室特色</h2>
                    <p class="section-subtitle">专注水生态保护的科研创新平台</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card" v-for="feature in features" :key="feature.id" data-aos="fade-up"
                        :data-aos-delay="feature.delay">
                        <div class="feature-icon">
                            <div class="icon-wrapper" v-html="feature.icon"></div>
                        </div>
                        <h3 class="feature-title">{{ feature.title }}</h3>
                        <p class="feature-desc">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 研究领域 -->
        <section class="research-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">研究领域</h2>
                    <p class="section-subtitle">多维度水生态保护研究</p>
                </div>
                <div class="research-grid">
                    <div class="research-item" v-for="research in researchAreas" :key="research.id" data-aos="zoom-in"
                        :data-aos-delay="research.delay">
                        <div class="research-content">
                            <div class="research-icon" v-html="research.icon"></div>
                            <h3 class="research-title">{{ research.title }}</h3>
                            <p class="research-desc">{{ research.description }}</p>
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
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            features: [
                {
                    id: 1,
                    title: '科研创新',
                    description: '拥有先进的实验设备和专业的研究团队，在水生态保护领域持续创新',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2l-.5 4h6l-.5-4M12 7v14l3-3v-8m-6 0v8l3 3"/></svg>',
                    delay: 100
                },
                {
                    id: 2,
                    title: '产学研结合',
                    description: '与高校、企业密切合作，推动科研成果转化和产业化应用',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
                    delay: 200
                },
                {
                    id: 3,
                    title: '国际合作',
                    description: '积极开展国际学术交流与合作，引进先进技术和理念',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
                    delay: 300
                },
                {
                    id: 4,
                    title: '技术服务',
                    description: '为政府部门和企事业单位提供专业的水生态技术咨询服务',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
                    delay: 400
                }
            ],
            researchAreas: [
                {
                    id: 1,
                    title: '水生态修复',
                    description: '河流生态系统修复技术研究与应用',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C8.1 17.5 10.67 12.67 18 11c-2.5-1.5-5-2.5-8-3z"/><path d="M3.82 21.34C5.9 16.17 8 10 17 8c3-1.5 6-2.5 7-5-1.5 1.5-4 3-7 5z"/></svg>',
                    delay: 100
                },
                {
                    id: 2,
                    title: '水质监测',
                    description: '先进的水质检测技术与智能监测系统',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 9h11z"/><circle cx="12" cy="15.5" r="2.5"/><path d="M6 15.5c0 3.31 2.69 6 6 6s6-2.69 6-6"/></svg>',
                    delay: 200
                },
                {
                    id: 3,
                    title: '流域治理',
                    description: '综合性流域生态环境治理解决方案',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg>',
                    delay: 300
                },
                {
                    id: 4,
                    title: '生态评估',
                    description: '水生态系统健康评估与风险预测',
                    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
                    delay: 400
                }
            ],
            stats: [
                { id: 1, number: '15+', label: '研究项目', delay: 100 },
                { id: 2, number: '50+', label: '学术论文', delay: 200 },
                { id: 3, number: '8+', label: '专利技术', delay: 300 },
                { id: 4, number: '20+', label: '合作伙伴', delay: 400 }
            ],
            latestNews: [
                {
                    id: 1,
                    title: '实验室在河流生态修复技术方面取得重大突破',
                    excerpt: '近期，我实验室在河流生态修复技术研究方面取得重要进展，相关成果已在国际权威期刊发表...',
                    date: '2024-06-20',
                    delay: 100
                },
                {
                    id: 2,
                    title: '国际水生态保护学术研讨会在我实验室成功举办',
                    excerpt: '来自国内外的知名专家学者齐聚一堂，共同探讨水生态保护的最新理论与实践...',
                    date: '2024-06-15',
                    delay: 200
                },
                {
                    id: 3,
                    title: '实验室与某知名企业签署产学研合作协议',
                    excerpt: '此次合作将推动水生态保护技术的产业化应用，为江西省生态文明建设贡献力量...',
                    date: '2024-06-10',
                    delay: 300
                }
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
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    border: 2px solid var(--white);
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
}

/* 特色功能 */
.features-section {
    background: var(--light-gray);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: var(--white);
    padding: 2.5rem 2rem;
    text-align: center;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.feature-icon {
    margin-bottom: 1.5rem;
}

.icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: var(--light-blue);
    border-radius: 50%;
    color: var(--primary-blue);
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--dark-gray);
}

.feature-desc {
    color: var(--gray);
    line-height: 1.6;
}

/* 研究领域 */
.research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.research-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius-lg);
    background: var(--white);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.research-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.research-content {
    padding: 2rem;
    text-align: center;
}

.research-icon {
    color: var(--primary-green);
    margin-bottom: 1rem;
}

.research-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--dark-gray);
}

.research-desc {
    color: var(--gray);
    line-height: 1.6;
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