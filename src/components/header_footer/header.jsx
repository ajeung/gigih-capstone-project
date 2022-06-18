import { useState } from 'react';
import logoHeader from '../../assets/logo.png';

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false)

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
                            <button id='loginBtn'>Login</button>
                        </div>
                    </li>
                </ul>
            </div>
                {/* LOGGED IN */}
                {/* <div className="is__loggedin">
                    <div className="profile__icon"></div>
                    <div className="profile__options">
                        <span className='profile__icon-arrow'><i className='bx bxs-down-arrow'></i></span>
                        <div className="profile__icon-dropdown"> */}
                            {/* <p>View Profile</p> Link to view profile page  */}
                            {/* <p>Edit Profile</p> Link to edit profile page */}
                            {/* <p>Logout</p>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Header