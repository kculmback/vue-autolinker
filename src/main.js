import Vue from 'vue'
import App from './App.vue'
import autolinker, { AUTOLINKER_NAME } from './directives/autolinker'

Vue.config.productionTip = false

Vue.directive(AUTOLINKER_NAME, autolinker)

new Vue({
  render: h => h(App),
}).$mount('#app')
