import { useNavigate } from "react-router-dom";
import photo from "../../assets/img/man.png";
import styles from "./style.module.css";

const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo} alt="Profile" />
      </div>
      <div className={styles.profile_detail}>
        <div className={styles.detail_item_top}>
          <p>Dimas Afrizal</p>
          <div>
            <button
              type="button"
              className={styles.btn}
              onClick={() => navigate("/edit-profile")}
            >
              Edit
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => navigate("/")}
            >
              Keluar
            </button>
          </div>
        </div>
        <div className={styles.detail_item_number}>
          <p className={styles.number}>082289150803</p>
        </div>
        <div className={styles.detail_item}>
          <p>Usia : 22 Tahun</p>
        </div>
        <div className={styles.detail_item}>
          <p>Jenis Kelamin : Laki-Laki</p>
        </div>
        <div className={styles.detail_item}>
          <p>Berat Badan : 51 kg</p>
        </div>
        <div className={styles.detail_item}>
          <p>Tinggi Badan : 167 cm</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
