<template>
  <div class="main">
    <div class="d-flex flex-nowrap">
      <div class="flex-shrink-1 left-menu" style="">
        <MenuBar />
      </div>
      <div class="right-container">
        <div class="d-flex flex-grow-1" style="">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import MenuBar from "./components/MenuBar.vue";

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
  font-weight: bold;
}
.main {
  height: 100vh;
  /* background-color: cadetblue; */
  text-align: start;
}
.left-menu {
  position: fixed;
  height: 100vh;
  background-color: gainsboro;
  width: 20%;
}

.right-container {
  height: 100vh;
  width: 100%;
}

.pointer {
  cursor: pointer;
}


</style>
