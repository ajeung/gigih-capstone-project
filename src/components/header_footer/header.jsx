import { useState } from 'react';
import styles from "./style.module.css";
import icon from "../../assets/img/arrow.png"
import logoHeader from '../../assets/logo.png';
import HandphoneModal from '../HandphoneModal';

const Header = () => {
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
    const [show, setShow] = useState(false);

    return (
        <div className="header">
            <div className="header-logo">
                <a href='#' >
                <img id='headerLogo' src={logoHeader} alt="Logo"/>
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
                        <a href='#'>Beranda</a>
                    </li>
                    <li>
                        <a href='#'>Artikel</a>
                    </li>
                    <li>
                        <a href='#'>Cari Dokter</a>
                    </li>
                    <li>
                        <div className="header-button">
                            <button id='loginBtn' onClick={() => setShow(true)}>Login</button>
                        </div>
                    </li>
                </ul>
            </div>

            <>
            <HandphoneModal show={show} onClose={() => setShow(false)}>
                <div className={styles.content}>
                    <h4>Login ke dalam SoluHouse</h4>
                    <p><span>Masukkan nomor telepon</span> untuk menggunakan layanan dari SoluHouse</p>
                    <p><span>Masukkan nomor telepon</span></p>
                    <div className={styles.handphone_input}>
                        <p>+62</p>
                        <input value={inputs[0].value} type={inputs[0].type} onChange={(e) => setInputs([...inputs], inputs[0].value = e.target.value)}/>
                        <div className={styles.icon}>
                            <img src={icon} />
                        </div>
                    </div>
                </div>
            </HandphoneModal>
        </>
                {/* LOGGED IN */}
                {/* <div className="is__loggedin">
                    <div className="profile__icon"></div>
                    <div className="profile__options">
                        <span className='profile__icon-arrow'><i className='bx bxs-down-arrow'></i></span>
                        <div className="profile__icon-dropdown">
                            <p>View Profile</p> Link to view profile page 
                            <p>Edit Profile</p> Link to edit profile page
                            <p>Logout</p>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Header