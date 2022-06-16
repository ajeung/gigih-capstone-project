import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const DoctorCategory = ({ title }) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/list-doctor/${id}`);
    }

    return (
        <div className={styles.container} onClick={() => handleClick(1)}>
            <div className={styles.picture}>
                <img src="" alt="" />
            </div>
            <h4>{title}</h4>
        </div>
    );
};

export default DoctorCategory;