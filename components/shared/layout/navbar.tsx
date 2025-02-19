import React from "react";
import Link from "next/link";
import { IconFacebook1, IconX1 } from "@/components/icons/home";

interface Props {
    logo: string;
    flowbiteYoutube: string;
    icBaselineTiktok: string;
}

export const Navbar = ({
                           logo = "https://c.animaapp.com/ucgTyGcI/img/logo-1-1.svg",
                           flowbiteYoutube = "https://c.animaapp.com/ucgTyGcI/img/flowbite-youtube-solid.svg",
                           icBaselineTiktok = "https://c.animaapp.com/ucgTyGcI/img/ic-baseline-tiktok.svg",
                       }: Props): JSX.Element => {
    return (
        <div className="w-full z-20 border-b border-colors-light-green-duplicate bg-white py-4">
            <div className="flex items-center justify-between max-w-[1440px] w-full mx-auto px-12">
                {/* Left Navigation */}
                <div className="flex flex-col items-start relative flex-1 grow">
                    <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
                        <Link href="/" className="relative w-fit mt-[-1.00px] font-tagline font-[number:var(--tagline-font-weight)] text-black text-[length:var(--tagline-font-size)] tracking-[var(--tagline-letter-spacing)] leading-[var(--tagline-line-height)] whitespace-nowrap [font-style:var(--tagline-font-style)] transition-colors duration-200 hover:text-colors-light-green">
                            HOME
                        </Link>
                        <Link href="/about" className="relative w-fit mt-[-1.00px] font-tagline font-[number:var(--tagline-font-weight)] text-black text-[length:var(--tagline-font-size)] tracking-[var(--tagline-letter-spacing)] leading-[var(--tagline-line-height)] whitespace-nowrap [font-style:var(--tagline-font-style)] transition-colors duration-200 hover:text-colors-light-green">
                            ABOUT US
                        </Link>
                        <Link href="/services" className="relative w-fit mt-[-1.00px] font-tagline font-[number:var(--tagline-font-weight)] text-black text-[length:var(--tagline-font-size)] tracking-[var(--tagline-letter-spacing)] leading-[var(--tagline-line-height)] whitespace-nowrap [font-style:var(--tagline-font-style)] transition-colors duration-200 hover:text-colors-light-green">
                            SERVICES
                        </Link>
                        <Link href="/contact" className="relative w-fit mt-[-1.00px] font-tagline font-[number:var(--tagline-font-weight)] text-black text-[length:var(--tagline-font-size)] tracking-[var(--tagline-letter-spacing)] leading-[var(--tagline-line-height)] whitespace-nowrap [font-style:var(--tagline-font-style)] transition-colors duration-200 hover:text-colors-light-green">
                            CONTACT US
                        </Link>
                    </div>
                </div>

                <img className="relative w-[154px] h-14" alt="Logo" src={logo} />

                {/* Social Icons */}
                <div className="flex items-center justify-end gap-8 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <IconFacebook1 className="!relative !w-6 !h-6 hover:text-colors-light-green transition-colors duration-200" color="#038839" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img className="relative w-6 h-6 hover:text-colors-light-green transition-colors duration-200" alt="Instagram" src="https://c.animaapp.com/ucgTyGcI/img/ri-instagram-fill-1.svg" />
                        </Link>
                        <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <IconX1 className="!relative !w-6 !h-6 hover:text-colors-light-green transition-colors duration-200" color="#038839" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img className="relative w-6 h-6 hover:text-colors-light-green transition-colors duration-200" alt="YouTube" src={flowbiteYoutube} />
                        </Link>
                        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img className="relative w-6 h-6 hover:text-colors-light-green transition-colors duration-200" alt="TikTok" src={icBaselineTiktok} />
                        </Link>

                    </div>

                    {/* Get Started Button */}
                    <div className="all-[unset] box-border inline-flex h-12 items-center justify-center gap-4 relative flex-[0_0_auto] rounded-lg">
                        <button className="all-[unset] box-border inline-flex h-[50px] items-center justify-center gap-2 px-5 py-2 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-colors-white-duplicate rounded-[30px] border border-solid border-colors-dark-green-duplicate hover:bg-colors-light-green transition-colors duration-200">
              <span className="relative font-tagline font-[number:var(--tagline-font-weight)] text-colors-black-duplicate text-[length:var(--tagline-font-size)] tracking-[var(--tagline-letter-spacing)] leading-[var(--tagline-line-height)] whitespace-nowrap [font-style:var(--tagline-font-style)]">
                GET STARTED
              </span>
                     <img className="relative w-[27px] h-6" alt="Vector" src="https://c.animaapp.com/ucgTyGcI/img/vector-1.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
