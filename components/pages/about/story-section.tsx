import React from 'react';

const StorySection: React.FC = () => {
    return (
        <section
            className="w-full z-20 bg-gradient-to-b from-white to-[#F6FAF4] px-18 py-20 flex flex-col gap-10"
        >
            <div className="flex flex-col justify-start items-start  max-w-[1440px] w-full mx-auto px-12">
                <div className="flex w-full justify-start items-start gap-20 mb-12">
                    {/* Left Column - Heading */}
                    <div className="flex-1 flex flex-col gap-4">
                        <h2 className="text-black text-5xl font-bold leading-tight">Our Story</h2>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <p className="text-black text-lg leading-7">
                            Integrity and honesty are at the core of our values. We believe in transparent communication
                            and
                            always strive to treat our clients with the utmost respect. Our top priority is to ensure
                            that you
                            are happy with your experience and feel confident in your decision to work with us.
                            <br/>
                            <br/>
                            Having grown up in the construction industry, we understand the ins and outs of home repairs
                            and
                            renovations, which allows us to make fair offers and provide solutions tailored to your
                            unique needs.
                            Whether your home requires extensive repairs, you’re facing a difficult situation, or you're
                            simply
                            looking for a fresh start, we’re here to help.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <img
                    className="w-full h-[579px] rounded-2xl object-cover"
                    src="./7.jpeg"
                    alt="Our Story Image"
                />
            </div>
        </section>
);
};

export default StorySection;
