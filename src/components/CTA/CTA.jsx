import { Link } from "react-router-dom"

const CTA = () => {
    return (
        <section className="cta-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="cta-content">
                            <p>WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7</p>
                            <h2>Need A Consultation?</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 text-end">
                        <div className="about-button-area">
                            <div className="about-button">
                                <Link to="" className="btn btn-theme rounded-5 btn-sm px-5 py-3">
                                    Let's Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA