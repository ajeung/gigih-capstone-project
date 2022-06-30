import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from "./style.module.css";
import icon from "../../assets/img/arrow.png"
import logoHeader from '../../assets/logo.png';
import Modal from '../Modal';
// import {firebaseAuth, googleProvider} from '../../configFB/firebase'
import { useFirebase } from "react-redux-firebase";

const Header = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();

    var token = localStorage.getItem("token");

    const [isExpanded, setIsExpanded] = useState(false)
    const [inputs, setInputs] = useState([
        {
            name: "handphone",
            type: "text",
            value: ""
        },
        {
            name: "verification",
            type: "text",
            value: ""
        },
    ])

    const [showHanphoneModal, setShowHanphoneModal] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showOptionDropdown, setShowOptionDropdown] = useState(false);

    const loginWithGoogle = () => {
        // firebaseAuth.signInWithPopup(googleProvider);
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                navigate("/")
            });
    }

    const handleLogin = () => {
        localStorage.setItem("token", "masukkantokenmukesini");
        console.log(token);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/");
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
                <i class='bx bx-menu'></i>
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
                    <li>
                        <div className={`header-button ${token ? styles.hidden : ""}`}>
                            <button id='loginBtn' onClick={() => setShowHanphoneModal(true)}>Login</button>
                        </div>
                    </li>
                </ul>
            </div>

            <Modal show={showHanphoneModal} onClose={() => setShowHanphoneModal(false)}>
                <div className={styles.content}>
                    <h4>Login ke dalam SoluHouse</h4>
                    <p><span>Masukkan nomor telepon</span> untuk menggunakan layanan dari SoluHouse</p>
                    <p><span>Masukkan nomor telepon</span></p>
                    <div className={styles.handphone_input}>
                        <p>+62</p>
                        <input value={inputs[0].value} type={inputs[0].type} onChange={(e) => setInputs([...inputs], inputs[0].value = e.target.value)} />
                        <div className={styles.icon} onClick={() => { setShowVerificationModal(true); setShowHanphoneModal(false) }} >
                            <img src={icon} alt="Enter" />
                        </div>
                    </div>
                    <div onClick={() => { setShowHanphoneModal(false); loginWithGoogle(); handleLogin() }}>
                        <button className="sign-in">Login with Google</button>
                    </div>
                    
                        
                </div>
            </Modal>

            <Modal show={showVerificationModal} onClose={() => setShowVerificationModal(false)}>
                <div className={styles.content}>
                    <h4>Login ke dalam SoluHouse</h4>
                    <p>Masukkan kode verifikasi yang telah dikirim ke nomor anda</p>
                    <p><span>Masukkan 6 digit kode</span></p>
                    <div className={styles.verification_input}>
                        <input value={inputs[1].value} type={inputs[1].type} onChange={(e) => setInputs([...inputs], inputs[1].value = e.target.value)} />
                    </div>
                    <p className={styles.wrong_number}>Salah nomor ? <span>Ganti nomor telepon</span></p>
                    <div className={styles.verification} onClick={() => { setShowVerificationModal(false); handleLogin() }}>
                        <div className={styles.icon}>
                            <img src={icon} alt="Enter" />
                        </div>
                        <p><span>Verifikasi</span></p>
                    </div>
                </div>
            </Modal>

            <div className={`is__loggedin ${token ? "" : styles.hidden}`} onClick={() => setShowOptionDropdown(!showOptionDropdown)}>
                <div className="profile__icon"></div>
                <div className="profile__options">
                    <span className='profile__icon-arrow'><i className='bx bxs-down-arrow'></i></span>
                    <div className={`profile__icon-dropdown ${showOptionDropdown ? "" : styles.hidden}`}>
                        <p onClick={() => navigate("/view-profile")}>View Profile</p>
                        <p onClick={() => navigate("/edit-profile")}>Edit Profile</p>
                        <p onClick={handleLogout}>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export const newToken = token;
{/* <a href={`${process.env.SH_APP_AUTH_LINK}&client_id=${process.env.SH_APP_CLIENT_ID}&redirect_uri=${process.env.SH_APP_REDIRECT_URI}&state=${process.env.SH_APP_STATE}&scope=${process.env.SH_APP_SCOPE}&context_uri=${process.env.SH_APP_CONTEXT_URI}`}>
    <button className="sign-in">Login with Google</button>
</a> */}
export default Header