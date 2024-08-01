// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import './index.css'

import {createRexUI} from "@/plugins/Vue3RexUI.ts";

const app = createApp(App);

const rexUi = createRexUI();
app.use(rexUi)

app.mount('#app');
