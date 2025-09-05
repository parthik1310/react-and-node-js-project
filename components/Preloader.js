"use client";

import loaderImage from "@/images/rocket.png";
import Image from "next/image";
import { useEffect } from "react";
// import WOW from "wowjs";
import "../assets/css/animate.min.css";
// import { usePathname } from "next/navigation";

export default function Preloader() {
    // const router = usePathname();

    useEffect(() => {
        // Preloader
        function handlePreloader() {
            const preloader = document.querySelector(".preloader");
            if (preloader) {
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 1000);
            }
        }
        handlePreloader();  
    }, []);

    // useEffect(() => {
    //     new WOW.WOW({
    //         live: false,
    //     }).init();
    // }, []);

    return (
        <>
            <div className="preloader">
                <Image src={loaderImage} alt="Loader Image" />
                <h4>Loading...</h4>
            </div>
        </>
    );
}
