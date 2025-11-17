import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

import NewsImage1 from '../../assets/images/NewsCard_img1.png';
import NewsImage2 from '../../assets/images/NewsCard_img2.png';
import NewsImage3 from '../../assets/images/NewsCard_img3.png';
import rightArrow from '../../assets/images/right_arrow.png'

export const SwiperCarousel = () => {

    const newsContent = [
        { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage1, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
        { title: 'New Incubator Launched in Viet...', author: 'by simplifiventures', date: '11th Jan 2020', image: NewsImage2, description: 'We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...' },
        { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage3, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
        { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage1, description: 'We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...' },
        { title: 'New Incubator Launched in Viet...', author: 'by simplifiventures', date: '11th Jan 2020', image: NewsImage2, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
        { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage3, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' }
    ];

    return (
        <div className='news-section'>
            <div className="news-content custom-container">
                <h3 >News</h3>

                <div className="news-swiper">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}

                        loop={true}
                        freeMode={false}

                        autoplay={false}

                        // autoplay={{

                        //     delay: 2000,
                        //     disableOnInteraction: false,
                        // }}

                        scrollbar={{ draggable: true }}

                        modules={[Navigation, Pagination, Autoplay, Scrollbar]}


                        breakpoints={{
                            320: { slidesPerView: 1.2, spaceBetween: 16 },
                            480: { slidesPerView: 1.6, spaceBetween: 20 },
                            640: { slidesPerView: 2.2, spaceBetween: 24 },
                            768: { slidesPerView: 2.8, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 28 },
                            1280: { slidesPerView: 3.5, spaceBetween: 30 },
                            1440: { slidesPerView: 4, spaceBetween: 30 },
                        }}

                        // breakpoints={{
                        //     640: { slidesPerView: 2 },
                        //     768: { slidesPerView: 3 },
                        //     1024: { slidesPerView: 4 },
                        // }}

                        className="mySwiper"
                    >

                        {newsContent.map((newsCard, index) => (
                            <SwiperSlide className='swiper-cards' key={index}>
                                <div className="news-card">
                                    <img src={newsCard.image} alt={newsCard.title} />
                                    <div className="news-card-content">
                                        <h3 className='small-p'>{newsCard.title}</h3>
                                        <div className='news-card-text'>
                                            <p className='news-author news-card-subtitle'>{newsCard.author}</p>
                                            <p className='news-date news-card-subtitle'>{newsCard.date}</p>

                                        </div>
                                        <p className='news-card-description subtitle-p'>{newsCard.description}</p>
                                        <div className="news-card-subtext">
                                            <p><a href="" className='news-card-a '>READ MORE <img src={rightArrow} alt="" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};
