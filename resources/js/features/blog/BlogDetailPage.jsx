import { motion } from "framer-motion";
import bgPattern from "../../../assets/landingpage/organisasi/bg.webp";
import { Link } from "@inertiajs/react";

const BlogDetailPage = ({ post, meta }) => {
    return (
        <div
            className="min-h-screen bg-white relative overflow-hidden"
            style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundRepeat: "repeat-y",
                backgroundPosition: "top center",
                backgroundSize: "100% auto",
            }}
        >
            <div className="relative z-10 mt-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute left-4 top-[-6vw] md:top-4 md:left-16 z-20"
                >
                    <Link
                        href="/artikel"
                        className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="font-medium">Kembali</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full aspect-video overflow-hidden p-[5vw] mt-12"
                >
                    <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover shadow-xl"
                        loading="eager"
                    />
                </motion.div>

                <div className="px-[2vw] md:px-[4vw] lg:px-[8vw]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                        className="text-center mb-8"
                    >
                        <h1 className="monumentExtendedUltrabold text-[#1d2466] md:text-[clamp(2.5vw,3.5vw,4vw)] tracking-tight leading-tight max-w-7xl mx-auto">
                            {post.title}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className="text-center mb-8"
                    >
                        <img
                            src="/images/divider.png"
                            alt="Divider"
                            className="mx-auto w-full h-8 md:h-36"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        className="max-w-6xl mx-auto mb-8"
                    >
                        <div className="bg-[#23235F] rounded-[24px] p-6 md:p-8 shadow-xl">
                            <h2 className="text-white monumentExtendedUltrabold tracking-[0.25em] text-lg md:text-4xl uppercase tracking-wide text-center mb-4">
                                ABSTRACT
                            </h2>
                            <div className="text-white leading-relaxed text-sm md:text-2xl max-w-none mb-6 text-justify">
                                <div
                                    className="prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: post.abstract,
                                    }}
                                />
                            </div>

                            {post.external_url && (
                                <div className="text-center">
                                    <a
                                        href={post.external_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#FF9A27] montserratBold text-sm md:text-lg text-black uppercase tracking-wide px-6 py-3 md:px-12 md:py-4 rounded-2xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full max-w-4xl mx-auto"
                                    >
                                        SELENGKAPNYA
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className="text-center mb-8"
                    >
                        <img
                            src="/images/divider.png"
                            alt="Divider"
                            className="mx-auto w-full h-8 md:h-36"
                        />
                    </motion.div>

                    {/* Breadcrumb */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        className="text-center mt-8"
                    >
                        <nav className="text-sm text-gray-600">
                            <a href="/artikel" className="hover:text-orange-600 transition-colors">
                                Artikel
                            </a>
                            <span className="mx-2">/</span>
                            <span className="text-gray-800 font-medium">
                                {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
                            </span>
                        </nav>
                    </motion.div> */}
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
