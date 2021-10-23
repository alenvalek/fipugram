import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

Vue.config.productionTip = false;

Vue.use(Croppa);
new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount('#app');
