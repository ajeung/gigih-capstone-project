import star from "../../assets/img/star.png";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const DoctorCard = ({ name, rating, price, photo }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to Doctor Detail
    };

    return (
        <div className={styles.container}>
            <div className={styles.doctor_photo}>
                <img src={photo} alt={`Doctor ${name}`} />
            </div>
            <div className={styles.doctor_detail}>
                <div className={styles.top}>
                    <p>{name}</p>
                    <p className={styles.price}>{price}</p>
                </div>
                <div className={styles.rating}>
                    <p>{rating}</p>
                    <img src={star} className={styles.star} alt="star" />
                </div>
                <div className={styles.btn_container}>
                    <button type="button" onClick={handleClick}>Chat</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;