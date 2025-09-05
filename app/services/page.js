import Banner from "@/components/common/Banner";
import Pricing from "@/components/Home/Pricing";
import Services from "@/components/ServicesPage/Services";
import WhatIDo from "@/components/ServicesPage/WhatIDo";

export default function ServicesPage() {
    return (
        <>
            <Banner title={"Popular Service"} />
            <WhatIDo />
            <Services />
            <Pricing className="pb-120"/>
        </>
    );
}
