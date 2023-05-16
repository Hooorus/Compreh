import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/exception/ExceptionView.vue')
    },
    //login & register page
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/LoginPage.vue')
    },
    {
        path: '/main',
        component: () =>import('../views/template/MainTemplate.vue'),
        children: [
            //main page
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/HomeView.vue')
            },
            //personal profile & setting user id will dedicated by this.$route.params.id
            {
                path: 'profile/:id',
                name: 'profile',
                component: () => import('../views/ProfileView.vue')
            },
            //find what?
            {
                path: 'findwhat',
                name: 'findwhat',
                component: () => import('../views/FindWhatView.vue')
            },
            //message queues
            {
                path: 'message',
                name: 'message',
                component: () => import('../views/MessageView.vue')
            },
            //friends lists
            {
                path: 'friends',
                name: 'friends',
                component: () => import('../views/FriendsView')
            },
            //notice
            {
                path: 'notification',
                name: 'notification',
                component: () => import('../views/NotificationView.vue')
            },
            //what you like & collect
            {
                path: 'archive',
                name: 'archive',
                component: () => import('../views/ArchiveView.vue')
            },
            //supermarket
            {
                path: 'marketplace',
                name: 'marketplace',
                component: () => import('../views/MarketplaceView.vue')
            },
            //supermarket
            {
                path: 'trash',
                name: 'trash',
                component: () => import('../views/TrashView.vue')
            },
            //monitor dashboard
            {
                path: 'setting',
                name: 'setting',
                component: () => import('../views/SettingView.vue')
            },
        ]
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
