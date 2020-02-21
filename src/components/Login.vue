<template>
    <div>
        <h2>Log in below</h2>
        <br/>
        <div class="login-form">
            <b-form @submit="Login">
                <b-form-group id="input-group-1" label="Email:" label-for="email">
                    <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Password:" label-for="password">
                    <b-form-input
                        id="password"
                        v-model="form.password"
                        type="password"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Log In</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    // props: ["getToken"],
    methods: {
        Login(e) {
            e.preventDefault()

            let user = {
                email: this.form.email,
                password: this.form.password
            }

            console.log('This is the user object being sent to /auth/login', user)
            // // console.log('This is the URL', process.env.VUE_APP_SERVER_URL)
            this.axios.post(`${process.env.VUE_APP_SERVER_URL}/auth/login`, user)
            .then(response => {
                localStorage.setItem('userToken', response.data.token)
                // this.getToken(response.data),
                console.log('This is being sent to jwt-decode', response.data.token)
                let decode = this.$jwt.decode(response.data.token)
                console.log('This is DECODE, from Login 59.  Looking to get decode._id for router', decode)
                console.log('SUCCESS in POST /auth/login. this is response.data Login 58', response.data),
                this.$router.push(`/profile/${decode._id}`)
            })
            .catch(err => {
                console.log('Error in POST user creation', err)
            })
        },
    }
}
</script>

<style scoped>
.login-form {
    width: 100vw;
    display: flex;
    justify-content: center;
}
</style>