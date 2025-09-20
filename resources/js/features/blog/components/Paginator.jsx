import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const Paginator = ({ posts }) => {
    if (!posts || posts.last_page <= 1) return null;

    const { links, current_page, last_page } = posts;

    const getPageNumbers = () => {
        const pages = [];
        const start = Math.max(1, current_page - 2);
        const end = Math.min(last_page, current_page + 2);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex justify-center items-center space-x-2 mt-8"
        >
            {links.prev_page_url && (
                <Link
                    href={links.prev_page_url}
                    className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Prev</span>
                </Link>
            )}

            <div className="flex space-x-2">
                {getPageNumbers().map((page) => (
                    <Link
                        key={page}
                        href={`/artikel?page=${page}`}
                        className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                            page === current_page
                                ? 'bg-orange-500 text-white'
                                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                        }`}
                    >
                        {page}
                    </Link>
                ))}
            </div>

            {links.next_page_url && (
                <Link
                    href={links.next_page_url}
                    className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2"
                >
                    <span>Next</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            )}
        </motion.div>
    );
};

export default Paginator;
