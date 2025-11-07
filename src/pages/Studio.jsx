import { InfoCards } from '../components/composed-components/InfoCards'
import infoCard7 from '../assets/images/InfoCard_img7.png';
import infoCard2 from '../assets/images/InfoCard_img2.png';
import infoCard8 from '../assets/images/InfoCard_img8.png';
import infoCard9 from '../assets/images/InfoCard_img9.png';
import infoCardJoinUs from '../assets/images/InfoCard_img4.png';
import infoCardFooter from '../assets/images/InfoCard_img5.png';

import AcceleratorImg from '../assets/images/Accelerator.png';
import AdvisorImg from '../assets/images/Advisor.png';
import CapitalImg from '../assets/images/Capital.png';

import { CTA } from '../components/composed-components/CTA';
import { ApproachCards } from '../components/composed-components/ApproachCards';
import { ProcessImg } from '../components/atomic-components/ProcessImg';

import  Accordion  from '../components/composed-components/Accordion'

export const Studio = () => {


    const InfoCardHeading = ['Incubating innovative solutions for financial services',
        'Simplifi Ventures builds and invests in companies that help drive the next phase of new product creation and customer experience.',
        'Technology is in our blood',
        'We spun out of Primera Capital in 2020',
        'At Simplifi Ventures we believe in delivering value for our entrepreneurs and financial partners',
        'Grounded Innovations',
        'Tough Love',
        'Leap Frog Learning',
        'Join Us',
        'Contact'
    ];

    const InfoCardDescrption = ['We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry',
        'To date, we have worked with over 80 fintech start ups and financial institutions to build neo-banks around the world.',
        'We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.',
        'We run as an independent financial services venture studio. Today we have global partnerships with financial institutions to incubate new fintech innovations.',
        'We want to build innovations that are grounded in the realities that financial institutions face by providing market research from practitioners (not just pundits)',
        'We know that starting a company is not easy. We help entrepreneurs manage a start up by advising them on the operational challenges of building a new company.',
        'Rather than reinvent the wheel, we seek technology accelerators that enable our entrepreneurs and financial leaders to transform financial services better, cheaper and faster than they can do on their own.',
        'We have monthly rountable discussions with industry experts exploring fintech innovation in the industry and looking for potential growth areas.',
        'Located in the heart of Silicon Valley, we would love to hear from you. Please send us a message using our Contact Us Form or drop us an email at:Learnmore@simplifiventures.com'
    ]

    const ctaContent = [{ 'title': 'Invest in the Future of Finance', 'description': 'Empower fintech startups redefining the global financial landscape.', 'button': 'Join Us' },
    {
        title: "Let’s Build the Future Together",
        description: "Have a question, idea, or opportunity? Our team would love to hear from you. Reach out and let’s start a conversation.",
        button: "Contact Us"
    }
    ]

    const approachSection = [{ title: 'Accelerator', image: AcceleratorImg, description: 'We accelerate the development of fintech companies by partnering with fintech leaders. We strive to help entrepreneurs design and build technologies that are relevant and develop a solid strategy for building.' },
    { title: 'Advisor', image: AdvisorImg, description: 'We conduct market research and host symposia where entrepreneurs and key financial leaders share ideas. We match advisors to budding firms to provide operational guidance.' },
    { title: 'Capital', image: CapitalImg, description: 'We invest in seed and early rounds based on relationships we have cultivated with entrepreneurs and young companies.' }
    ]


    return (
        <main>

            <div >
                <InfoCards img={infoCard7} h2={InfoCardHeading[4]} className="card-one" />
                <InfoCards img={infoCard2} h2={InfoCardHeading[5]} p={InfoCardDescrption[4]} className="card-two" />
                <InfoCards img={infoCard8} h2={InfoCardHeading[6]} p={InfoCardDescrption[5]} className="card-third" />

                <InfoCards img={infoCard9} h2={InfoCardHeading[7]} p={InfoCardDescrption[6]} className="card-fifth" />

                <ApproachCards approachContent={approachSection} />

                <ProcessImg />

                <InfoCards img={infoCardJoinUs} h2={InfoCardHeading[8]} p={InfoCardDescrption[7]} className="card-fifth" />
                <CTA content={ctaContent[1]} className='contactBanner' droplets='dropEffect' />
                <InfoCards img={infoCardFooter} h2={InfoCardHeading[5]} p={InfoCardDescrption[5]} className="card-sixth" />
                <Accordion />
            </div>

            <div>

            </div>
        </main>
    )
}