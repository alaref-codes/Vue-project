import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./filters.js"
import "normalize.css";

Vue.config.productionTip = false;

Vue.directive('bold' , {
  update(el , binding) {
    return el.style.fontSize = binding.value + 'px';
  }
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
