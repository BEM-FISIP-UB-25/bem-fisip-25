import SingleOrganizationPanel from "../components/SingleOrganizationPanel";
import GridOrganizationPanel from "../components/GridOrganizationPanel";
import { lembagaData } from "../data/lembagaData";
import bgPattern from "../../../../assets/landingpage/organisasi/bg.webp";
import { motion } from "framer-motion";

const LembagaContainer = () => {
    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundRepeat: "repeat-y",
                backgroundPosition: "top center",
                backgroundSize: "100% auto",
            }}
        >
            <div className="mx-[2vw] mt-[2vw] mb-[6vw]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=" mt-[6vw] inline-block bg-gradient-to-br from-orange-400 to-orange-500 rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] px-[6vw] py-[2vw] md:px-[6vw] md:py-[1vw] shadow-lg"
                >
                    <h1 className="monumentExtendedUltrabold text-white text-[clamp(3.5vw,5vw,3vw)] tracking-[0.2em]">
                        LEMBAGA
                    </h1>
                </motion.div>
            </div>

            <div className="px-[2vw] md:px-[4vw] lg:px-[8vw] space-y-[8vw] md:space-y-[5vw] pb-[8vw] md:pb-[12vw]">
                <motion.section
                    className="space-y-[0vw]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] tracking-tight text-center">
                        KONGRES MAHASISWA
                    </h2>
                    <SingleOrganizationPanel
                        organization={lembagaData.kongresMahasiswa}
                    />
                </motion.section>

                <motion.section
                    className="space-y-[0vw]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                >
                    <h2 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] tracking-tight text-center">
                        DPM
                    </h2>
                    <SingleOrganizationPanel organization={lembagaData.dpm} />
                </motion.section>

                <motion.section
                    className="space-y-[0vw]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <h2 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] tracking-tight text-center">
                        BADAN EKSEKUTIF MAHASISWA
                    </h2>
                    <SingleOrganizationPanel organization={lembagaData.bem} />
                </motion.section>

                <motion.section
                    className="space-y-[0vw]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                    <h2 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] tracking-tight text-center">
                        HMJ
                    </h2>
                    <GridOrganizationPanel
                        organizations={lembagaData.hmj}
                        gridCols="grid-cols-6"
                    />
                </motion.section>

                <motion.section
                    className="space-y-[4vw]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="monumentExtendedUltrabold text-[#23235F] text-[clamp(3vw,4vw,5vw)] tracking-tight text-center">
                        LKM LSO
                    </h2>
                    <GridOrganizationPanel
                        organizations={lembagaData.lkmLso1}
                        gridCols="grid-cols-4"
                    />
                    <GridOrganizationPanel
                        organizations={lembagaData.lkmLso2}
                        gridCols="grid-cols-4"
                    />
                    <GridOrganizationPanel
                        organizations={lembagaData.lkmLso3}
                        gridCols="grid-cols-4"
                    />
                    <GridOrganizationPanel
                        organizations={lembagaData.lkmLso4}
                        gridCols="grid-cols-4"
                    />
                </motion.section>
            </div>
        </div>
    );
};

export default LembagaContainer;
