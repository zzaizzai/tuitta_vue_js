import { createApp } from 'vue'
import App from './App.vue'

import firebase from "firebase/app";
import "firebase/firestore";

import router from './router'
import store from './store.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
    apiKey: "AIzaSyC1ZNAJiIs8u834Ea665VXeSJ_8wG3PVm8",
    authDomain: "tuittaswift.firebaseapp.com",
    projectId: "tuittaswift",
    storageBucket: "tuittaswift.appspot.com",
    messagingSenderId: "161125037597",
    appId: "1:161125037597:web:c235d61848faaf8fba38f4",
  };
  

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();





const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app') 
