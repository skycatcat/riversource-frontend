<template>
    <div class="team-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">团队成员</h1>
                    <p class="page-subtitle">专业的科研团队与技术专家</p>
                </div>
            </div>
        </section>

        <!-- 团队介绍 -->
        <section class="team-intro py-5">
            <div class="container">
                <div class="intro-content text-center" data-aos="fade-up">
                    <h2 class="section-title">团队简介</h2>
                    <p class="intro-text">
                        实验室拥有一支高素质、多学科的科研团队，包括资深教授、副教授、博士后研究人员和优秀的研究生。
                        团队成员在水生态保护、环境工程、生物技术等领域具有丰富的研究经验和卓越的学术成就。
                    </p>
                </div>
            </div>
        </section>

        <!-- 核心成员 -->
        <section class="core-members py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">核心成员</h2>
                    <p class="section-subtitle">学术带头人与研究骨干</p>
                </div>
                <div class="members-grid">
                    <div class="member-card" v-for="member in coreMembers" :key="member.id" data-aos="zoom-in"
                        :data-aos-delay="member.delay">
                        <div class="member-avatar">
                            <div class="avatar-placeholder">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3 class="member-name">{{ member.name }}</h3>
                            <p class="member-title">{{ member.title }}</p>
                            <p class="member-education">{{ member.education }}</p>
                            <p class="member-research">研究方向：{{ member.research }}</p>
                            <div class="member-achievements">
                                <span class="achievement-tag" v-for="achievement in member.achievements"
                                    :key="achievement">
                                    {{ achievement }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 研究团队 -->
        <section class="research-teams py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">研究团队</h2>
                    <p class="section-subtitle">专业化研究小组</p>
                </div>
                <div class="teams-grid">
                    <div class="team-card" v-for="team in researchTeams" :key="team.id" data-aos="fade-up"
                        :data-aos-delay="team.delay">
                        <div class="team-header">
                            <div class="team-icon" v-html="team.icon"></div>
                            <h3 class="team-name">{{ team.name }}</h3>
                        </div>
                        <div class="team-content">
                            <p class="team-description">{{ team.description }}</p>
                            <div class="team-stats">
                                <div class="stat-item">
                                    <span class="stat-number">{{ team.memberCount }}</span>
                                    <span class="stat-label">成员</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">{{ team.projectCount }}</span>
                                    <span class="stat-label">项目</span>
                                </div>
                            </div>
                            <div class="team-leader">
                                <strong>团队负责人：</strong>{{ team.leader }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 联系我们 -->
        <section class="contact-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">人才招聘</h2>
                    <p class="section-subtitle">诚邀优秀人才加入我们的团队</p>
                </div>
                <div class="recruitment-content" data-aos="fade-up">
                    <div class="recruitment-text">
                        <h3>招聘岗位</h3>
                        <ul class="position-list">
                            <li>博士后研究人员（水生态保护方向）</li>
                            <li>高级工程师（环境监测技术）</li>
                            <li>研究助理（数据分析与处理）</li>
                            <li>项目管理专员</li>
                        </ul>
                        <div class="contact-info">
                            <p><strong>联系方式：</strong></p>
                            <p>邮箱：hr@riverlab.edu.cn</p>
                            <p>电话：0791-xxxxxxxx</p>
                            <p>地址：江西省南昌市</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TeamPage',
    data() {
        return {
            coreMembers: [
                {
                    id: 1,
                    name: '王观石教授',
                    title: '实验室主任',
                    education: '博士，中南大学',
                    research: '矿物加工工程、环境工程',
                    achievements: ['国家杰青', '长江学者', '50+论文'],
                    delay: 100
                },
                {
                    id: 2,
                    name: '张明义研究员',
                    title: '柔性引进专家',
                    education: '博士，中科院',
                    research: '环境地球化学、污染物迁移',
                    achievements: ['中科院百人计划', '优秀青年基金', '30+论文'],
                    delay: 200
                },
                {
                    id: 3,
                    name: '刘刚研究员',
                    title: '柔性引进专家',
                    education: '博士，清华大学',
                    research: '水环境修复、生态工程',
                    achievements: ['科技进步奖', '青年拔尖人才', '25+论文'],
                    delay: 300
                },
                {
                    id: 4,
                    name: '梁恒教授',
                    title: '柔性引进专家',
                    education: '博士，哈尔滨工业大学',
                    research: '水处理技术、膜分离技术',
                    achievements: ['国家优青', '青年长江学者', '40+论文'],
                    delay: 400
                },
                {
                    id: 5,
                    name: '张杰院士',
                    title: '学术委员会主任',
                    education: '博士，中国科学院',
                    research: '环境工程、水污染控制',
                    achievements: ['中国工程院院士', '国家科技进步奖', '100+论文'],
                    delay: 500
                }
            ],
            researchTeams: [
                {
                    id: 1,
                    name: '水生态修复团队',
                    description: '专注于河流生态系统修复技术研究与应用，开发适合本地条件的生态修复方案。',
                    memberCount: 8,
                    projectCount: 5,
                    leader: '张伟教授',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C8.1 17.5 10.67 12.67 18 11c-2.5-1.5-5-2.5-8-3z"/></svg>',
                    delay: 100
                },
                {
                    id: 2,
                    name: '水质监测团队',
                    description: '研发先进的水质检测技术和智能监测设备，建立完善的水质监测体系。',
                    memberCount: 6,
                    projectCount: 4,
                    leader: '李明副教授',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 9h11z"/><circle cx="12" cy="15.5" r="2.5"/></svg>',
                    delay: 200
                },
                {
                    id: 3,
                    name: '流域治理团队',
                    description: '从流域整体角度出发，制定综合性的水生态保护和治理解决方案。',
                    memberCount: 7,
                    projectCount: 6,
                    leader: '王芳研究员',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg>',
                    delay: 300
                },
                {
                    id: 4,
                    name: '技术转化团队',
                    description: '推动科研成果的产业化应用，为政府和企业提供专业的技术服务。',
                    memberCount: 5,
                    projectCount: 8,
                    leader: '刘华副研究员',
                    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L13.09,8.26L22,9L17,14L18.18,22.91L12,19.5L5.82,22.91L7,14L2,9L10.91,8.26L12,2Z" /></svg>',
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

/* 团队介绍 */
.team-intro {
    background: var(--light-gray);
}

.intro-text {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray);
}

/* 核心成员 */
.members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.member-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    padding: 2rem;
    text-align: center;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.member-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.member-avatar {
    margin-bottom: 1.5rem;
}

.avatar-placeholder {
    width: 120px;
    height: 120px;
    background: var(--light-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: var(--primary-blue);
}

.member-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 0.5rem;
}

.member-title {
    font-size: 1.1rem;
    color: var(--primary-blue);
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.member-education {
    color: var(--gray);
    margin-bottom: 1rem;
}

.member-research {
    color: var(--dark-gray);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.member-achievements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.achievement-tag {
    background: var(--light-green);
    color: var(--primary-green);
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 500;
}

/* 研究团队 */
.research-teams {
    background: var(--light-gray);
}

.teams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.team-card {
    background: var(--white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.team-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.team-header {
    background: var(--gradient-secondary);
    color: var(--white);
    padding: 2rem;
    text-align: center;
}

.team-icon {
    margin-bottom: 1rem;
}

.team-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.team-content {
    padding: 2rem;
}

.team-description {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.team-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    justify-content: center;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-blue);
}

.stat-label {
    color: var(--gray);
    font-size: 0.9rem;
}

.team-leader {
    color: var(--dark-gray);
    font-size: 0.9rem;
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid var(--light-gray);
}

/* 联系我们 */
.recruitment-content {
    max-width: 600px;
    margin: 0 auto;
    background: var(--white);
    padding: 3rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
}

.recruitment-text h3 {
    color: var(--dark-gray);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.position-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
}

.position-list li {
    position: relative;
    padding: 0.75rem 0 0.75rem 2rem;
    color: var(--dark-gray);
    border-bottom: 1px solid var(--light-gray);
}

.position-list li:last-child {
    border-bottom: none;
}

.position-list li::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0.75rem;
    color: var(--primary-blue);
    font-weight: bold;
    font-size: 1.2rem;
}

.contact-info {
    background: var(--light-gray);
    padding: 1.5rem;
    border-radius: var(--border-radius);
}

.contact-info p {
    margin-bottom: 0.5rem;
    color: var(--dark-gray);
}

.contact-info p:last-child {
    margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .members-grid {
        grid-template-columns: 1fr;
    }

    .teams-grid {
        grid-template-columns: 1fr;
    }

    .team-stats {
        gap: 1rem;
    }

    .recruitment-content {
        padding: 2rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .member-card {
        padding: 1.5rem;
    }

    .avatar-placeholder {
        width: 100px;
        height: 100px;
    }

    .team-header {
        padding: 1.5rem;
    }

    .team-content {
        padding: 1.5rem;
    }
}
</style>