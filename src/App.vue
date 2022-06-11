<template>
  <div id="app">
    <Banner id="banner"/>
    <div id="content">
      <router-view></router-view>
    </div>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Banner,
    Footer
}
}
</script>

<style>

#app {
  font-family: "Comic Sans MS", "Comic Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #E7E9EB;
  min-height: 100vh;
  padding: 0 0 5em 0;
}

#content {
  margin: 0 20% 0 20%;
  padding: 5% 7%;
  background-color: #FFF;
}

#banner {
  background-color: #000;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #343a40;
}

@media screen and (max-width: 720px) {
    #content {
        margin: 0 ;
    }
}

</style>
