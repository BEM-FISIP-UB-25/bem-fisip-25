import { motion } from 'framer-motion';
import ArticleCard from './components/ArticleCard';
import SearchBar from './components/SearchBar';
import Paginator from './components/Paginator';
import bgPattern from '../../../assets/landingpage/organisasi/bg.webp';

const BlogIndexPage = ({ posts, searchQuery, meta }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div 
            className="min-h-screen bg-white relative overflow-hidden"
            style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundRepeat: 'repeat-y',
                backgroundPosition: 'top center',
                backgroundSize: '100% auto',
            }}
        >

            <div className="relative z-10">
                <div className="text-center mt-[4vw] mb-[2vw]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="monumentExtendedUltrabold text-[#1d2466] text-[clamp(3.5vw,5vw,3vw)] tracking-tight"
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                    >
                        ARTIKEL
                    </motion.h1>
                </div>

                <div className="px-[2vw] md:px-[4vw] lg:px-[8vw]">
                    <SearchBar initialQuery={searchQuery || ''} />
                </div>

                <div className="px-[2vw] md:px-[4vw] lg:px-[8vw] pb-[8vw] md:pb-[12vw]">
                    {posts.data && posts.data.length > 0 ? (
                        <>
                            {searchQuery && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="mb-6 text-center"
                                >
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Menampilkan {posts.data.length} artikel untuk "{searchQuery}"
                                    </p>
                                </motion.div>
                            )}

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                            >
                                {posts.data.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        variants={itemVariants}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <ArticleCard 
                                            post={post} 
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <Paginator posts={posts} />
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-center py-16"
                        >
                            <div className="bg-orange-50 rounded-2xl p-8 max-w-md mx-auto">
                                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {searchQuery ? 'Tidak ada artikel ditemukan' : 'Belum ada artikel'}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {searchQuery 
                                        ? `Tidak ada artikel yang cocok dengan pencarian "${searchQuery}"`
                                        : 'Belum ada artikel yang dipublikasikan'
                                    }
                                </p>
                                {searchQuery && (
                                    <button
                                        onClick={() => window.location.href = '/artikel'}
                                        className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200"
                                    >
                                        Lihat Semua Artikel
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogIndexPage;
