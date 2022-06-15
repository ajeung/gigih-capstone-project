import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = ({ title }) => {
  const NAVIGATIONS = [
    {
      label: "Chat Dokter",
      key: "/chat-doctor",
    },
    {
      label: "Toko",
      key: "/toko",
    },
    {
      label: "Artikel",
      key: "/artikel",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/">
          <img className={styles.logo} src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.separator} />
      <nav className={styles.nav}>
        <ul>
          {NAVIGATIONS.map((e) => (
            <li>
              <Link to={e.key}>{e.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <button type="button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
