import React from 'react';

const About = () => {
    return (
        <section className="flex w-full flex-wrap items-center justify-between px-20 pt-16 bg-gradient-to-b from-white to-[#f6faf4]">
            <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden bg-[#a5ce8a] p-4 flex items-center justify-center">
                <img
                    src="https://via.placeholder.com/620x564"
                    alt="House and contract"
                    className="w-full h-full object-cover rounded-3xl"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 bg-[#24C57A] text-white text-sm font-bold px-3 py-1 rounded-full">
                    +$390K
                </div>
                <div className="absolute top-8 right-4 bg-[#24C57A] text-white text-sm font-bold px-3 py-1 rounded-full">
                    +$402K
                </div>
                <div className="absolute bottom-4 right-4 bg-[#24C57A] text-white text-sm font-bold px-3 py-1 rounded-full">
                    +$402K
                </div>
            </div>

            <div className="w-[400px] flex flex-col gap-6 ml-10">
                <h2 className="text-4xl font-bold text-black">About Mora Home Buyers</h2>
                <p className="text-lg font-normal leading-relaxed text-black">
                    At Mora Home Buyers, we're dedicated to providing stress-free, hassle-free, and fair cash offer solutions for homeowners. We believe in treating every seller with respect, empathy, and professionalism. Saving sellers time and money on repairs and commissions - Helping you move forward from difficult situations.
                </p>
                <p className="text-xl font-bold text-black">Important Disclosure</p>
                <p className="text-lg font-normal leading-relaxed text-black">
                    For clarification on agency relationships, please contact your local real estate commission.
                </p>
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#24C57A] to-[#038839] text-white rounded-full text-base font-normal uppercase">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default About;
