// image imports
import infoCard7 from '../assets/images/InfoCard_img7.png';
import infoCard2 from '../assets/images/InfoCard_img2.png';
import infoCard8 from '../assets/images/InfoCard_img8.png';
import infoCard9 from '../assets/images/InfoCard_img9.png';
import infoCardJoinUs from '../assets/images/InfoCard_img4.png';
import infoCardFooter from '../assets/images/InfoCard_img5.png';

import AcceleratorImg from '../assets/images/Accelerator.png';
import AdvisorImg from '../assets/images/Advisor.png';
import CapitalImg from '../assets/images/Capital.png';


// Info Card Data
export const studioInfoCards = [
  {
    img: infoCard7,
    title: 'At Simplifi Ventures we believe in delivering value for our entrepreneurs and financial partners',
    desc: null,
    className: 'card-one'
  },
  {
    img: infoCard2,
    title: 'Grounded Innovations',
    desc: 'We want to build innovations that are grounded in the realities that financial institutions face by providing market research from practitioners (not just pundits)',
    className: 'card-two'
  },
  {
    img: infoCard8,
    title: 'Tough Love',
    desc: 'We know that starting a company is not easy. We help entrepreneurs manage a start up by advising them on the operational challenges of building a new company.',
    className: 'card-third'
  },
  {
    img: infoCard9,
    title: 'Leap Frog Learning',
    desc: 'Rather than reinvent the wheel, we seek technology accelerators that enable our entrepreneurs and financial leaders to transform financial services better, cheaper and faster than they can do on their own.',
    className: 'card-fifth leapCard'
  }
];


// Approach Section
export const approachSection = [
  {
    title: 'Accelerator',
    image: AcceleratorImg,
    description:
      'We accelerate the development of fintech companies by partnering with fintech leaders. We strive to help entrepreneurs design and build technologies that are relevant and develop a solid strategy for building.'
  },
  {
    title: 'Advisor',
    image: AdvisorImg,
    description:
      'We conduct market research and host symposia where entrepreneurs and key financial leaders share ideas. We match advisors to budding firms to provide operational guidance.'
  },
  {
    title: 'Capital',
    image: CapitalImg,
    description:
      'We invest in seed and early rounds based on relationships we have cultivated with entrepreneurs and young companies.'
  }
];


// CTA content (Studio page)
export const studioCTA = {
  title: "Let’s Build the Future Together",
  description: "Have a question, idea, or opportunity? Our team would love to hear from you. Reach out and let’s start a conversation.",
  button: "Contact Us",
  link: "/contact"
};


// Footer Info Card (Contact)
export const studioFooterCard = {
  img: infoCardFooter,
  title: 'Contact',
  desc: "Located in the heart of Silicon Valley, we would love to hear from you. " +
    "Please send us a message using our Contact Us Form or drop us an email at:",
  email: "learnmore@simplifiventures.com",
  className: "card-sixth",
};


// Join Us card
export const studioJoinUsCard = {
  img: infoCardJoinUs,
  title: 'Join Us',
  desc:
    'We have monthly rountable discussions with industry experts exploring fintech innovation in the industry and looking for potential growth areas.',
  className: 'card-fifth'
};
