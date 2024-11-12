import React from 'react';

interface SituationCardProps {
    title: string;
    description: string;
    image?: string;
    icon?: JSX.Element;
    heightClass?: string;
    variant?: 'default' | 'small' | 'half-image';
}

const SituationCard: React.FC<SituationCardProps> = ({ title, description, image, icon, heightClass, variant = 'default' }) => {
    if (variant === 'small') {
        // Styling for the 3rd and 4th cards (small variant)
        return (
            <div className="w-[300px] h-[340px] bg-white rounded-2xl shadow-lg flex flex-col justify-start items-start p-6 gap-6">
                <div className="flex flex-col gap-4 items-start">
                    {icon && <div className="w-10 h-10 text-green-600">{icon}</div>}
                    <h3 className="text-2xl font-bold text-black leading-[41.6px]">{title}</h3>
                    <p className="text-base text-black leading-6">{description}</p>
                </div>
            </div>
        );
    }

    if (variant === 'half-image') {
        // Styling for the 2nd card (half-image variant)
        return (
            <div className="w-[632px] h-[340px] bg-white rounded-2xl shadow-lg flex flex-row overflow-hidden">
                {image && (
                    <div className="flex-1 h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                )}
                <div className="flex-1 p-6 flex flex-col justify-center items-start gap-4">
                    <h3 className="text-2xl font-bold text-black leading-[41.6px]">{title}</h3>
                    <p className="text-base text-black leading-6">{description}</p>
                </div>
            </div>
        );
    }

    // Default styling for the 1st and 5th cards
    return (
        <div
            className={`flex ${heightClass} bg-white rounded-2xl shadow-lg flex-col justify-start items-start`}
            style={{
                width: '632px',
                height: '570px',
                boxShadow: '0px 2px 32px rgba(3, 136, 57, 0.06)',
                borderRadius: '16px',
            }}
        >
            {/* Top Content Area */}
            <div
                className="flex flex-col justify-center items-start gap-8"
                style={{
                    alignSelf: 'stretch',
                    height: '186px',
                    padding: '48px',
                }}
            >
                <div
                    className="flex flex-col gap-8"
                    style={{
                        alignSelf: 'stretch',
                        height: '90px',
                    }}
                >
                    <h3
                        className="text-black font-bold"
                        style={{
                            fontSize: '32px',
                            lineHeight: '41.6px',
                            fontFamily: 'Poppins',
                            alignSelf: 'stretch',
                        }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-black"
                        style={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                            alignSelf: 'stretch',
                        }}
                    >
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Section */}
            {image && (
                <div
                    className="self-stretch h-full rounded-2xl flex justify-end items-center"
                    style={{
                        height: '360px',
                        borderRadius: '16px',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="self-stretch h-full rounded-2xl object-cover"
                        style={{
                            height: '360px',
                            borderRadius: '16px',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

const SituationsSection: React.FC = () => {
    return (
        <section className="flex justify-center w-full max-w-6xl mx-auto px-8 py-20 flex-col items-center gap-10">
            <div className="SectionTitle flex flex-col justify-start items-center gap-4 mb-10">
                <h2 className="text-5xl font-bold text-black text-center">Situations Where We Can Help</h2>
            </div>
            <div className="Container flex flex-col gap-8">
                <div className="Row flex gap-8">
                    <div className="Column flex flex-col gap-8">
                        <SituationCard
                            title="Distressed Home"
                            description="We buy as is and in any any condition."
                            image="./1.png"
                            heightClass="h-[570px]"
                        />
                        <div className="Row flex gap-8">
                            <SituationCard
                                title="Bankruptcy"
                                description="Our goal is to help you get a fair price for your home and help you move forward."
                                icon={<div className="FluentMoneyOff24Regular w-10 h-10 text-green-600" />}
                                heightClass="h-[340px]"
                                variant="small"
                            />
                            <SituationCard
                                title="Relocation / Job Loss"
                                description="Let us know how we can help make this a seamless transition for you."
                                icon={<div className="FluentGlobeLocation24Regular w-10 h-10 text-green-600" />}
                                heightClass="h-[340px]"
                                variant="small"
                            />
                        </div>
                    </div>
                    <div className="Column flex flex-col gap-8">
                        <SituationCard
                            title="Pre-Foreclosure"
                            description="We offer fast closing in as little as a week."
                            image="./2.png"
                            heightClass="h-[340px]"
                            variant="half-image"
                        />
                        <SituationCard
                            title="Natural Disaster"
                            description="Our job is to make it easier on you so you can move forward faster."
                            image="./3.png"
                            heightClass="h-[570px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SituationsSection;
