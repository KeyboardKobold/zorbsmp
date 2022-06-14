<template>
    <div class="content">
        <img class="image" v-for="(image, i) in images" :src="image.url" :key="i" @click="index = i">
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
</template>

<script>
    import VueGallerySlideshow from 'vue-gallery-slideshow';

    export default {
        name: "GalleryComponent",
        components: {
            VueGallerySlideshow
        },
        data() {
            return {
                images: [],
                index: null
            };
        },

        mounted() {
            this.importAll(require.context('../assets/gallery/5/', true, /\.jpg$/));
        },

        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.images.push({ url: r(key) }))); /* , pathShort: key }))); */
            },
        },
    }
</script>

<style scoped>

.content {
    margin: 8;
}

.image {
    height: auto; 
    width: auto; 
    width: 300px; 
    height: 300px;
    margin: 8em 0 0 8em;
    border-radius: 8px;
    object-fit: cover;
}

.image:hover {
  opacity: 0.3;
}

</style>