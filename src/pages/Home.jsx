import { InfoCards } from '../components/composed-components/InfoCards'
import infoCard1 from '../assets/images/InfoCard_img1.png';
import infoCard2 from '../assets/images/InfoCard_img2.png';
import infoCard3 from '../assets/images/InfoCard_img3.png';
import infoCard4 from '../assets/images/solutions.png';
import infoCard5 from '../assets/images/InfoCard_img4.png';
import infoCard6 from '../assets/images/InfoCard_img5.png';
import marqueeImg1 from '../assets/images/paytm.png';
import marqueeImg2 from '../assets/images/bharatpe.png';
import marqueeImg3 from '../assets/images/Pharmeasy.png';
import marqueeImg4 from '../assets/images/mbachaiwala.jpg';
import marqueeImg5 from '../assets/images/zepto.png';
import { InvestedProjects } from '../components/composed-components/InvestedProjects';



const InfoCardHeading = ['Incubating innovative solutions for financial services',
    'Simplifi Ventures builds and invests in companies that help drive the next phase of new product creation and customer experience.',
    'Technology is in our blood',
    'We spun out of Primera Capital in 2020',
    'Join Us',
    'Contact'
];

const InfoCardDescrption = ['We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry',
    'To date, we have worked with over 80 fintech start ups and financial institutions to build neo-banks around the world.',
    'We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.',
    'We run as an independent financial services venture studio. Today we have global partnerships with financial institutions to incubate new fintech innovations.',
    'We have monthly rountable discussions with industry experts exploring fintech innovation in the industry and looking for potential growth areas.',
    'Located in the heart of Silicon Valley, we would love to hear from you. Please send us a message using our Contact Us Form or drop us an email at:Learnmore@simplifiventures.com'
]

const investedCompanies = [{ id: 1, src: marqueeImg1 },
{ id: 2, src: marqueeImg2 },
{ id: 3, src: marqueeImg3 },
{ id: 4, src: marqueeImg4 },
{ id: 5, src: marqueeImg5 }

]

export const Home = () => {
    return (
        <main>

            <div >
                <InfoCards img={infoCard1} h2={InfoCardHeading[0]} p={InfoCardDescrption[0]} />
                <InfoCards img={infoCard2} h2={InfoCardHeading[1]} p={InfoCardDescrption[1]} />
                <InfoCards img={infoCard3} h2={InfoCardHeading[2]} p={InfoCardDescrption[2]} />
                <InvestedProjects marqueeImages={investedCompanies} />
                <InfoCards img4={infoCard4} h2={InfoCardHeading[3]} p={InfoCardDescrption[3]} />
                <InfoCards img={infoCard5} h2={InfoCardHeading[4]} p={InfoCardDescrption[4]} />
                <InfoCards img={infoCard6} h2={InfoCardHeading[5]} p={InfoCardDescrption[5]} />
            </div>

            <div>

            </div>
        </main>
    )
}