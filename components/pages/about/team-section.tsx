import React from "react";

const TeamSection: React.FC = () => {
    return (
        <div className="flex flex-col w-full py-20 bg-gradient-to-b from-white to-[#F6FAF4] gap-10">
            <div className="flex flex-col justify-between max-w-[1440px] w-full mx-auto px-6">
            {/* Section Title */}
            <div className="flex flex-col self-start items-center gap-4 mb-10">
                <h2 className="text-4xl font-bold text-black">Meet the team</h2>
                <p className="text-lg text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Team Members */}
            <div className="flex flex-col gap-24">
                <div className="flex gap-12">
                    {/* Team Member Card 1 */}
                    <div className="flex flex-col items-start gap-6 w-[400px]">
                        <img
                            className="w-full h-[395px] rounded-lg object-cover"
                            src="./3.png"
                            alt="Rudy Mora"
                        />
                        <div className="flex flex-col items-center text-center gap-4">
                            <h3 className="text-xl font-semibold text-black">Rudy Mora</h3>
                            <p className="text-[#038839] text-lg font-normal">Founder</p>
                            <p className="text-base text-black">Dedicated to bringing solutions to situations that seem impossible</p>
                        </div>
                    </div>

                    {/* Team Member Card 2 */}
                    <div className="flex flex-col items-start gap-6 w-[400px]">
                        <img
                            className="w-full h-[395px] rounded-lg object-cover"
                            src="./3.png"
                            alt="David Mora"
                        />
                        <div className="flex flex-col items-center text-center gap-4">
                            <h3 className="text-xl font-semibold text-black">David Mora</h3>
                            <p className="text-[#038839] text-lg font-normal">Founder</p>
                            <p className="text-base text-black">Your mission, our Impossible.</p>
                        </div>
                    </div>
                </div>

                {/* Slider Navigation */}
                <div className="flex justify-between items-center w-full">
                    {/* Dots */}
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#038839]" />
                        <div className="w-2 h-2 rounded-full bg-[#A5CE8A]" />
                        <div className="w-2 h-2 rounded-full bg-[#A5CE8A]" />
                        <div className="w-2 h-2 rounded-full bg-[#A5CE8A]" />
                        <div className="w-2 h-2 rounded-full bg-[#A5CE8A]" />
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex gap-4">
                        <button className="p-3 bg-gradient-to-r from-[#24C57A] to-[#038839] rounded-full">
                            <div className="w-6 h-6 flex justify-center items-center">
                                <div className="w-4 h-4 bg-white" />
                            </div>
                        </button>
                        <button className="p-3 bg-gradient-to-r from-[#24C57A] to-[#038839] rounded-full">
                            <div className="w-6 h-6 flex justify-center items-center">
                                <div className="w-4 h-4 bg-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TeamSection;
