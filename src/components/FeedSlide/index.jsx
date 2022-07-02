import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeedComponent = () => {
    const settings = {
        className: "slider variable-width",
        // dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    };

    return (
        <div className="feeds__wrapper">
            <h3>Rekomendasi Bacaan</h3>

            <Slider {...settings}>
                <div className="feeds__content">
                    <div className="feeds__image">
                        <img src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <a href="google.com" className="over-layer"><i className='bx bx-link' ></i></a>
                    </div>
                    <div className="feeds__info">
                        <a href="google.com">Judul Artikel</a>
                        <div className="feeds__date"><i className='bx bx-time-five'></i></div>
                        <div className="feeds__source">Sumber: </div>
                    </div>
                </div>

                <div className="feeds__content">
                    <div className="feeds__image">
                        <img src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <a href="google.com" className="over-layer"><i className='bx bx-link' ></i></a>
                    </div>
                    <div className="feeds__info">
                        <a href="google.com">Judul Artikel</a>
                        <div className="feeds__date"><i className='bx bx-time-five'></i></div>
                        <div className="feeds__source">Sumber: </div>
                    </div>
                </div>

                <div className="feeds__content">
                    <div className="feeds__image">
                        <img src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <a href="google.com" className="over-layer"><i className='bx bx-link' ></i></a>
                    </div>
                    <div className="feeds__info">
                        <a href="google.com">Judul Artikel</a>
                        <div className="feeds__date"><i className='bx bx-time-five'></i></div>
                        <div className="feeds__source">Sumber: </div>
                    </div>
                </div>

                <div className="feeds__content">
                    <div className="feeds__image">
                        <img src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <a href="google.com" className="over-layer"><i className='bx bx-link' ></i></a>
                    </div>
                    <div className="feeds__info">
                        <a href="google.com">Judul Artikel</a>
                        <div className="feeds__date"><i className='bx bx-time-five'></i></div>
                        <div className="feeds__source">Sumber: </div>
                    </div>
                </div>

                <div className="feeds__content">
                    <div className="feeds__image">
                        <img src="https://i.ibb.co/ZmhmVfx/Find-My.jpg" alt="" />
                        <a href="google.com" className="over-layer"><i className='bx bx-link' ></i></a>
                    </div>
                    <div className="feeds__info">
                        <a href="google.com">Judul Artikel</a>
                        <div className="feeds__date"><i className='bx bx-time-five'></i></div>
                        <div className="feeds__source">Sumber: </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default FeedComponent