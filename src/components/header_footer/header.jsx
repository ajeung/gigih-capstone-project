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
                <a href='#'>TOKO</a>
                <a href='#'>CARI DOKTER</a>
                <a href='#'>ARTIKEL</a>
                <div className="header-button">
                <button id='loginBtn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header