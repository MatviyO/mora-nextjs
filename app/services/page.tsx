import React from 'react';
import ServicesAboutSection from "@/components/pages/services/services-hero";
import OurServices from "@/components/pages/services/our-services";
import HowItWorks from "@/components/pages/home/how-it-works";
import WhyChooseUs from "@/components/pages/about/why-chouts";
import ContactUs from "@/components/pages/services/contct-us";
import AboutMoraServBuyers from "@/components/pages/services/about-serv";

const ServicesPage: React.FC = () => {
    return (
        <>
            <ServicesAboutSection />
            <OurServices />
            <HowItWorks />
            <AboutMoraServBuyers />
            <WhyChooseUs />
            <ContactUs />
        </>
    );
};

export default ServicesPage;
