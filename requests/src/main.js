import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-http-94841.firebaseio.com/data.json";
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    if(request.method =)
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
