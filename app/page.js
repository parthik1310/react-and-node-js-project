import Clients from "@/components/common/Clients";
import Contact from "@/components/common/Contact";
import Hero from "@/components/Home/Hero";
import HomeAbout from "@/components/Home/HomeAbout";
import Services from "@/components/common/Services";
import Pricing from "@/components/Home/Pricing";
import Projects from "@/components/Home/Projects";
import Resume from "@/components/Home/Resume";
import Skill from "@/components/Home/Skill";
import Testimonials from "@/components/common/Testimonials";
import Preloader from "@/components/Preloader";

export default function Home() {
    return (
        <>
            <Preloader />
            <Hero />
            <HomeAbout />
            <Resume />
            <Services />
            <Skill />
            <Projects />
            <Testimonials />
            <Pricing />
            <Contact black_background />
            <Clients />
        </>
    );
}
