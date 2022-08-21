<template>
  <div class="post-box">
    <div class="d-flex">
      <div>profile iamge</div>
      <div class="d-flex flex-column">
        <div class="d-flex">
          <div class="d-flex mr-auto">
            <div>name</div>
            <div>email</div>
          </div>
          <div>...</div>
        </div>
        <div>content</div>
        <div>buttons</div>
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
  width: 300px;
}
</style>
