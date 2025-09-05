import Link from "next/link";

export default function Banner({ title }) {
    return (
        <>
            <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
                <div className="container">
                    <div className="banner-inner text-white">
                        <h1 className="page-title wow fadeInUp delay-0-4s">{title}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-6s">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
