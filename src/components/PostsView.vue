<template>
  <div class="mainposts d-flex flex-column">
    showing posts
    <div class="posts">
      <PostRow />
    </div>
  </div>
</template>

<script>
import PostRow from "./Post/PostRow.vue";
export default {
  name: "PostsViw",
  components: {
    PostRow,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainposts {
  width: 100%;
  background-color: #eee;
  align-items: center;
}

.posts {
  border-top-color: rgb(47, 51, 54);
  border-top: 1px solid;
}
</style>
