import React from 'react';

const ContactInfoSection: React.FC = () => {
    return (
        <div className="w-full  px-18 py-16 bg-white flex flex-col items-center gap-10">
            <div className="flex max-w-[1440px] w-full mx-auto px-12  justify-start items-start gap-20">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col h-[131px] gap-6">
                        <h1 className="text-black text-[44px] font-bold font-Poppins leading-[52.8px]">
                            Contact info
                        </h1>
                        <p className="text-black text-lg font-normal leading-7 font-Poppins">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            elementum tristique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-[500px] gap-6 pt-2">
                    {/* Email Section */}
                    <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-[#038839] rounded"></div>
                        <div className="flex flex-col">
                            <h3 className="text-black text-xl font-semibold">Email</h3>
                            <a href="mailto:info@morahomebuyers.com" className="text-black text-base font-normal">
                                info@morahomebuyers.com
                            </a>
                        </div>
                    </div>
                    {/* Phone Section */}
                    <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-[#038839] rounded"></div>
                        <div className="flex flex-col">
                            <h3 className="text-black text-xl font-semibold">Phone</h3>
                            <p className="text-black text-base font-normal">972-832-7515</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-w-[1440px] w-full mx-auto px-12  justify-start items-start gap-20">
                <img className="w-full h-[601px] rounded-lg" src="./11.png" alt="Placeholder"/>
            </div>
        </div>
    );
};

export default ContactInfoSection;
