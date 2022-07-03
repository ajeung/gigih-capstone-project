import { useLocation, useNavigate } from 'react-router'
import styles from './style.module.css'
import doctorData from '../../assets/data/data_dokter'
import * as React from 'react'

const DoctorDetailCard = () => {
    const { pathname } = useLocation()
    
    const name = decodeURI(pathname.split('/')[pathname.split('/').length - 1])
    const navigate = useNavigate()

    const specialist = React.useMemo(() => {
        const doctor = doctorData.filter((item) => item.name === name)
        if (doctor.length > 0) {
            return doctor[0].speciality
        }
        return ''
    }, [name])

    const title = React.useMemo(() => {
        const doctor = doctorData.filter((item) => item.name === name)
        if (doctor.length > 0) {
            return doctor[0].title
        }
        return ''
    }, [name])

    const status = React.useMemo(() => {
        const doctor = doctorData.filter((item) => item.name === name)
        if (doctor.length > 0) {
            return doctor[0].status
        }
        return ''
    }, [name])

    const usia = React.useMemo(() => {
        const doctor = doctorData.filter((item) => item.name === name)
        if (doctor.length > 0) {
            return doctor[0].usia
        }
        return ''
    }, [name])

    const gender = React.useMemo(() => {
        const doctor = doctorData.filter((item) => item.name === name)
        if (doctor.length > 0) {
            return doctor[0].gender
        }
        return ''
    }, [name])

    const keahlian = React.useMemo(() => {
        const doctor = doctorData.filter((item) => item.name === name)
        if (doctor.length > 0) {
            return doctor[0].keahlian
        }
        return ''
    }, [name])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.profilePicture}>
                        <img src='/woman.png' alt='' />
                    </div>
                    <div className={styles.starContainer}>
                        {[...Array(5).fill({})].map((item, id) => (
                            <img src='/star.png' alt='' 
                                key={id}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.headerContainer}>
                        <h6>
                            {name} {title}
                        </h6>
                        <h6>{specialist}</h6>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.item}>
                            <div>Status</div>
                            <div>{status}</div>
                        </div>
                        <div className={styles.item}>
                            <div>Umur</div>
                            <div>{usia} Tahun</div>
                        </div>
                        <div className={styles.item}>
                            <div>Gender</div>
                            <div>{gender}</div>
                        </div>
                        <div className={styles.item}>
                            <div>Keahlian</div>
                            <div>{keahlian}</div>
                        </div>
                    </div>
                    <div className={styles.actionContainer}>
                        <div className={styles.buttonContainer}>
                            <div className={styles.button}>
                                <button
                                    type='button'
                                    onClick={() => navigate(`/payment/${name}`)}
                                >
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
    )
}

export default DoctorDetailCard
