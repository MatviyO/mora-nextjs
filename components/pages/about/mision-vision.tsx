import React from "react";

const MissionVision: React.FC = () => {
    return (
        <div className="flex w-full py-16 bg-[#F6FAF4] gap-10">
            <div className="flex flex-col items-center justify-between max-w-[1440px] w-full mx-auto px-6">
            {/* Section Title */}
            <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-4xl font-bold text-black">Our Mission and Vision</h2>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-12">
                <div className="flex gap-12">
                    {/* Integrity Column */}
                    <div className="flex flex-col gap-8 flex-1">
                        <div className="h-60 w-full rounded-lg bg-gradient-to-b from-[#11DC6E] to-[#09763B]"/>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-black">Integrity</h3>
                            <p className="text-base text-black max-w-[450px]">
                                We believe that honest and open conversations are the foundation of our relationship.
                                Just as builders use strong materials to create a sturdy home, we use honesty and
                                transparency to build a solid foundation for our partnership.
                            </p>
                        </div>
                    </div>

                    {/* Fairness Column */}
                    <div className="flex flex-col gap-8 flex-1">
                        <img
                            src="./8.png"
                            alt="Fairness Image"
                            className="w-full h-[240px] rounded-lg"
                        />
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-black">Fairness</h3>
                            <p className="text-base text-black max-w-[450px]">
                                We believe in treating everyone fairly, no matter the situation. We’re honest,
                                upfront, and always try to give everyone a fair deal. When we treat people fairly,
                                we build a reputation for integrity and reliability, which ultimately benefits
                                everyone involved.
                            </p>
                        </div>
                    </div>

                    {/* Empathy Column */}
                    <div className="flex flex-col gap-8 flex-1">
                        <img
                            src="./9.png"
                            alt="Empathy Image"
                            className="w-full h-[240px] rounded-lg"
                        />
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-black">Empathy</h3>
                            <p className="text-base text-black max-w-[450px]">
                                It's more than just a house; it's a place filled with memories and emotions. We're
                                here to listen, offer support, and help you navigate this transition with care and
                                compassion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MissionVision;
