import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="flex overflow-hidden flex-col justify-center px-20 py-4 w-full bg-white border-b border-solid border-b-stone-400 max-md:px-5 max-md:max-w-full">
            <nav className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
                <ul className="flex flex-col flex-1 shrink items-start self-stretch my-auto text-base text-black uppercase basis-0 min-w-[240px] max-md:max-w-full">
                    <li className="flex overflow-hidden gap-6 items-start max-md:max-w-full">
                        <a href="#home">Home</a>
                        <a href="#about">About us</a>
                        <a href="#services">Services</a>
                        <div className="flex gap-1 min-h-[24px]" />
                        <a href="#contact">Contact us</a>
                    </li>
                </ul>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6346be8d3112acef759ec9fc9e718743f4ae826f8d70263f22d145ce16dc63c?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[2.75] w-[154px]" />
                <div className="flex flex-wrap flex-1 shrink gap-8 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="flex gap-3 items-center self-stretch my-auto">
                        <a href="#facebook" aria-label="Facebook"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8be7091e49b9f432d72c3f9d713dcaaaefac54338763825147844eae5c0f4de?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                        <a href="#twitter" aria-label="Twitter"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d8b81b677f7b145f49f99a952c18711d66404b3ac5109285c05adf4d09d3d64?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                        <a href="#instagram" aria-label="Instagram"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36b39c9611ee643268e71e39dfce6768b5758faa21776660d3773a34950f557?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                        <a href="#linkedin" aria-label="LinkedIn"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1989c5b71d765757b6c0d28a63380b32f34d459bc7584b1d669ff60f9d5dd61e?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                        <a href="#youtube" aria-label="YouTube"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3849634dd5f9d095136a4c26bc6090213144f03f7af0601deab489c6da3cf2?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                    </div>
                    <button className="flex gap-2 justify-center items-center self-stretch px-5 py-3 my-auto bg-white border border-green-700 border-solid min-h-[48px] rounded-[30px] text-base text-black uppercase">
                        Get started
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c54a3fe94c88bf84c24f7929f745461bacf3545ecd73c872402661e52d9d20?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.12] w-[27px]" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
