<template>
    <div class="content">
        <div class="text-center bg-image">
            <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3 title">ZorbSMP Phase 5</h1>
                        <h4 class="mb-3 address">mc.zorb.gay</h4>
                    </div>
                </div>
            </div>
        </div>
        <Burger class="d-flex justify-content-center align-items-center h-100"/>
    </div>
    <!--div class="content">
        <div class="bannercontainer">
            <img src="../assets/banner.png"/>
            <div class="centered">
                ZorbSMP Phase 5
                mc.zorb.gay
            </div>
        </div>
        <div class="left-nav">
            <a class="github" href="https://github.com/KeyboardKobold">
                <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" />
            </a>
            <a class="gitlab" href="https://gitlab.com/KeyboardKobold">
                <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/gitlab.svg" />
            </a>
            <a class="linkedin" href="https://www.linkedin.com/in/christianbodenbender">
                <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/linkedin.svg" />
            </a>
            <a class="xing" href="https://www.xing.com/profile/Christian_Bodenbender">
                <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/xing.svg" />
            </a>
            <a class="mail" href="mailto:bodenbender@protonmail.com">
                <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/mail-dot-ru.svg" />
            </a>
            <b-button class="cv" size="sm" variant="outline-light" disabled >Resumé</b-button>
        </div>
        <div class="right-nav">
            <b-button class="home" size="sm" variant="outline-light" :to="{ name: 'home'}">Home</b-button>
            <b-button class="legal" size="sm" variant="outline-light" :to="{ name: 'imprint'}">Imprint</b-button>
        </div>
    </div-->
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
}

.address {
    font-size: 4em;
    font-weight: bold;
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