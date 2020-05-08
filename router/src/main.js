import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { routes } from "./routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior(to) {
        if (to.hash) {
            return { selector: to.hash };
        }
    },
});

router.beforeEach((to, from, next) => {
    console.log("global beforeEach");
    next();
});

new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
