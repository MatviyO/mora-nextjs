import React from 'react';
import Navbar from "@/components/shared/layout/navbar";
import Hero from "@/components/pages/home/hero";
import Footer from "@/components/shared/layout/footer";
import Locations from "@/components/pages/home/locations";
import CashOffer from "@/components/pages/home/cash-offer";
import HowItWorks from "@/components/pages/home/how-it-works";
import Features from "@/components/pages/home/features";
import Services from "@/components/pages/home/services";

const HomePage: React.FC = () => {
  return (
      <div className="flex flex-col justify-center items-center bg-stone-100">
          <Navbar
              flowbiteYoutube="https://c.animaapp.com/ucgTyGcI/img/flowbite-youtube-solid-1.svg"
              icBaselineTiktok="https://c.animaapp.com/ucgTyGcI/img/ic-baseline-tiktok-1.svg"
              logo="https://c.animaapp.com/ucgTyGcI/img/logo-1-1-1.svg"
          />
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
