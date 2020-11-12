<template>
  <div class="main">
    <h2>Add a New To Do</h2>

    <ToDoForm v-on:addToDo="updateToDoList" v-on:showFlash="showFlash" ref="toDoForm"></ToDoForm>

    <h2>Current To Do's</h2>

    <ToDoListView v-bind:todos="todos" v-on:showFlash="showFlash"></ToDoListView>
  </div>
</template>

<script>
import ToDoForm from "@/components/ToDoForm";
import ToDoListView from "@/components/ToDoListView";

export default {
  components: {
    ToDoForm,
    ToDoListView
  },
  data() {
    return {
      todos: []
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
    showFlash: function (data) {
      this.$emit('showFlash', data)
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
