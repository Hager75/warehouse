<template>
<!-- <div @click="this.$store.state.count++">{{ count }}</div> -->
  <div id="nav" class="w-100">
  <Header class="w-100"/>
  <div class="px-3 w-100 h-100 d-flex flex-column position-relative">
  <MenuBar/>
  <router-view/>

  <Footer/>
  </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <!-- <Home/> -->
</template>
<script>
import Header from './components/Header.vue'
import MenuBar from './components/MenuBar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'

export default {
  components: {
    Header,
    Home,
    MenuBar,
    Footer
  },
data(){
  return {
    msg: false,
  }
},
//  computed: {
//     count () {
//       return this.$store.state.count
//     }
//  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
    height: 100%;

  /* display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center; */
}

#nav{
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

}


/* #nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
} */

#nav a.router-link-exact-active {
  color: #fff;

}
html, body{
 height: 100%;
 width: 100%; 
}
body{
  background: #e8f0f7 !important;
}
.modal-backdrop{
  background: transparent !important;
  position: absolute !important;
}
</style>
