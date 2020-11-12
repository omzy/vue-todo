import Vue from 'vue'
import App from '@/App.vue'
import SubHeading from '@/components/SubHeading'

Vue.component('sub-heading', SubHeading)

new Vue({
  render: h => h(App),
}).$mount('#app')
