<template>
    <div class="content">
         <iframe src="http://51.89.168.119:8123/" title="DynMap iFrame"></iframe> 
    </div>
</template>

<script>
    export default {
        name: "DynmapComponent",
    }
</script>

<style scoped>

.content {
    /*width: 100%;
    height: 100%;*/
}

iframe {
    width: 100%;
    height: 85vh;
}

</style>