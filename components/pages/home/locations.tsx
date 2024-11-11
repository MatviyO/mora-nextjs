"use client"
import React, { useState } from 'react';

interface Location {
    name: string;
    address: string;
}

const LocationTab: React.FC<{ location: Location; isActive: boolean; onClick: () => void }> = ({ location, isActive, onClick }) => (
    <div className={`flex overflow-hidden flex-wrap gap-8 ${isActive ? 'mt-0' : 'mt-10'} w-full max-md:max-w-full`} onClick={onClick}>
        <div className={`shrink-0 w-0 ${isActive ? 'border-2 border-emerald-500' : 'bg-black border-2 border-black'} border-solid h-[122px]`} />
        <div className="flex overflow-hidden flex-col flex-1 shrink self-start basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col w-full text-black max-md:max-w-full">
                <h3 className="text-2xl font-bold leading-snug max-md:max-w-full">{location.name}</h3>
                <p className="mt-4 text-base max-md:max-w-full">{location.address}</p>
            </div>
            <button className="mt-6 text-base font-semibold text-green-700 max-md:max-w-full">View Map</button>
        </div>
    </div>
);

const Locations: React.FC = () => {
    const locations: Location[] = [
        { name: "Dallas County", address: "123 Sample St, Sydney NSW 2000 AU" },
        { name: "Collin County", address: "123 Sample St, New York NY 10000 USA" },
        { name: "Tarrant County", address: "123 Sample St, London W1C 1DE, United Kingdom" }
    ];

    const [activeLocation, setActiveLocation] = useState(0);

    return (
        <section className="flex overflow-hidden flex-col px-20 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
            <h2 className="text-5xl font-bold leading-tight max-md:max-w-full">Where we operate</h2>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                Not seeing your location? Reach out, and our team will help tailor a solution for you.
            </p>
            <div className="flex relative gap-10 items-start mt-10 w-full max-md:max-w-full">
                <div className="flex z-0 flex-col min-w-[240px] w-[500px] max-md:max-w-full">
                    {locations.map((location, index) => (
                        <LocationTab
                            key={index}
                            location={location}
                            isActive={index === activeLocation}
                            onClick={() => setActiveLocation(index)}
                        />
                    ))}
                </div>
                <div className="flex z-0 flex-col rounded-2xl min-w-[240px] w-[732px] max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80a1fc34c3ea493d2d06d6ae28de9f531a99e425f05a57320b2ba7f34538e2e5?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Map of our locations" className="object-contain w-full shadow-lg aspect-[1.66] max-md:max-w-full" />
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/74503f7e666b432747ba4320435ae9f513b3df4a0288592569d36a0c0c93752d?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain absolute z-0 shrink-0 aspect-square h-[47px] right-[356px] rounded-[50px] top-[93px] w-[47px]" />
            </div>
        </section>
    );
};

export default Locations;
