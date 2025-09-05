import Image from "next/image";
import Link from "next/link";
import ClientLogoData from "@/app/api/ClientLogoData";

export default function Clients({ className }) {
    return (
        <>
            <div className={`client-logo-area rel z-1 rpt-100 pb-60 ${className ? "pt-130" : ""}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
                                <h6>
                                    I’ve <span>1253+ Global Clients</span> & lot’s of Project Complete
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="client-logo-wrap">
                        {ClientLogoData?.map((data, index) => {
                            return (
                                <Link className="client-logo-item wow fadeInUp delay-0-2s" href="/contact" key={index}>
                                    <Image src={data.image} alt="Client Logo" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
