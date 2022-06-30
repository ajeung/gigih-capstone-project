import '../Chat/style.module.css'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/analytics'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useState, useRef } from 'react';

firebase.initializeApp ({
    apiKey: "AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU",
    authDomain: "soluhouse2022.firebaseapp.com",
    projectId: "soluhouse2022",
    storageBucket: "soluhouse2022.appspot.com",
    messagingSenderId: "1022303014861",
    appId: "1:1022303014861:web:b8e29c8904af7ddad5be84",
    measurementId: "G-HT9EJQTC5B"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
const analytics = firebase.analytics()

const ChatFunction = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
            <h1>⚛️🔥💬</h1>
            <SignOut />
            </header>

            <section>
            {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    );
}

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}

const SignOut = () => {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

const ChatRoom = () => {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formValue, setFormValue] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <main>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <span ref={dummy}></span>
            </main>

            <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}>🕊️</button>
            </form>
        </>
    )
}

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    )
}

export default ChatFunction