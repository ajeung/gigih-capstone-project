import photo from "../../assets/img/woman.png"
import styles from "./style.module.css";

const PriceDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.doctor_card}>
                    <div className={styles.doctor_photo}>
                        <img src={photo} alt="Doctor" />
                    </div>
                    <div className={styles.doctor_detail}>
                        <h4>Dr. Dimas Afrizal</h4>
                        <p>Dokter Umum</p>
                    </div>
                </div>
                <div className={styles.price_card}>
                    <h4>PEMBAYARAN</h4>
                    <p>Rp. 20.000</p>
                </div>
            </div>
            <div className={styles.comfirm_container}>
                <button type="button">Konfirmasi</button>
            </div>
        </div>
    );
};

export default PriceDetail;