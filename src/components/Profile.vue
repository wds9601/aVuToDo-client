<template>
    <div>
        <div v-if="user">
            <h3>User Profile content here</h3>
            <h3>All Posts:</h3>
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
            <h2>Add a new Journal Entry</h2>
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
        }
    },
    mounted: function() {
        this.getUserPosts(),
        this.setUserId()
    },
    methods: {
        setUserId() {
            let user = this.$route.params.id
            localStorage.setItem('userId', user)
        },
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
        createPost() {
            let token = localStorage.getItem('userToken')
            console.log('This is the token before axios POST/posts:', token)
            console.log('FORM', this.form)
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
        },
        deletePost(id) {
            console.log('Target ID', id)
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
.post-form{
    border: 3px solid black;
    border-radius: 10px;
    margin: 5%;
    padding: 2% 10%;
}

.posts{
    padding-right: 5%;
}
</style>