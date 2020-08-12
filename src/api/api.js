// import db from "../firebase";

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
