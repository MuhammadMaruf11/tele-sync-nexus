import React from 'react'
import terms from '/img/bg/terms.webp'
import privacy from '/img/bg/privacy.webp'
import { useLocation, Link } from 'react-router-dom';

const HeroArea = ({ heroTitle, heroDescription }) => {
    const { pathname } = useLocation();
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
                        <img src={pathname === '/privacy-policy' ? privacy : terms} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroArea