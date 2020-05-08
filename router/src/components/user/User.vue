<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="navHome()">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navHome() {
            this.$router.push({name: "homeRoute"});
        },
    },
};
</script>
