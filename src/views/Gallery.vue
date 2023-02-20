<template>
    <div class="content">
        <div class="phaseSelect">
            <b-form-select v-model="selected" :options="options" size="lg" @input="changePhase"></b-form-select>
        </div>
        <img class="image" v-for="(image, i) in curImages" :src="image.url" :key="i" @click="index = i">
        <vue-gallery-slideshow :images="curImages" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
    <!--
        Next steps: Define images array per phase, 
        disable or enable images per phase... Not efficient, but might work
    -->
</template>

<script>
    import VueGallerySlideshow from 'vue-gallery-slideshow';

    export default {
        name: "GalleryComponent",
        components: {
            VueGallerySlideshow,
        },
        data() {
            return {
                images: {
                    0: [],
                    1: []
                },
                curImages: null,
                index: null,
                selected: null,
                options: [
                    {text: 'Select a phase to see screenshots', value: null},
                    {text: 'Phase 5', value: 0},
                    {text: 'Phase 6', value: 1},
                ]
            };
        },

        mounted() {
            this.importAll(require.context('../assets/gallery/5/', true, /\.png$/), 0);
            this.importAll(require.context('../assets/gallery/6/', true, /\.png$/), 1);
        },

        methods: {
            importAll(r, i) {
                r.keys().forEach(key => (this.images[i].push({ url: r(key) }))); /* , pathShort: key }))); */
            },
            changePhase(selection){
                this.index = null;
                console.log(selection)
                this.curImages = this.images[selection];
            }
        },
    }
</script>

<style scoped>

.content {
    margin: 0 0 8em 0;
    width: 100%;
}

.phaseSelect {
    width: 50%;
    margin: 2em auto;
}

.phaseSelect b-form-select{
    text-align: center;
}

#phaseSelectElem {
    margin-left: 2em;
    padding: 0 2em;
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

@media screen and (max-width: 1080px) {
    .image {
        margin: 5%;
        width: 90%;
    }
}

</style>