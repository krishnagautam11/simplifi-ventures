

export const InfoCards = ({img, h1, p, h2, img4 ,className }) => {
    return (

        <div className={`info-cards ${className}`}>
            <img src={img} alt="" className='info-card-img'/>
            <img src={img4} alt="" className='px-3 solutions-image' />
            <div className="info-card-text custom-container">
                <h1>{h2}</h1>
                <p className="card-p">{p}</p>

            </div>
        </div>

    )
}