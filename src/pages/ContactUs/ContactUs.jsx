import React from 'react'
import Layout from '../Layout/Layout'
import ContactForm from '../../components/ContactUsComp/ContactForm'
import ContactMap from '../../components/ContactUsComp/ContactMap'

const ContactUs = () => {
    return (
        <Layout>
            <div className="contact-us-area">
                <ContactForm />
                <ContactMap />
            </div>
        </Layout>
    )
}

export default ContactUs