import star from '../../assets/img/star.png'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const DoctorCard = ({ name, rating, price, photo }) => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className={styles.container} onClick={() => handleClick(name)}>
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
          <button type="button">Chat</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
=======
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/doctor/${id}`)
    }

    return (
        <div className={styles.container} onClick={() => handleClick(1)}>
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
                    <button type="button">Chat</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard
>>>>>>> main
