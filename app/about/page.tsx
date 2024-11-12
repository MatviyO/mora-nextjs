import React from 'react';
import Locations from "@/components/pages/home/locations";
import AboutUsSection from "@/components/pages/about/about-hero";
import StorySection from "@/components/pages/about/story-section";
import WhyChooseUs from "@/components/pages/about/why-chouts";
import MissionVision from "@/components/pages/about/mision-vision";
import TeamSection from "@/components/pages/about/team-section";

const AboutPage: React.FC = () => {
    return (
        <>
            <AboutUsSection />
            <StorySection />
            <WhyChooseUs />
            <MissionVision />
            <TeamSection />
            <Locations />
        </>
    );
};

export default AboutPage;
