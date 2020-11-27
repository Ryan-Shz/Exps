import Vue from 'vue'

// 使用vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 导入路由对应组件
import Props from './components/props'
import Slot from './components/slot'

// 定义路由
const routes = [
  {path: '/slot', component: Slot},
  {path: '/props', component: Props}
]

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
