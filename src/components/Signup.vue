<template>
    <div>
        <h2>Sign up using the form below</h2>
        <br/>
        <div class="signup-form">
            <b-form autocomplete=off @submit="Signup" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Email:" label-for="email">
                    <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="First Name:" label-for="firstname">
                    <b-form-input
                        id="firstname"
                        v-model="form.firstname"
                        required
                        placeholder="Enter first name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Last Name:" label-for="lastname">
                    <b-form-input
                        id="lastname"
                        v-model="form.lastname"
                        required
                        placeholder="Enter last name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Username:" label-for="username">
                    <b-form-input
                        id="username"
                        v-model="form.username"
                        required
                        placeholder="Enter a Username"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Password:" label-for="password">
                    <b-form-input
                        id="password"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="min 8, max 32"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Verify Password:" label-for="verifyPassword">
                    <b-form-input
                        id="verifyPassword"
                        v-model="form.verifyPassword"
                        type="password"
                        required
                        placeholder="Verify Password"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data() {
        return {
            form: {
                email: '',
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                verifyPassword: ''
            },
            show: true
        }
    },
    methods: {
        Signup(e) {
            e.preventDefault()

            // Shape the data for POST
            let newUser = {
                email: this.form.email,
                firstname: this.form.firstname,
                lastname: this.form.lastname,
                username: this.form.username,
                password: this.form.password,
                verifyPassword: this.form.verifyPassword
            }

            // console.log('This is newUser form object sent to auth:', newUser)
            
            this.axios.post(process.env.VUE_APP_SERVER_URL + '/auth/signup', newUser) 
            .then(response => {
                // set localStorage token
                localStorage.setItem('userToken', response.data.token)
                // Decode the token for user data (used in redirect below)
                let decode = this.$jwt.decode(response.data.token)

                // console.log('DECODED SIGNUP TOKEN:', decode)
                // console.log('SUCCESS in POST /auth/signup, response.data', response.data)

                // Redirect to the users profile page
                this.$router.push(`/profile/${decode._id}`)
            })
            .catch(err => {
                console.log('Error in POST /auth/signup', err)
            })     
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.firstname = ''
            this.form.lastname = ''
            this.form.username = ''
            this.form.password = ''
            this.form.verifyPassword = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style scoped>

.signup-form {
    width: 100vw;
    display: flex;
    justify-content: center;
}

</style>