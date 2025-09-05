import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";
import Banner from "@/components/common/Banner";

export default function Contact() {
    return (
        <>
            <Banner title="Contact us" />
            <ContactForm />
            <Map />
        </>
    );
}
