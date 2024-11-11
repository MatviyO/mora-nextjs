import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => (
    <div className="flex flex-col flex-1 shrink bg-white rounded-2xl shadow-lg basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center px-8 pt-8 w-full max-md:px-5 max-md:max-w-full">
            <h3 className="text-3xl font-bold leading-tight">{title}</h3>
            <p className="mt-4 text-sm leading-5 max-md:max-w-full">{description}</p>
            <button className="gap-2 self-start px-6 py-3 mt-6 text-base text-white uppercase rounded-[30px] max-md:px-5">
                learn more
            </button>
        </div>
        <div className="flex flex-col w-full max-md:max-w-full">
            <img loading="lazy" src={image} alt={`Illustration for ${title}`} className="object-contain w-full aspect-[1.9] max-md:max-w-full" />
        </div>
    </div>
);

const Services: React.FC = () => {
    const services = [
        {
            title: "Sell your home",
            description: "Life can be unpredictable, and sometimes circumstances beyond our control can lead to difficult decisions. If you're facing a challenging situation, we're here to help. Our compassionate team understands the emotional weight of: - Divorce or separation - Pre-foreclosure or financial hardship - Inheritance or probate complexities - Job loss or relocation - Medical crisis or health issues - Estate settlement or trust management",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7beaa2f768394ed8b5791bf53a0200569bb230e906b6dc0cc9c76720053f9ee3?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6"
        },
        {
            title: "Problem property",
            description: "Is your home a headache? - Foundation issues - Plumbing/ electrical problems - Structural damage - Fire/water damage - Termite infestation - Distressed/abandoned No cash for repairs? We can help!",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b68c0bc25e38305cb1e24bc7f441dbaf9f0a725e15704d1c3f160ca7ab834c12?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6"
        }
    ];

    return (
        <section className="flex overflow-hidden flex-col px-20 py-24 w-full max-md:px-5 max-md:max-w-full">
            <h2 className="self-center max-w-full text-5xl font-bold leading-tight text-center text-black w-[768px]">
                Our Services
            </h2>
            <p className="self-center mt-6 text-lg text-center max-w-full w-[768px]">
                Unique situations deserve personalized attention. We're here to help
            </p>
            <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
