<template>
    <div class="about-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">实验室概况</h1>
                    <p class="page-subtitle">河流源头水生态保护江西省重点实验室</p>
                </div>
            </div>
        </section>

        <!-- 实验室简介 -->
        <section class="intro-section py-5">
            <div class="container">
                <div class="intro-content">
                    <div class="intro-text" data-aos="fade-right">
                        <h2 class="section-title">实验室简介</h2>
                        <div class="intro-description">
                            <p>
                                河流源头水生态保护江西省重点实验室成立于2018年，是江西省重点建设的科研平台之一。
                                实验室专注于河流源头水生态系统保护与修复技术研究，致力于为江西省乃至全国的水生态环境保护提供科技支撑。
                            </p>
                            <p>
                                实验室拥有一支高水平的科研团队，包括教授、副教授、博士后研究人员等，
                                具备丰富的水生态保护研究经验和先进的实验设备。
                            </p>
                            <p>
                                多年来，实验室在河流生态修复、水质监测、流域治理等领域取得了一系列重要成果，
                                为江西省生态文明建设做出了重要贡献。
                            </p>
                        </div>
                    </div>
                    <div class="intro-image" data-aos="fade-left">
                        <div class="image-placeholder">
                            <div class="placeholder-content">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="1">
                                    <path
                                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                                <p>实验室环境图片</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 发展历程 */
    <section class="timeline-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5" data-aos="fade-up">
          <h2 class="section-title">发展历程</h2>
          <p class="section-subtitle">见证实验室的成长足迹</p>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="item in timeline" :key="item.year" data-aos="fade-up" :data-aos-delay="item.delay">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验室使命与愿景 */
    <section class="mission-section py-5">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-item" data-aos="zoom-in" data-aos-delay="100">
            <div class="mission-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <h3 class="mission-title">实验室使命</h3>
            <p class="mission-desc">
              致力于河流源头水生态保护技术创新，为江西省水生态环境可持续发展提供科技支撑，
              推动生态文明建设和绿色发展。
            </p>
          </div>
          <div class="mission-item" data-aos="zoom-in" data-aos-delay="200">
            <div class="mission-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 3l6.5 6.5L21 3"/>
                <path d="M13 17.5L21 10"/>
                <path d="M8 12l4 4"/>
              </svg>
            </div>
            <h3 class="mission-title">发展愿景</h3>
            <p class="mission-desc">
              建设成为国内一流、国际知名的水生态保护研究平台，成为江西省生态环境保护的重要智库和技术支撑中心。
            </p>
          </div>
          <div class="mission-item" data-aos="zoom-in" data-aos-delay="300">
            <div class="mission-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="mission-title">核心价值</h3>
            <p class="mission-desc">
              坚持科学严谨、创新开放、合作共赢的价值理念，以高质量的科研成果服务社会，
              为美丽中国建设贡献力量。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 组织架构 -->
        <section class="organization-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">组织架构</h2>
                    <p class="section-subtitle">科学高效的管理体系</p>
                </div>
                <div class="org-chart" data-aos="fade-up">
                    <div class="org-level">
                        <div class="org-box director">
                            <h4>实验室主任</h4>
                            <p>负责实验室全面工作</p>
                        </div>
                    </div>
                    <div class="org-level">
                        <div class="org-box">
                            <h4>学术委员会</h4>
                            <p>学术指导与决策</p>
                        </div>
                        <div class="org-box">
                            <h4>管理委员会</h4>
                            <p>日常管理与运营</p>
                        </div>
                    </div>
                    <div class="org-level">
                        <div class="org-box">
                            <h4>水生态修复组</h4>
                            <p>生态修复技术研究</p>
                        </div>
                        <div class="org-box">
                            <h4>水质监测组</h4>
                            <p>监测技术与设备</p>
                        </div>
                        <div class="org-box">
                            <h4>流域治理组</h4>
                            <p>综合治理方案</p>
                        </div>
                        <div class="org-box">
                            <h4>技术服务组</h4>
                            <p>成果转化应用</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            timeline: [
                {
                    year: '2018',
                    title: '实验室成立',
                    description: '河流源头水生态保护江西省重点实验室正式成立，开始组建研究团队',
                    delay: 100
                },
                {
                    year: '2019',
                    title: '设备建设',
                    description: '引进先进的水质检测设备和生态监测系统，完善实验室基础设施',
                    delay: 200
                },
                {
                    year: '2020',
                    title: '首批成果',
                    description: '在河流生态修复技术方面取得重要突破，发表多篇高质量学术论文',
                    delay: 300
                },
                {
                    year: '2021',
                    title: '产学研合作',
                    description: '与多家高校和企业建立合作关系，推动科研成果产业化',
                    delay: 400
                },
                {
                    year: '2022',
                    title: '技术应用',
                    description: '多项技术成果在江西省水生态保护项目中成功应用',
                    delay: 500
                },
                {
                    year: '2023',
                    title: '国际合作',
                    description: '与国外知名研究机构建立合作关系，提升国际影响力',
                    delay: 600
                },
                {
                    year: '2024',
                    title: '创新发展',
                    description: '持续推进技术创新，为江西省生态文明建设提供更强支撑',
                    delay: 700
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

/* 实验室简介 */
.intro-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
}

.intro-description p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--gray);
}

.image-placeholder {
    width: 100%;
    height: 400px;
    background: var(--light-gray);
    border-radius: var(--border-radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder-content {
    text-align: center;
    color: var(--gray);
}

.placeholder-content svg {
    margin-bottom: 1rem;
}

/* 发展历程 */
.timeline-section {
    background: var(--light-gray);
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient-primary);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
}

.timeline-item:nth-child(odd) {
    flex-direction: row;
}

.timeline-item:nth-child(even) {
    flex-direction: row-reverse;
}

.timeline-year {
    flex: 0 0 120px;
    background: var(--primary-blue);
    color: var(--white);
    padding: 1rem;
    border-radius: var(--border-radius);
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    position: relative;
    z-index: 2;
}

.timeline-content {
    flex: 1;
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    margin: 0 2rem;
}

.timeline-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--dark-gray);
}

.timeline-desc {
    color: var(--gray);
    line-height: 1.6;
}

/* 使命愿景 */
.mission-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.mission-item {
    background: var(--white);
    padding: 3rem 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: var(--transition);
}

.mission-item:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.mission-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: var(--light-blue);
    border-radius: 50%;
    color: var(--primary-blue);
    margin-bottom: 1.5rem;
}

.mission-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--dark-gray);
}

.mission-desc {
    color: var(--gray);
    line-height: 1.8;
}

/* 组织架构 */
.organization-section {
    background: var(--light-gray);
}

.org-chart {
    max-width: 900px;
    margin: 0 auto;
}

.org-level {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.org-box {
    background: var(--white);
    padding: 2rem 1.5rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    text-align: center;
    min-width: 180px;
    transition: var(--transition);
}

.org-box:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.org-box.director {
    background: var(--gradient-primary);
    color: var(--white);
}

.org-box h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.org-box p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .intro-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .timeline::before {
        left: 20px;
    }

    .timeline-item {
        flex-direction: row !important;
        margin-left: 40px;
    }

    .timeline-year {
        flex: 0 0 80px;
        font-size: 1rem;
        padding: 0.75rem;
    }

    .timeline-content {
        margin: 0 0 0 1.5rem;
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .mission-grid {
        grid-template-columns: 1fr;
    }

    .org-level {
        flex-direction: column;
        align-items: center;
    }

    .timeline-year {
        flex: 0 0 60px;
        font-size: 0.9rem;
        padding: 0.5rem;
    }

    .timeline-content {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .mission-item {
        padding: 2rem 1.5rem;
    }

    .org-box {
        min-width: 160px;
        padding: 1.5rem 1rem;
    }
}
</style>