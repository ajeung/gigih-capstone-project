import logoFooter from '../../assets/logo2.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img id='footerLogo' src={logoFooter} alt="Logo"/>
            </div>
            <div className='footer-link'>
                <a href='#'>Tentang Kami</a>
                <a href='#'>Hubungi Kami</a>
            </div>
        </div>
    )
}

export default Footer