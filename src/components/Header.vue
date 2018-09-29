<template>
  <header>
    <div class="container">
      <div class="header-logo"></div>
      <nav>
        <router-link v-for="menu in menus" :key="menu" :to="'/' + menu.link">{{ menu.name }}</router-link>
      </nav>
      <ul id="sub-nav">
        <li v-for="icon in icons" :key="icon"><a href="#"><v-icon :name="icon" /></a></li>
      </ul>
      </div>
</header>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          link: '',
          name: 'home'
        },
        {
          link: 'rentals',
          name: 'rentals'
        },
        {
          link: 'services',
          name: 'services'
        }
      ],
      icons: ['shopping-bag', 'user', 'phone']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

//variables
$amber: #ffbf00;
$gray: #333;
$grayer: rgba($gray, 0.4);
header {
  height: 80px;
  background: $amber;
  .active{
    color: $grayer;
  }
  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    height: 80px;
    width: 15%;
    background: url(../assets/img/logo-svg.svg) no-repeat;
    background-size: 100%;
    background-position: center;
  }
  li {
    display: inline-block;
    margin: 0 5px;
  }
  a {
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: $gray;
  }
}
nav {
  a {
    border: $amber 1px dashed;
    padding: 5px 10px;
    &:hover:not(.active) {
      border-color: $grayer;
    }
  }
} 
#sub-nav {
  li {
    border-radius: 50%;
    border: $grayer 1px dashed;
    width: 40px;
    height: 40px;
    text-align: center;
    &:nth-child(3){
      a { color: red; }
    }
    &:hover > a{
      color: $grayer;
    }
    a {
      line-height: 45px;
    }
  }
}
</style>
