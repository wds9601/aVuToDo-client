<template>
    <div>
        <div class="image-container">
            <div v-if="user">
                <h3>All ToDos:</h3>
                <ul class="posts">
                    <li 
                    is="post" 
                    v-for="p in posts" 
                    v-bind:key="p._id"
                    v-bind:id="p._id"
                    v-bind:author="p.author"
                    v-bind:title="p.title"
                    v-bind:content="p.content"
                    >
                        <Post v-on:delete-post="deletePost($event)"></Post>
                    </li>
                </ul>

            </div>

            <div class="post-form">
                <h2>Add a new ToDo Item</h2>
                <b-form autocomplete=off @submit.prevent="createPost()">
                    <b-form-group id="input-group-1" label="Title:" label-for="title">
                        <b-form-input
                            id="title"
                            v-model="form.title"
                            type="text"
                            required
                            placeholder="Enter title"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-5" label="Content:" label-for="content">
                        <b-form-input
                            id="content"
                            v-model="form.content"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Create Task</b-button>
                </b-form>
            </div>


            <div v-if="!user">
                <h1>You are an imposter! Add message and redirect back to Portal</h1>
            </div>
        </div>
    </div>
</template>

<script>
// Import packages or components
import axios from 'axios'
import Post from './Post.vue'

export default {
    name: "Profile",
    components: {Post},
    // Set user ID to use in DB calls
    data() {
        return {
            token: '',
            user: this.$route.params.id,
            name: '',
            email: '',
            posts: [],
            form: {
                author: this.$route.params.id,
                title: '',
                content: ''
            },
        }
    },
    // On component mount, run these functions
    mounted: function() {
        this.getUserPosts(),
        this.setUserId()
    },
    // All methods referred to in this component
    methods: {
        // Set a localStorage variable with user.id to use around the app when logged in
        setUserId() {
            let user = this.$route.params.id
            localStorage.setItem('userId', user)
        },
        // Retrieve all user ToDo's
        getUserPosts() {
            // console.log(localStorage)
            let token = localStorage.getItem('userToken')
            // console.log('This is the token before axios GET /posts:', {token: token})
            axios.get(`${process.env.VUE_APP_SERVER_URL}/posts`, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                // console.log(response.data)
                this.posts = response.data
            })
            .catch(err => {
                console.log('Error in GET /posts:', err)
            })
        },
        // Add a new ToDo to the db
        createPost() {
            // let token = localStorage.getItem('userToken')
            // console.log('This is the token before axios POST/posts:', token)
            // console.log('FORM', this.form)
            axios.post(`${process.env.VUE_APP_SERVER_URL}/posts`, {
                body: {
                    author: this.form.author,
                    title: this.form.title,
                    content: this.form.content,
                },
                headers: {
                    'Content-type': 'application/json',
                    // 'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('This is response from post db entry', response)
                
            })
            .catch(err => {
                console.log('Error in POST /posts:', err)
            })
            this.getUserPosts()
        }
    }    
}
</script>

<style scoped>
.image-container {
    /* height: 100vh; */
    width: 100vw;
    background-color: #108dc7;
    padding-top: 5%;
    padding-bottom: 5%;
    margin: 0;
    color: black;
}

h2, h3 {
    text-decoration: underline;
}

.post-form{
    border: 3px solid black;
    border-radius: 10px;
    margin: 5%;
    padding: 2% 10%;
    background-color: rgba(255,255,255,0.2)
}

.posts{
    padding-right: 5%;
}
</style>