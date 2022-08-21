<template>
  <div class="main">
    <div class="d-flex flex-nowrap">
      <div class="flex-shrink-1 left-menu" style="">
        <MenuBar/>
      </div>
      <div class="flex-grow-1 right-container" style="">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script >

import MenuBar from './components/MenuBar.vue'

export default {
  name: "App",
  components: {
    MenuBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  height: 100vh;
  background-color: cadetblue;
  text-align: start;
}
.left-menu {
  height: 100vh;
  background-color: gainsboro;
  width: 20%;
}

.right-container {
  height: 100vh;
  background-color: indianred;
}
</style>
