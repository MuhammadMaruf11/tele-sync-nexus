import React from 'react'

const PrivacyComp = ({ heroTitle }) => {
    return (
        <section className='privacy-area'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 text-center">
                        <div class="faq-section-title">
                            <h2>{heroTitle}</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="terms-wrap">
                            <div class="terms-title">
                                <h2>
                                    What is the legitimate interest in processing the data?
                                </h2>
                            </div>
                            <div class="terms-description">
                                <p>
                                    The legal basis for processing the data is the performance
                                    of the Terms of Use of the Services, where the data
                                    processing is strictly necessary to be able to use the
                                    Website and the App and, therefore, to allow Users to
                                    benefit from the services made available to them.
                                </p>
                                <p>
                                    With respect to additional purposes, these are legitimized
                                    by the consent given by the User, which may be revoked at
                                    any time without affecting the provision of the Services.
                                    Specifically, Users may withdraw their consent at any time
                                    by contacting us at
                                    <a href="mailto:info@pickvisa.com">info@pickvisa.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="terms-wrap">
                            <div class="terms-title">
                                <h2>How long will we keep your personal data?</h2>
                            </div>
                            <div class="terms-description">
                                <p>
                                    PICKVISA will keep the personal data of Users while they
                                    remain registered customers or users of the Website and/or
                                    the App, and the personal data will be retained after the
                                    termination of the contractual relationship, duly blocked,
                                    for the time necessary to answer for any liabilities that
                                    may be derived from the relationship.
                                </p>
                                <p>
                                    In particular, the Personal Data required for responding
                                    to queries made and delivering electronic marketing
                                    communications will be processed for as long as the User
                                    does not revoke the consent given and, once that consent
                                    has been withdrawn, for the time necessary to answer for
                                    any liabilities that may have arisen. In any case, when
                                    the personal data is not required for the purpose for
                                    which it was obtained and until it is not finally
                                    canceled, it will be retained in a blocked form.
                                </p>

                                <p>
                                    During payment through the site, information about the
                                    client card is not stored on the site.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="terms-wrap">
                            <div class="terms-title">
                                <h2>
                                    Who will your data be sent to?
                                </h2>
                            </div>
                            <div class="terms-description">
                                <p>
                                    PICKVISA may communicate the personal data of Users when
                                    so required by law, for defending its legitimate rights
                                    and interests, or when necessary in accordance with the
                                    services contracted by users. They may also be accessed by
                                    third-party service providers and computer and technical
                                    support services, some of which are detailed below.
                                </p>
                                <p>
                                    Certain systems, data, and services are hosted on Amazon
                                    Web Services (“AWS”), with its servers located in
                                    Frankfurt (Germany) and in the Google Cloud Platform. Your
                                    data may be transferred internationally to that company’s
                                    servers in the United States. This international transfer
                                    of personal data is covered by the EU-US Privacy Shield
                                    agreement and, therefore, provides adequate guarantees for
                                    the protection of your personal information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyComp