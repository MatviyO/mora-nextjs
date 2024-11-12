import React from 'react';
import ContactHeader from "@/components/pages/contact/contact-header";
import ContactInfoSection from "@/components/pages/contact/contact-info";
import AboutMoraHomeBuyers from "@/components/pages/home/about";
import ContactUs from "@/components/pages/services/contct-us";

const ContactPage: React.FC = () => {
    return (
        <>
            <ContactHeader />
            <ContactInfoSection />
            <AboutMoraHomeBuyers />
            <ContactUs />
        </>
    );
};

export default ContactPage;
