import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="flex flex-col px-20 py-20 w-full text-center text-black bg-white max-md:px-5 max-md:max-w-full">
            <h2 className="text-5xl font-bold">How It Works</h2>
            <div className="flex gap-10 justify-center items-center mt-10">

                {/* Card 1 */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-6 w-[320px] h-[380px] shadow-lg">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16b794a106df8850b848abdc05ec9c60777ed8d3217d6546aa5963a6ed49f949?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6"
                        alt="Fill out form illustration"
                        className="w-full h-48 object-contain rounded-lg"
                    />
                    <h3 className="text-xl font-bold mt-4">Fill Out Form</h3>
                    <p className="text-base mt-2">
                        Get your fair cash offer fast! Fill out our 5-minute questionnaire for a personalized, hassle-free offer.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-6 w-[320px] h-[380px] shadow-lg">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcca31770bae9401db7a985bdbf78a4b79c1a8e6b6609f2823e6922b610150de?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6"
                        alt="Upload images illustration"
                        className="w-full h-48 object-contain rounded-lg"
                    />
                    <h3 className="text-xl font-bold mt-4">Upload Images</h3>
                    <p className="text-base mt-2">
                        Upload images to help us provide the best fair price for your home!
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-6 w-[320px] h-[380px] shadow-lg">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/11c892bf18fe439a36cdabcb78f0ff2d96cf9a22d0996b8ae0da9ad662b8c426?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6"
                        alt="Instant cash offer illustration"
                        className="w-full h-48 object-contain rounded-lg"
                    />
                    <h3 className="text-xl font-bold mt-4">Instant Cash Offer</h3>
                    <p className="text-base mt-2">
                        No Hassle, No Obligation: Flexible Cash Offer
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
