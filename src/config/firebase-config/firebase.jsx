import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU',
    authDomain: process.env.REACT_APP_AUTH_DOM,
    projectId: 'soluhouse2022',
    storageBucket: 'soluhouse2022.appspot.com',
    messagingSenderId: '1022303014861',
    appId: '1:1022303014861:web:b8e29c8904af7ddad5be84',
    measurementId: 'G-HT9EJQTC5B'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

console.log(process.env.REACT_APP_AUTH_DOM)

export { auth, provider, firebaseApp }
