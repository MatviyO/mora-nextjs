import React from 'react';
import Features from './Features';
import Services from './Services';
import HowItWorks from './HowItWorks';
import CashOffer from './CashOffer';
import Locations from './Locations';
import Navbar from "@/components/shared/layout/navbar";
import Hero from "@/components/pages/home/hero";
import Footer from "@/components/shared/layout/footer";

const HomePage: React.FC = () => {
  return (
      <div className="flex flex-col justify-center items-center bg-stone-100">
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <HowItWorks />
        <CashOffer />
        <Locations />
        <Footer />
      </div>
  );
};

export default HomePage;
