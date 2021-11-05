import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVYKmXnYywiDG-77uynK1CUrTtwDJDK8w",
  authDomain: "carola-6235a.firebaseapp.com",
  projectId: "carola-6235a",
  storageBucket: "carola-6235a.appspot.com",
  messagingSenderId: "128252244225",
  appId: "1:128252244225:web:20cb2fc2ec9d4f78cf6b00",
  measurementId: "G-SR1CV6WMQ5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
  app,
  auth,
}
