<template>
    <div class="content d-flex d-row align-items-center">
        <div class="container text-center">
            <img class="image" :src="randomImage()">
        </div>
    </div>
</template>

<script>
    export default {
        name: "RaccoonComponent",
        data() {
            return {
                images: [],
                index: null,
            };
        },

        mounted() {
            this.importAll(require.context('../assets/raccoons/', true, /\.jpg$/));
        },

        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.images.push({ url: r(key) }))); /* , pathShort: key }))); */
            },
            randomImage() {
                this.index = Math.floor(Math.random() * this.images.length)
                return this.images[this.index].url
            },
        },
    }
</script>

<style scoped>
.content {
    margin: 8em 0;
}

.image {
    border-radius: 200px;
}

</style>