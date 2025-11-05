

export const InfoCards = ({img, h1, p, h2, img4 }) => {
    return (

        <div className="info-cards">
            <img src={img} alt="" />
            <img src={img4} alt="" className='px-3 ' />
            <div className="info-card-text custom-container">
                <h1>{h2}</h1>
                <p className="card-p">{p}</p>

            </div>
        </div>

    )
}