import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const ArticleCard = ({ post, variant = 'default' }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.02, y: -2 }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group cursor-pointer h-full"
        >
            <Link href={`/artikel/${post.slug}`} className="block h-full">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-[24px] p-4 md:p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="mb-4 flex-shrink-0">
                        <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden">
                            <img
                                src={post.image_url}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="text-center flex-grow flex items-center justify-center">
                        <h3 className="text-white monumentExtendedUltrabold text-sm md:text-base uppercase tracking-wide line-clamp-3">
                            {post.title}
                        </h3>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ArticleCard;