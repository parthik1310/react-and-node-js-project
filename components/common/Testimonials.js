"use client";

import Image from "next/image";
import author1 from "@/images/testimonials/author1.png";
import author2 from "@/images/testimonials/author2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialData from "@/app/api/TestimonialData";

export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        focusOnSelect: false,
        // prevArrow: ".testimonial-prev",
        // nextArrow: ".testimonial-next",
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className="testimonials-area rel z-1">
                <div className="for-bgc-black py-130 rpy-100">
                    <div className="container">
                        <div className="row gap-90">
                            <div className="col-lg-4">
                                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-40">
                                        <span className="sub-title mb-15">My Clients Testimonials</span>
                                        <h2>
                                            Here About Me From My <span>500+ Clients</span>
                                        </h2>
                                        <p>
                                            Dive into the experiences of over 500 satisfied clients who have witnessed the impact of my design solutions. Their testimonials reflect a journey of
                                            collaboration, innovation, and the transformation of ideas into impactful visuals.
                                        </p>
                                    </div>
                                    {/* <div className="slider-arrows">
                                        <button className="testimonial-prev">
                                            <i className="fal fa-arrow-left"></i>
                                        </button>
                                        <button className="testimonial-next">
                                            <i className="fal fa-arrow-right"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <Slider {...settings} className="testimonials-wrap">
                                    {TestimonialData?.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="testimonial-item wow fadeInUp delay-0-3s">
                                                    <div className="author">
                                                        <Image src={item?.image} alt={item?.name} />
                                                    </div>
                                                    <div className="text">{item?.description}</div>
                                                    <div className="testi-des">
                                                        <h5>{item?.name}</h5>
                                                        <span>{item?.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
