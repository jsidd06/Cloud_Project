// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDrt1AZX_AkPmYhohqkPHIRu32k4wNbZcA',
  authDomain: 'cloud-34122.firebaseapp.com',
  projectId: 'cloud-34122',
  storageBucket: 'cloud-34122.appspot.com',
  messagingSenderId: '552783159374',
  appId: '1:552783159374:web:22ecc81f6d6289953a231f',
  measurementId: 'G-99EN2CWCEV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
