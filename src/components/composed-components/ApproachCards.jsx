

export const ApproachCards = ({ approachContent }) => {
    return (

        <div className="approach-cards-section">
            <h2 className="custom-container">Our Approach</h2>
            <div className="approach-cards">

                {approachContent.map((ApproachCards) => (
                    <div className="approachCardsLooping" key={ApproachCards.id}>
                        <img src={ApproachCards.image} alt="" className='approach-cardImg' />

                        <div className="approach-card-text ">
                            <h3>{ApproachCards.title}</h3>
                            <p className="card-p">{ApproachCards.description}</p>

                        </div>
                    </div>
                ))}


            </div>
        </div>



    )
}