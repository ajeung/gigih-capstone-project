import styles from "./style.module.css";
import logoHeader from '../../assets/logo.png';

import Modal from '../Modal';
import { auth, provider } from '../../redux/firebase-config/firebase'
import { setActiveUser, setUserLogoutState, selectUserName, selectUserEmail } from "../../redux/reducer/reducers";

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)

    const [isExpanded, setIsExpanded] = useState(false)

    const [showHanphoneModal, setShowHanphoneModal] = useState(false);
    const [showOptionDropdown, setShowOptionDropdown] = useState(false);

    const handleLogin = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
            }))
        })
    }

    const handleLogout = () => {
        auth.signOut().then(() => {
                dispatch(setUserLogoutState())
            })
            .catch((err) => 
                alert(err.message)
            )
    }

    return (
        <div className="header">
            <div className="header-logo">
                <a href='#' >
                    <img id='headerLogo' src={logoHeader} alt="Logo" />
                </a>
            </div>

            <a className='header__icon-arrow'
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
            >
                <i className='bx bx-menu'></i>
            </a>

            <div className={
                isExpanded ? "header-link expanded" : "header-link"
            }

            >
                <ul>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="">Artikel</Link>
                    </li>
                    <li>
                        <Link to="/search-doctor">Cari Dokter</Link>
                    </li>
                </ul>
            </div>
            <div className={`header-button ${userName ? styles.hidden : ""}`}>
                <button id='loginBtn' onClick={() => setShowHanphoneModal(true)}>Login</button>
            </div>

            <Modal show={showHanphoneModal} onClose={() => setShowHanphoneModal(false)}>
                <div className={styles.content}>
                    <h4>Login ke dalam SoluHouse</h4>
                    <div onClick={() => { setShowHanphoneModal(false); handleLogin() }}>
                        <button className="sign-in">Login with Google</button>
                    </div>      
                </div>
            </Modal>

            <div className={`is__loggedin ${userName ? "" : styles.hidden}`} onClick={() => setShowOptionDropdown(!showOptionDropdown)}>
                <div className="profile__icon"></div>
                <div className="profile__options">
                    <span className='profile__icon-arrow'><i className='bx bxs-down-arrow'></i></span>
                    <div className={`profile__icon-dropdown ${showOptionDropdown ? "" : styles.hidden}`}>
                        <p onClick={handleLogout}>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header