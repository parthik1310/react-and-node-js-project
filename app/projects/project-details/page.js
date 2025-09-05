import Banner from "@/components/common/Banner";
import Image from "next/image";
import projectDetails from "@/images/projects/project-details.jpg";
import projectMiddle1 from "@/images/projects/project-middle1.jpg";
import projectMiddle2 from "@/images/projects/project-middle2.jpg";
import projectMiddle3 from "@/images/projects/project-middle3.jpg";
import Link from "next/link";
import Fancybox from "@/components/Fancybox";

export default function ProjectDetails() {
    return (
        <>
            <Banner title="Mobile Application Design" />

            <Fancybox>
                <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
                    <div className="container">
                        <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
                            <Link data-fancybox="gallery" href={projectDetails.src}>
                                <Image src={projectDetails} alt="Project Details" />
                            </Link>
                        </div>
                        <div className="row gap-120">
                            <div className="col-lg-8">
                                <div className="project-details-content wow fadeInUp delay-0-2s">
                                    <h3>We Create digital Product For Business</h3>
                                    <p className="big-letter">
                                        sSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque seeney laudantium totam rem aperiam eaque ipsa quae abillo inventore
                                        veritatis
                                    </p>
                                    <p>
                                        Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aufugit sed quia consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro quisquam estqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                        ut aliquid consequature
                                    </p>
                                    <ul className="list-style-one two-column mt-50 mb-40">
                                        <li>Branding & Design</li>
                                        <li>Digital Marketing</li>
                                        <li>Web Development</li>
                                        <li>Product Design</li>
                                        <li>Mobile Apps Design</li>
                                        <li>System & Guide</li>
                                        <li>Graphics Design</li>
                                        <li>Content Management</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeInUp delay-0-4s">
                                <div className="project-details-info rmb-55">
                                    <div className="pd-info-item">
                                        <span>Category</span>
                                        <h5>Product Design</h5>
                                    </div>
                                    <div className="pd-info-item">
                                        <span>Clients</span>
                                        <h5>X_Design Studio</h5>
                                    </div>
                                    <div className="pd-info-item">
                                        <span>Location</span>
                                        <h5>Melbourne, Australia</h5>
                                    </div>
                                    <div className="pd-info-item">
                                        <span>Published</span>
                                        <h5>September 25, 2023</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-15">
                            <div className="col-lg-4 col-sm-6">
                                <div className="image mb-30 wow fadeInUp delay-0-2s">
                                    <Link data-fancybox="gallery" href={projectMiddle1.src}>
                                        <Image src={projectMiddle1} alt="Project Middle" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="image mb-30 wow fadeInUp delay-0-4s">
                                    <Link data-fancybox="gallery" href={projectMiddle2.src}>
                                        <Image src={projectMiddle2} alt="Project Middle" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="image mb-30 wow fadeInUp delay-0-6s">
                                    <Link data-fancybox="gallery" href={projectMiddle3.src}>
                                        <Image src={projectMiddle3} alt="Project Middle" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
                            <h3 className="title mb-25">Project Summery</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                                don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the
                                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It
                                uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                                Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                        <div className="tag-share py-30 wow fadeInUp delay-0-2s">
                            <div className="item">
                                <b>Tags</b>
                                <div className="tag-coulds">
                                    <Link href="#">Design</Link>
                                    <Link href="#">Figma</Link>
                                    <Link href="#">Apps</Link>
                                </div>
                            </div>
                            <div className="item">
                                <b>Share</b>
                                <div className="social-style-one">
                                    <Link href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fancybox>
        </>
    );
}
