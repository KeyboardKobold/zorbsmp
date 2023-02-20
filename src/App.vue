<template>
  <div id="app">
    <Banner id="banner"/>
    <div id="content">
      <router-view></router-view>
    </div>
    <ZorbFooter id="footer"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import ZorbFooter from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Banner,
    ZorbFooter
}
}
</script>

<style>

#app {
  font-family: "Comic Sans MS", "Comic Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  /*padding: 0 0 5em 0;
  background-color: #E7E9EB;*/
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
