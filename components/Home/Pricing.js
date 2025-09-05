import Link from "next/link";

export default function Pricing({ className }) {
    return (
        <>
            <section className={`pricing-area pt-130 ${className ? "pb-120" : ""} rpt-100 rel z-1`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">My Pricing Package</span>
                                <h2>
                                    Elevate Your <span>Digital Presence</span> with Tailored Design Packages
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-item wow fadeInUp delay-0-2s">
                                <div className="pricing-header">
                                    <h4 className="title">Weekly Package</h4>
                                    <p className="save-percent">{/* Try Out Basic Plan Save <span>20%</span> */}</p>
                                    <span className="price for_week">600</span>
                                </div>
                                <div className="pricing-details">
                                    <p>What you&apos;ll get:</p>
                                    <ul>
                                        <li>One Design Task at a time</li>
                                        <li>Unlimited Design Revisions</li>
                                        <li>48 Hours Turnaround Time</li>
                                        <li>Cancel or Pause anytime</li>
                                        {/* <li className="unable">Digital Marketing</li>
                                        <li className="unable">Custom Support</li> */}
                                    </ul>
                                    <Link href="/contact" className="theme-btn">
                                        Book a call <i className="far fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-item wow fadeInUp delay-0-4s">
                                <div className="pricing-header">
                                    <h4 className="title">Monthly Package</h4>
                                    <p className="save-percent">{/* Try Out Basic Plan Save <span>35%</span> */}</p>
                                    <span className="price">1999</span>
                                </div>
                                <div className="pricing-details">
                                    <p>What you&apos;ll get:</p>
                                    <ul>
                                        <li>One Design Task at a time</li>
                                        <li>Unlimited Design Revisions</li>
                                        <li>36 Hours Turnaround Time</li>
                                        <li>Cancel or Pause anytime</li>
                                    </ul>
                                    <Link href="/contact" className="theme-btn">
                                        Book a call <i className="far fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-item wow fadeInUp delay-0-6s">
                                <div className="pricing-header">
                                    <h4 className="title">Quarterly Package</h4>
                                    <p className="save-percent">{/* Try Out Basic Plan Save <span>45%</span> */}</p>
                                    <span className="price">1999</span>
                                </div>
                                <div className="pricing-details">
                                    <p>What you&apos;ll get:</p>
                                    <ul>
                                        <li>One Design Task at a time</li>
                                        <li>Unlimited Design Revisions</li>
                                        <li>24 Hours Turnaround Time</li>
                                        <li>Cancel or Pause anytime</li>
                                    </ul>
                                    <Link href="/contact" className="theme-btn">
                                        Book a call <i className="far fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
