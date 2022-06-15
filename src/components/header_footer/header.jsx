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
            </div>
        </div>
    )
}

export default Header