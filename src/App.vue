<template>
  <div id="app">
    <!-- <nav v-if="user">
      <router-link class="" to="/">Landing Page |</router-link>
      <router-link to="/portal"> Portal Page |</router-link>
      <router-link to="/profile"> My ToDos |</router-link>
      <router-link to="/"> Logout</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user: '',
      token: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  overflow-y: scroll;
}

html {
  margin: 0 auto;
}

/* nav {
  background-color: rgba(0,0,0,0)
} */
</style>
