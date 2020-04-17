import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.filter("toLowercase", (value) => {
    return value.toLowerCase();
});

Vue.mixin({
    created() {
        console.log("global mixin created");
    },
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
