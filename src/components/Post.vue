<template>
    <div class="post-display">
        {{ title }}
        {{ content }}
        <b-button variant="danger" @click="$emit('delete-post', item)">Delete</b-button>
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
        }
    }   
}
</script>

<style scoped>

</style>