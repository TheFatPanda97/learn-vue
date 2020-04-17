<template>
    <div>
        <h1>Built-in Directives</h1>
        <p v-text="'hello world'"></p>
        <p v-html="'<strong>I am angry</strong>'"></p>
        <hr />
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'">Color This</p>
        <p
            v-local-highlight:background.delayed.blink="{
                mainColor: 'red',
                secondColor: 'green',
                delay: 500,
            }"
        >
            Color This, Too
        </p>
    </div>
</template>

<script>
export default {
    directives: {
        "local-highlight": {
            bind(el, binding) {
                var delay = 0;
                if (binding.modifiers["delayed"]) {
                    delay = 3000;
                }
                if (binding.modifiers["blink"]) {
                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor;
                    let currColor = mainColor;

                    setTimeout(() => {
                        setInterval(() => {
                            currColor == secondColor
                                ? (currColor = mainColor)
                                : (currColor = secondColor);

                            if (binding.arg == "background") {
                                el.style.backgroundColor = currColor;
                            } else {
                                el.style.color = currColor;
                            }
                        }, binding.value.delay);
                    }, delay);
                } else {
                    setTimeout(() => {
                        if (binding.arg == "background") {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);
                }
            },
        },
    },
};
</script>

<style></style>
