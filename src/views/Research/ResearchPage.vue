<template>
    <div class="research-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">研究方向</h1>
                    <p class="page-subtitle">多维度水生态保护技术研究</p>
                </div>
            </div>
        </section>

        <!-- 研究领域 -->
        <section class="research-areas py-5">
            <div class="container">
                <div class="research-grid">
                    <div class="research-card" v-for="area in researchAreas" :key="area.id" data-aos="fade-up"
                        :data-aos-delay="area.delay">
                        <div class="research-header">
                            <div class="research-icon" v-html="area.icon"></div>
                            <h2 class="research-title">{{ area.title }}</h2>
                        </div>
                        <div class="research-content">
                            <p class="research-desc">{{ area.description }}</p>
                            <ul class="research-points">
                                <li v-for="point in area.points" :key="point">{{ point }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 技术特色 -->
        <section class="tech-features py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">技术特色</h2>
                    <p class="section-subtitle">创新驱动的技术优势</p>
                </div>
                <div class="features-grid">
                    <div class="feature-item" v-for="feature in techFeatures" :key="feature.id" data-aos="zoom-in"
                        :data-aos-delay="feature.delay">
                        <div class="feature-content">
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-desc">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ResearchPage',
    data() {
        return {
            researchAreas: [
                {
                    id: 1,
                    title: '水生态修复技术',
                    description: '专注于河流生态系统的恢复与重建，开发适合江西省水域特点的生态修复技术。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C8.1 17.5 10.67 12.67 18 11c-2.5-1.5-5-2.5-8-3z"/></svg>',
                    points: [
                        '河流植被恢复技术',
                        '水生动物栖息地重建',
                        '生态护岸工程技术',
                        '湿地生态系统构建'
                    ],
                    delay: 100
                },
                {
                    id: 2,
                    title: '水质监测与评估',
                    description: '建立完善的水质监测体系，开发智能化监测设备和评估方法。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 9h11z"/><circle cx="12" cy="15.5" r="2.5"/></svg>',
                    points: [
                        '在线水质监测系统',
                        '多参数同步检测技术',
                        '水质预警预报模型',
                        '生态风险评估方法'
                    ],
                    delay: 200
                },
                {
                    id: 3,
                    title: '流域综合治理',
                    description: '从流域整体角度，制定综合性的水生态保护和治理方案。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg>',
                    points: [
                        '流域水文模型构建',
                        '污染源控制技术',
                        '生态补水技术',
                        '流域管理决策支持系统'
                    ],
                    delay: 300
                },
                {
                    id: 4,
                    title: '生态系统健康评估',
                    description: '建立科学的生态系统健康评估指标体系和评估方法。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
                    points: [
                        '生物多样性评估',
                        '生态系统服务功能评价',
                        '环境压力响应分析',
                        '生态健康诊断技术'
                    ],
                    delay: 400
                }
            ],
            techFeatures: [
                {
                    id: 1,
                    title: '多学科交叉融合',
                    description: '结合生态学、环境工程、信息技术等多个学科，形成综合性技术解决方案',
                    delay: 100
                },
                {
                    id: 2,
                    title: '产学研深度合作',
                    description: '与高校、科研院所和企业建立紧密合作关系，推动技术创新和成果转化',
                    delay: 200
                },
                {
                    id: 3,
                    title: '智能化监测技术',
                    description: '运用物联网、大数据、人工智能等先进技术，提升监测效率和精度',
                    delay: 300
                },
                {
                    id: 4,
                    title: '本土化技术适配',
                    description: '针对江西省水域特点，开发适合本地条件的水生态保护技术',
                    delay: 400
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
    margin-top: 70px;
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

/* 研究领域 */
.research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;
}

.research-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.research-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.research-header {
    background: var(--gradient-secondary);
    color: var(--white);
    padding: 2rem;
    text-align: center;
}

.research-icon {
    margin-bottom: 1rem;
}

.research-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
}

.research-content {
    padding: 2rem;
}

.research-desc {
    color: var(--gray);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.research-points {
    list-style: none;
    padding: 0;
    margin: 0;
}

.research-points li {
    position: relative;
    padding: 0.5rem 0 0.5rem 2rem;
    color: var(--dark-gray);
}

.research-points li::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: var(--primary-green);
    font-weight: bold;
}

/* 技术特色 */
.tech-features {
    background: var(--light-gray);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-item {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    padding: 2.5rem 2rem;
    text-align: center;
    transition: var(--transition);
    border-top: 4px solid var(--primary-blue);
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
}

.feature-desc {
    color: var(--gray);
    line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .research-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .research-header {
        padding: 1.5rem;
    }

    .research-content {
        padding: 1.5rem;
    }

    .feature-item {
        padding: 2rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .research-grid {
        gap: 2rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
}
</style>