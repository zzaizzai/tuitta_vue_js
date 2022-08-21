<template>
  <div class="mainposts d-flex flex-column">
    showing posts

    <PostRow />
    <PostRow />
    <PostRow />
    <PostRow />
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

.mainposts{
  width: 100%;
  background-color: #eee;
  align-items: center;
}
</style>
