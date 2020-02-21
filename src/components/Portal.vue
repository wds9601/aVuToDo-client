<template>
<div>
    <div v-if="!user">
        <div class="image-container">
            <hr/>
            <div v-if="noClicks === true" class="button-container">
                <div v-if="login === false">
                    <button v-on:click="toggleLogin()">Login</button>
                </div>
                <div v-if="signup === false"> 
                    <button v-on:click="toggleSignup()">Signup</button>
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

import Signup from './Signup.vue'
import Login from './Login.vue'

export default {
    name: "Portal",
    components: {
        Login,
        Signup,
    },
    data() {
        return {
            user: null,
            token: '',
            signup: false,
            login: false,
            noClicks: true
        }
    },
    props: [
        // user = this.user
    ],
    created: function() {
        this.clearToken()
        this.checkForToken()

    },
    methods: {
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

</style>