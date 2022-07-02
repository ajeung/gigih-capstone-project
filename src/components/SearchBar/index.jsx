import { useState } from 'react'
import styles from './style.module.css'

const SearchBar = () => {
    const [input, setInput] = useState('')

    return (
        <form className={styles.container}>
            <input
                type="text"
                name="search"
                placeholder="Cari Dokter"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar
