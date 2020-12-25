import firebaseApp from './auth_Service'
class PostsData  {
    savePost(posts){
        firebaseApp.firestore().collection("posts").doc(`${posts.id}`).set({
                posts
            }
        );
    };
    deletePost(posts){
            firebaseApp.firestore().collection("posts").doc(`${posts.id}`).delete()

    };
    
};
export default PostsData