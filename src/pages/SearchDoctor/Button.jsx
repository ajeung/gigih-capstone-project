import React from 'react'
import styles from './style.module.css'

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className={styles.kategoriDoctor}>
            {menuItems.map((doctor, id) => {
                return (
                    <button onClick={() => filterItem(doctor)} key={id}>
                        {doctor}
                    </button>
                )
            })}
        </div>
    )
}

export default Buttons
