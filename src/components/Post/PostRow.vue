<template>
  <div class="post-box">
    <div class="d-flex">
      <img
        src="https://cdn.pixabay.com/photo/2022/07/10/19/28/mountains-7313638_960_720.jpg"
        alt=""
        class="protifle-image m-2"
      />
      <div class="d-flex flex-column m-1 mt-2 w-100">
        <div class="d-flex flex-row fs-5">
          <div class="d-flex mr-auto post-name align-items-end">
            <div class="me-3">name</div>
            <div class="fs-6 text-white-50">email@test.com</div>
          </div>
          <div class="ms-auto mx-3">...</div>
        </div>
        <div>i love birds as much as i love you</div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2022/08/12/10/27/crows-7381423_960_720.jpg"
            alt=""
            class="post-image"
          />
        </div>
        <div class="d-flex justify-content-between w-100">
          <div>cooment button</div>

          <div>message button</div>

          <!-- like button -->
          <div>
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
            <!-- liked button -->
            <!-- <svg class="w-6 h-6 text-danger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostRow",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-box {
  background: darkgoldenrod;
  width: 600px;
}

.post-image {
  width: 100%;
  border-radius: 30px;
}

.button-size {
  height: 25px;
}

.protifle-image {
  background-color: gray;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-size: cover;
  float: left;
}
</style>
