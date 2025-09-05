import Image from "next/image";
import dot1 from "@/images/about/what-i-do1.jpg";
import dot2 from "@/images/about/what-i-do2.jpg";
import Link from "next/link";

export default function WhatIDo() {
    return (
        <>
            <section className="what-i-do-area pt-25 rpt-0 pb-130 rpb-100 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="what-i-do-images rmb-55 wow fadeInUp delay-0-2s">
                                <div className="first-image">
                                    <Image src={dot1} alt="What I do" />
                                </div>
                                <div className="last-image">
                                    <Image src={dot2} alt="What I do" />
                                </div>
                                <div className="icon first">
                                    <i className="flaticon-asterisk-1"></i>
                                </div>
                                <div className="icon last">
                                    <i className="flaticon-asterisk-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="what-i-do-content wow fadeInUp delay-0-4s">
                                <div className="section-title mb-40">
                                    <span className="sub-title mb-15">What I Do</span>
                                    <h2>
                                        Real <span>Problem Solutions</span> Experience
                                    </h2>
                                    <p>
                                        As a UI/UX and Graphics Designer, I specialize in creating visually stunning designs that deliver engaging user experiences. Let me bring innovation to your
                                        projects and transform your ideas into impactful designs.{" "}
                                    </p>
                                </div>
                                <ul className="list-style-two pb-50">
                                    <li>5+ Years Of Experience</li>
                                    <li>Professional Web Designer</li>
                                    <li>Mobile Apps Design</li>
                                </ul>
                                <Link href="/about" className="theme-btn">
                                    Learn More <i className="far fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
