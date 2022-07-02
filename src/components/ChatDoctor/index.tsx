import { useLocation } from "react-router";
import styles from "./style.module.css";
import { ref, getDatabase, set, onValue } from "firebase/database";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import { firebaseApp } from "redux/firebase-config/firebase";
import * as React from "react";
import doctorData from "../../assets/data/data_dokter";

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
    (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      set(ref(database, `chats/${name}/${chats.length + 1}`), {
        message: input,
      });
      setInput("");
    },
    [chats.length, database, input, name]
  );

  const specialist = React.useMemo(() => {
    const doctor = doctorData.filter((item) => item.name === name);
    if (doctor.length > 0) {
      return doctor[0].speciality;
    }
    return "";
  }, [name]);

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
          <h5>{specialist}</h5>
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
