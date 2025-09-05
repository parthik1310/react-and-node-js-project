import Banner from "@/components/common/Banner";
import Image from "next/image";
import projectDetails from "@/images/projects/project-details.jpg";
import Link from "next/link";
import Fancybox from "@/components/Fancybox";

export default function ServicesDetails() {
    return (
        <>
            <Banner title="UI/UX Design From Scratch" />

            <Fancybox>
                <section className="projects-details-area pt-40 pb-100 rpb-100 rel z-1">
                    <div className="container">
                        <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
                            <Link data-fancybox="gallery" href={projectDetails.src}>
                                <Image src={projectDetails} alt="Project Details" />
                            </Link>
                        </div>
                        <div className="row gap-120">
                            <div className="col-lg-12">
                                <div className="project-details-content wow fadeInUp delay-0-2s">
                                    <h3>UI/UX Design From Scratch</h3>
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
                                </div>
                            </div>
                        </div>

                        <div className="project-bottom-content wow fadeInUp delay-0-2s">
                            <h3 className="title mb-25">Project Summery</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                                don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the
                                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It
                                uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                                Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                    </div>
                </section>
            </Fancybox>
        </>
    );
}
