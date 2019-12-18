import Vue from 'vue';
import App from './app.vue';
import router from './router';
import ElementUI  from './element';

import 'babel-polyfill';



new Vue({
	router,
	render: h=>h(App)
}).$mount("#app");