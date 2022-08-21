<template>
  <div>
    <div class="d-flex flex-column menu-bar">
      <ul class="d-flex flex-column mb-auto nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link link-dark" to="/posts">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link link-dark" to="/profile"
            >Notification</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark" to="/profile"
            >Messages</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark" to="/profile"
            >Profile</router-link
          >
        </li>
      </ul>

      <div>my Profile</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-bar {
  height: 100vh;
  background-color: cadetblue;
  text-align: start;
}
</style>
