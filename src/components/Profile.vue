<template>
    <div>
        <div v-if="user">
            <h1>user Profile content goes here</h1>
            <h2>Add Link to Journal Entries</h2>
            <ul class="posts">
                <li 
                is="post" 
                v-for="p in posts" 
                v-bind:key="p._id"
                v-bind:title="p.title"
                v-bind:content="p.content"
                >
                    <Post v-on:delete-post="deletePost($event)"></Post>
                </li>
            </ul>

        </div>

        <div class="post-form">
            <h2>Add a new Journal Entry</h2>
            <b-form @submit.prevent="createPost()">
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
                <b-button type="submit" variant="primary">Create Post</b-button>
            </b-form>
        </div>


        <div v-if="!user">
            <h1>You are an imposter! Add message and redirect back to Portal</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import Post from './Post.vue'
export default {
    name: "Profile",
    components: {Post},
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
            postId: '',
            postIndex: ''
        }
    },
    props: {
        // user: this.user
    },
    created: function() {
        this.getUserPosts()
    }, 
    // // props: ["getToken()"],
    methods: {
        getUserPosts() {
            // let token = localStorage.getItem('userToken')
            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTRlZWE4N2M4ODRmNzYyMzQxZjQyNTMiLCJmaXJzdG5hbWUiOiJiIiwibGFzdG5hbWUiOiJiIiwidXNlcm5hbWUiOiJiYmIiLCJlbWFpbCI6ImJAYi5jb20iLCJpYXQiOjE1ODIyMzAxNTEsImV4cCI6MTU4MjI1ODk1MX0.ZAhAoH3T7eP9JIYEC03pUuVI0LMro4Qm3iWa4SGARLc"
            console.log('This is the token before axios GET /posts:', token)
            axios.get(`${process.env.VUE_APP_SERVER_URL}/posts`, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data)
                this.posts = response.data
            })
            .catch(err => {
                console.log('Error in GET /posts:', err)
            })
        },
        createPost() {
            // let token = localStorage.getItem('userToken')
            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTRlZWE4N2M4ODRmNzYyMzQxZjQyNTMiLCJmaXJzdG5hbWUiOiJiIiwibGFzdG5hbWUiOiJiIiwidXNlcm5hbWUiOiJiYmIiLCJlbWFpbCI6ImJAYi5jb20iLCJpYXQiOjE1ODIyMzAxNTEsImV4cCI6MTU4MjI1ODk1MX0.ZAhAoH3T7eP9JIYEC03pUuVI0LMro4Qm3iWa4SGARLc"
            console.log('This is the token before axios POST/posts:', token)
            console.log('FORM', this.form)
            axios.post(`${process.env.VUE_APP_SERVER_URL}/posts`, {
                body: {
                    author: this.form.author,
                    title: this.form.title,
                    content: this.form.content,
                },
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response)
                // this.posts = response.data
            })
            .catch(err => {
                console.log('Error in POST /posts:', err)
            })
        },
        deletePost(key) {
            console.log('Target ID', key)
            // this.postIndex = 
            // console.log('This is the index', this.postIndex)
            // this.postId = post._id
            // console.log('ID:', _id)
            // let id = this.posts._id
            // axios.delete(`${process.env.VUE_APP_SERVER_URL}/posts/${id}`)
        }
        // checkForToken() {
        //     let token = localStorage.getItem('userToken')
        //     console.log('This is the token at beginning of check function', token)
        //     // let decode = this.$jwtDec(token)
        //     // console.log(decode)
        //     if (!token || token === undefined) {
        //         localStorage.removeItem('userToken')
        //         this.token = ''
        //         this.user = null
        //     }
        //     else {
        //         var url = 'http://localhost:3000'
        //         axios.post(`${url}/auth/verify`, token )
        //         .then(result => {
        //             console.log('This is the result from AXIOS POST VERIFY', result)
        //             localStorage.setItem(result.token)
        //             this.user = result.user
        //             this.token = result.token
        //             // this.getToken()
        //         })
        //         .catch(err => {
        //             console.log('Error in verify POST', err)
        //         })
        //     }
        // },
    }    
}
</script>

<style scoped>

</style>