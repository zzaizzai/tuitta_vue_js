<template>
  <div v-for="(post, i) in this.$store.state.posts" :key="i">
    <div v-if="post.showPostImagefullscreen">
      <!-- i have to replace it pros... -->
      <div class="showPostImagefullscreen">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/12/10/27/crows-7381423_960_720.jpg"
          alt=""
          class=""
        />
      </div>
    </div>
    <div class="post-box">
      <div class="d-flex">
        <div>
          <img
            alt=""
            class="profile-image m-2"
            :style="{
              backgroundImage: `url(${post.userProfileUrl})`,
            }"
          />
        </div>
        <div class="d-flex flex-column m-1 mt-2 w-100 me-3">
          <div class="d-flex flex-row fs-5">
            <div class="d-flex mr-auto post-name align-items-end">
              <div class="me-3">{{ post.userName }}</div>
              <div class="fs-6 text-black-50">{{ post.userEmail }}</div>
            </div>
            <div class="ms-auto mx-3">...</div>
          </div>

          <div>{{ post.postText }}</div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2022/08/12/10/27/crows-7381423_960_720.jpg"
              alt=""
              class="post-image"
            />
          </div>

          <div class="d-flex justify-content-around w-100">
            <div class="buttons">
              <svg
                class="w-6 h-6 button-size"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>

              0
            </div>

            <div class="buttons">
              <svg
                class="w-6 h-6 button-size"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
              0
            </div>

            <!-- like button -->
            <div class="buttons buttons-like">
              <svg
                class="w-6 h-6 button-size"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              0
              <!-- liked button -->
              <!-- <svg class="w-6 h-6 text-danger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostRow",
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-box {
  background: gainsboro;
  max-width: 600px;
  /* border-bottom-width: px; */
  border-bottom-color: rgb(47, 51, 54);
  border-bottom: 1px solid;
}

.post-image {
  width: 100%;
  border-radius: 30px;
}

.button-size {
  height: 25px;
}
.buttons:hover {
  cursor: pointer;
}
.buttons-like:hover {
  color: rgb(255, 87, 87);
}

.profile-image {
  background-color: gray;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-size: cover;
  float: left;
}
</style>
