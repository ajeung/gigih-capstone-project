import React, { useState } from 'react'
import data from '../../assets/data/data_dokter'
import Card from './Card'
import Buttons from './Button'

const SearchDoctor = () => {
    const [item, setItem] = useState(data)

    const menuItems = [...new Set(data.map((Val) => Val.speciality))]

    const filterItem = (curcat) => {
        const newItem = data.filter((newVal) => {
            return newVal.speciality === curcat
        })
        setItem(newItem)
    }

    return (
        <>
            <Buttons
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
            />
            <Card item={item} />
        </>
    )
}

export default SearchDoctor
