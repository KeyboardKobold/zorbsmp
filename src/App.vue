<template>
  <div id="app">
    <Banner id="banner"/>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {
    Banner,
  }
}
</script>

<style>

#app {
  font-family: "Comic Sans MS", "Comic Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*background-color: #1A1A1A;
  color: #fff;*/
  background-color: #E7E9EB;
  min-height: 100vh;
  padding: 0 0 5em 0;
}

#content {
  margin: 0 20% 0 20%;
  padding: 5% 7%;
  background-color: #FFF;
  /*background-color: #272727;*/
}

#banner {
  background-color: #000;
}

hr {
  height: 1px;
  width: 80%;
  color: #747474;
  background-color: #747474;
}

@media screen and (max-width: 720px) {
    #content {
        margin: 0 ;
    }
}

</style>
