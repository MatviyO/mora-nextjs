import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className="w-full py-20 flex flex-col items-start gap-10 bg-[#F6FAF4]">
            <div className="flex max-w-[1440px] w-full mx-auto gap-20 px-12 ">
                <img
                    src="./10.png"
                    alt="Contact Placeholder"
                    className="flex-1 h-[556px] rounded-2xl object-cover"
                />
                <div className="flex-1 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-black text-[44px] font-bold leading-[52.8px] font-Poppins">
                            Contact us
                        </h1>
                        <p className="text-black text-lg font-normal leading-7 font-Poppins">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-black text-base font-normal leading-6 font-Poppins">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-white rounded-2xl border border-[#A5CE8A] shadow-[0px_2px_32px_rgba(3,136,57,0.06)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-black text-base font-normal leading-6 font-Poppins">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 bg-white rounded-2xl border border-[#A5CE8A] shadow-[0px_2px_32px_rgba(3,136,57,0.06)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-black text-base font-normal leading-6 font-Poppins">Message</label>
                            <textarea
                                className="w-full h-[180px] p-3 bg-white rounded-2xl border border-[#A5CE8A] shadow-[0px_2px_32px_rgba(3,136,57,0.06)] resize-none"
                                placeholder="Type your message..."
                            ></textarea>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox"
                                   className="w-[18px] h-[18px] bg-white rounded-lg border border-[#A5CE8A]"/>
                            <label className="text-black text-sm font-Poppins">
                                I accept the <span className="underline">Terms</span>
                            </label>
                        </div>
                        <button
                            className="flex items-center justify-center max-w-[140px] gap-2 px-6 py-3 rounded-[30px] bg-gradient-to-r from-[#24C57A] to-[#038839] text-white max-md:px-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
