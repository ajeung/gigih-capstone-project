import logoHeader from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <a href='#' >
                <img id='headerLogo' src={logoHeader} alt="Logo"/>
                </a>
            </div>
            <div class='header-link'>
                <a href='#'>Beranda</a>
                <a href='#'>Artikel</a>
                <a href='#'>Cari Dokter</a>
                <div className="header-button">
                    <button id='loginBtn'>Login</button>
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
        </div>
    )
}

export default Header