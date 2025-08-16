import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/main.css'
// Import Roboto font weights
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';

import BaseCard from '@/components/ui/baseCard.vue';
import BaseButton from '@/components/ui/baseButton.vue';
import BaseBadge from '@/components/ui/baseBadge.vue';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
