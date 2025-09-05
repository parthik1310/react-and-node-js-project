import Image from "next/image";
import btnImage1 from "@/images/about/btn-image1.png";
import btnImage2 from "@/images/about/btn-image2.png";
import aboutDots from "@/images/shape/about-dots-two.png";
import Link from "next/link";

export default function AboutMe() {
    return (
        <>
            <section className="about-page-area pt-130 rpy-100 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-page-content-part rel z-2 rmb-55">
                                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                                    <span className="sub-title mb-15">About Me</span>
                                    <h2>
                                        Professional <span>Problem Solutions</span> For Digital Products
                                    </h2>
                                    <p>
                                        As a UI/UX and Graphics Designer, I specialize in creating visually stunning designs that deliver engaging user experiences. Let me bring innovation to your
                                        projects and transform your ideas into impactful designs.
                                    </p>
                                </div>
                                <ul className="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                                    <li>Branding & Design</li>
                                    <li>Digital Marketing</li>
                                    <li>Web Development</li>
                                    <li>Product Design</li>
                                </ul>
                                <Link href="/about" className="theme-btn wow fadeInUp delay-0-2s">
                                    Learn More <i className="far fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-right-part wow fadeInLeft delay-0-3s">
                                <div className="experience-years">
                                    <b>5+</b>
                                    <h5>Years Of Experience</h5>
                                </div>
                                <div className="about-btn one wow fadeInRight delay-0-4s">
                                    <Image src={btnImage1} alt="Image" />
                                    <h6>Experience Designer</h6>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                                <div className="about-btn two wow fadeInRight delay-0-5s">
                                    <Image src={btnImage2} alt="Image" />
                                    <h6>Mark J. Collins</h6>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                                <div className="about-btn three wow fadeInRight delay-0-4s">
                                    <Image src={btnImage1} alt="Image" />
                                    <h6>Experience Designer</h6>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                                <div className="dot-shape one">
                                    <Image src={aboutDots} alt="Shape" />
                                </div>
                                <div className="dot-shape two">
                                    <Image src={aboutDots} alt="Shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
