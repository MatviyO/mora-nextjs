import React from "react";

const WhyChooseUs: React.FC = () => {
    return (
        <div className="flex flex-col justify-start items-start w-full py-16 bg-white gap-10">
            <div className="max-w-[1440px] w-full mx-auto px-12">
                <h2 className="text-4xl font-bold text-black w-full max-w-[768px]">Why Choose Us</h2>
                <div className="flex justify-start items-start gap-8 w-full">
                    {/* Communication Section */}
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex flex-col items-start gap-6">
                            <div className="w-10 h-10 relative">
                                <div className="w-5 h-8 border-2 border-[#038839] absolute left-1 top-0"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-bold text-black">Communication</h3>
                                <p className="text-base text-black max-w-[398px]">
                                    Just like an open floor plan promotes a sense of connection and ease of
                                    conversation, our approach fosters open communication and a smooth transaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flexibility Section */}
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex flex-col items-start gap-6">
                            <div className="w-10 h-10 relative">
                                <div className="w-7 h-8 bg-[#038839] absolute left-1 top-0"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-bold text-black">Flexibility</h3>
                                <p className="text-base text-black max-w-[389px]">
                                    We understand that selling schedules can be unpredictable. That's why we're always
                                    ready to adapt to your timeline and needs. Let us handle the details, so you can
                                    focus on what matters most.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reliability and Professionalism Section */}
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex flex-col items-start gap-6">
                            <div className="w-10 h-10 relative">
                                <div className="w-7 h-6 border-2 border-[#038839] absolute left-1 top-1"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-bold text-black">Reliability and Professionalism</h3>
                                <p className="text-base text-black max-w-[402px]">
                                    Just as a home needs a strong framework, our partnership relies on our commitment to
                                    follow through on promises and maintain a professional demeanor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
