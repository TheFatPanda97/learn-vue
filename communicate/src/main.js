import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount("#app");
