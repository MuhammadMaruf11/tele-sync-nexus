import React from 'react'
import terms from '/img/policy/terms.webp'
import privacy from '/img/policy/privacy.webp'
import cookies from '/img/policy/cookies.webp'
import contact from '/img/policy/privacy.webp'
import { useLocation, Link } from 'react-router-dom';

const HeroArea = ({ heroTitle, heroDescription }) => {
    const { pathname } = useLocation();
    const privacyPolicy = pathname === '/privacy-policy';
    const cookiesPolicy = pathname === '/cookies-policy';
    const termsNCondition = pathname === '/terms-condition';
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
                        <img src={privacyPolicy ? privacy : cookiesPolicy ? cookies : termsNCondition ? terms : contact} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroArea