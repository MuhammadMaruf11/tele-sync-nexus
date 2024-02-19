import React from 'react'
import Layout from '../Layout/Layout'
import HeroArea from '../../components/HeroArea/HeroArea'
import CookiesComp from '../../components/CookiesComp/CookiesComp'
import cookies from '/img/policy/cookies.webp'

const CookiesPolicy = () => {
    const heroTitle = 'Cookies Policy'
    const heroDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem error eligendi totam possimus delectus ipsa consectetur ad.Officia quidem similique itaque facilis id, corrupti velit!'
    return (
        <Layout>
            <HeroArea
                heroTitle={heroTitle}
                heroDescription={heroDescription}
                heroImg={cookies}
            />
            <CookiesComp heroTitle={heroTitle} />
        </Layout>
    )
}

export default CookiesPolicy