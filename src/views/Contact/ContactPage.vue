<template>
    <div class="contact-page">
        <!-- 页面头部 -->
        <section class="page-header">
            <div class="container">
                <div class="header-content" data-aos="fade-up">
                    <h1 class="page-title">联系我们</h1>
                    <p class="page-subtitle">期待与您的合作交流</p>
                </div>
            </div>
        </section>

        <!-- 联系信息 -->
        <section class="contact-info py-5">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-details" data-aos="fade-right">
                        <h2 class="section-title">联系方式</h2>
                        <div class="contact-items">
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <div class="contact-content">
                                    <h3>地址</h3>
                                    <p>江西省南昌市红谷滩新区<br>学府大道999号</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </div>
                                <div class="contact-content">
                                    <h3>电话</h3>
                                    <p>办公室：0791-88120000<br>实验室：0791-88120001</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <div class="contact-content">
                                    <h3>邮箱</h3>
                                    <p>办公邮箱：office@riverlab.edu.cn<br>学术邮箱：academic@riverlab.edu.cn</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                                    </svg>
                                </div>
                                <div class="contact-content">
                                    <h3>工作时间</h3>
                                    <p>周一至周五：8:30-17:30<br>周六日：预约访问</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 联系表单 -->
                    <div class="contact-form-section" data-aos="fade-left">
                        <h2 class="section-title">在线留言</h2>
                        <form class="contact-form" @submit.prevent="submitForm">
                            <div class="form-group">
                                <label for="name">姓名 *</label>
                                <input type="text" id="name" v-model="form.name" required>
                            </div>

                            <div class="form-group">
                                <label for="email">邮箱 *</label>
                                <input type="email" id="email" v-model="form.email" required>
                            </div>

                            <div class="form-group">
                                <label for="phone">电话</label>
                                <input type="tel" id="phone" v-model="form.phone">
                            </div>

                            <div class="form-group">
                                <label for="organization">单位/机构</label>
                                <input type="text" id="organization" v-model="form.organization">
                            </div>

                            <div class="form-group">
                                <label for="subject">主题 *</label>
                                <select id="subject" v-model="form.subject" required>
                                    <option value="">请选择咨询主题</option>
                                    <option value="合作交流">合作交流</option>
                                    <option value="技术咨询">技术咨询</option>
                                    <option value="参观访问">参观访问</option>
                                    <option value="人才招聘">人才招聘</option>
                                    <option value="其他">其他</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="message">留言内容 *</label>
                                <textarea id="message" v-model="form.message" rows="5" required
                                    placeholder="请详细描述您的需求或问题..."></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">发送留言</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- 地图位置 -->
        <section class="map-section py-5">
            <div class="container">
                <div class="section-header text-center mb-5" data-aos="fade-up">
                    <h2 class="section-title">位置导航</h2>
                    <p class="section-subtitle">欢迎莅临指导交流</p>
                </div>
                <div class="map-container" data-aos="fade-up">
                    <div class="map-placeholder">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p>地图位置</p>
                        <span>江西省南昌市红谷滩新区</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                organization: '',
                subject: '',
                message: ''
            }
        }
    },
    methods: {
        submitForm() {
            // 表单提交逻辑
            console.log('表单提交:', this.form)
            alert('感谢您的留言，我们会尽快回复！')
            this.resetForm()
        },
        resetForm() {
            this.form = {
                name: '',
                email: '',
                phone: '',
                organization: '',
                subject: '',
                message: ''
            }
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

/* 联系信息 */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.contact-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--light-gray);
    border-radius: var(--border-radius-lg);
}

.contact-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: var(--primary-blue);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 0.5rem;
}

.contact-content p {
    color: var(--gray);
    line-height: 1.6;
}

/* 联系表单 */
.contact-form {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--dark-gray);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--light-gray);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

/* 地图位置 */
.map-section {
    background: var(--light-gray);
}

.map-container {
    max-width: 800px;
    margin: 0 auto;
}

.map-placeholder {
    height: 400px;
    background: var(--white);
    border-radius: var(--border-radius-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    box-shadow: var(--shadow-md);
}

.map-placeholder svg {
    margin-bottom: 1rem;
}

.map-placeholder p {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.map-placeholder span {
    font-size: 1rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }

    .contact-item {
        padding: 1rem;
    }

    .contact-form {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .contact-item {
        flex-direction: column;
        text-align: center;
    }

    .contact-icon {
        align-self: center;
    }
}
</style>