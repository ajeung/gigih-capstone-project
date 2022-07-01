import { useNavigate } from "react-router";
import styles from "./style.module.css";

const DoctorDetailCard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.profilePicture}>
            <img src="/woman.png" alt="" />
          </div>
          <div className={styles.starContainer}>
            {[...Array(5).fill({})].map((item) => (
              <img src="/star.png" alt="" />
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.headerContainer}>
            <h6>Dr. Dimas Afrizal</h6>
            <h6>Dokter Umum</h6>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.item}>
              <div>Lulusan Dari</div>
              <div>Universitas Muhammadiyah Malang</div>
            </div>
            <div className={styles.item}>
              <div>Tempat Praktik</div>
              <div>Malang, Jawa Timur</div>
            </div>
            <div className={styles.item}>
              <div>Nomor STR</div>
              <div>XXXXXXXXXXXXXXXX</div>
            </div>
          </div>
          <div className={styles.actionContainer}>
            <div className={styles.buttonContainer}>
              <div className={styles.button}>
                <button type="button" onClick={() => navigate("/payment/1")}>
                  Chat
                </button>
              </div>
              <div className={styles.button}>
                <button
                  type="button"
                  style={{ marginRight: 0 }}
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailCard;
