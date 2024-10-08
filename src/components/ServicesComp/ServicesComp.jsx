import { Link, useLocation } from "react-router-dom"
import { servicesData } from "../../AllData/ServicesData"
import wavyShape from "/img/bg/wavy-shape.svg"


const ServicesComp = () => {
    const { pathname } = useLocation();

    const filteredServicesData = pathname === '/' ? servicesData.slice(0, 3) : servicesData;

    return (
        <>
            <section className="service-area">
                <div className="service-img-bg">
                    <img loading="lazy" src={wavyShape} alt="shape" />
                </div>
                <div className="service-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-12 text-center">
                                <div className="section-title">
                                    <span className="mb-3">Our Services</span>
                                    <h2 className="mb-3">Service We Provide</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ipsa consequuntur quia iusto error porro nisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {filteredServicesData?.map((data, index) => {
                                return (
                                    <div key={index} className="col-xl-4">
                                        <Link to={data.url} className="service-wrap">
                                            <div className="service-icon">
                                                <i className={data.icon}></i>
                                            </div>
                                            <div className="service-content">
                                                <h3>{data.title}</h3>
                                                <p>{data.description.charAt(0).toUpperCase() + data.description.slice(1, 120).toLowerCase()}...</p>
                                            </div>
                                            <div className="service-btn">
                                                <i className="fa-solid fa-arrow-right fa-fw"></i>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        {pathname === '/' && <div className="row">
                            <div className="col-12 text-center mt-4">
                                <Link className="btn btn-theme"
                                    to='/services' aria-label="Explore Our Services">
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesComp