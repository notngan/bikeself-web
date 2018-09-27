<template>
  <header>
  <div class="container">
    <div class="header-logo">
    </div>
    <nav>
      <ul id="menu">
        <li v-for="menu in menus" :key="menu">
          <a href="#"> {{ menu }} </a>
        </li>
      </ul>
      <ul id="sub-menu">
        <li v-for="icon in icons" :key="icon"><a href="#"><v-icon :name="icon" /></a></li>
      </ul>
    </nav>
    </div>
</header>
</template>

<script>
export default {
  data () {
    return {
      menus: [ 'home', 'rentals', 'services', 'about us', 'contact'],
      icons: ['shopping-bag', 'user', 'phone']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//variables
$amber: #ffbf00;
header {
  height: 100px;
  background: $amber;
  * {
    margin: 0;
  }
}
</style>
