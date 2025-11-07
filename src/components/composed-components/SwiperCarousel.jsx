import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import NewsImage1 from '../../assets/images/NewsCard_img1.png';
import NewsImage2 from '../../assets/images/NewsCard_img2.png';
import NewsImage3 from '../../assets/images/NewsCard_img3.png';

export const SwiperCarousel = () => {

    const newsContent = [{ title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage1, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
    { title: 'New Incubator Launched in Viet...', author: 'by simplifiventures', date: '11th Jan 2020', image: NewsImage2, description: 'We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...' },
    { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage3, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
    { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage1, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
    { title: 'New Incubator Launched in Viet...', author: 'by simplifiventures', date: '11th Jan 2020', image: NewsImage2, description: 'We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...' },
    { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage3, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' },
    { title: 'Field Survey', author: 'by simplifiventures', date: '11th Nov 2020', image: NewsImage3, description: 'We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...' }
    ]
    

return (
    <div className='news-section '>
        <div className="news-content custom-container">
            <h3 className='custom-container'>News</h3>
            <div className="news-swiper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >


                    {newsContent.map((newsCard) => (

                        <SwiperSlide className='swiper-cards' key={newsCard.id}>

                            <img
                                src={newsCard.image}
                                alt={newsCard.title}
                                className="rounded-t-lg"
                            />

                            <div className="news-card-content">
                                <h3>{newsCard.title}</h3>
                                <p>{newsCard.author}</p>
                                <p>{newsCard.date}</p>
                                <p>{newsCard.description}</p>
                            </div>

                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    </div>
)
}