import React from 'react';

const ServicesAboutSection: React.FC = () => {
    return (
        <section className="w-full z-0 h-[600px] bg-gradient-to-b from-white to-[#F6FAF4] px-18 flex flex-col justify-start items-center gap-10">
            <div className="max-w-[1440px] w-full mx-auto px-12 flex flex-row h-full justify-center items-center">
                {/* Left Column */}
                <div className="flex-1 flex flex-col justify-center items-start gap-6 pr-20 relative">
                    <div className="absolute w-[794px] h-[736px] "></div>
                    <div className="z-10 flex flex-col gap-6">
                        <h1 className="text-4xl font-bold text-black leading-tight">
                            Our Services
                        </h1>
                        <p className="text-lg text-black leading-7 max-w-md">
                            From simple to complex, we're your go-to solution. Whether you're facing foreclosure, divorce, or simply need a quick sale, we're here to help. My brother and I are committed to providing you with a hassle-free experience and a fair price for your home.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex w-[648px] h-[848px] gap-4 justify-center items-center">
                    {/* First Column of Images */}
                    <div className="flex flex-col gap-4">
                        <img
                            src="./2.png"
                            alt="Image 1"
                            className="w-[315px] h-[340px] rounded-2xl object-cover"
                        />
                        <div className="flex w-[315px] h-[340px] items-center justify-center relative">
                            <div className="absolute inset-0 bg-[#24C57A] rounded-2xl"></div>
                            {/*<img*/}
                            {/*    src="https://via.placeholder.com/350x350"*/}
                            {/*    alt="3D Tree"*/}
                            {/*    className="w-[350px] h-[350px] object-cover"*/}
                            {/*/>*/}
                        </div>
                    </div>

                    {/* Second Column of Images */}
                    <div className="flex flex-col gap-4 mb-40">
                        <div className="flex w-[315px] h-[340px] items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#42CA84] to-[#A5CE8A] rounded-2xl"></div>
                            <div className="absolute w-[196px] h-[181px] bg-white/25"></div>
                        </div>
                        <img
                            src="./3.png"
                            alt="Image 2"
                            className="w-[315px] h-[340px] rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesAboutSection;
