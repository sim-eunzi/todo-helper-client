import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDMlMeqF3U_de1TOy3lz_IRWuksD5SIS3Q",
  authDomain: "worker-helper.firebaseapp.com",
  projectId: "worker-helper",
  storageBucket: "worker-helper.appspot.com",
  messagingSenderId: "1090548095244",
  appId: "1:1090548095244:web:15d5f0c098616df94c9129",
  measurementId: "G-CDPJWSMM1S",
  databaseURL: 'https://worker-helper-default-rtdb.firebaseio.com'
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp