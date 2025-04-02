import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import RandomFacts from '../views/RandomFacts.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/about', name: "About", component: () => import("../views/About.vue") },
    { path: '/random-facts', name: "RandomFacts", component: () => import("../views/RandomFacts.vue") },
    { path: '/contact', name: "Contact", component: () => import("../views/Contact.vue") },
    { path: '/not-found', name: "NotFound", component: () => import("../views/NotFound.vue") },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;