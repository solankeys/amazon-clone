import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAsIUOhZ3z4TqZZ8-kCmCWPmSlLPRAoPw8',
  authDomain: 'clone-6b38d.firebaseapp.com',
  projectId: 'clone-6b38d',
  storageBucket: 'clone-6b38d.appspot.com',
  messagingSenderId: '43016897830',
  appId: '1:43016897830:web:07b352b5c6e2be2316ede7',
  measurementId: 'G-N8XTQMNWDS',
})
const auth = firebase.auth()

export { auth }
