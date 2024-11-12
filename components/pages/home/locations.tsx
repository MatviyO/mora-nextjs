import React from 'react';

const ContactSection = () => {
    return (
        <div className="flex flex-col items-start p-16 bg-white w-full h-[793px] gap-10">
            {/* Section Title */}
            <div className="flex flex-col items-start gap-4 h-[131px]">
                <div className="flex flex-col items-start gap-6 w-full">
                    <h2 className="text-4xl font-bold text-black leading-tight">Where we operate</h2>
                    <p className="text-lg text-black max-w-[458px]">Not seeing your location? Reach out, and our team will help tailor a solution for you.</p>
                </div>
            </div>

            {/* Content */}
            <div className="flex gap-20 w-full">
                {/* Tabs Menu */}
                <div className="flex flex-col gap-10 w-[500px]">
                    {[
                        { title: "Dallas County", address: "123 Sample St, Sydney NSW 2000 AU", active: true },
                        { title: "Collin County", address: "123 Sample St, New York NY 10000 USA", active: false },
                        { title: "Tarrant County", address: "123 Sample St, London W1C 1DE, United Kingdom", active: false }
                    ].map((tab, index) => (
                        <div key={index} className="flex items-start">
                            <div
                                className={`h-[122px] w-0 border-l-2 ${tab.active ? 'border-[#24C57A]' : 'opacity-0'}`}/>
                            <div className="flex flex-col gap-6 w-full ml-8">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold text-black">{tab.title}</h3>
                                    <p className="text-base text-black">{tab.address}</p>
                                </div>
                                <a href="#" className="text-emerald-700 font-semibold">View Map</a>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Map Image */}
                <div className="relative w-[732px] h-[440px] shadow-lg rounded-2xl overflow-hidden">
                    <img src="./4.jpeg" alt="Map" className="object-cover w-full h-full"/>
                    <div
                        className="absolute top-[93px] right-[356px] flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full opacity-30"/>
                    <div
                        className="absolute top-[98px] right-[361px] flex items-center justify-center w-9 h-9 bg-blue-700 rounded-full">
                        <div className="w-2 h-4 bg-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
