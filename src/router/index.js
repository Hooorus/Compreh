import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //main page
    {
        path: '/home',
        alias: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    //login & register page
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue')
    },
    //personal profile & setting
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/ProfileView.vue')
    },
    //find what?
    {
        path: '/findwhat',
        name: 'findwhat',
        component: () => import('../views/FindWhatView.vue')
    },
    //message queues
    {
        path: '/message',
        name: 'message',
        component: () => import('../views/MessageView.vue')
    },
    //friends lists
    {
        path: '/friends',
        name: 'friends',
        component: () => import('../views/FriendsView')
    },
    //notice
    {
        path: '/notification',
        name: 'notification',
        component: () => import('../views/NotificationView.vue')
    },
    //what you like & collect
    {
        path: '/archive',
        name: 'archive',
        component: () => import('../views/ArchiveView.vue')
    },
    //supermarket
    {
        path: '/marketplace',
        name: 'marketplace',
        component: () => import('../views/MarketplaceView.vue')
    },
    //supermarket
    {
        path: '/trash',
        name: 'trash',
        component: () => import('../views/TrashView.vue')
    },
    //monitor dashboard
    {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/SettingView.vue')
    },
    //monitor dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue')
    },

]

const router = new VueRouter({
    routes
})
export default router
