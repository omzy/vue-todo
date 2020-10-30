<template>
  <div class="current-todos">
    <table v-if="todos.length">
      <thead>
        <tr>
          <th class="name">Name</th>
          <th class="actions">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo">
          <td class="name">{{ todo }}</td>
          <td class="actions">
            <button type="button" @click="removeTask(todo)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>There are currently no to do's. Add one above.</p>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    removeTask: function (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)

      this.$emit('showFlash', ['success', 'To do successfully deleted!'])
    }
  }
}
</script>

<style scoped>
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
  }

  table th, table td {
    padding: 10px;
    border: 1px solid #ccc;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  table .name {
    width: 332px;
  }

  table .actions {
    width: 50px;
  }

  table .actions button {
    width: 70px;
    height: 32px;
    cursor: pointer;
    font-family: Arial, serif;
    font-size: 14px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    color: #636b6f;
  }
</style>
