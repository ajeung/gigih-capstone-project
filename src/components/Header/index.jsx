import { Link, useLocation } from 'react-router-dom'
import styles from './style.module.css'
import * as React from 'react'

const Header = ({ title }) => {
    const location = useLocation()
    console.log(location)
    const NAVIGATIONS = React.useMemo(() => {
        const item = [
            {
                label: 'Chat Dokter',
                key: '/search-doctor',
            },
            {
                label: 'Toko',
                key: '/',
            },
            {
                label: 'Artikel',
                key: '/',
            },
        ]

        if (
            location.pathname === '/search-doctor' ||
      location.pathname.startsWith('/doctor')
        )
            item.push({
                label: 'Reservasi',
                key: '/',
            })

        return item
    }, [location.pathname])
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to="/">
                    <img className={styles.logo} src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className={styles.separator} />
            <nav className={styles.nav}>
                <ul>
                    {NAVIGATIONS.map((e) => (
                        <li>
                            <Link to={e.key}>{e.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <button type="button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header
