import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueDebounce from "vue-debounce";
import VTooltip from 'v-tooltip'
Vue.config.productionTip = false;
Vue.use(VTooltip);
Vue.use(vueDebounce, {
  listenTo: "input",
});
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");