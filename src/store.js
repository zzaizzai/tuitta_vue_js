import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      posts: [
        {
          userUid: "userUid",
          userName: "James",
          userEmail: "test@test.com",
          userProfileUrl:
            "https://cdn.pixabay.com/photo/2022/07/10/19/28/mountains-7313638_960_720.jpg",
          postText: "i love birds as much as i love you",
          postImageUrl:
            "https://cdn.pixabay.com/photo/2022/08/12/10/27/crows-7381423_960_720.jpg",
          didLike: true,
          showPostImagefullscreen: false,
        },
        {
          userUid: "userUid",
          userName: "James",
          userEmail: "test@test.com",
          userProfileUrl:
            "https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_960_720.jpg",
          postText: "i love birds as much as i love you",
          postImageUrl:
            "https://cdn.pixabay.com/photo/2022/06/18/12/40/muenster-7269726_960_720.jpg",
          didLike: true,
          showPostImagefullscreen: false,
        },
        {
          userUid: "userUid",
          userName: "James",
          userEmail: "test@test.com",
          userProfileUrl:
            "https://cdn.pixabay.com/photo/2022/07/10/19/28/mountains-7313638_960_720.jpg",
          postText: "i love birds as much as i love you",
          postImageUrl:
            "https://cdn.pixabay.com/photo/2022/08/12/10/27/crows-7381423_960_720.jpg",
          didLike: true,
          showPostImagefullscreen: false,
        },
        {
          userUid: "userUid",
          userName: "James",
          userEmail: "test@test.com",
          userProfileUrl:
            "https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_960_720.jpg",
          postText: "i love birds as much as i love you",
          postImageUrl:
            "https://cdn.pixabay.com/photo/2022/06/18/12/40/muenster-7269726_960_720.jpg",
          didLike: true,
          showPostImagefullscreen: false,
        },
      ],
    };
  },
});

export default store;
