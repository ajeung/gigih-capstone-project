import { useLocation } from 'react-router'
import Header from '../../components/HeaderFooter/Header'
import HomeFooter from '../../components/HeaderFooter/Footer'
import styles from './style.module.css'

const HomeLayout = (props) => {
    const { children } = props
    const location = useLocation()

    return (
        <div className={styles.container}>
            {location.pathname !== '/payment' && <Header />}
            <div className={styles.app}>{children}</div>
            {location.pathname === '/' && <HomeFooter />}
        </div>
    )
}

export default HomeLayout
