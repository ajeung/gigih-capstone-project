import { useLocation } from "react-router";
import styles from "./style.module.css";
import { ref, getDatabase, set, onValue } from "firebase/database";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import { firebaseApp } from "redux/firebase-config/firebase";
import * as React from "react";

interface Props {}
export default function ChatDoctor() {
  const { pathname } = useLocation();
  const name = decodeURI(pathname.split("/")[pathname.split("/").length - 1]);
  const database = getDatabase(firebaseApp);
  const [chats, setChats] = React.useState<{ message: string }[]>([]);
  const [input, setInput] = React.useState<string>("");
  const divRef = React.useRef<any>();
  React.useEffect(() => {
    const starCountRef = ref(database, "chats/" + name);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (Array.isArray(data)) {
        setChats(data as any);
      }
    });
  }, [database, name]);

  React.useEffect(() => {
    divRef?.current?.scrollIntoView?.({ behavior: "smooth" });
  }, [chats.length]);

  const sendChat = React.useCallback(
    (e) => {
      e.preventDefault();
      set(ref(database, `chats/${name}/${chats.length + 1}`), {
        message: input,
      });
      setInput("");
    },
    [chats.length, database, input, name]
  );

  return (
    <div
      style={{ display: "flex", flex: 1, flexDirection: "column", padding: 4 }}
    >
      <div className={styles.header}>
        <div className={styles.doctor_photo}>
          <img src="/woman.png" alt={`Doctor ${name}`} style={{ width: 25 }} />
        </div>
        <div>
          <h4>{name}</h4>
          <div className={styles.rating}>
            <img src="/star.png" className={styles.star} alt="star" />
            <img src="/star.png" className={styles.star} alt="star" />
            <img src="/star.png" className={styles.star} alt="star" />
            <img src="/star.png" className={styles.star} alt="star" />
            <img src="/star.png" className={styles.star} alt="star" />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <span className={styles.doctorChat}>
            Halo Apa ada yang bisa dibantu?
          </span>
        </div>
        {chats.map((e, idx) => (
          <div className={styles.meChat} key={idx.toString()}>
            <div>
              <span>{e.message}</span>
            </div>
          </div>
        ))}
        <div ref={divRef} />
      </div>
      <form>
        <div
          style={{
            display: "flex",
            flex: 1,
            background: "white",
          }}
        >
          <input
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukkan pesan anda disini"
          />
          <button style={{ marginLeft: "auto" }} onClick={sendChat}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
