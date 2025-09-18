import { motion } from "framer-motion";

const GridOrganizationPanel = ({ organizations, gridCols }) => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-[#FF9A27] rounded-[32px] py-[2vw] shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className={`grid ${gridCols} gap-[0vw] md:gap-[0vw]`}>
                    {organizations.map((organization, index) => (
                        <motion.div 
                            key={organization.id}
                            className="flex flex-col items-center justify-center space-y-[1vw] group"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.35, ease: "easeOut", delay: Math.min(index * 0.03, 0.2) }}
                        >
                            <div className="w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] lg:w-[16vw] lg:h-[16vw] relative transition-transform duration-300 group-hover:scale-110">
                                <img 
                                    src={organization.logo} 
                                    alt={`Logo ${organization.name}`}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default GridOrganizationPanel;