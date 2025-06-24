import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home/HomePage.vue'
import AboutPage from '../views/About/AboutPage.vue'
import ResearchPage from '../views/Research/ResearchPage.vue'
import AchievementsPage from '../views/Achievements/AchievementsPage.vue'
import TeamPage from '../views/Team/TeamPage.vue'
import FacilitiesPage from '../views/Facilities/FacilitiesPage.vue'
import NewsPage from '../views/News/NewsPage.vue'
import ContactPage from '../views/Contact/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: { title: '首页 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
        meta: { title: '实验室概况 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/research',
        name: 'Research',
        component: ResearchPage,
        meta: { title: '研究方向 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/achievements',
        name: 'Achievements',
        component: AchievementsPage,
        meta: { title: '成果展示 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/team',
        name: 'Team',
        component: TeamPage,
        meta: { title: '团队成员 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/facilities',
        name: 'Facilities',
        component: FacilitiesPage,
        meta: { title: '平台条件 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/news',
        name: 'News',
        component: NewsPage,
        meta: { title: '新闻动态 - 河流源头水生态保护江西省重点实验室' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
        meta: { title: '联系我们 - 河流源头水生态保护江西省重点实验室' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router