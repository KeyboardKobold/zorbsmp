<template>
    <div class="content">
        Gallery!

        <img :src=images[0].pathLong />
    </div>
</template>

<script>
    export default {
        name: "GalleryComponent",
        data() {
            return {
                images: [],
            };
        },

        mounted() {
            this.importAll(require.context('../assets/gallery/5/', true, /\.jpg$/));
        },

        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            },
        },
    }
</script>

<style scoped>

</style>