<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Landing Page |</router-link>
      <router-link to="/portal"> Portal Page |</router-link>
      <router-link to="/slideshow"> Slideshow |</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user: null,
      token: ''
    }
  }, 
  props: [
    // "updateUser"
  ],
  methods: {
    updateUser({user}, token) {
      this.user = {user}
      this.token = token
    }
  }
  // created: function() {
  //   this.decodeToken()
  // },
  // methods: {
  //   decodeToken(existingToken) {
  //     let token = existingToken || localStorage.getItem('userToken')
  //     if (token) {
  //       let decoded = this.$jwtDec(token)

  //       if (!decoded || Date.now() > decoded.exp * 1000) {
  //         console.log('Expired or bad token')
  //         this.user = null
  //       }
  //       else {
  //         console.log('Yippeeee!')
  //         this.user = decoded
  //       }
  //     }
  //     else {
  //       this.user = null
  //     }

  //   }
  // }
  // props: [
  //   ""
  // ]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
