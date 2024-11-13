import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto shadow-lg basis-0 min-w-[240px]">
        <div className="flex flex-col justify-center p-6 w-full max-md:px-5">
            <img loading="lazy" src={icon} alt="" className="object-contain self-center aspect-square w-[42px]" />
            <div className="flex flex-col mt-4 w-full">
                <div
                    className="flex self-center items-center justify-center gap-[10px] px-2 py-0.5 w-[141px] rounded-[30px] bg-[var(--Light-Green,#A5CE8A)] text-2xl font-bold leading-snug text-white whitespace-nowrap max-w-full">
                    {title}
                </div>
                <p className="mt-2 text-lg leading-7 text-black">{description}</p>
            </div>
        </div>
    </div>
);

const Features: React.FC = () => {
    const features = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/670746d7a9390923cf45ffb7c14087297aa491fc33c0c68a20c4828c6c03ba53?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6",
            title: "+143",
            description: "No calls or in-person meeting necessary"
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5549b01cfab1f3e1900d97a9f4a8dc72e4c646345d82c38d9e3143f448b8f3b?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6",
            title: "99%",
            description: "No Commissions: Save thousands in realtor fees"
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fde613ac6ed9bdb7c76aab90721384bf70f85a6036593a2bfa8c6e18a41a488?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6",
            title: "+249",
            description: "Close Fast, Move Forward Faster"
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff3ebbd15911cfd70ec0450ab6c590522491f6fdd4126b917178e35d33f4daad?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6",
            title: "96%",
            description: "Hassle free and transparent about process"
        }
    ];

    return (
        <section className="flex overflow-hidden flex-col gap-20 justify-center px-20 py-4 text-center bg-white max-md:px-5 w-full">
            <div className="flex flex-col justify-center max-w-[1440px] w-full mx-auto px-12">
                <div className="flex flex-wrap gap-8 items-center w-full ">
                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <FeatureCard {...feature} />
                            {index < features.length - 1 && (
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f20d4942ff7a4d1fb3283f40fb00bc974c6ba09b33e582216a3bf0d611b53d2d?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.47] w-[18px]" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
