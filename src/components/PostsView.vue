<template>
  <div class="mainposts d-flex flex-column">

    <div class="nav-bar"></div>
    <div class="">
      <NewPost/>
    </div>
    <div class="posts">
      <PostRow />
    </div>
  </div>
</template>

<script>
import PostRow from "./Post/PostRow.vue";
import NewPost from "./Post/NewPost.vue";
export default {
  name: "PostsViw",
  components: {
    PostRow,
    NewPost,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mainposts {
  width: 100%;
  background-color: #eee;
  align-items: center;
}
.posts {
  /* border-top-color: rgb(47, 51, 54);
  border-top: 1px solid; */
  width: 100%;
  /* position: fixed; */
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