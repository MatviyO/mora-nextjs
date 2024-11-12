import React from 'react';

const AboutUsSection: React.FC = () => {
    return (
        <section className="w-full mb-40  h-[600px] bg-gradient-to-b from-white to-[#F6FAF4] px-18 flex flex-col justify-start items-center gap-10">
            <div className="w-max-[1440px] flex flex-row h-full justify-center items-center">
                {/* Left Column */}
                <div className="flex-1 flex flex-col justify-center items-start gap-6 pr-20 relative">
                    <div className="absolute w-[794px] h-[736px] "></div>
                    <div className="z-10 flex flex-col gap-6">
                        <h1 className="text-4xl font-bold text-black leading-tight">
                            About Us
                        </h1>
                        <p className="text-lg text-black leading-7 max-w-md">
                            Rudy and I (David), are brothers passionate about real estate and committed to helping homeowners sell their houses with ease. With over 7 years of homebuilding experience under our belts, along with a strong foundation laid by our father’s 35-year construction business, we bring a wealth of knowledge and expertise to every transaction.
                            <br />
                            Our mission is simple: we want to ensure that every homeowner we work with feels valued, understood, and supported throughout the entire process. We recognize that selling a home can be a challenging experience, which is why we’re here to provide compassionate guidance and assistance, no matter the condition or situation of your property.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex w-[648px] h-[848px] gap-4 justify-center items-center">
                    {/* First Column of Images */}
                    <div className="flex flex-col gap-4">
                        <img
                            src="./5.png"
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
                            src="./6.png"
                            alt="Image 2"
                            className="w-[315px] h-[340px] rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
