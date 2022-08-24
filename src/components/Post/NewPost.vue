<template>
  <div class="newpost-box">
    <div class="d-flex m-2">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2022/08/12/10/27/crows-7381423_960_720.jpg"
          alt=""
          class="profile-image m-2"
        />
      </div>
      <div class="d-flex flex-column flex-fill">
        <div>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="d-flex my-2">
          <div class="flex-fill">
            <svg
              class="w-6 h-6 button-photo pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div class="btn-danger btn">upload</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPostView",
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newpost-box {
  width: 600px;
  border-bottom-color: rgb(47, 51, 54);
  border-bottom: 1px solid;
}

.button-photo {
  width: 30px;
}
</style>
