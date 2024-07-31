import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SkyHead from './components/SkyHead.vue'
import HomeHead from './components/HomeHead.vue'
import SkyFooter from './components/SkyFooter.vue'
import ALotOfCard1 from './components/ALotOfCard1.vue'
import ALotOfCard2 from './components/ALotOfCard2.vue'
import '../node_modules/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css'
import '../node_modules/bootstrap-5.3.0-alpha1-dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-5.3.0-alpha1-dist/css/amy.css'
Vue.config.productionTip = false
Vue.component('SkyFooter', SkyFooter)
Vue.component('ALotOfCard1', ALotOfCard1)
Vue.component('ALotOfCard2', ALotOfCard2)
Vue.component('SkyHead', SkyHead)
Vue.component('HomeHead', HomeHead)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
