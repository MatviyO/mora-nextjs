import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="flex overflow-hidden flex-col px-20 py-20 w-full text-center text-black bg-white max-md:px-5 max-md:max-w-full">
            <h2 className="self-center text-5xl font-bold leading-tight max-md:max-w-full">
                How It Works
            </h2>
            <div className="flex relative gap-10 justify-center items-center mt-10 w-full max-md:max-w-full">
                <div className="flex overflow-hidden z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 min-h-[396px] min-w-[240px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16b794a106df8850b848abdc05ec9c60777ed8d3217d6546aa5963a6ed49f949?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Fill out form illustration" className="object-contain flex-1 w-full shadow-lg aspect-[1.47]" />
                    <div className="flex flex-col mt-6 w-full">
                        <h3 className="text-xl font-bold leading-snug">Fill Out Form</h3>
                        <p className="mt-4 text-base leading-6">
                            Get your fair cash offer fast! Fill out our 5-minute questionnaire for a personalized, hassle-free offer.
                        </p>
                    </div>
                </div>
                <div className="flex overflow-hidden z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 min-h-[396px] min-w-[240px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcca31770bae9401db7a985bdbf78a4b79c1a8e6b6609f2823e6922b610150de?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Upload images illustration" className="object-contain flex-1 w-full shadow-lg aspect-[1.48]" />
                    <div className="flex flex-col mt-6 w-full min-h-[116px]">
                        <h3 className="text-xl font-bold leading-snug">Upload Images</h3>
                        <p className="mt-4 text-base leading-6">
                            Upload images to help us provide the best fair price for your home!
                        </p>
                    </div>
                </div>
                <div className="flex overflow-hidden relative z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 min-h-[396px] min-w-[240px]">
                    <div className="flex z-0 flex-1 w-full bg-green-400 rounded-2xl shadow-lg min-h-[256px]" />
                    <div className="flex z-0 flex-col mt-6 w-full min-h-[116px]">
                        <h3 className="text-xl font-bold leading-snug">Instant Cash Offer</h3>
                        <p className="mt-4 text-base">
                            No Hassle, No Obligation: Flexible Cash Offer
                        </p>
                        Continuing from where we left off:

                    </div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11c892bf18fe439a36cdabcb78f0ff2d96cf9a22d0996b8ae0da9ad662b8c426?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Instant cash offer illustration" className="object-contain absolute top-2.5 right-3.5 z-0 max-w-full aspect-[1.47] h-[236px] w-[348px]" />
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca87567ccfb272b3da07df92e3d26463c05fc5b98a6a152b1e3ad2180c3044c?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain absolute z-0 shrink-0 self-start aspect-[0.47] h-[38px] left-[409px] top-[109px] w-[18px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ea99446bbaffe7b1ff6ad478f57f13997f00e441c49f2e0aa9d94e12efe424?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain absolute z-0 shrink-0 self-start aspect-[0.47] h-[38px] right-[409px] top-[109px] w-[18px]" />
            </div>
        </section>
    );
};

export default HowItWorks;
