<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Clike Me</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0,
        };
    },
    destroyed() {
        console.log("whoops");
    },
    deactivated() {
        console.log("deactivated");
    },
    activated() {
        console.log("activated");
    },
};
</script>

<style></style>
