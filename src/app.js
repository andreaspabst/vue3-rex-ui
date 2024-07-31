// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import './index.css'

// import { createFormPlugin } from './plugins/Vue3FormHelper.ts'
// const formPlugin = createFormPlugin(axiosInstance);

const app = createApp(App);

// app.use(formPlugin);

app.mount('#app');
