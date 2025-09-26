import React from 'react';
import bg from "../../../../assets/landingpage/comprof/bg.webp";
import yt from "../../../../assets/landingpage/comprof/yt.png"; 
import EntryAnimation from '@/shared/components/EntryAnimation'; 

const Company = () => {
    const youtubeLink = "https://youtu.be/K-t9sNSlwS0?si=k1WeaKShQW8aJe3Z";

    return (
        <div className="flex flex-col items-center justify-center w-full relative pt-10 pb-20 md:pt-20 md:pb-40 overflow-hidden">
            <img
                src={bg}
                alt="Latar belakang"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                loading="eager"
                fetchpriority="high"
                decoding="async"
            />

            <div className="w-full absolute top-0 h-[20vw] bg-[linear-gradient(to_bottom,rgba(249,242,236,1)_0%,rgba(248,240,233,1)_13%,rgba(251,248,244,0.8)_34%,rgba(251,248,244,0.6)_60%,rgba(247,237,228,0)_89%)]" />

            <div className="relative flex flex-col gap-y-8 md:gap-y-[5vw] w-full items-center">
                
                <EntryAnimation type="fade" duration={1.2}>
                    <h1 className="monumentExtendedUltrabold text-[clamp(2rem,4vw,4vw)] bg-[#E37901] px-6 py-2 md:px-[2vw] text-white [-webkit-text-stroke:2px_#000] drop-shadow-md text-center w-fit">
                        COMPANY PROFILE
                    </h1>
                </EntryAnimation>


                <EntryAnimation type="slide" direction="up" delay={0.2} duration={1.2}>
                    <a 
                        href={youtubeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center w-[90vw] md:w-[70vw] rounded-2xl overflow-hidden shadow-[0px_-5px_13px_10px_rgba(0,0,0,0.25)]"
                    >
                        <img
                            src="images/THUMBNAIL (1).webp"
                            alt="Company Profile Video Cover"
                            className="w-full h-auto"
                            loading="eager"
                            decoding="async"
                        />
                        <img 
                            src={yt} 
                            alt="Play YouTube Video" 
                            className="w-[10vw] max-w-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110" 
                            loading="eager" 
                            decoding="async" 
                        />
                    </a>
                </EntryAnimation>


                <EntryAnimation type="slide" direction="up" delay={0.4} duration={1.2}>
                    <p className="montserratBold text-[clamp(1rem,1.5vw,2vw)] text-black bg-[#FF9A27] p-8 md:p-[3vw] text-center w-[90vw] md:w-[80vw] rounded-2xl shadow-lg">
                        Company Profile merupakan sebuah sarana bagi sebuah organisasi dalam menuangkan branding serta grand design dari pihak internal BEM FISIP UB 2025 kepada pihak eksternal maupun Masyarakat FISIP UB. Pembuatan video Company Profile merupakan program kerja yang dilaksanakan oleh Biro Pusat Komunikasi dan Informasi guna memperkenalkan BPH/PI, Staf Ahli dan logo dari masing-masing instrumen yang diusung oleh Presiden dan Wakil Presiden BEM FISIP UB 2025.
                    </p>
                </EntryAnimation>

            </div>
        </div>
    );
};

export default Company;