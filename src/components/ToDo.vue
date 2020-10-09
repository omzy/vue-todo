<template>
  <div class="main">
    <h2>Add a New To Do</h2>

    <form @submit.prevent="submitForm" autocomplete="off">
      <div class="field">
        <label for="todo-name">Name</label>
        <input type="text" id="todo-name" v-model="name">
        <button type="submit">Add</button>
      </div>
    </form>

    <h2>Current To Do's</h2>

    <div class="flash" v-bind:class="[ error ? 'error' : 'success' ]" v-show="message">{{ message }}</div>

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
  data() {
    return {
      name: null,
      message: null,
      error: false,
      todos: []
    }
  },
  methods: {
    submitForm: function (event) {
      if (this.name !== null) {
        if (!this.todos.includes(this.name)) {
          this.todos.push(this.name)
          this.name = null;
          event.target.reset()

          this.error = false;
          this.message = 'To do successfully added!'
        } else {
          this.error = true;
          this.message = 'To do already exists!'
        }
      } else {
        this.error = true;
        this.message = 'To do cannot be blank!'
      }
    },
    removeTask: function (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)

      this.error = false;
      this.message = 'To do successfully deleted!'
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

  p {
    margin-bottom: 25px;
  }

  .flash {
    padding: 15px;
    margin-bottom: 25px;
    color: white;
    width: 423px;
  }

  .flash.success {
    background-color: green;
  }

  .flash.error {
    background-color: red;
  }

  form {
    display: flex;
    margin-bottom: 25px;
  }

  .field {
    padding: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }

  .field label {
    padding-right: 10px;
    font-weight: bold;
  }

  .field input {
    width: 250px;
    margin-right: 15px;
    font-family: Arial, serif;
    font-size: 14px;
    padding: 0 10px;
    height: 32px;
    border: 1px solid #ccc;
    color: #636b6f;
  }

  .field button {
    width: 70px;
    height: 32px;
    cursor: pointer;
    font-family: Arial, serif;
    font-size: 14px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    color: #636b6f;
  }

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
