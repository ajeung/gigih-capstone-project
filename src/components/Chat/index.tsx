import "../Chat/style.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

// import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react";
import { getAuth } from "@firebase/auth";

import { selectUserName, selectUserEmail } from "../../redux/reducer/reducers";
import { useSelector } from "react-redux";

// firebase.initializeApp({
//   apiKey: "AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU",
//   authDomain: "soluhouse2022.firebaseapp.com",
//   projectId: "soluhouse2022",
//   storageBucket: "soluhouse2022.appspot.com",
//   messagingSenderId: "1022303014861",
//   appId: "1:1022303014861:web:b8e29c8904af7ddad5be84",
//   measurementId: "G-HT9EJQTC5B",
// });

const auth = getAuth(firebase.app());
// const authApp = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

const ChatFunction = () => {
  // const [user] = useAuthState(auth);

  return (
    <div className="chat">
      <header>
        <h1>⚛️🔥💬</h1>
        {/* <SignOut /> */}
      </header>
      <ChatRoom />

      {/* <section>{userName ? <ChatRoom /> : <SignIn />}</section> */}
    </div>
  );
};

// const SignIn = () => {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     authApp.signInWithPopup(provider);
//   };

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
//     </>
//   );
// };

// const SignOut = () => {
//   return (
//     auth.currentUser && (
//       <button className="sign-out" onClick={() => auth.signOut()}>
//         Sign Out
//       </button>
//     )
//   );
// };

const ChatRoom = () => {
  // const userName = useSelector(selectUserName)
  // const userEmail = useSelector(selectUserEmail)

  const dummy = useRef<any>();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query as any, { idField: "id" } as any);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue("");
      dummy?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="mainchat">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form className="formchat" onSubmit={sendMessage}>
        <input className="formchat-input"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <button className="formchat-button" type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth?.currentUser?.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img className="formchat-img"
        alt=""
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
      />
      <p className="formchat-p">{text}</p>
    </div>
  );
};

export default ChatFunction;
