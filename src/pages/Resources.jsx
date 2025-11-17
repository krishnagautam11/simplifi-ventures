import { InfoCards } from '../components/composed-components/InfoCards';
import { SwiperCarousel } from '../components/composed-components/SwiperCarousel';
import { resourcesInfoCards } from '../data/ResourcesData';

export const Resources = () => {
  return (
    <main className="custom-container-main">

      {/* FIRST INFO CARD */}
      <InfoCards
        img={resourcesInfoCards[0].img}
        h2={resourcesInfoCards[0].title}
        className={resourcesInfoCards[0].className}
      />

      {/* SWIPER MUST BE ALONE */}
      <div className="w-full block">
        <SwiperCarousel />
      </div>

      {/* JOIN US CARD */}
      <InfoCards
        img={resourcesInfoCards[1].img}
        h2={resourcesInfoCards[1].title}
        p={resourcesInfoCards[1].desc}
        className={resourcesInfoCards[1].className}
      />

      {/* CONTACT CARD */}
      <InfoCards
        img={resourcesInfoCards[2].img}
        h2={resourcesInfoCards[2].title}
        p={resourcesInfoCards[2].desc}
        className={resourcesInfoCards[2].className}
      />
    </main>
  );
};


// import { InfoCards } from '../components/composed-components/InfoCards'
// import infoCard10 from '../assets/images/InfoCard_img10.png';
// import infoCardJoinUs from '../assets/images/InfoCard_img4.png';
// import infoCardFooter from '../assets/images/InfoCard_img5.png';
// import { SwiperCarousel } from '../components/composed-components/SwiperCarousel';

// export const Resources = () => {

//     const InfoCardHeading = ['Incubating innovative solutions for financial services',
//         'Simplifi Ventures builds and invests in companies that help drive the next phase of new product creation and customer experience.',
//         'Technology is in our blood',
//         'We spun out of Primera Capital in 2020',
//         'At Simplifi Ventures we believe in delivering value for our entrepreneurs and financial partners',
//         'Grounded Innovations',
//         'Tough Love',
//         'Leap Frog Learning',
//         'Resources to help to scale your business',
//         'Join Us',
//         'Contact'
//     ];

//     const InfoCardDescrption = ['We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry',
//         'To date, we have worked with over 80 fintech start ups and financial institutions to build neo-banks around the world.',
//         'We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.',
//         'We run as an independent financial services venture studio. Today we have global partnerships with financial institutions to incubate new fintech innovations.',
//         'We want to build innovations that are grounded in the realities that financial institutions face by providing market research from practitioners (not just pundits)',
//         'We know that starting a company is not easy. We help entrepreneurs manage a start up by advising them on the operational challenges of building a new company.',
//         'Rather than reinvent the wheel, we seek technology accelerators that enable our entrepreneurs and financial leaders to transform financial services better, cheaper and faster than they can do on their own.',
//         'We have monthly rountable discussions with industry experts exploring fintech innovation in the industry and looking for potential growth areas.',
//         'Located in the heart of Silicon Valley, we would love to hear from you. Please send us a message using our Contact Us Form or drop us an email at:Learnmore@simplifiventures.com'
    
//     ]


//     return (
//         <main className='custom-container-main'>
//             <InfoCards img={infoCard10} h2={InfoCardHeading[8]} className="card-one" />

//             <SwiperCarousel />

//             <InfoCards img={infoCardJoinUs} h2={InfoCardHeading[9]} p={InfoCardDescrption[7]} className="card-fifth" />
//             <InfoCards img={infoCardFooter} h2={InfoCardHeading[10]} p={InfoCardDescrption[8]} className="card-sixth" />
//         </main>
//     )
// }