

export const ApproachCards = ({ approachContent }) => {
    return (


        <div className="approach-cards-section flex flex-col gap-10">
            <h2 className="custom-container">{/* unchanged */}Our Approach</h2>

            <div className="approach-cards grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                {approachContent.map(card => (
                    <div
                        key={card.id}
                        className="approachCardsLooping flex flex-col items-center gap-3"
                    >
                        <img src={card.image} className="approach-cardImg" />

                        <div className="approach-card-text flex flex-col gap-2">
                            <h3>{card.title}</h3>
                            <p className="card-p">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        // <div className="approach-cards-section">
        //     <h2 className="custom-container">Our Approach</h2>
        //     <div className="approach-cards">

        //         {approachContent.map((ApproachCards) => (
        //             <div className="approachCardsLooping" key={ApproachCards.id}>
        //                 <img src={ApproachCards.image} alt="" className='approach-cardImg' />

        //                 <div className="approach-card-text ">
        //                     <h3>{ApproachCards.title}</h3>
        //                     <p className="card-p">{ApproachCards.description}</p>

        //                 </div>
        //             </div>
        //         ))}


        //     </div>
        // </div>



    )
}