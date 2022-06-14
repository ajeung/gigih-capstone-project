import FeedComponent from '../components/feed';


const Home = () => {
    return (
        <div className='home__container'>
            <section className='menu'>
                <div className='menu__intro'>
                    <h1>SoluHouse</h1>
                    <p>Menjawab Kekhawatiran Anda</p>
                </div>
                <div className="menu__container">
                    <div className='menu__cards'>
                        <img className='menu__icon' src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <p>gorengg</p>
                    </div>
                    <div className='menu__cards'>
                        <img className='menu__icon' src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <p>gorengg</p>
                    </div>
                    <div className='menu__cards'>
                        <img className='menu__icon' src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <p>gorengg</p>
                    </div>
                    <div className='menu__cards'>
                        <img className='menu__icon' src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <p>gorengg</p>
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