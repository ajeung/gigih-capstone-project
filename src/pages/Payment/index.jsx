import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Payment = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h6
            style={{
              fontSize: 28,
              fontWeight: "100",
              marginBottom: 8,
            }}
          >
            Total Pembayaran
          </h6>
          <h6
            style={{
              fontSize: 28,
              fontWeight: "100",
            }}
          >
            Rp. 20.000
          </h6>
        </div>
        <div className={styles.right}>
          <h6
            style={{
              fontSize: 28,
              fontWeight: "100",
            }}
          >
            Metode Pembayaran
          </h6>
          <div className={styles.gopayContainer}>
            <div className={styles.gopayWrapper}>
              <img src="/gopay.jpeg" alt="" />
              <h6
                style={{
                  fontSize: 24,
                  fontWeight: "100",
                }}
              >
                &nbsp;&nbsp;GoPay
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stickyPay}>
        <div className={styles.button}>
          <button type="button" style={{ marginRight: 0 }} onClick={() => navigate("price-detail")} >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
