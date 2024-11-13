// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'
// Import web app's Firebase configuration
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export {
  db
}
