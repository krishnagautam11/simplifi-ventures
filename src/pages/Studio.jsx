import { InfoCards } from '../components/composed-components/InfoCards';
import { CTA } from '../components/composed-components/CTA';
import { ApproachCards } from '../components/composed-components/ApproachCards';
import { ProcessImg } from '../components/atomic-components/ProcessImg';
import Accordion from '../components/composed-components/Accordion';

import {
  studioInfoCards,
  approachSection,
  studioCTA,
  studioFooterCard,
  studioJoinUsCard
} from '../data/StudioData';


export const Studio = () => {
  return (
    <main className="custom-container-main">
      <div className="studio-page-wrapper">

        {studioInfoCards.map((card, index) => (
          <InfoCards
            key={index}
            img={card.img}
            h2={card.title}
            p={card.desc}
            className={card.className}
          />
        ))}

        <ApproachCards approachContent={approachSection} />

        <ProcessImg />

        <InfoCards
          img={studioJoinUsCard.img}
          h2={studioJoinUsCard.title}
          p={studioJoinUsCard.desc}
          className={studioJoinUsCard.className}
        />

        <CTA content={studioCTA} className="contactBanner" droplets="dropEffect" />

        <InfoCards
          img={studioFooterCard.img}
          h2={studioFooterCard.title}
          p={studioFooterCard.desc}
          className={studioFooterCard.className}
        />

        <Accordion />
      </div>
    </main>
  );
};
