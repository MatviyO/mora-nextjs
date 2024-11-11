import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex overflow-hidden flex-wrap gap-1 justify-between items-center px-20 py-24 w-full bg-[linear-gradient(180deg,#FFF_0%,#F6FAF4_100%)] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[555px] max-md:max-w-full">
                <h1 className="text-5xl font-bold uppercase leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                    Transforming Stress into Success
                </h1>
                <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                    Need to sell your home fast? We purchase homes in any condition, providing fair cash offers and
                    swift closings. Say goodbye to realtor fees, repairs, and uncertainty.
                </p>
                <div className="flex gap-4 items-center self-start pt-4 mt-6 text-base text-white uppercase">
                    <button
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-[30px] bg-gradient-to-r from-[#24C57A] to-[#038839] text-white max-md:px-5">
                        Our services
                    </button>
                </div>
            </div>
            <img loading="lazy"
                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/58e4f6c76a51bb1d12d2f1443df84ccecda9bd3321250c12c70d1bfe55fead5a?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6"
                 alt="Home buying process illustration"
                 className="object-contain self-stretch my-auto aspect-[1.46] min-w-[240px] w-[738px] max-md:max-w-full" />
        </section>
    );
};

export default Hero;
