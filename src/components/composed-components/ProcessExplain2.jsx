import ProcesImg1 from '../../assets/images/Idea_Process1.jpg'
import ProcesImg2 from '../../assets/images/Product_Process2.jpg'
import ProcesImg3 from '../../assets/images/Traction_Process3.jpg'
import ProcesImg4 from '../../assets/images/Scale_Process4.jpg'
// import LaxElement from '../atomic-components/LaxElement'

export const ProcessExplain2 = () => {
    return (
        <>

            <div className="processExplain-section">
                <div className="process-title">
                    <h1>Our Process</h1>
                </div>

                <div className="processExplain2-content">
                    <div className="processExplain2-cards">
                        <div className="processCardOne1">

                            <div className="processExplain-card1 flex justify-around">
                                <h2>Step-1: Idea Origination</h2>
                                <img src={ProcesImg1} alt="" />
                                <div className="processExplain-text2 ">
                                    {/* <h3>Idea Origination</h3> */}
                                    <ul>We'have 3 core sources of Idea:</ul>
                                    <li>Founders who we have partnered with.</li>
                                    <li>Internal market research looking into the pain points within the industry</li>
                                    <li>Leading industry executives that partner with us to explore and research their insights.</li>
                                </div>
                            </div>
                        </div>

                        <div className="processCardTwo2">

                            <div className="processExplain-card2 flex justify-around">
                                <h2>Step-2: Product Research</h2>
                                <img src={ProcesImg2} alt="" />
                                <div className="processExplain-text2 ">
                                    {/* <h3>Launch and Scale</h3> */}

                                    <p>After refining the company business model, raising funding, and recruiting a founder we take the company to the world. We provide leverage that founders need to succeed so they can focus on operations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="processCardOne1">

                            <div className="processExplain-card1 flex justify-around">
                                <h2>Step-3: Traction and Validation</h2>
                                <img src={ProcesImg3} alt="" />
                                <div className="processExplain-text2 ">
                                    {/* <h3>Traction and Validation</h3> */}
                                    <p>We use studio resources to test and build innovative solutions. We validate all aspects of the design, business model and feasibility.</p>
                                </div>
                            </div>
                        </div>

                        <div className="processCardTwo2">

                            <div className="processExplain-card2 flex justify-around">
                                <h2>Step-4: Launch and Scale</h2>
                                <img src={ProcesImg4} alt="" />
                                <div className="processExplain-text2 ">
                                    {/* <h3>Launch and Scale</h3> */}

                                    <p>After refining the company business model, raising funding, and recruiting a founder we take the company to the world. We provide leverage that founders need to succeed so they can focus on operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}