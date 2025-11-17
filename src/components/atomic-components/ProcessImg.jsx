import ProcessImage from '../../assets/images/Process_img.png'

export const ProcessImg = () => {
    return (


        <div className="process-wrapper flex flex-col gap-4">
            <h2 className="custom-container">{/* remains same */}Our Process</h2>

            <div className="process-content flex flex-col items-center gap-2">
                <img src={ProcessImage} alt="" />
                <p>Source: Randall Ussery at Wildcat Venture Partners</p>
            </div>
        </div>


        // <div className='process-wrapper'>
        //     <h2 className='custom-container'>Our Process</h2>
        //     <div className="process-content">
        //         <img src={ProcessImage} alt="" />
        //         <p>Source: Randall Ussery at Wildcat Venture Partners</p>
        //     </div>
        // </div>

    )
}