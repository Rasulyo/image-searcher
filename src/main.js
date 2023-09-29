import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import store from './store/store';
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import Notifications from '@kyvg/vue3-notification'

createApp(App).use(router).use(store).use(createVfm()).use(Notifications).mount('#app');
