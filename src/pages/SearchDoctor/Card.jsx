import React from 'react'
import DoctorCard from '../../components/DoctorCard'
import styles from './style.module.css'
import photo from '../../assets/img/woman.png'

const Card = ({ item }) => {
    return (
        <>
            <div className="container-fluid">
                <div className={styles.listOfDoctor}>
                    {item.map((Val) => {
                        return (
                            <DoctorCard
                                className={styles.card}
                                key={Val.id}
                                name={Val.name}
                                title={Val.title}
                                speciality={Val.speciality}
                                photo={photo}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Card
