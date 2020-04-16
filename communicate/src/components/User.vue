<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <p>{{ name }}</p>
        <app-user-detail 
        :name="name" 
        @nameWasReset="name = $event" 
        :resetFn="resetName" 
        :age="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit 
        :age="age" 
        @ageWasEdited="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Shawn",
      age: 19
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Serena";
    },
    resetName() {
      this.name = "Shawn";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
