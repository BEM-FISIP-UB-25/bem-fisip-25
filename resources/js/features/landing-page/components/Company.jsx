import bg from "../../../../assets/landingpage/comprof/bg.webp";
const Company = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full relative">
            <img
                src={bg}
                alt="bg"
                className="w-full z-0"
                loading="eager"
                fetchpriority="high"
                decoding="async"
            />

            <div className="w-full absolute top-0 h-[20vw] bg-[linear-gradient(to_bottom,rgba(249,242,236,1)_0%,rgba(248,240,233,1)_13%,rgba(251,248,244,0.8)_34%,rgba(251,248,244,0.6)_60%,rgba(247,237,228,0)_89%)]" />

            <div className="absolute top-[5%] flex flex-col gap-y-[5vw] w-full items-center h-full">
                <h1 className="monumentExtendedUltrabold text-[clamp(4vw,4vw,4vw)] bg-[#E37901] px-[2vw] text-white [-webkit-text-stroke:2px_#000] drop-shadow-md text-center w-fit flex">
                    COMPANY PROFILE
                </h1>

                <iframe className="w-[70vw] h-[40vw]" src="https://www.youtube.com/embed/K-t9sNSlwS0?si=TFGU0K7y9odV-XoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <p className="montserratBold text-[clamp(1.5vw,1.5vw,2vw)] text-black bg-[#FF9A27] p-[3vw] text-center w-[80vw] rounded-2xl">Company Profile merupakan sebuah sarana bagi sebuah organisasi dalam menuangkan branding serta grand design dari pihak internal BEM FISIP UB 2025 kepada pihak eksternal maupun Masyarakat FISIP UB. Pembuatan video Company Profile merupakan program kerja yang dilaksanakan oleh Biro Pusat Komunikasi dan Informasi guna memperkenalkan BPH/PI, Staf Ahli dan logo dari masing-masing instrumen yang diusung oleh Presiden dan Wakil Presiden BEM FISIP UB 2025.</p>

            </div>

        </div>
    )
}
export default Company