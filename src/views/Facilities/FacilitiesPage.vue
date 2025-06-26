<template>
    <div class="facilities-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">平台条件</h1>
                    <p class="page-subtitle">先进的科研设备与实验平台</p>
                </div>
            </div>
        </section>

        <!-- 平台设施 -->
        <section class="facilities-overview py-5">
            <div class="container">
                <div class="facilities-grid">
                    <div class="facility-card" v-for="facility in facilities" :key="facility.id" data-aos="fade-up"
                        :data-aos-delay="facility.delay">
                        <div class="facility-header">
                            <div class="facility-icon" v-html="facility.icon"></div>
                            <h3 class="facility-title">{{ facility.title }}</h3>
                        </div>
                        <div class="facility-content">
                            <p class="facility-desc">{{ facility.description }}</p>
                            <ul class="equipment-list">
                                <li v-for="equipment in facility.equipment" :key="equipment">{{ equipment }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 技术服务 -->
        <section class="services-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">技术服务</h2>
                    <p class="section-subtitle">为社会提供专业的技术支持</p>
                </div>
                <div class="services-grid">
                    <div class="service-item" v-for="service in services" :key="service.id" data-aos="zoom-in"
                        :data-aos-delay="service.delay">
                        <h4 class="service-title">{{ service.title }}</h4>
                        <p class="service-desc">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FacilitiesPage',
    data() {
        return {
            facilities: [
                {
                    id: 1,
                    title: '实验场地',
                    description: '拥有3800余平方米实验用房，为科研工作提供充足的物理空间保障。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
                    equipment: [
                        '专业实验室20余间',
                        '大型仪器设备用房',
                        '样品前处理室',
                        '数据分析与处理中心'
                    ],
                    delay: 100
                },
                {
                    id: 2,
                    title: '核心仪器设备',
                    description: '配备总价值3000万元的先进仪器设备，涵盖水质检测、污染物分析等多个领域。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 9h11z"/><circle cx="12" cy="15.5" r="2.5"/></svg>',
                    equipment: [
                        '显微红外光谱仪',
                        '电感耦合等离子体发射光谱仪',
                        '原子荧光光谱仪',
                        '液相色谱质谱联用仪',
                        '扫描电子显微镜'
                    ],
                    delay: 200
                },
                {
                    id: 3,
                    title: '监测分析平台',
                    description: '建立完善的环境监测和污染物分析技术平台，支撑科研和技术服务。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
                    equipment: [
                        '在线水质监测系统',
                        '多参数同步检测设备',
                        '污染物快速检测装置',
                        '环境样品自动处理系统'
                    ],
                    delay: 300
                },
                {
                    id: 4,
                    title: '数字化支撑平台',
                    description: '高性能计算和数据处理平台，支持大数据分析、数值模拟和智能决策。',
                    icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" /></svg>',
                    equipment: [
                        '高性能计算集群',
                        '大容量数据存储系统',
                        '专业数值模拟软件',
                        '数字孪生开发平台'
                    ],
                    delay: 400
                }
            ],
            services: [
                {
                    id: 1,
                    title: '水质检测服务',
                    description: '提供专业的水质检测和分析服务，出具权威检测报告',
                    delay: 100
                },
                {
                    id: 2,
                    title: '生态评估咨询',
                    description: '开展水生态系统健康评估，提供科学的评估报告',
                    delay: 200
                },
                {
                    id: 3,
                    title: '技术培训',
                    description: '为相关人员提供水生态保护技术培训和指导',
                    delay: 300
                },
                {
                    id: 4,
                    title: '方案设计',
                    description: '为水生态修复项目提供专业的技术方案设计',
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

.facilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.facility-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.facility-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.facility-header {
    background: var(--gradient-secondary);
    color: var(--white);
    padding: 2rem;
    text-align: center;
}

.facility-icon {
    margin-bottom: 1rem;
}

.facility-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
}

.facility-content {
    padding: 2rem;
}

.facility-desc {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.equipment-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.equipment-list li {
    position: relative;
    padding: 0.5rem 0 0.5rem 2rem;
    color: var(--dark-gray);
    border-bottom: 1px solid var(--light-gray);
}

.equipment-list li:last-child {
    border-bottom: none;
}

.equipment-list li::before {
    content: '▶';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: var(--primary-blue);
    font-size: 0.8rem;
}

.services-section {
    background: var(--light-gray);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-item {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    text-align: center;
    transition: var(--transition);
    border-top: 4px solid var(--primary-green);
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 1rem;
}

.service-desc {
    color: var(--gray);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .facilities-grid {
        grid-template-columns: 1fr;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }
}
</style>