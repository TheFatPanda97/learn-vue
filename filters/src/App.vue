<template>
    <div>
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <button @click="fruits.push('berries')">Add New Item</button>
        <input v-model="filterText" />
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>

        <app-list></app-list>
    </div>
</template>

<script>
import List from "./components/List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
    mixins: [fruitMixin],
    data() {
        return {
            text: "hello there",
        };
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        },
    },
    components: {
        "app-list": List,
    },
    created() {
        console.log("nanniii")
    }
};
</script>

<style></style>
