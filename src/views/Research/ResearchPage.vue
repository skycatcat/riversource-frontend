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
                    title: '河流源头矿区典型污染物源解析与评估',
                    description: '针对河流源头矿区残留浸矿剂的残留量大与释放周期长等科学问题，开展典型污染物的源解析、迁移规律和环境风险评估研究。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
                    points: [
                        '矿区典型污染物识别与来源解析',
                        '残留浸矿剂释放机理研究',
                        '污染物环境行为特征分析',
                        '生态风险评估模型构建',
                        '污染源头控制技术开发'
                    ],
                    delay: 100
                },
                {
                    id: 2,
                    title: '矿区污染物迁移理论与数值模拟',
                    description: '构建污染物在复杂地质环境中的迁移转化理论模型，建立高精度数值模拟预测系统，为污染防控提供科学依据。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
                    points: [
                        '多孔介质中污染物迁移机理',
                        '地下水-地表水交互作用模拟',
                        '多相流多组分反应输运模型',
                        '数值模拟软件开发与应用',
                        '预测预警系统构建'
                    ],
                    delay: 200
                },
                {
                    id: 3,
                    title: '流域污染物的迁移与环境污染防治',
                    description: '研究流域尺度污染物迁移规律，开发综合性环境污染防治技术体系，实现从源头到末端的全过程污染控制。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg>',
                    points: [
                        '流域污染物迁移路径识别',
                        '水体自净能力评估与提升',
                        '生态修复与治理技术',
                        '污染物削减与控制工程',
                        '流域综合管理策略制定'
                    ],
                    delay: 300
                },
                {
                    id: 4,
                    title: '流域水环境数字孪生与智慧监管',
                    description: '构建流域水环境数字孪生系统，集成物联网、大数据、人工智能等技术，实现智能化监测预警和科学决策支持。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 9h11z"/><circle cx="12" cy="15.5" r="2.5"/><path d="M6 15.5c0 3.31 2.69 6 6 6s6-2.69 6-6"/></svg>',
                    points: [
                        '流域水环境数字孪生平台建设',
                        '多源数据融合与处理技术',
                        '智能监测传感器网络部署',
                        '机器学习预测预警模型',
                        '决策支持与智慧管理系统'
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