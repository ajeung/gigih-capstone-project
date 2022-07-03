import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const DoctorCard = ({ name, speciality, title, photo }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className={styles.containerDoctorCard} onClick={() => handleClick(name)}>
      <div className={styles.doctor_photo}>
        <img src={photo} alt={`${name}`} />
      </div>
      <div className={styles.doctor_detail}>
        <div className={styles.top}>
          <p>{name} {title}</p>
        </div>
        <div className={styles.rating}>
          <p>{speciality}</p>
        </div>
        <div className={styles.btn_container}>
          <button type="button">Chat</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;