import { createApp } from 'vue';
import{router} from './router';
import App from './App.vue';
// import Vue3Lottie from 'vue3-lottie'
// import 'vue3-lottie/dist/style.css'

import './assets/styles/main.scss';


createApp(App).use(router).mount('#app');
