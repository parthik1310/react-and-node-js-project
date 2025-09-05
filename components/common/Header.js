"use client";

import Image from "next/image";
import Logo from "@/images/logos/logo.svg";
// import menuIcon from "@/images/shape/sidebar-tottler.svg";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    // const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menu, setMenu] = useState(false);

    // const handleDropdownClick = () => {
    //     setDropdownVisible(!dropdownVisible);
    // };

    // const handleParentLinkClick = (e) => {
    //     e.preventDefault();
    // };

    const handleScroll = () => {
        var height = window.scrollY;
        var siteHeader = document.getElementsByClassName("main-header")[0];
        if (height > 100) {
            siteHeader?.classList?.add("fixed-header");
        } else {
            siteHeader?.classList?.remove("fixed-header");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="main-header menu-absolute">
                <div className="header-upper">
                    <div className="container container-1620 clearfix">
                        <div className="header-inner rel d-flex align-items-center">
                            <div className="logo-outer">
                                <div className="logo">
                                    <Link href="/">
                                        <Image src={Logo} alt="MSK" title="MSK" width={176} height={35} />
                                    </Link>
                                </div>
                            </div>

                            <div className="nav-outer clearfix">
                                <nav className="main-menu navbar-expand-lg">
                                    <div className="navbar-header">
                                        <div className="mobile-logo my-20">
                                            <Link href="/">
                                                <Image src={Logo} alt="MSK" title="MSK" width={176} height={35} />
                                            </Link>
                                        </div>

                                        <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" onClick={() => setMenu((prev) => !prev)}>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className={`navbar-collapse ${menu ? "collapse" : ""} clearfix`}>
                                        <div>
                                            <ul className="navigation clearfix">
                                                <li>
                                                    <Link href="/" title="Home">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">about</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services">services</Link>
                                                </li>
                                                <li>
                                                    <Link href="/projects">projects</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
