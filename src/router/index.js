import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';
import MyCvVIEW from '@/views/MyCvVIEW.vue';
import NotFound from '@/views/NotFound.vue';
import ProjectDetails from '@/components/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    { path: '/projects/:id(\\d+)', name: 'project-details', component: ProjectDetails, props: true },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/my-cv',
      name: 'my-cv',
      component: MyCvVIEW,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound},
  ],
})

export default router
