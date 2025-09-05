import rocketIcon from "@/images/rocket.png";
import Image from "next/image";

export default function Resume() {
    return (
        <>
            <section className="resume-area pt-130 rpt-100 rel z-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
                                <Image src={rocketIcon} alt="rocket" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-xl-8 col-lg-9">
                                    <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                                        <span className="sub-title mb-15">My Experience</span>
                                        <h2>
                                            Crafting <span>Experiences and Innovations</span> Over 5 Years
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-items-wrap">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="resume-item wow fadeInUp delay-0-3s">
                                            <div className="icon">
                                                <i className="far fa-arrow-right"></i>
                                            </div>
                                            <div className="content">
                                                <span className="years">Feb 2023 - Jan 2024</span>
                                                <h4>Senior Product Designer</h4>
                                                <span className="company">
                                                    Data Bridge Consultants · Remote · USA
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="resume-item wow fadeInUp delay-0-4s">
                                            <div className="icon">
                                                <i className="far fa-arrow-right"></i>
                                            </div>
                                            <div className="content">
                                                <span className="years">Jan 2024 - Present</span>
                                                <h4>Full Time Freelancer</h4>
                                                <span className="company">
                                                    Upwork, Fiverr, Direct Contract etc..
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="resume-item wow fadeInUp delay-0-2s">
                                            <div className="icon">
                                                <i className="far fa-arrow-right"></i>
                                            </div>
                                            <div className="content">
                                                <span className="years">Aug 2021 - Jul 2022</span>
                                                <h4>UI Designer & Co-founder</h4>
                                                <span className="company">
                                                    Explore Studio · Hybrid · India
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="resume-item wow fadeInUp delay-0-4s">
                                            <div className="icon">
                                                <i className="far fa-arrow-right"></i>
                                            </div>
                                            <div className="content">
                                                <span className="years">Jul 2022 - Feb 2023</span>
                                                <h4>UI/UX Designer</h4>
                                                <span className="company">
                                                    Fiverr & Upwork · Freelance · Canada, USA etc..
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="resume-item wow fadeInUp delay-0-2s">
                                            <div className="icon">
                                                <i className="far fa-arrow-right"></i>
                                            </div>
                                            <div className="content">
                                                <span className="years">Jan 2019 - Jan 2020</span>
                                                <h4>WordPress & Graphic Designer</h4>
                                                <span className="company">
                                                    Hunani Infotech · On Site · India
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="resume-item wow fadeInUp delay-0-4s">
                                            <div className="icon">
                                                <i className="far fa-arrow-right"></i>
                                            </div>
                                            <div className="content">
                                                <span className="years">Jan 2020 - Jul 2021</span>
                                                <h4>UI Designer & Graphic Designer</h4>
                                                <span className="company">BBSA Marketing · Remote · USA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
