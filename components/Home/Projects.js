import Image from "next/image";
import project1 from "@/images/projects/project1.jpg";
import project2 from "@/images/projects/project2.jpg";
import project3 from "@/images/projects/project3.jpg";
import project4 from "@/images/projects/project4.jpg";
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <section className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">Latest Works</span>
                                <h2>
                                    Explore My Popular <span>Projects</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <Link href="/projects/project-details">
                                    <Image src={project1} alt="Project" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Product Design</span>
                                <h2>
                                    <Link href="/projects/project-details">Mobile Application Design</Link>
                                </h2>
                                <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae</p>
                                <Link href="/projects/project-details" className="details-btn">
                                    <i className="far fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6 order-lg-2">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <Link href="/projects/project-details">
                                    <Image src={project2} alt="Project" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 ms-auto">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Product Design</span>
                                <h2>
                                    <Link href="/projects/project-details">Website Makeup Design</Link>
                                </h2>
                                <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae</p>
                                <Link href="/projects/project-details" className="details-btn">
                                    <i className="far fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <Link href="/projects/project-details">
                                    <Image src={project3} alt="Project" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Product Design</span>
                                <h2>
                                    <Link href="/projects/project-details">Brand Identity and Motion Design</Link>
                                </h2>
                                <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae</p>
                                <Link href="/projects/project-details" className="details-btn">
                                    <i className="far fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6 order-lg-2">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <Link href="/projects/project-details">
                                    <Image src={project4} alt="Project" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 ms-auto">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Product Design</span>
                                <h2>
                                    <Link href="/projects/project-details">Mobile Application Development</Link>
                                </h2>
                                <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae</p>
                                <Link href="/projects/project-details" className="details-btn">
                                    <i className="far fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-btn text-center wow fadeInUp delay-0-2s">
                        <Link href="/projects" className="theme-btn">
                            View More Projects <i className="far fa-angle-right"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
