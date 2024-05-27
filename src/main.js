import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'
import '@/styles/index.less'

// import './style/global.less'

const app = createApp(App)
app
  .use(Antd)
//   .use(store)
  .use(router)
  .mount('#app')
