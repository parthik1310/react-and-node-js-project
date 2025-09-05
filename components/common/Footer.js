"use client";

import Image from "next/image";
import Logo from "@/images/logos/logo.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="main-footer rel z-1">
                <div className="footer-top-wrap bgc-black pt-100 pb-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-12">
                                <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                                    <div className="footer-logo">
                                        <Link href="/">
                                            <Image src={Logo} alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                                    <h6 className="footer-title">Quick Link</h6>
                                    <ul>
                                        <li>
                                            <Link href="/" title="Home">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/services">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">Projects</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                                    <form action="#">
                                        <label htmlFor="email-address">
                                            <i className="far fa-envelope"></i>
                                        </label>
                                        <input id="email-address" type="email" placeholder="Email Address" required />
                                        <button>
                                            Sign Up <i className="far fa-angle-right"></i>
                                        </button>
                                    </form>
                                </div> */}
                            </div>
                            <div className="col-lg-3 col-md-5">
                                <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                                    <h6 className="footer-title">Address</h6>
                                    <ul>
                                        <li>
                                            <i className="far fa-map-marker-alt"></i> 55 Main Street, 2nd block, New York City
                                        </li>
                                        <li>
                                            <i className="far fa-envelope"></i> <Link href="mailto:sahilmavani01@gmail.com">sahilmavani01@gmail.com</Link>
                                        </li>
                                        <li>
                                            <i className="far fa-phone"></i> <Link href="callto:+917405764990">+91 74057 64990</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-20 pb-5 rpt-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright-text">
                                    <p>
                                        Copyright @2023, <Link href="/">MSK</Link> All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <ul className="footer-bottom-nav">
                                    <li>
                                        <Link title="Follow On Facebook" href="#">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link title="Follow On Twitter" href="#">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link title="Follow On Instagram" href="#">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link title="Follow On LinkedIn" href="#">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button className="scroll-top scroll-to-target" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                            <span className="fas fa-angle-double-up"></span>
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
}
