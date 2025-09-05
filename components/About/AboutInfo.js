"use client";

import Image from "next/image";
import faqImage1 from "@/images/faqs/faq-one.jpg";
import faqImage2 from "@/images/faqs/faq-two.jpg";
import { useState } from "react";
import AboutAccordionData from "@/app/api/AboutAccordionData";

export default function AboutInfo() {
    const AccordionClick = ({ title, content }) => {
        const [accordion, setAccordion] = useState(false);
        return (
            <div className="accordion-item">
                <h5 className="accordion-header">
                    <button className={`accordion-button ${accordion ? "collapsed" : ""}`} onClick={() => setAccordion(!accordion)}>
                        {title}
                    </button>
                </h5>
                <div className={`accordion-collapse ${accordion ? "accordion_active" : ""}`}>
                    <div>
                        <div className="accordion-body">{content}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section id="faqs" className="faqs-area pt-130 rpy-100 rel z-1">
                <div className="for-bgc-black py-130 rpy-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s z-1">
                                    <div className="image-one">
                                        <Image src={faqImage1} alt="FAQ" />
                                    </div>
                                    <div className="image-two">
                                        <Image src={faqImage2} alt="FAQ" />
                                    </div>
                                    <div className="square-shape"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content-part rel z-2">
                                    <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                                        <h2>
                                            Professional Solutions For Your <span>Digital Product</span> Design and development
                                        </h2>
                                        <p>Elevating Brands through Thoughtful UX/UI Design and Innovation.</p>
                                    </div>
                                    <div className="accordion wow fadeInUp delay-0-4s">
                                        {AboutAccordionData?.map((data, index) => {
                                            return <AccordionClick key={index} title={data.title} content={data.content} />;
                                        })}
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
