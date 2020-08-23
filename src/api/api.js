import db from "../firebase";

export const FIREBASE_POSTS = {
  CallPosts: async () => {
    const docRef = await db.collection("posts").get();
    let posts = [];
    docRef.forEach((doc) => posts.push(doc.data()));
    return posts;
  },
  AddPost: (post) => {
    db.collection("posts").doc(`${post.postId}`).set({
      avatar: post.avatar,
      displayName: post.displayName,
      username: post.username,
      text: post.text,
      postId: post.postId,
    });
  },
  DeletePost: (postId) => {
    db.collection("posts").doc(`${postId}`).delete();
  },
};
// export const CallApi = () => {
//   const ref = db.collection("posts");
//   const channel = eventChannel(emit => ref.onSnapshot(emit));
// 	// const res = db
// 	// 	.collection("posts")
// 	// 	.onSnapshot((snapshot) => snapshot.docs.map((doc) => doc.data()));
// 	return channel;
// 	// const data = await postsRef.get();
// 	// console.log(postsRef);
// 	// return data;
// };
// // db.collection("posts").onSnapshot((snapshot) =>
// // 			setPosts(snapshot.docs.map((doc) => doc.data())),
// // 		);
// // db.collection("users").add({
// //   first: "Ada",
// //   last: "Lovelace",
// //   born: 1815
// // })
// // .then(function(docRef) {
// //   console.log("Document written with ID: ", docRef.id);
// // })
// // .catch(function(error) {
// //   console.error("Error adding document: ", error);
// // });
// firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then(function (result) {
//     const token = result.credential.accessToken;
//     const user = result.user;
//   })
//   .catch(function (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.email;
//     const credential = error.credential;
//   });
// db.collection("cities").add({
//   name: "Tokyo",
//   country: "Japan"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });
