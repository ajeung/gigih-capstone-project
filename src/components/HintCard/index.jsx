import { Link } from 'react-router-dom'
import styles from './style.module.css'

const HintCard = ({ label, img, title, url = '/' }) => {
    return (
        <div className={styles.container}>
            <h6
                style={{
                    marginBottom: 8,
                    letterSpacing: '0.5px'
                }}
            >
                {title}
            </h6>
            <Link to={url}>
                <div className={styles.content}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="" />
                    </div>
                    <h6 className={styles.label}>{label}</h6>
                </div>
            </Link>
        </div>
    )
}

export default HintCard
