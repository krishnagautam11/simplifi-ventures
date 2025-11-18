import { InfoCards } from "../components/composed-components/InfoCards";
import { TeamShowing } from "../components/composed-components/TeamShowing";
import { CTA } from "../components/composed-components/CTA";

import { teamInfoCards, teamCTA } from "../data/TeamData";

export const Team = () => {
  return (
    <main className="custom-container-main">
      <div>
        {/* First Team Info Card */}
        <InfoCards
          img={teamInfoCards[0].img}
          h2={teamInfoCards[0].title}
          p={teamInfoCards[0].desc}
          className={teamInfoCards[0].className}
        />

        {/* Team Members Section */}
        <TeamShowing />

        {/* CTA */}
        <CTA
          content={teamCTA}
          className="contactBanner"
          droplets="dropEffect"
          link={teamCTA.link}
        />

        {/* Join Us Card */}
        <InfoCards
          img={teamInfoCards[1].img}
          h2={teamInfoCards[1].title}
          p={teamInfoCards[1].desc}
          className={teamInfoCards[1].className}
        />

        {/* Footer Info Card */}
        <InfoCards
          img={teamInfoCards[2].img}
          h2={teamInfoCards[2].title}
          p={teamInfoCards[2].desc}
          className={teamInfoCards[2].className}
          email={teamInfoCards[2].email}       
        />
      </div>
    </main>
  );
};


// import { Home } from './Home';
// import { InfoCards } from '../components/composed-components/InfoCards';
// import infoCard1 from '../assets/images/InfoCard_img1.png';
// import infoCard2 from '../assets/images/InfoCard_img2.png';
// import infoCard3 from '../assets/images/InfoCard_img3.png';
// import infoCard4 from '../assets/images/solutions.png';
// import infoCard6 from '../assets/images/InfoCard_img6.png';
// import infoCardJoin from '../assets/images/InfoCard_img4.png';
// import infoCardFooter from '../assets/images/InfoCard_img5.png';
// import { CTA } from '../components/composed-components/CTA';
// import { TeamShowing } from '../components/composed-components/TeamShowing'



// export const Team = () => {
//     const InfoCardHeading = ['Incubating innovative solutions for financial services',
//         'Simplifi Ventures builds and invests in companies that help drive the next phase of new product creation and customer experience.',
//         'Technology is in our blood',
//         'We spun out of Primera Capital in 2020',
//         'We build meaningful companies',
//         'Join Us',
//         'Contact',

//     ];

//     const InfoCardDescrption = ['We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry',
//         'To date, we have worked with over 80 fintech start ups and financial institutions to build neo-banks around the world.',
//         'We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.',
//         'We run as an independent financial services venture studio. Today we have global partnerships with financial institutions to incubate new fintech innovations.',
//         'Meet the Simplifi team. We are operators, engineers, product managers and researchers',
//         'We have monthly rountable discussions with industry experts exploring fintech innovation in the industry and looking for potential growth areas.',
//         'Located in the heart of Silicon Valley, we would love to hear from you. Please send us a message using our Contact Us Form or drop us an email at:Learnmore@simplifiventures.com'
//     ]

//     const ctaContent = [{ 'title': 'Invest in the Future of Finance', 'description': 'Empower fintech startups redefining the global financial landscape.', 'button': 'Join Us' },
//     {
//         title: "Let’s Build the Future Together",
//         description: "Have a question, idea, or opportunity? Our team would love to hear from you. Reach out and let’s start a conversation.",
//         button: "Contact Us"
//     }
//     ]



//     return (
//         <main className='custom-container-main'>

//             <div >
//                 <InfoCards img={infoCard6} h2={InfoCardHeading[4]} p={InfoCardDescrption[4]} className="card-one" />


//                 <TeamShowing />
//                 <CTA content={ctaContent[1]} className='contactBanner' droplets='dropEffect' link="/contact"/>
//                 <InfoCards img={infoCardJoin} h2={InfoCardHeading[5]} p={InfoCardDescrption[5]} className="card-fifth" />
//                 <InfoCards img={infoCardFooter} h2={InfoCardHeading[6]} p={InfoCardDescrption[6]} className="card-sixth" />

//             </div>

//             <div>

//             </div>
//         </main>
//     )
// }