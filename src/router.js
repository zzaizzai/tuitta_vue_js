import { createWebHistory, createRouter } from "vue-router";
// import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import PostsView from './components/PostsView.vue'

const routes = [
    {
        path: "/",
        component: PostsView,
    },
    {
        path: "/posts",
        component: PostsView,
    },

    {
        path: "/profile",
        component: Profile,
    },

    {
        path: "/register",
        component: Register,
    },
    {
        path: "/login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 