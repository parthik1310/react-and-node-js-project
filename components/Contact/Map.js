export default function Map() {
    return (
        <>
            <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
                <div className="container">
                    <div className="our-location">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
                            style={{ border: 0, width: "100%" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
