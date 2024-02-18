import React from 'react'

const ContactMap = () => {
    return (
        <section className='contact-map-wrap'>
            <iframe
                title="Google Map"
                className="map-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.326444094369!2d90.41273337605789!3d23.73573568933764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85eff2a80b3%3A0xc3e4c1c63ff6150c!2sPaltan%20China%20Town!5e0!3m2!1sen!2sbd!4v1694680557603!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="async"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}

export default ContactMap