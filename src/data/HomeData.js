// images
import infoCard1 from "../assets/images/InfoCard_img1.png";
import infoCard2 from "../assets/images/InfoCard_img2.png";
import infoCard3 from "../assets/images/InfoCard_img3.png";
import infoCard4 from "../assets/images/solutions.png";
import infoCard5 from "../assets/images/InfoCard_img4.png";
import infoCard6 from "../assets/images/InfoCard_img5.png";

import marqueeImg1 from "../assets/images/bharatpe.png";
import marqueeImg2 from "../assets/images/Pharmeasy.png";
import marqueeImg3 from "../assets/images/paytm1.png";
import marqueeImg4 from "../assets/images/zepto.png";
import marqueeImg5 from "../assets/images/razorPay.png";

export const homeSections = [
  {
    type: "card",
    className: "card-one",
    img: infoCard1,
    title: "Incubating innovative solutions for financial services",
    desc:
      "We are a business-to-business fintech focused venture studio. " +
      "Our mission is to enable digital transformation in the banking industry.",
  },

  {
    type: "card",
    className: "card-two",
    img: infoCard2,
    title:
      "Simplifi Ventures builds and invests in companies that help drive the next phase of new product creation and customer experience.",
    desc:
      "To date, we have worked with over 80 fintech start ups and financial institutions " +
      "to build neo-banks around the world.",
  },

  {
    type: "card",
    className: "card-third",
    img: infoCard3,
    title: "Technology is in our blood",
    desc:
      "We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. " +
      "Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.",
  },

 
  {
    type: "marquee",
    marqueeImages: [
      { id: 1, src: marqueeImg1 },
      { id: 2, src: marqueeImg2 },
      { id: 3, src: marqueeImg3 },
      { id: 4, src: marqueeImg4 },
      { id: 5, src: marqueeImg5 },
      { id: 6, src: marqueeImg1 },
      { id: 7, src: marqueeImg2 },
      { id: 8, src: marqueeImg3 },
      { id: 9, src: marqueeImg4 },
      { id: 10, src: marqueeImg5 },
    ],
  },

  {
    type: "card",
    className: "card-fourth",
    img4: infoCard4,
    title: "We spun out of Primera Capital in 2020",
    desc:
      "We run as an independent financial services venture studio. " +
      "Today we have global partnerships with financial institutions to incubate new fintech innovations.",
  },

 
  {
    type: "cta",
    className: "investorBanner",
    content: {
      title: "Invest in the Future of Finance",
      description:
        "Join the movement reshaping global finance, one fintech breakthrough at a time.",
      button: "Join Us",
      link: "/join",
    },
  },

  {
    type: "card",
    className: "card-fifth",
    img: infoCard5,
    title: "Join Us",
    desc:
      "We have monthly rountable discussions with industry experts exploring fintech innovation in the industry " +
      "and looking for potential growth areas.",
  },

  {
    type: "card",
    className: "card-sixth",
    img: infoCard6,
    title: "Contact",
    desc:
      "Located in the heart of Silicon Valley, we would love to hear from you. " +
      "Please send us a message using our Contact Us Form or drop us an email at:",
    email: "learnmore@simplifiventures.com",
  }

  // {
  //   type: "card",
  //   className: "card-sixth",
  //   img: infoCard6,
  //   title: "Contact",
  //   desc:
  //     "Located in the heart of Silicon Valley, we would love to hear from you. " +
  //     "Please send us a message using our Contact Us Form or drop us an email at: learnmore@simplifiventures.com"
  // }
];
