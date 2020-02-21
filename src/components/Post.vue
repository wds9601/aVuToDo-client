<template>
    <div class="post-display">
        <p class="title"><strong>{{ title }}</strong></p>
        <p class="content">{{ content }}</p>
        <b-button variant="danger" v-on:click="deletePost(id)">Delete</b-button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Post",
    props: {
        title: {
            type:String
        },
        content: {
            type: String
        },
        id: {
            type: String
        },
        author: {
            type: String
        }

    },
    methods: {
        deletePost(id) {
            let token = localStorage.getItem('userToken')
            // console.log('This is delete ID from Post compo', id)
            // console.log('This is userToken from Post compo', token)

            axios.delete(`${process.env.VUE_APP_SERVER_URL}/posts/${id}`, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
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

            // axios.delete(`${process.env.VUE_APP_SERVER_URL}/posts/${id}`)
            // .then(
            //     // this.$router.push(`/profile/${this.author}`)
            // )
            // .catch()
        }
    }
}
</script>

<style scoped>
.post-display {
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 5%;
    padding: 2%;
    background-size: contain;
}

.title{
    font-style: bold;
}
</style>