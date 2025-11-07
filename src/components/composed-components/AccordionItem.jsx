

export default function AccordionItem(props) {
    return (
        <div className="border rounded-md mb-1 accordions">
            <button
                className="w-full text-left accordion-title 
                            transition duration-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`float-right transform ${props.isOpen ? 
                                 'rotate-180' : 'rotate-0'} 
                                 transition-transform duration-300`}>
                    &#9660;
                </span>
            </button>
            {props.isOpen && (
                <div className=" accordion-open">
                    {props.data}
                </div>
            )}
        </div>
    );
};