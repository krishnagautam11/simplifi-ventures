

export const InfoCards = ({ img, h1, p, h2, img4, className, index = 0 }) => {

    const leftText = index % 2 === 0;
    return (


        <div className={`info-cards ${className}`}>
            <div className="infoCard-img">
                <img src={img} alt="" className={`info-card-img reveal ${leftText ? "from-right" : "from-left"}`} />
            </div>
            <img src={img4} alt="" className='px-3 solutions-image' />
            <div className={`info-card-text  reveal ${leftText ? "from-left" : "from-right"}`}>
                <div className="info-card-heading">
                    {h1 && <h1>{h1}</h1>}
                     {h2 && <h1>{h2}</h1>}
                </div>
               
                {p && <p className="card-p">{p}</p>}

            </div>
        </div>

    )
}