import "../Chat/style.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react";
import { getAuth } from "@firebase/auth";

const auth = getAuth(firebase.app());
const firestore = firebase.firestore();

const ChatFunction = () => {
  return (
    <div className="chat">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      <ChatRoom />
    </div>
  );
};

const ChatRoom = () => {
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
        <input
          className="formchat-input"
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
      <img
        className="formchat-img"
        alt=""
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
      />
      <p id="tagPChat">{text}</p>
    </div>
  );
};

export default ChatFunction;
