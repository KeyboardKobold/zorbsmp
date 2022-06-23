<template>
    <div class="content d-flex d-row align-items-center">
        <div class="content-wrapper text-center">
            <div class="image">
                <p>click me</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZorbComponent",
    }
</script>

<style scoped>

.content {
    margin: 8em 0;
}

.content-wrapper {
    width: 100%
}

.image {
    background-image: url('../assets/harry_censored.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    max-width: 70%;
    min-width: 50%;
    margin: 0 auto;
    height: 100vh;
}

.image:active {
    background-image: url('../assets/harry.png');
}

</style>