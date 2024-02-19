import React from 'react'
import contact from '/img/contact/contact.webp'
import { useState } from 'react'

const ContactForm = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('formdata: ' + formData);
            setFormData({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            console.error('error', error);
        }

    }
    return (
        <section className='contact-form-wrap'>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h2>Contact Us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input id="name"
                                        placeholder='Name'
                                        name="name"
                                        type="text"
                                        value={formData?.name || ''}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input type="email"
                                        placeholder='Email'
                                        name='email'
                                        id="email"
                                        value={formData?.email || ''}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <textarea type="text"
                                        placeholder='Message'
                                        name='message'
                                        id="email"
                                        value={formData?.message || ''}
                                        onChange={handleInputChange}
                                        cols="30"
                                        rows="4"></textarea>
                                </div>
                                <div className="input-group">
                                    <button className='btn btn-theme'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="contact-img">
                            <img loading="lazy" src={contact} alt="contact" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm