<template>
  <div>
    <div class="d-flex flex-column menu-bar">
      <ul class="d-flex flex-column mb-auto nav nav-pills">
        <li class="nav-item">
          <router-link
            class="nav-link link-dark align-items-center d-flex"
            to="/posts"
            ><svg
              class="w-6 h-6 menubar-icon pe-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path></svg
            >Home</router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link link-dark align-items-center d-flex"
            to="/profile"
            ><svg
              class="w-6 h-6 menubar-icon pe-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path></svg
            >Notification</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link link-dark align-items-center d-flex"
            to="/profile"
            ><svg
              class="w-6 h-6 menubar-icon pe-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path></svg
            >Messages</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link link-dark align-items-center d-flex"
            to="/profile"
            ><svg
              class="w-6 h-6 menubar-icon pe-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path></svg
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
  background-color: rgba(161, 131, 131, 0.219);
  text-align: start;
  font-size: 150%;
}

.menubar-icon {
  height: 30px;
}
</style>
