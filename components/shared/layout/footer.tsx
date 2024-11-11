import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex overflow-hidden flex-col px-20 py-11 w-full bg-white border-t border-stone-400 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center self-center">
                <div className="flex flex-col items-center text-base text-black uppercase">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8c09f81ebe12bbc8fb918e9402b97ac573d15fa7fb35a011b0404a37431d62?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="Company logo" className="object-contain max-w-full aspect-[2.75] w-[154px]" />
                    <nav className="flex gap-8 items-start mt-8">
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT US</a>
                        <a href="#services">SERVICES</a>
                        <a href="#contact">CONTACT US</a>
                    </nav>
                </div>
                <div className="flex gap-3 items-center mt-8">
                    <a href="#facebook" aria-label="Facebook"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8be7091e49b9f432d72c3f9d713dcaaaefac54338763825147844eae5c0f4de?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                    <a href="#twitter" aria-label="Twitter"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d8b81b677f7b145f49f99a952c18711d66404b3ac5109285c05adf4d09d3d64?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                    <a href="#instagram" aria-label="Instagram"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36b39c9611ee643268e71e39dfce6768b5758faa21776660d3773a34950f557?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                    <a href="#linkedin" aria-label="LinkedIn"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1989c5b71d765757b6c0d28a63380b32f34d459bc7584b1d669ff60f9d5dd61e?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                    <a href="#youtube" aria-label="YouTube"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3849634dd5f9d095136a4c26bc6090213144f03f7af0601deab489c6da3cf2?placeholderIfAbsent=true&apiKey=b76556bb44884a25a2b2e23cb3ba4ea6" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" /></a>
                </div>
            </div>
            <div className="flex flex-col mt-20 w-full text-sm text-black max-md:mt-10 max-md:max-w-full">
                <div className="flex w-full bg-stone-400 min-h-[1px] max-md:max-w-full" />
                <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
                    <p className="max-md:max-w-full">
                        © 2023 Mora home buyers. All rights reserved. Created by Digitality agency
                    </p>
                    <div className="flex gap-6 items-start min-w-[240px]">
                        <a href="#privacy" className="underline">Privacy Policy</a>
                        <a href="#terms" className="underline">Terms of Service</a>
                        <a href="#cookies" className="underline">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
