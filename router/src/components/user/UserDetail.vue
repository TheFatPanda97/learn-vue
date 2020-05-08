<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link
            tag="button"
            :to="{
                name: 'editRoute',
                params: { id: $route.params.id },
                query: { locale: 'en', q: 100 },
                hash: '#data',
                beforeRouteEnter(to, from, next) {
                    next();
                },
            }"
            class="btn btn-primary"
            >Edit User</router-link
        >
    </div>
</template>
