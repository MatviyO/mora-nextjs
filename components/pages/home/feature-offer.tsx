import React from 'react';
import { FaPercent, FaDollarSign, FaLock, FaToolbox } from 'react-icons/fa'; // Example icons from react-icons

interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Features: React.FC = () => {
    const features: Feature[] = [
        {
            icon: <FaPercent className="text-green-600 text-3xl" />,
            title: "No fees to pay",
            description: "Straightforward dealings. No hidden fees, no surprises."
        },
        {
            icon: <FaDollarSign className="text-green-600 text-3xl" />,
            title: "No commissions",
            description: "We eliminate realtor commissions. You keep more of your hard-earned equity."
        },
        {
            icon: <FaLock className="text-green-600 text-3xl" />,
            title: "No hidden costs",
            description: "Our cash offer is all-inclusive."
        },
        {
            icon: <FaLock className="text-green-600 text-3xl" />,
            title: "No closing costs",
            description: "- No title fees - No escrow fees - No recording fees - No surprise charges"
        },
        {
            icon: <FaToolbox className="text-green-600 text-3xl" />,
            title: "No repairs required",
            description: "We Buy As-Is. No repairs, no renovations. Save time and money."
        }
    ];

    return (
        <section
            className="flex flex-col w-full items-center px-10 py-16 relative mx-auto background-gradient"
        >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Features</h2>
            <p className="text-lg mb-12 text-center max-w-[600px] text-white">
                Offering fair cash prices, no realtor fees, and hassle-free closings.
            </p>
            <div className="grid gap-6 max-w-[1200px] w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {features.slice(0, 3).map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start p-6 bg-white text-black rounded-xl shadow-md"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.description}</p>
                    </div>
                ))}
                <div className="flex gap-6 col-span-full w-full">
                    {features.slice(3).map((feature, index) => (
                        <div
                            key={index + 3}
                            className="flex flex-col items-start p-6 bg-white text-black rounded-xl shadow-md flex-1"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
