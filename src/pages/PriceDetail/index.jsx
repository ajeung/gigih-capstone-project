import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import photo from "../../assets/img/woman.png";
import styles from "./style.module.css";

const PriceDetail = () => {

    const navigate = useNavigate();

    const handleComfirm = (id) => {
        Swal.fire({
            title: "Apakah Anda Yakin?",
            text: "Anda tidak dapat kembali setelah konfirmasi!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#09dbac",
            cancelButtonColor: "#d33",
            confirmButtonText: "Konfirmasi"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Pembayaran Dikonfirmasi!",
                    confirmButtonColor: "#09dbac",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/chat/${id}`);
                    }
                })
            }
        })
    }

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
                <button type="button" onClick={() => handleComfirm(1)}>Konfirmasi</button>
            </div>
        </div>
    );
};

export default PriceDetail;