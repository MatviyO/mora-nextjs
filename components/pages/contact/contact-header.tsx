import React from 'react';

const ContactHeader: React.FC = () => {
    return (
        <div className="w-full  py-12 bg-gradient-to-b from-white to-[#F6FAF4] flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-6 max-w-[1440px] w-full mx-auto px-12 ">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h1 className="text-center text-black text-[44px] font-bold font-Poppins leading-[52.8px]">
                        Contact us
                    </h1>
                    <p className="text-center text-black text-lg font-normal leading-7 font-Poppins max-w-[600px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;
