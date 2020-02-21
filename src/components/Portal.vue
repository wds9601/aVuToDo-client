<template>
<div>
    <div v-if="!user">
        <div class="image-container">
            <div v-if="noClicks == true">
                <img src="../assets/aVuToDo-logo-black.png">
            </div>
            <div v-if="noClicks === true" class="button-container">
                <div v-if="login === false">
                    <button class="login-btn" v-on:click="toggleLogin()">Login</button>
                </div>
                <div v-if="signup === false"> 
                    <button class="signup-btn" v-on:click="toggleSignup()">Signup</button>
                </div>
            </div>

            <div v-if="login === true">
                <Login />
            </div>

            <div v-if="signup === true">
                <Signup />
            </div>
        </div>
    </div>

    <div v-else>
        <h1>There is a user!</h1>
        <h2>Should now redirect to profile page</h2>
    </div>
</div>
</template>

<script>
// Import forms components
import Signup from './Signup.vue'
import Login from './Login.vue'

export default {
    // Declare export name, any components needed for the page
    name: "Portal",
    components: {
        Login,
        Signup,
    },
    // Declare default state of the data
    data() {
        return {
            user: null,
            token: '',
            signup: false,
            login: false,
            noClicks: true
        }
    },
    //  When component created, run these functions
    created: function() {
        this.clearToken()
        this.checkForToken()
    },
    //  All the methods being used in this component
    methods: {
        // Clear localStorage token
        clearToken() {
            let token = localStorage.getItem('userToken')
            if (token) {
                localStorage.removeItem('userToken')
                this.token = ''
            }
            else {
                return
            }
        },
        // Check for user token
        checkForToken() {
            let token = localStorage.getItem('userToken')
            console.log('This is the token at beginning of check function', token)
            if (!token || token === undefined || token === null) {
                localStorage.removeItem('userToken')
                this.token = ''
                this.user = null
            }
            else {
                let decode = this.$jwt.decode(token)
                console.log('This is the decoded token from Portal:', decode)

                this.token = localStorage.getItem('userToken')
                this.user = decode
                console.log('Portal - looking to get user._id for router push', decode)
                this.$router.push(`/profile/${this.user._id}`)
            }
        },
        // Toggle which form shows after button click
        toggleLogin() {
            this.login = true
            this.noClicks = false
        },
        toggleSignup() {
            this.signup = true
            this.noClicks = false
        }
    }
}
</script>

<style scoped>
.image-container {
    height: 100vh;
    width: 100vw;
    background-color: #ff4499

}

.login-btn {
    margin: 2%;
    margin-top: 0;
    padding: 2%;
    width: 20%;
    border: 3px solid black;
    background-color: rgba(0,0,0,0);
    font-size: 30px;
}

.signup-btn{
    margin: 2%;
    padding: 2%;
    width: 20%;
    border: 3px solid black;
    background-color: rgba(0,0,0,0);
    font-size: 30px;
}

</style>