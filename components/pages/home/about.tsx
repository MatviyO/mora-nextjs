import React from 'react';
import Image from 'next/image';

const AboutMoraHomeBuyers: React.FC = () => {
    return (
        <section className="flex items-center w-full justify-center px-10 py-16 bg-[#ffffff] relative mx-auto">
            {/* Background SVG Icon */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="576" height="661" viewBox="0 0 576 661" fill="none">
                    <path d="M782.196 311.868L615.66 169.974H615.586L577.898 152.495L547.438 180.299L510.782 213.633L363.643 194.164L495.367 174.325L500.825 164.369L535.195 101.387L430.833 12.4452C411.362 -4.1484 382.671 -4.1484 363.127 12.4452L11.763 311.868C-11.8382 331.927 2.47004 370.572 33.4467 370.572H118.19V522.053C118.19 655.982 220.192 736 391.227 736H402.88C571.334 736 675.917 654.064 675.917 522.053V370.572H760.66C791.637 370.572 805.798 331.927 782.196 311.868ZM507.906 388.936V495.282C507.906 555.388 466.677 583.118 401.626 583.118H392.407C327.356 583.118 286.201 555.388 286.201 495.282V388.346C286.201 382.077 286.792 376.177 288.119 370.498C297.043 329.715 337.313 306.041 391.891 306.041H401.7C455.319 306.041 496.99 327.945 506.062 370.498C507.389 376.251 507.979 382.372 507.979 388.862L507.906 388.936Z" fill="#24C57A" fillOpacity="0.06"/>
                </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10 max-w-[1200px]">
                {/* Left Image */}
                <div className="w-full md:w-1/2 p-5 rounded-3xl relative overflow-hidden">
                    <Image
                        src="/services.png" // Update this path to the actual image path in the public folder
                        alt="Home Buyers"
                        layout="responsive"
                        width={620}
                        height={564}
                        className="rounded-3xl"
                    />
                    {/* Labels on Image */}
                    <div className="absolute top-5 left-5 bg-green-500 text-white text-sm px-3 py-1 rounded-lg">
                        +$390K
                    </div>
                    <div className="absolute top-10 right-5 bg-green-500 text-white text-sm px-3 py-1 rounded-lg">
                        +$402K
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold mb-6">About Mora Home Buyers</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        At Mora Home Buyers, we're dedicated to providing stress-free, hassle-free, and fair cash offer
                        solutions for homeowners. We believe in treating every seller with respect, empathy, and
                        professionalism. Saving sellers time and money on repairs and commissions - Helping you move
                        forward from difficult situations.
                    </p>
                    <p className="font-bold mb-2">Important Disclosure</p>
                    <p className="text-lg text-gray-700 mb-6">
                        For clarification on agency relationships, please contact your local real estate commission.
                    </p>
                    <button
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-[30px] bg-gradient-to-r from-[#24C57A] to-[#038839] text-white max-md:px-5">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutMoraHomeBuyers;
