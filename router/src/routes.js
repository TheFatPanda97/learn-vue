import Home from "./components/Home.vue";
import Header from "./components/user/Header.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserDetail from "./components/user/UserDetail.vue";

export const routes = [
    {
        path: "",
        name: "homeRoute",
        components: {
            default: Home,
            "header-top": Header,
        },
    },
    {
        path: "/user",
        components: {
            default: User,
            "header-bottom": Header,
        },
        children: [
            { path: "", component: UserStart },
            {
                path: ":id",
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log("inside route setup");
                    next();
                },
            },
            { path: ":id/edit", component: UserEdit, name: "editRoute" },
        ],
    },
    { path: "/redirect-me", redirect: { name: "homeRoute" } },
    { path: "**", redirect: "/" },
];
