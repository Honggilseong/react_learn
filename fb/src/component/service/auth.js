import firebase from 'firebase'
import firebaseApp from './auth_Service';
class AuthService { 
    login(){
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebaseApp.auth().signInWithPopup(provider);
    };
    state(stateChange){
        firebaseApp.auth().onAuthStateChanged(user => {
            stateChange(user);
        });
    };
    getuser(){
        const user =  firebaseApp.auth().currentUser.uid;
        return user;
    };
};
export default AuthService