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
                                江西省地处我国东南部，流域发达、水系众多，是鄱阳湖水系、湘江水系、东江水系等众多河流的发源地。与大江大河相比，河流发源地作为典型小流域，其生态环境脆弱性更加显著。赣州市作为江西省面积最大和人口最多的行政区域，是我国著名的革命老区，同时也是我国南方地区重要的生态屏障。赣江、东江等河流均发源于此，其水环境状况不仅影响本地，更关系到广东、香港等地6000多万人口的用水安全。
                            </p>
                            <p>
                                赣南地区素有"世界钨都""稀土王国"之称。在矿产资源开采和利用过程中不可避免地对当地生态环境造成了破坏。稀土、钨等开发利用造成土壤和地下水多元污染途径多，原因复杂，控制难度大，已成为制约江西绿色高质量发展的瓶颈。
                            </p>
                            <p>
                                为贯彻落实党的二十大精神和习近平总书记视察江西重要讲话精神，本重点实验室结合我省绿色发展需求与生态文明建设任务，以实现赣江、东江等流域源头水健康循环为目标，开展跨学科创新性应用基础研究，为更高标准打造美丽中国"江西样板"提供科技支撑。
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
          <h2 class="section-title">历史沿革</h2>
          <p class="section-subtitle">实验室建设与发展历程</p>
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

    <!-- 建设意义 -->
    <section class="significance-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5" data-aos="fade-up">
          <h2 class="section-title">建设意义</h2>
          <p class="section-subtitle">推动江西省绿色高质量发展的重要支撑</p>
        </div>
        <div class="significance-grid">
          <div class="significance-item" data-aos="fade-up" data-aos-delay="100">
            <h3 class="significance-title">推动有色金属产业链现代化建设</h3>
            <p class="significance-desc">
              将绿色矿业理念贯穿于矿产资源开发利用全过程，通过科技引领和技术创新，推动资源利用方式和矿业发展方式根本转变，形成绿色矿业发展格局。
            </p>
          </div>
          <div class="significance-item" data-aos="fade-up" data-aos-delay="200">
            <h3 class="significance-title">推动流域生态环境保护和河流源区可持续发展</h3>
            <p class="significance-desc">
              把保护和修复流域源头生态环境摆在首要位置，为河流源头流域水质安全保障提供科技支撑，推进泛珠三角区域合作、进而实现源区的可持续发展。
            </p>
          </div>
          <div class="significance-item" data-aos="fade-up" data-aos-delay="300">
            <h3 class="significance-title">推动地区人才培养和科技创新能力提升</h3>
            <p class="significance-desc">
              通过加强"产学研用"合作，为赣南地区的经济发展和生态环境保护提供更好的技术服务，同时通过统筹科技资源，深化赣南地区生态环境保护科技体制改革。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 优势特色 -->
    <section class="advantages-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5" data-aos="fade-up">
          <h2 class="section-title">优势特色</h2>
          <p class="section-subtitle">不可替代的独特优势</p>
        </div>
        <div class="advantages-content" data-aos="fade-up">
          <p class="advantages-intro">
            省内现有相关实验室主要围绕鄱阳湖及其流域的水资源、水环境和水生态以及污染物控制与资源循环利用等领域开展研究工作。本实验室与之相比，具有不可替代的优势与特色：
          </p>
          <div class="advantages-grid">
            <div class="advantage-card" data-aos="zoom-in" data-aos-delay="100">
              <h4>研究区域的独特性</h4>
              <p>现有实验室缺少对赣江、东江等河流源头以及东江流域污染防控问题的专门研究。</p>
            </div>
            <div class="advantage-card" data-aos="zoom-in" data-aos-delay="200">
              <h4>研究对象的独特性</h4>
              <p>现有实验室未涉及到我省的稀土、钨等重要特色战略资源开发利用过程中产生的污染问题。</p>
            </div>
            <div class="advantage-card" data-aos="zoom-in" data-aos-delay="300">
              <h4>依托单位的独特性</h4>
              <p>江西理工大学位于赣南苏区，区位优势明显、矿冶特色鲜明，被誉为"有色冶金人才摇篮"，在稀土、钨等特色资源开发利用领域具有丰富的技术积累和显著的学科优势。</p>
            </div>
          </div>
          <div class="advantages-conclusion" data-aos="fade-up" data-aos-delay="400">
            <p>
              因此，在江西理工大学建设"河流源头水生态保护江西省重点实验室"，可以依托赣南资源优势以及学校区位优势和矿冶特色，直接服务我省"1269"行动计划，对填补赣江、东江等河流源头水污染控制技术的空白，突破稀土、钨矿山生态治理和选冶过程中的污染控制关键技术，具有不可替代的重要意义。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验室使命与愿景 -->
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
                    year: '2016',
                    title: '基础平台建设',
                    description: '江西省环境岩土与工程灾害控制重点实验室获批建设，为后续实验室重组奠定基础',
                    delay: 100
                },
                {
                    year: '重组前',
                    title: '原有规模',
                    description: '固定人员30人，40岁以下青年骨干19人，博士学位人员18人，实验场地1500m²，仪器设备总值2500万元',
                    delay: 200
                },
                {
                    year: '重组后',
                    title: '全面升级',
                    description: '围绕江西省"1269"行动计划重组优化，研究方向聚焦生态环境领域的河流源头水污染控制',
                    delay: 300
                },
                {
                    year: '现状',
                    title: '显著提升',
                    description: '固定人员增至48人，40岁以下青年骨干24人，博士学位人员43人，实验场地扩展至3800m²，仪器设备总值3000万元',
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
    transition: var(--transition);
    cursor: pointer;
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
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

/* 建设意义 */
.significance-section {
    background: var(--white);
}

.significance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.significance-item {
    background: var(--light-gray);
    padding: 2.5rem 2rem;
    border-radius: var(--border-radius-lg);
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
}

.significance-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.significance-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--dark-gray);
    line-height: 1.4;
}

.significance-desc {
    color: var(--gray);
    line-height: 1.8;
}

/* 优势特色 */
.advantages-section {
    background: var(--light-gray);
}

.advantages-content {
    max-width: 900px;
    margin: 0 auto;
}

.advantages-intro {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray);
    margin-bottom: 3rem;
    text-align: center;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.advantage-card {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    cursor: pointer;
}

.advantage-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.advantage-card h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-blue);
}

.advantage-card p {
    color: var(--gray);
    line-height: 1.6;
}

.advantages-conclusion {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
}

.advantages-conclusion p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--dark-gray);
    margin: 0;
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
    background: var(--white);
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