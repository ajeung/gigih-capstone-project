import { Link } from "react-router-dom";
import styles from "./style.module.css";

const HomeFooter = () => {
  const DATA = ["Stress Management", "Time Management", "Pola hidup sehat"];

  return (
    <div className={styles.footer}>
      <div className={styles.topFooter}>
        <h6
          style={{
            color: "white",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          Pilihan Artikel
        </h6>
        <div className={styles.articleContainer}>
          {DATA.map((e) => (
            <div className={styles.article}>{e}</div>
          ))}
        </div>
      </div>
      <div className={styles.botFooter}>
        <div className={styles.linkContainer}>
          <Link to="/">Tentang Kami</Link>
          <Link to="/">Hubungi Kami</Link>
        </div>
        <Link to="/">
          <img src="/logo2.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter;
