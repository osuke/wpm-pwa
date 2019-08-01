import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // tslint:disable-next-line
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      // tslint:disable-next-line
      console.log('SW registration failed: ', registrationError);
    });
  });
}

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
