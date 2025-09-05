import AboutInfo from "@/components/About/AboutInfo";
import AboutMe from "@/components/About/AboutMe";
import Contact from "@/components/common/Contact";
import Banner from "@/components/common/Banner";
import Clients from "@/components/common/Clients";
import aboutImage from "@/images/about/about-page.jpg";
import Image from "next/image";
import Testimonials from "@/components/common/Testimonials";
import Preloader from "@/components/Preloader";

export default function AboutPage() {
    return (
        <>
            <Preloader />
            <Banner title={"About me"} />
            <div className="about-main-image-area pt-40">
                <div className="container">
                    <div className="about-main-image wow fadeInUp delay-0-6s">
                        <Image src={aboutImage} alt="About Page" />
                    </div>
                </div>
            </div>
            <AboutMe />
            <AboutInfo />
            <Contact />
            <Testimonials />
            <Clients className="pt-130" />
        </>
    );
}
