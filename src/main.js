import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'

const app = createApp(App)

const instance = axios.create({
    baseURL: 'https://qtpq.azurewebsites.net/swagger-ui.html#/'
});

app.config.globalProperties.axios = instance

createApp(App).use(router,VueAxios, axios).mount('#app')
