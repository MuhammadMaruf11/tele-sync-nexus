import React from 'react'
import { Link } from 'react-router-dom'
import about from "/img/about/about.webp";

const AboutComp = () => {


    return (
        <section className='about-us-area' >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <span className="mb-3">WELCOME TO OUR COMPANY</span>
                            <h2 className="mb-3">We Are Increasing Business Success With Technology</h2>
                            <p>
                                An IT solution service company may serve clients from various industries such as healthcare, finance, education, and manufacturing. They may work on a project basis, providing services for a specific project or on a long-term basis... Amazing communication. Best trending designing experience Email & Live chat.
                            </p>
                        </div>
                        <div className="about-button-area">
                            <div className="about-button">
                                <Link to="" target="_blank" className="btn btn-theme rounded-5 btn-sm px-5 py-3">
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img-wrap">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComp