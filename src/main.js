import Vue from 'vue'
import App from './App.vue'
import ToDo from './components/ToDo.vue'

Vue.config.productionTip = false

Vue.component('todos', ToDo)

new Vue({
  render: h => h(App),
}).$mount('#app')
