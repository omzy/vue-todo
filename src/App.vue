<template>
  <div id="app">
    <main>
      <h1>{{ title }}</h1>
      <todo></todo>
    </main>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  components: {
    'todo' : ToDo
  },
  data() {
    return {
      title: 'To Do List App'
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: #f9f9f9;
    font-family: Arial,serif;
    font-size: 14px;
    color: #636b6f;
    line-height: 1;
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: calc(100% - 50px);
    max-width: 900px;
    padding: 55px 65px 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    height: calc(100% - 50px);
  }

  h1 {
    margin-bottom: 35px;
    font-size: 36px;
  }
</style>
