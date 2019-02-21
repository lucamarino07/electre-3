import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueGraph from 'vue-graph'
import GraphLine3D from 'vue-graph/src/components/line3d.js'
import NoteWidget from 'vue-graph/src/widgets/note.js'
import LegendWidget from 'vue-graph/src/widgets/legends.js'
import Chart from 'vue2-frappe'

Vue.use(Chart)

Vue.use(BootstrapVue)
Vue.use(VueGraph)

Vue.component(GraphLine3D.name, GraphLine3D);
Vue.component(NoteWidget.name, NoteWidget);
Vue.component(LegendWidget.name, LegendWidget);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
