import ServiceData from "@/app/api/ServiceData";
import Link from "next/link";

export default function Services() {
    return (
        <section className="services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                            <span className="sub-title mb-15">Popular Services</span>
                            <h2>
                                My <span>Special Service</span> For <span>your Business Development</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {ServiceData?.map((item, index) => {
                        return (
                            <div className="col-lg-6" key={index}>
                                <div className="service-item wow fadeInUp delay-0-2s">
                                    <div className="number">{index + 1 < 10 ? `0${index + 1}` : index + 1}.</div>
                                    <div className="content">
                                        <h4>{item?.title}</h4>
                                        <p>{item?.description}</p>
                                    </div>
                                    <Link href={item.link} className="details-btn">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
