import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Chart from 'vue2-frappe'

Vue.use(Chart)

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
