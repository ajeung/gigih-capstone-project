import styles from "./style.module.css";
import * as React from "react";
import HintCard from "../../components/HintCard";

const Home = () => {
  const HINTS = React.useMemo(
    () => [
      {
        label: "Cari Dokter",
        img: "/dokter.png",
        title: "Mau tanya dokter ?",
        url: "/search-doctor",
      },
      { label: "Toko", img: "/toko.png", title: "Mencari obat ?", url: "/" },
      {
        label: "Medical Check Up",
        img: "/checkup.png",
        title: "Medical check up ?",
        url: "/",
      },
    ],
    []
  );
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h6
          style={{
            fontSize: 40,
          }}
        >
          SOLUHOUSE
        </h6>
        <h6
          style={{
            fontSize: 24,
            fontWeight: "100",
          }}
        >
          menjawab kekhawatiran anda
        </h6>
      </div>
      <div className={styles.hintContainer}>
        {HINTS.map((e, idx) => (
          <React.Fragment key={idx.toString()}>
            <HintCard {...e} />
            <div className={styles.divider} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
