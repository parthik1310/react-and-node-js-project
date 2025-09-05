import Image from "next/image";
import SkillData from "@/app/api/SkillData";
import Link from "next/link";

export default function Skill() {
    return (
        <>
            <section className="skill-area rel z-1">
                <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
                    <div className="container">
                        <div className="row gap-100">
                            <div className="col-lg-5">
                                <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-40">
                                        <span className="sub-title mb-15">My Skills</span>
                                        <h2>
                                            Proficient in Industry-Leading <span> Design Software</span>
                                        </h2>
                                        <p>
                                            Embark on a design journey where Adobe Creative Suite, Figma, and Adobe XD converge to craft captivating visions. Explore my skills and witness innovation
                                            at every pixel.
                                        </p>
                                    </div>
                                    <Link href="/about" className="theme-btn">
                                        Discover My Work <i className="far fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="skill-items-wrap">
                                    <div className="row">
                                        {SkillData?.map((item, index) => {
                                            return (
                                                <div key={index} className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                                    <div className="skill-item wow fadeInUp delay-0-2s">
                                                        <Image src={item?.image} alt="Skill" /> 
                                                        <h5>{item?.name}</h5>
                                                        {/* <span className="percent">95%</span> */}
                                                    </div>
                                                </div>
                                            );
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
