<template>
    <div>
        <h1>Animation</h1>
        <hr />
        <button @click="show = !show">Show Alert</button>
        <hr />
        <transition>
            <div v-if="show">This is some Info</div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style></style>
