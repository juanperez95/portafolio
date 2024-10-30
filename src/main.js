// Importaciones de librerías
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Utilizar Vuex y Router.
createApp(App).use(router).use(store).mount('#app')
