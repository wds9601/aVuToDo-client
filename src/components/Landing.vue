<template>
    <div>
        <div class="image-container">
            <div>
                <img src="../assets/aVuToDo-logo-black.png">
            </div>
            <div class="enter-box">
                <router-link  class="enter-link" to="/portal">Enter</router-link>
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
    padding-top: 10%;
    margin: 0;
}

.enter-box {
    border: 3px solid black;
    width: 20%;
    margin-left: 40%;
    padding: 1.5%;

}

.enter-link {
    color: black;
    font-size: 30px;
}
</style>