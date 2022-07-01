import ChatFunction from "../../components/Chat";
import ChatDoctor from "../../components/ChatDoctor";
import styles from "./style.module.css";

const ChatPages = () => {
  return (
    <div className={styles.container}>
      {/* <ChatFunction /> */}
      <ChatDoctor />
    </div>
  );
};

export default ChatPages;
