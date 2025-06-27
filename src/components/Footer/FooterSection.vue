<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="container">
                <div class="footer-grid">
                    <!-- 实验室信息 -->
                    <div class="footer-section">
                        <h3 class="footer-title">河流源头水生态保护江西省重点实验室</h3>
                        <p class="footer-desc">
                            致力于河流源头水生态系统保护与修复技术研究，推动江西省水生态环境可持续发展。
                        </p>
                        <div class="footer-social">
                            <a href="#" class="social-link" aria-label="微信公众号">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M8.5 12.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm7 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" />
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.5 0-4.5-1.5-4.5-3.5 0-1 .5-1.9 1.3-2.5-.1-.3-.2-.7-.2-1 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .3-.1.7-.2 1 .8.6 1.3 1.5 1.3 2.5 0 2-2 3.5-4.5 3.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- 快速链接 -->
                    <div class="footer-section">
                        <h4 class="section-title">快速链接</h4>
                        <ul class="footer-links">
                            <li><router-link to="/about">实验室概况</router-link></li>
                            <li><router-link to="/research">研究方向</router-link></li>
                            <li><router-link to="/achievements">成果展示</router-link></li>
                            <li><router-link to="/team">团队成员</router-link></li>
                        </ul>
                    </div>

                    <!-- 研究领域 -->
                    <div class="footer-section">
                        <h4 class="section-title">研究领域</h4>
                        <ul class="footer-links">
                            <li><a href="#">水生态修复</a></li>
                            <li><a href="#">流域治理</a></li>
                            <li><a href="#">水质监测</a></li>
                            <li><a href="#">生态评估</a></li>
                        </ul>
                    </div>

                    <!-- 联系信息 -->
                    <div class="footer-section">
                        <h4 class="section-title">联系我们</h4>
                        <div class="contact-info">
                            <div class="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <span>江西省赣州市客家大道1958号</span>
                            </div>
                            <div class="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <span>18870102741</span>
                            </div>
                            <div class="contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span>lianjf@jxust.edu.cn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 版权信息 -->
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; {{ currentYear }} 河流源头水生态保护江西省重点实验室. 保留所有权利.</p>
                    </div>
                    <div class="footer-links-inline">
                        <a href="#">隐私政策</a>
                        <a href="#">使用条款</a>
                        <a href="#">网站地图</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection',
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.footer {
    background: var(--dark-gray);
    color: var(--white);
    margin-top: auto;
}

.footer-content {
    padding: 3rem 0 2rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
}

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 0.5rem;
}

.footer-desc {
    color: #cbd5e0;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    transition: var(--transition);
}

.social-link:hover {
    background: var(--primary-blue);
    transform: translateY(-2px);
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 0.5rem;
}

.footer-links a {
    color: #cbd5e0;
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--primary-blue);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cbd5e0;
}

.contact-item svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem 0;
    background: rgba(0, 0, 0, 0.2);
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright {
    color: #cbd5e0;
    font-size: 0.9rem;
}

.footer-links-inline {
    display: flex;
    gap: 2rem;
}

.footer-links-inline a {
    color: #cbd5e0;
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition);
}

.footer-links-inline a:hover {
    color: var(--primary-blue);
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .footer-grid {
        grid-template-columns: 2fr 1fr 1fr;
    }

    .footer-grid .footer-section:last-child {
        grid-column: 1 / -1;
    }
}

@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .footer-links-inline {
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .footer-content {
        padding: 2rem 0 1.5rem;
    }

    .footer-links-inline {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>