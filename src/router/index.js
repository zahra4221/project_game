import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import RulesPage from '@/components/RulesPage.vue';
import TimerPage from '@/components/TimerPage.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/rules',
      name: 'Rules',
      component: RulesPage
    },
    {
      path: '/timer',
      name: 'Timer',
      component: TimerPage
    },
  ]
});

export default router;
