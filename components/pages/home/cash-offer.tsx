import React from 'react';

const CashOffer: React.FC = () => {
    return (
        <section className="flex overflow-hidden flex-col px-20 pt-8 pb-14 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex relative gap-10 items-start w-full max-md:max-w-full">
                <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto text-black basis-12 min-w-[240px] max-md:max-w-full">
                    <h2 className="w-full text-5xl font-bold leading-tight max-md:max-w-full">
                        Get a cash offer today.
                    </h2>
                    <ol className="flex flex-col py-2 mt-8 w-full text-lg max-md:max-w-full">
                        <li className="flex-1 shrink gap-4 self-stretch w-full max-md:max-w-full">
                            <span className="font-semibold text-green-700">1.</span> Fill out the short form
                        </li>
                        <li className="flex-1 shrink gap-4 self-stretch mt-4 w-full max-md:max-w-full">
                            <span className="font-semibold text-green-700">2.</span> Upload images of the property
                        </li>
                        <li className="flex-1 shrink gap-4 self-stretch mt-4 w-full max-md:max-w-full">
                            <span className="font-semibold text-green-700">3.</span> Get a call, text or email with our cash offer no obligation.
                        </li>
                    </ol>
                </div>
                <div className="relative">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c80bc8fd40a8ed5180a642c630ab28babf6ad87330160505678c371f03a08ed?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Cash offer process illustration" className="object-contain z-0 self-stretch my-auto rounded-2xl aspect-[1.24] min-w-[240px] w-[616px] max-md:max-w-full" />
                    <h3 className="absolute z-0 text-5xl leading-tight text-white h-[62px] right-[143px] top-[186px] w-[308px] max-md:text-4xl">
                        Get started!
                    </h3>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3645d3e509891bea240cde2a708d48f0409c50d8693412584b8792cf8b6f214?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain absolute top-8 z-0 shrink-0 h-14 aspect-[2.75] right-[231px] w-[154px]" />
                    <button className="absolute gap-2 self-stretch px-6 py-3 text-lg text-green-700 uppercase bg-white bottom-[161px] right-[228px] rounded-[30px] max-md:px-5">
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CashOffer;
