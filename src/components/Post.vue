<template>
    <div class="post-display">
        {{ title }}
        {{ content }}
        <b-button variant="danger float-right" @click="$emit('delete-post', item)">Delete</b-button>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: {
        title: {
            type:String
        },
        content: {
            type: String
        },
        

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
}
</style>