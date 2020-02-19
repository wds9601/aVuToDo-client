<template>
  <div id="app">
    <nav>
      <router-link to="/">Landing Page |</router-link>
      <router-link to="/portal"> Portal Page |</router-link>
      <router-link to="/slideshow"> Slideshow |</router-link>
    </nav>
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Landing /> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Landing
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
  margin-top: 60px;
}
</style>
