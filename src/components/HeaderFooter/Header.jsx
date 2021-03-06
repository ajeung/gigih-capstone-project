import styles from './style.module.css'
import logoHeader from '../../assets/logo.png'

import Modal from '../Modal'
import { auth, provider } from '../../config/firebase-config/firebase'
import { setActiveUser, setUserLogoutState, selectUserName } from '../../redux/reducer/reducers'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    const [isExpanded, setIsExpanded] = useState(false)

    const [showHanphoneModal, setShowHanphoneModal] = useState(false)
    const [showOptionDropdown, setShowOptionDropdown] = useState(false)

    const handleLogin = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(
                setActiveUser({
                    userName: result.user.displayName,
                    userEmail: result.user.email
                })
            )
        })
    }

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                dispatch(setUserLogoutState())
            })
            .catch((err) => alert(err.message))
    }

    return (
        <div className="header">
            <div className="header-logo">
                <a href="/">
                    <img id="headerLogo" src={logoHeader} alt="Logo" />
                </a>
            </div>

            <a
                className="header__icon-arrow"
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
            >
                <i className="bx bx-menu"></i>
            </a>

            <div className={isExpanded ? 'header-link expanded' : 'header-link'}>
                <ul>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="">Artikel</Link>
                    </li>
                    <li>
                        <Link to="/search-doctor">Cari Mentor</Link>
                    </li>
                </ul>
            </div>
            <div className={`header-button ${userName ? styles.hidden : ''}`}>
                <button id={styles.loginBtn} onClick={() => setShowHanphoneModal(true)}>
                    Login
                </button>
            </div>

            <Modal show={showHanphoneModal} onClose={() => setShowHanphoneModal(false)}>
                <div className={styles.content}>
                    <h4>Login ke dalam SoluHouse</h4>
                    <div
                        onClick={() => {
                            setShowHanphoneModal(false)
                            handleLogin()
                        }}
                    >
                        <button className={styles.signin}>Login with Google</button>
                    </div>
                </div>
            </Modal>

            <div
                className={`header-button is__loggedin ${userName ? '' : styles.hidden}`}
                onClick={() => setShowOptionDropdown(!showOptionDropdown)}
            >
                <button id={styles.loginBtn} onClick={() => handleLogout()}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Header
