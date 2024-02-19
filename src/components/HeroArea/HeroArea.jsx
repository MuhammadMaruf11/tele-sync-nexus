import React from 'react'
import { Link } from 'react-router-dom';

const HeroArea = ({ heroTitle, heroDescription, heroImg }) => {

    return (
        <section className='hero-area'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="hero-content-wrap">
                            <h2>{heroTitle}</h2>
                            <p>{heroDescription}</p>
                            <Link className='btn btn-theme-2' to='#'>Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroArea