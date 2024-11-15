import React from 'react';
import Hero from "@/components/pages/home/hero";
import Locations from "@/components/pages/home/locations";
import CashOffer from "@/components/pages/home/cash-offer";
import HowItWorks from "@/components/pages/home/how-it-works";
import Features from "@/components/pages/home/features";
import Services from "@/components/pages/home/services";
import AboutMoraHomeBuyers from "@/components/pages/home/about";
import FeaturesOffer from "@/components/pages/home/feature-offer";
import Situations from "@/components/pages/home/situation";

const HomePage: React.FC = () => {
  return (
     <>
          <Hero />
          <Features />
          <Services />
          <AboutMoraHomeBuyers />
          <FeaturesOffer />
          <HowItWorks />
          <Situations />
          <CashOffer />
          <Locations />
     </>
  );
};

export default HomePage;
