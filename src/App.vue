<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
  li {
    list-style-type: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
