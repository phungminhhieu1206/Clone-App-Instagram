import { firebase } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1v0XoO7rHaEmXYbpJOyaq7MGTOfjThgk",
    authDomain: "ig-clone-app-4cd88.firebaseapp.com",
    projectId: "ig-clone-app-4cd88",
    storageBucket: "ig-clone-app-4cd88.appspot.com",
    messagingSenderId: "665251005803",
    appId: "1:665251005803:web:b94997d3af8021b238f82e",
    measurementId: "G-MT0FP539LQ"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase