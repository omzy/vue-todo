<template>
  <div class="main">
    <sub-heading>Add a New To Do</sub-heading>

    <ToDoForm v-on:addToDo="updateToDoList" v-on:showFlash="showFlash" ref="toDoForm"></ToDoForm>

    <sub-heading>Current To Do's</sub-heading>

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
