<template>
    <header class="header"
        :class="{ 'scrolled': isScrolled, 'hovered': isHovered, 'home-page': isHomePage, 'non-home': !isHomePage }"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <nav class="navbar">
            <!-- <div class="container"> -->
            <div class="nav-content">
                <!-- Logo区域 -->
                <div class="nav-brand">
                    <router-link to="/" class="brand-link">
                        <div class="logo">
                            <div class="logo-icon">
                                <img src="/src/assets/images/河流源头实验室logo.png" alt="实验室logo" width="80" height="80" />
                            </div>
                            <div class="brand-text" v-if="!shouldHideBrandText">
                                <div class="lab-name">河流源头水生态保护</div>
                                <div class="lab-subtitle">江西省重点实验室</div>
                                <div class="lab-english">Jiangxi Provincial Key Laboratory of Water Ecological Conservation at Headwater Regions</div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- 桌面导航菜单 -->
                <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
                    <li class="nav-item" v-for="item in menuItems" :key="item.name">
                        <router-link :to="item.path" class="nav-link" :class="{ 'active': $route.path === item.path }"
                            @click="closeMobileMenu">
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
            <!-- </div> -->
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderNavigation',
    data() {
        return {
            isScrolled: false,
            isHovered: false,
            mobileMenuOpen: false,
            shouldHideBrandText: false,
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
    computed: {
        isHomePage() {
            return this.$route.path === '/'
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.checkOverlap)
        this.$nextTick(() => {
            this.checkOverlap()
        })
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.checkOverlap)
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
        },
        handleMouseEnter() {
            this.isHovered = true
        },
        handleMouseLeave() {
            this.isHovered = false
        },
        checkOverlap() {
            // 在小屏幕直接隐藏
            if (window.innerWidth <= 820) {
                this.shouldHideBrandText = true
                return
            }
            
            this.$nextTick(() => {
                const navContent = this.$el?.querySelector('.nav-content')
                const logo = this.$el?.querySelector('.logo')
                const navMenu = this.$el?.querySelector('.nav-menu')
                
                if (navContent && logo && navMenu) {
                    const contentWidth = navContent.offsetWidth
                    const logoWidth = logo.offsetWidth
                    const menuWidth = navMenu.offsetWidth
                    const gap = 16 // 1rem gap
                    
                    // 如果logo宽度 + gap + 菜单宽度 > 容器宽度，就隐藏品牌文字
                    if (logoWidth + gap + menuWidth > contentWidth) {
                        this.shouldHideBrandText = true
                    } else {
                        this.shouldHideBrandText = false
                    }
                }
            })
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
    transition: all 0.3s ease;
}

/* 非首页默认有背景 */
.header.non-home {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
}

/* 首页默认透明 */
.header.home-page {
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
}

/* 滚动或悬停时显示背景 */
.header.scrolled,
.header.hovered {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
}

.header.scrolled.hovered {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow-lg);
}

.navbar {
    padding: 0.6rem 0;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
}

.nav-content {
    display: flex;
    align-items: center;
    padding: 0 2rem 0 3.5rem;
    min-width: 0;
    width: 100%;
    max-width: 100%;
    gap: 1rem;
}

.nav-brand {
    flex: 0 0 auto;
    min-width: 0;
}

.nav-brand .brand-link {
    text-decoration: none;
    color: inherit;
}

.logo {
    display: flex;
    align-items: center;
    gap: 20px;
    min-width: 0;
}

.logo-icon {
    flex-shrink: 0;
}

.brand-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.lab-name {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--dark-gray);
    line-height: 1.2;
    white-space: nowrap;
}

.lab-subtitle {
    font-size: 1rem;
    color: var(--gray);
    line-height: 1.2;
    white-space: nowrap;
}

.lab-english {
    font-size: 0.8rem;
    color: var(--gray);
    line-height: 1.2;
    margin-top: 2px;
    white-space: nowrap;
    /* font-style: italic; */
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: clamp(0.5rem, 3vw - 0.5rem, 2.5rem);
    flex: 1 1 auto;
    justify-content: flex-end;
    min-width: 0;
    flex-wrap: nowrap;
    overflow: hidden;
    max-width: none;
}

.nav-item {
    position: relative;
    flex-shrink: 0;
}

.nav-link {
    display: block;
    padding: 0.5rem 0;
    color: var(--dark-gray);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    white-space: nowrap;
    min-width: max-content;
}

/* 在首页透明背景时，提供更好的文字对比度 */
.header.home-page:not(.scrolled):not(.hovered) .nav-link {
    color: var(--white);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.header.home-page:not(.scrolled):not(.hovered) .nav-link:hover,
.header.home-page:not(.scrolled):not(.hovered) .nav-link.active {
    color: var(--white);
}

.header.home-page:not(.scrolled):not(.hovered) .lab-name {
    color: var(--white);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.header.home-page:not(.scrolled):not(.hovered) .lab-subtitle {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.header.home-page:not(.scrolled):not(.hovered) .lab-english {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.header.home-page:not(.scrolled):not(.hovered) .hamburger span {
    background: var(--white);
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
    flex: 0 0 auto;
    margin-left: auto;
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
@media (max-width: 1200px) {
    .nav-content {
        padding: 0 1.5rem 0 2.5rem;
    }

    .lab-name {
        font-size: 1.2rem;
    }

    .lab-subtitle {
        font-size: 0.9rem;
    }

    .lab-english {
        font-size: 0.7rem;
    }
}

@media (max-width: 1000px) {
    .nav-content {
        padding: 0 1rem 0 1.5rem;
    }

    .lab-name {
        font-size: 1.1rem;
    }

    .lab-subtitle {
        font-size: 0.8rem;
    }

    .lab-english {
        font-size: 0.65rem;
    }
}

/* CSS断点作为后备方案 */
@media (max-width: 900px) {
    .nav-content {
        padding: 0 0.75rem 0 1.5rem;
    }
}

@media (max-width: 820px) {
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
    .nav-content {
        padding: 0 0.5rem 0 1rem;
    }
    
    .lab-name {
        font-size: 1rem;
    }

    .navbar {
        padding: 0.25rem 0;
    }
}
</style>