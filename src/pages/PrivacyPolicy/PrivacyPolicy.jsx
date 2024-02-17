import React from 'react'
import Layout from '../Layout/Layout'
import HeroArea from '../../components/HeroArea/HeroArea'

const PrivacyPolicy = () => {
    const heroTitle = 'Privacy Policy'
    const heroDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem error eligendi totam possimus delectus ipsa consectetur ad.Officia quidem similique itaque facilis id, corrupti velit!'
    return (
        <Layout>
            <HeroArea heroTitle={heroTitle} heroDescription={heroDescription} />
        </Layout>
    )
}

export default PrivacyPolicy