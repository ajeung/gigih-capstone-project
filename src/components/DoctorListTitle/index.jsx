import styles from './style.module.css'

const DoctorListTitle = ({ title }) => {
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
    )
}

export default DoctorListTitle
