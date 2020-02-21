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
  }, 
  props: [
    // "updateUser"
  ],
  // mounted() {
  //   this.updateUser()
  // },
  methods: {
    // updateUser() {
    //   if (localStorage.length === 3) {
    //   this.user = localStorage.getItem('userId')
    //   this.token = localStorage.getItem('userToken')
    //   }
    //   else {
    //     this.user = ''
    //     this.token = ''
    //   }
    // }
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
  margin-top: 5%;
}

/* nav {
  background-color: rgba(0,0,0,0)
} */
</style>
