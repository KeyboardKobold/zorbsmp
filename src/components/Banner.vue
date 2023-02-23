<template>
    <div class="content">
        <div class="text-center bg-image">
            <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3 title">ZorbSMP Phase 6</h1>
                        <h4 class="mb-3 address">mc.zorb.gay</h4>
                    </div>
                </div>
            </div>
        </div>
        <Burger class="d-flex justify-content-center align-items-center h-100"/>
    </div>
</template>

<script>
    import Burger from "@/components/Burger";

    export default {
        name: "BannerComponent",
        components: {
            Burger,
        }
    }
</script>

<style scoped>

.title {
    font-size: 8em;
    font-weight: bold;
    text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
    color: orange;
}

.address {
    font-size: 4em;
    font-weight: bold;
    text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
    color: orange;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bg-image {
  background-image: url('../assets/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  height: 50vh;
  /* TODO min height */
}

.mask {
  background-color: rgba(0, 0, 0, 0.3);
  height:100%; 
  width:100%;
}

@media screen and (max-width: 1080px) {
    .bg-image {
        height: 50vh;
    }

    .title {
        font-size: 4em;
        font-weight: bold;
    }

    .address {
        font-size: 2em;
        font-weight: bold;
    }
}

</style>