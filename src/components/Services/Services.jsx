import { Link } from "react-router-dom"
import { servicesData } from "../../AllData/ServicesData"


const Services = () => {
    return (
        <section className="service-area">
            <div className="service-img-bg">
                <img src="/img/bg/wavy-shape.svg" alt="" />
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
                        {servicesData && servicesData?.map((data, index) => {
                            return (
                                <div key={index} className="col-xl-4">
                                    <Link to={data.url} className="service-wrap">
                                        <div className="service-icon">
                                            <i className={data.icon}></i>
                                        </div>
                                        <div className="service-content">
                                            <h5>{data.title}</h5>
                                            <p>{data.description.charAt(0).toUpperCase() + data.description.slice(1).toLowerCase()}</p>
                                        </div>
                                        <div className="service-btn">
                                            <i className="fa-solid fa-arrow-right fa-fw"></i>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services