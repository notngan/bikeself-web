<template>
  <div id="app">
    <v-header/>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Roboto:400,700');

* {
  margin: 0;
  padding: 0;
  font-size: 14px;
  li {
    list-style-type: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
}
#app {
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
