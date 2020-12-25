import firebaseApp from './auth_Service';

class MessengerData {
    getmessages(messages){
        firebaseApp.firestore().collection('messages').doc('user').set(
            {messages}
        );
    };
};
export default MessengerData