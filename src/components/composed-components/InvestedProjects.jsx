export const InvestedProjects = ({ marqueeImages }) => {
    return (

        <div className="invested-projects flex flex-col gap-6">
            <div className="invested-projects-title text-center">
                <h2>Companies in which we have invested</h2>
            </div>

            <div className="marquee-wrapper overflow-hidden">
                <div className="marquee-content flex items-center gap-10">
                    {marqueeImages.map(image => (
                        <img key={image.id} src={image.src} alt="company" />
                    ))}
                    {marqueeImages.map(image => (
                        <img key={`dup-${image.id}`} src={image.src} alt="company" />
                    ))}
                </div>
            </div>
        </div>

        // <div className="invested-projects">
        //     <div className="invested-projects-title">
        //         <h2>Companies in which we have invested</h2>
        //     </div>

        //     <div className="marquee-wrapper">
        //         <div className="marquee-content">
        //             {marqueeImages.map((image) => (
        //                 <img key={image.id} src={image.src} alt="invested company" />
        //             ))}
        //             {/* Duplicate once for smooth loop */}
        //             {marqueeImages.map((image) => (
        //                 <img key={`dup-${image.id}`} src={image.src} alt="invested company" />
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};
