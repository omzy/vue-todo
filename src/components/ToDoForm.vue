<template>
  <form v-on:submit.prevent="submitForm" autocomplete="off">
    <div class="field">
      <label for="todo-name">Name</label>
      <input type="text" id="todo-name" v-model="name">
      <button type="submit">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      success: false
    }
  },
  methods: {
    submitForm: function (event) {
      if (this.name !== null) {
        this.$emit('addToDo', this.name)

        if (this.success) {
          this.name = null
          event.target.reset()

          this.$emit('showFlash', ['success', 'To do successfully added!'])
        } else {
          this.$emit('showFlash', ['error', 'To do already exists!'])
        }
      } else {
        this.$emit('showFlash', ['error', 'To do cannot be blank!'])
      }
    }
  }
}
</script>

<style scoped>
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

  .field input:focus {
    outline: none;
    border-color: #333;
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

  .field button:focus {
    outline: none;
    border-color: #333;
  }
</style>
