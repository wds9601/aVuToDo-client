<template>
    <div>
        <h1>This is the Portal page.</h1>  
        <h3>Login, Signup, and Slideshow links here.</h3>
        <h4>Login and signup will be through modal?</h4>
        <div class="image-container">
            <button>Login</button>
            <button v-on:click="navSignup()">Signup</button>
            <button v-on:click="navSlideshow()">Image Slideshow</button>
        </div>
    </div>
</template>

<script>
// import Signup from './Signup.vue'
export default {
    name: "Portal",
    methods: {
        navSignup() {
            this.$router.push('/signup')
        },
        navSlideshow() {
            this.$router.push('/slideshow')
        }
    }
}
</script>

<style scoped>

.image-container {
    height: 90vh;
    width: 99vw;
    background-color: #ff4499

}

</style>