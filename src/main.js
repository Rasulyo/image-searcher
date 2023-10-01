import { createApp } from 'vue';
import { createVfm } from 'vue-final-modal'
import Notifications from '@kyvg/vue3-notification'
import 'vue-final-modal/style.css'
import './style.css';
import App from './App.vue';
import router from './routes';
import store from './store/store';

createApp(App).use(router).use(store).use(createVfm()).use(Notifications).mount('#app');
