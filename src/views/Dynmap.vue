<template>
    <div class="content">
         <iframe src="https://dynmap.zorb.gay/" title="DynMap iFrame"></iframe> 
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
    margin: 0 0 35px 0;
}

</style>