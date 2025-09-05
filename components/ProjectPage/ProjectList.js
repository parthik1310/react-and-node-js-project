"use client";

import Image from "next/image";
import project1 from "@/images/projects/project1.jpg";
import project2 from "@/images/projects/project2.jpg";
import project3 from "@/images/projects/project3.jpg";
import project4 from "@/images/projects/project4.jpg";
import project5 from "@/images/projects/project5.jpg";
import project6 from "@/images/projects/project6.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import Isotope from "isotope-layout";

export default function ProjectList() {
    // const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");

    // useEffect(() => {
    //     isotope.current = new Isotope(".project-masonry-active", {
    //         itemSelector: ".item",
    //         layoutMode: "fitRows",
    //     });

    //     // cleanup
    //     return () => isotope?.current?.destroy();
    // }, []);

    // useEffect(() => {
    //     filterKey === "*" ? isotope?.current?.arrange({ filter: `*` }) : isotope?.current?.arrange({ filter: `.${filterKey}` });
    // }, [filterKey]);

    const handleFilterKeyChange = (key) => () => setFilterKey(key);

    return (
        <>
            <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
                <div className="container">
                    <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
                        <li
                            onClick={handleFilterKeyChange("*")}
                            className={`${filterKey === "*" ? "current" : ""}`}>
                            Show All
                        </li>
                        <li
                            onClick={handleFilterKeyChange("design")}
                            className={`${filterKey === "design" ? "current" : ""}`}>
                            Design
                        </li>
                        <li
                            onClick={handleFilterKeyChange("branding")}
                            className={`${filterKey === "branding" ? "current" : ""}`}>
                            Branding
                        </li>
                        <li
                            onClick={handleFilterKeyChange("marketing")}
                            className={`${filterKey === "marketing" ? "current" : ""}`}>
                            Marketing
                        </li>
                        <li
                            onClick={handleFilterKeyChange("development")}
                            className={`${filterKey === "development" ? "current" : ""}`}>
                            Development
                        </li>
                        <li
                            onClick={handleFilterKeyChange("apps")}
                            className={`${filterKey === "apps" ? "current" : ""}`}>
                            Mobile Apps
                        </li>
                        <li
                            onClick={handleFilterKeyChange("graphics")}
                            className={`${filterKey === "graphics" ? "current" : ""}`}>
                            Graphics
                        </li>
                    </ul>
                    <div className="row project-masonry-active">
                        <div className="col-lg-6 item branding development">
                            <div className="project-item style-two wow fadeInUp delay-0-2s">
                                <div className="project-image">
                                    <Image src={project1} alt="Project" />
                                    <Link href="/projects/project-details" className="details-btn">
                                        <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span className="sub-title">Product Design</span>
                                    <h3>
                                        <Link href="/projects/project-details">
                                            Mobile Application Design
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item design marketing graphics">
                            <div className="project-item style-two wow fadeInUp delay-0-4s">
                                <div className="project-image">
                                    <Image src={project2} alt="Project" />
                                    <Link href="/projects/project-details" className="details-btn">
                                        <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span className="sub-title">Product Design</span>
                                    <h3>
                                        <Link href="/projects/project-details">Website Makeup Design</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item development graphics">
                            <div className="project-item style-two wow fadeInUp delay-0-2s">
                                <div className="project-image">
                                    <Image src={project3} alt="Project" />
                                    <Link href="/projects/project-details" className="details-btn">
                                        <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span className="sub-title">Graphics Design</span>
                                    <h3>
                                        <Link href="/projects/project-details">
                                            Brand Identity and Motion Design
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item design development apps">
                            <div className="project-item style-two wow fadeInUp delay-0-4s">
                                <div className="project-image">
                                    <Image src={project4} alt="Project" />
                                    <Link href="/projects/project-details" className="details-btn">
                                        <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span className="sub-title">Product Design</span>
                                    <h3>
                                        <Link href="/projects/project-details">
                                            Mobile Application Design
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item branding marketing graphics">
                            <div className="project-item style-two wow fadeInUp delay-0-2s">
                                <div className="project-image">
                                    <Image src={project5} alt="Project" />
                                    <Link href="/projects/project-details" className="details-btn">
                                        <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span className="sub-title">Design & Branding</span>
                                    <h3>
                                        <Link href="/projects/project-details">Creative Graphics Design</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item design marketing apps">
                            <div className="project-item style-two wow fadeInUp delay-0-4s">
                                <div className="project-image">
                                    <Image src={project6} alt="Project" />
                                    <Link href="/projects/project-details" className="details-btn">
                                        <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span className="sub-title">Product Design</span>
                                    <h3>
                                        <Link href="/projects/project-details">Design & Branding Mokeup</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
