<template>
  <div id="app">
    <div id="container">
      <header>
        <h1>{{ title }}</h1>
        <nav>
          <ul>
            <li v-bind:class="{ active: activePage === 'home' }">
              <a href="#" v-on:click.prevent="setActivePage('home')">Home</a>
            </li>
            <li v-bind:class="{ active: activePage === 'todo' }">
              <a href="#" v-on:click.prevent="setActivePage('todo')">To Do</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Home v-show="toggleComponent('home')"></Home>
        <ToDo v-show="toggleComponent('todo')"></ToDo>
      </main>

      <footer>
        <p>Copyright 2020 Procure Plus. All Rights Reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import ToDo from './components/ToDo.vue'

export default {
  components: {
    Home,
    ToDo
  },
  data() {
    return {
      title: 'To Do List App',
      activePage: 'home'
    }
  },
  methods: {
    setActivePage: function (page) {
      this.activePage = page
    },
    toggleComponent: function (name) {
      return this.activePage === name
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

  #container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: calc(100% - 50px);
    max-width: 1000px;
    padding: 55px 65px 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    height: calc(100% - 50px);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
  }

    header h1 {
      font-size: 36px;
    }

  nav {
  }

    nav ul {
      list-style-type: none;
    }

      nav ul li {
        float: left;
      }

      nav ul li:not(:last-child) {
        margin-right: 10px;
      }

      nav ul li.active a {
        color: green;
      }

        nav ul li a {
          color: inherit;
          text-decoration: none;
          user-select: none;
        }

  main {
    flex: 1 0 auto;
  }

    main p {
      margin-bottom: 25px;
    }
</style>
