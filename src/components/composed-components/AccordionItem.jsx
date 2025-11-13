

export default function AccordionItem(props) {
    return (
        <div className=" mb-1 accordions">
            <button
                className="w-full text-left accordion-title 
                            transition duration-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                 <span className={`custom-arrow-faq ${props.isOpen ? "open" : ""}`}></span>
                {/* <span className={`float-right transform ${props.isOpen ? 
                                 'rotate-180' : 'rotate-0'} 
                                 transition-transform duration-300`}>
                    &#9660;
                </span> */}
            </button>
            {/* {props.isOpen && ( */}
                <div className={`accordion-content ${props.isOpen ? "open" : ""}`}>
                <div className="accordion-inner" >{props.data}</div>    
                </div>
            {/* )} */}
        </div>
    );
};