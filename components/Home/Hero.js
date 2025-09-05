"use client";

import Image from "next/image";
import aboutImage from "@/images/hero/me.png";
import progressImage from "@/images/hero/progress-shape.png";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        let valueDisplays = document.querySelectorAll(".count-text");
        let interval = 3000;

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }, []);

    return (
        <>
            <section className="main-hero-area pt-150 pb-80 rel z-1">
                <div className="container container-1620">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-7">
                            <div className="hero-content rmb-55 wow fadeInUp delay-0-3s">
                                <span className="h2">Hello, i’m </span>
                                <h1>
                                    <b>Mavani Sahil k.</b> UI/UX Designer
                                </h1>
                                <p>Good design is expensive, bad design costs a fortune!</p>
                                <div className="hero-btns">
                                    <a href="/contact" className="theme-btn">
                                        Hire Me <i className="far fa-angle-right"></i>
                                    </a>
                                    <a className="read-more" href="/" download="/Sahil_Mavani_CV.pdf">
                                        Download Resume <i className="far fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-5 order-lg-3">
                            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-5s">
                                <div className="counter-item counter-text-wrap">
                                    <span className="count-text plus" data-val="5">
                                        0
                                    </span>
                                    <span className="counter-title">Years Of Experience</span>
                                </div>
                                <div className="counter-item counter-text-wrap">
                                    <span className="count-text plus" data-val="500">
                                        0
                                    </span>
                                    <span className="counter-title">Project Complete</span>
                                </div>
                                <div className="counter-item counter-text-wrap">
                                    <span className="count-text percent" data-val="100">
                                        0
                                    </span>
                                    <span className="counter-title">Client Satisfactions</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="author-image-part wow fadeIn delay-0-4s">
                                <div className="bg-circle"></div>
                                <Image src={aboutImage} alt="Author" className="author_img" />
                                <div className="progress-shape">
                                    <Image src={progressImage} alt="Progress" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
