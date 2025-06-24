<template>
    <header class="header" :class="{ 'scrolled': isScrolled }">
        <nav class="navbar">
            <div class="container">
                <div class="nav-content">
                    <!-- Logo区域 -->
                    <div class="nav-brand">
                        <router-link to="/" class="brand-link">
                            <div class="logo">
                                <div class="logo-icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="18" fill="url(#gradient1)" />
                                        <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.2-0.9 4.2-2.3 5.7" stroke="white"
                                            stroke-width="2" fill="none" />
                                        <circle cx="20" cy="15" r="2" fill="white" />
                                        <defs>
                                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style="stop-color:#0066cc" />
                                                <stop offset="100%" style="stop-color:#28a745" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="brand-text">
                                    <div class="lab-name">河流源头水生态保护</div>
                                    <div class="lab-subtitle">江西省重点实验室</div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 桌面导航菜单 -->
                    <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
                        <li class="nav-item" v-for="item in menuItems" :key="item.name">
                            <router-link :to="item.path" class="nav-link"
                                :class="{ 'active': $route.path === item.path }" @click="closeMobileMenu">
                                {{ item.name }}
                            </router-link>
                        </li>
                    </ul>

                    <!-- 移动端菜单按钮 -->
                    <div class="mobile-menu-btn" @click="toggleMobileMenu">
                        <span class="hamburger" :class="{ 'active': mobileMenuOpen }">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderNavigation',
    data() {
        return {
            isScrolled: false,
            mobileMenuOpen: false,
            menuItems: [
                { name: '首页', path: '/' },
                { name: '实验室概况', path: '/about' },
                { name: '研究方向', path: '/research' },
                { name: '成果展示', path: '/achievements' },
                { name: '团队成员', path: '/team' },
                { name: '平台条件', path: '/facilities' },
                { name: '新闻动态', path: '/news' },
                { name: '联系我们', path: '/contact' }
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false
        }
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
}

.header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow-md);
}

.navbar {
    padding: 0.5rem 0;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-brand .brand-link {
    text-decoration: none;
    color: inherit;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    flex-shrink: 0;
}

.brand-text {
    display: flex;
    flex-direction: column;
}

.lab-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--dark-gray);
    line-height: 1.2;
}

.lab-subtitle {
    font-size: 0.9rem;
    color: var(--gray);
    line-height: 1.2;
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: block;
    padding: 0.5rem 0;
    color: var(--dark-gray);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-blue);
}

.mobile-menu-btn {
    display: none;
    cursor: pointer;
    padding: 0.5rem;
}

.hamburger {
    display: block;
    width: 24px;
    height: 18px;
    position: relative;
}

.hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--dark-gray);
    margin: 4px 0;
    transition: var(--transition);
    transform-origin: center;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .nav-menu {
        gap: 1.5rem;
    }

    .lab-name {
        font-size: 1.1rem;
    }

    .lab-subtitle {
        font-size: 0.8rem;
    }
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }

    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        gap: 0;
        padding: 1rem 0;
        box-shadow: var(--shadow-lg);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .nav-item {
        padding: 0 2rem;
    }

    .nav-link {
        padding: 1rem 0;
        border-bottom: 1px solid var(--light-gray);
    }

    .brand-text {
        display: none;
    }
}

@media (max-width: 480px) {
    .lab-name {
        font-size: 1rem;
    }

    .navbar {
        padding: 0.25rem 0;
    }
}
</style>