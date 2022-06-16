import FeedComponent from '../components/feed';
import img_consultation from '../assets/consultation.jpg';
import img_pharmacy from '../assets/pharmacy.jpg';
import img_hospital from '../assets/hospital.jpg';
import img_checkup from '../assets/checkup.jpg';


const Home = () => {
    return (
        <div className='home__container'>
            <section className='menu'>
                <div className="menu__wrapper">
                    <div className='menu__intro'>
                        <h1>SoluHouse</h1>
                        <p>Menjawab Kekhawatiran Anda</p>
                    </div>
                    <div className="menu__container">
                        <div className='menu__cards'>
                            <img className='menu__icon' src={img_consultation} alt="" />
                            <p>Konsultasi</p>
                        </div>
                        <div className='menu__cards'>
                            <img className='menu__icon' src={img_pharmacy} alt="" />
                            <p>Apotek</p>
                        </div>
                        <div className='menu__cards'>
                            <img className='menu__icon' src={img_hospital} alt="" />
                            <p>Reservasi RS</p>
                        </div>
                        <div className='menu__cards'>
                            <img className='menu__icon' src={img_checkup} alt="" />
                            <p>Cek Kesehatan</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='feeds'>
                <FeedComponent/>
            </section>
        </div>
    )
}

export default Home