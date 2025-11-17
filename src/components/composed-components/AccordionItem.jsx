import { useRef } from "react";

export default function AccordionItem(props) {
    const contentRef = useRef(null);

    const handleToggle = () => {
        const content = contentRef.current;

        if (!props.isOpen) {
            // Opening
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = "1";
        } else {
            // Closing
            content.style.maxHeight = content.scrollHeight + "px"; // set current height
            setTimeout(() => {
                content.style.maxHeight = "0px";
                content.style.opacity = "0";
            }, 10);
        }

        props.toggleAccordion();
    };

    return (

        <div className="mb-1 accordions w-full">
            <button
                className="
      accordion-title
      w-full text-left
      flex items-center justify-between
    "
                onClick={handleToggle}
            >
                {props.title}
                <span className={`custom-arrow-faq ${props.isOpen ? "open" : ""}`}></span>
            </button>

            <div
                ref={contentRef}
                className={`accordion-content overflow-hidden transition-all`}
                style={{
                    maxHeight: props.isOpen ? contentRef.current?.scrollHeight : "0px",
                }}
            >
                <div className="accordion-inner py-2">{props.data}</div>
            </div>
        </div>

        // <div className="mb-1 accordions">
        //     <button
        //         className="w-full text-left accordion-title"
        //         onClick={handleToggle}
        //     >
        //         {props.title}
        //         <span className={`custom-arrow-faq ${props.isOpen ? "open" : ""}`}></span>
        //     </button>

        //     <div
        //         ref={contentRef}
        //         className={`accordion-content ${props.isOpen ? "open" : ""}`}
        //         style={{
        //             maxHeight: props.isOpen ? contentRef.current?.scrollHeight : "0px",
        //         }}
        //     >
        //         <div className="accordion-inner">{props.data}</div>
        //     </div>
        // </div>
    );
}
