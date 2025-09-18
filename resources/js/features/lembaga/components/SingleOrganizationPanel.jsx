import { motion } from "framer-motion";

const SingleOrganizationPanel = ({ organization }) => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-[#FF9A27] rounded-[32px] p-[4vw] md:p-[1vw] shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className="flex flex-col items-center justify-center space-y-[2vw]">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                        className="w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] relative"
                    >
                        <img 
                            src={organization.logo} 
                            alt={`Logo ${organization.name}`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleOrganizationPanel;