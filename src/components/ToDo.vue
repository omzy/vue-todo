<template>
  <div class="main">
    <h2>Add a New To Do</h2>

    <ToDoForm v-on:addToDo="updateToDoList" v-on:showFlash="showFlashMessage" ref="toDoForm"></ToDoForm>

    <h2>Current To Do's</h2>

    <Flash v-bind:flashData="flashData"></Flash>

    <ToDoListView v-bind:todos="todos" v-on:showFlash="showFlashMessage"></ToDoListView>
  </div>
</template>

<script>
import ToDoForm from "@/components/ToDoForm";
import ToDoListView from "@/components/ToDoListView";
import Flash from "@/components/Flash";

export default {
  components: {
    ToDoForm,
    ToDoListView,
    Flash
  },
  data() {
    return {
      todos: [],
      flashData: {}
    }
  },
  methods: {
    updateToDoList: function (name) {
      if (!this.todos.includes(name)) {
        this.todos.push(name)
        this.$refs.toDoForm.success = true
      } else {
        this.$refs.toDoForm.success = false
      }
    },
    showFlashMessage: function (data) {
      this.flashData = {
        status: data[0],
        message: data[1]
      }
    }
  }
}
</script>

<style scoped>
  h2 {
    color: green;
    font-size: 24px;
    margin-bottom: 25px;
  }
</style>
