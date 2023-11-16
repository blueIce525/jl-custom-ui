import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import Test from '../components/lib/index.js';
// import '../components/css/index.scss';
import '../dist/css/index.css';
Vue.use(ElementUI);
Vue.use(Test);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
