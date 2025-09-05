import Link from "next/link";

export default function ContactForm() {
    return (
        <>
            <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-15">Get In Touch</span>
                                    <h2>
                                        Let’s Talk For your <span>Next Projects</span>
                                    </h2>
                                    <p>
                                        Share your project details, and let&apos;s turn your vision into reality. I&apos;m here to create impactful designs that resonate with your audience and elevate
                                        your brand.
                                    </p>
                                </div>
                                <h6>Main Office</h6>
                                <div className="widget_contact_info mb-35">
                                    <ul>
                                        <li>
                                            <i className="far fa-map-marker-alt"></i> 55 Main Street, 2nd block,
                                            <br /> New York City
                                        </li>
                                        <li>
                                            <i className="far fa-envelope"></i> <Link href="mailto:sahilmavani01@gmail.com">sahilmavani01@gmail.com</Link>
                                        </li>
                                        <li>
                                            <i className="far fa-phone"></i> <a href="callto:+917405764990">+91 74057 64990</a>
                                        </li>
                                    </ul>
                                </div>
                                <h5>Follow Me</h5>
                                <div className="social-style-one mt-10">
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
                        <div className="col-lg-8">
                            <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                                <form id="contactForm" className="contactForm" name="contactForm" action="assets/php/form-process.php" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="name">Full Name</label>
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                        value=""
                                                        placeholder="Richard D. Hammond"
                                                        required
                                                        data-error="Please enter your Name"
                                                    />
                                                    <label for="name" className="for-icon">
                                                        <i className="far fa-user"></i>
                                                    </label>
                                                </div>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="email">Email Address</label>
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        value=""
                                                        placeholder="support@gmail.com"
                                                        required
                                                        data-error="Please enter your Email"
                                                    />
                                                    <label for="email" className="for-icon">
                                                        <i className="far fa-envelope"></i>
                                                    </label>
                                                </div>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="phone_number">Phone Number</label>
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="text"
                                                        id="phone_number"
                                                        name="phone_number"
                                                        className="form-control"
                                                        value=""
                                                        placeholder="+880 (123) 456 88"
                                                        required
                                                        data-error="Please enter your Phone Number"
                                                    />
                                                    <label for="phone_number" className="for-icon">
                                                        <i className="far fa-phone"></i>
                                                    </label>
                                                </div>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="subject">Subject</label>
                                                <div className="form-input-wrapper">
                                                    <select name="subject" id="subject" className="form-control" required data-error="Please enter your Subject">
                                                        <option disabled value="Subject" selected>
                                                            Subject
                                                        </option>
                                                        <option value="I would like to discussed">I would like to discussed</option>
                                                        <option value="Mobile App UI/UX Design">Mobile App UI/UX Design</option>
                                                        <option value="Website UI/UX Design">Website UI/UX Design</option>
                                                        <option value="Social Media Post Design">Social Media Post Design</option>
                                                        <option value="Graphics Design">Graphics Design</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <label htmlFor="subject" className="for-icon">
                                                        <i className="far fa-angle-down"></i>
                                                    </label>
                                                </div>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="message">Message</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    rows="4"
                                                    placeholder="write message"
                                                    required
                                                    data-error="Please enter your Message"
                                                ></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <button type="submit" className="theme-btn">
                                                    Send Us Message <i className="far fa-angle-right"></i>
                                                </button>
                                                <div id="msgSubmit" className="hidden"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
