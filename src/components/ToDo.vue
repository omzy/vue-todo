<template>
  <div class="main">
    <h2>Add a New To Do</h2>

    <form @submit.prevent="submitForm" autocomplete="off">
      <div class="field">
        <label for="todo-name">Name</label>
        <input type="text" id="todo-name" v-model="name" required>
        <button type="submit">Add</button>
      </div>
    </form>

    <h2>Current To Do's</h2>

    <table v-if="todos.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo">
          <td>{{ todo }}</td>
          <td>&nbsp;</td>
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
      name: '',
      todos: []
    }
  },
  methods: {
    submitForm: function (event) {
      this.todos.push(this.name)
      this.name = '';
      event.target.reset()
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
    width: 100%;
  }

  table th, table td {
    padding: 10px;
    border: 1px solid #ccc;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }
</style>
