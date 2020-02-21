<template>
    <div>
        <div class="image-container">
            <div class="enter-link">
                <router-link  to="/portal">Enter</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Landing"
}
</script>

<style scoped>
.image-container {
    height: 100vh;
    width: 100vw;
    background-color: #ff9944;
    padding-top: 180%;
}

.enter-link {
    border: 3px solid black;
    width: 60%;
    margin-left: 20%;
    padding: 5%;
}
</style>