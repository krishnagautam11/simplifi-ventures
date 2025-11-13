import { useState } from 'react';
import AccordionItem from '../composed-components/AccordionItem'


export default function Accordion()  {

 const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'What do we do?',
            data: `We invest in startups and give them oppurunity to grow.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'How to join Simplifi Ventures as an investor?',
            data: `For joining as investor, look for 'Join Us' Button and fill the form to apply.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'How to apply for careers in Simplifi Ventures?',
            data: `For Job oppurunities, look for 'Career' link in footer section and fill a form. If your proflie will match with the requirement then you will be notified via our email or phone number.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };

    return (
        <div>
           
            <div className="p-2 m-8 accordion">
                <h2 className='  '>Frequently Asked Questions(FAQs)</h2>
                {accordions.map((accordion) => (
                    <AccordionItem
                        key={accordion.key}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                    />
                ))}
            </div>
        </div>
    );
}

