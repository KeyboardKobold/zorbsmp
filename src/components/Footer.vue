<template>
    <div class="content">
        <div class="text-center">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                    <a id="discord" href="https://discord.gg/s97Tu5mcBB">Click here to get to the Discord!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerComponent",
    }
</script>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vh;
}

a:link {
    color: #fff;
}

a:visited {
  color: #babbbd;;
}

a:hover {
  color: orange;
}

</style>