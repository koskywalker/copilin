import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
}

const firebaseApp = firebase.initializeApp(config)
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firebase