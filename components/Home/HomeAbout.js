import Image from "next/image";
import aboutImage from "@/images/about/about.jpg";
import aboutImage1 from "@/images/about/btn-image1.png";
import aboutImage2 from "@/images/about/btn-image2.png";
import aboutDot from "@/images/shape/about-dot.png";
import Link from "next/link";

export default function HomeAbout() {
    return (
        <>
            <section className="about-area rel z-1">
                <div className="for-bgc-black py-130 rpy-100">
                    <div className="container">
                        <div className="row gap-100 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-content-part rel z-2 rmb-55">
                                    <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                                        <span className="sub-title mb-15">About Me</span>
                                        <h2>
                                            Professional <span>UI/UX Designer</span> and <span>Graphics Designer</span> For Your Business
                                        </h2>
                                        <p>
                                            As a UI/UX and Graphics Designer, I specialize in creating visually stunning designs that deliver engaging user experiences. Let me bring innovation to your
                                            projects and transform your ideas into impactful designs.
                                        </p>
                                    </div>
                                    <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                                        <li>UI/UX Design</li>
                                        <li>Graphics Design</li>
                                        <li>Social Media Design</li>
                                        <li>Product Design</li>
                                    </ul>
                                    <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                                        <div className="info-box-item">
                                            <i className="far fa-envelope"></i>
                                            <div className="content">
                                                <span>Email Me</span>
                                                <br />
                                                <Link href="mailto:sahilmavani01@gmail.com">sahilmavani01@gmail.com</Link>
                                            </div>
                                        </div>
                                        <div className="info-box-item">
                                            <i className="far fa-phone"></i>
                                            <div className="content">
                                                <span>Make A Call</span>
                                                <br />
                                                <Link href="callto:+91 74057 64990">+91 74057 64990</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-image-part wow fadeInUp delay-0-3s">
                                    <Image src={aboutImage} alt="About Me" className="about_image" />
                                    <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                                        <Image src={aboutImage1} alt="Image" />
                                        <h6>Experience Designer</h6>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                                        <Image src={aboutImage} alt="Image" />
                                        <h6>Mavani Sahil K.</h6>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div className="dot-shape">
                                        <Image src={aboutDot} alt="Shape" />
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
