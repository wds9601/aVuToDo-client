<template>
<div>
    <div v-if="!user">
        <div class="image-container">
            <!-- <h3>Login, Signup, and Slideshow links here.</h3>
            <h4>Login and signup will be through modal?</h4> -->
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

// if !user, render login/signup buttons
//if user, redirect to profile

<script>
// import axios from 'axios'

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
        // console.log(this.user._id)

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
                // var url = 'http://localhost:3000'
                // axios.post(`${url}/auth/verify`,{ token })
                // .then(result => {
                //     console.log('This is the result from AXIOS POST VERIFY', result)
                //     localStorage.setItem(result.token)
                //     this.user = result.user
                //     this.token = result.token
                //     // this.getToken()
                // })
                // .catch(err => {
                //     console.log('Error in verify POST', err)
                // })
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