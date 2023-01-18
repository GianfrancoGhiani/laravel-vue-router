import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/404-not-found',
            name: 'not-found',
            component: NotFoundPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        }
    ]
});
export{router};
