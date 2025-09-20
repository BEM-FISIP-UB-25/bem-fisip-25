import { useState, useCallback, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { useDebounce } from 'use-debounce';
import { motion } from 'framer-motion';

const SearchBar = ({ initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery || '');
    const [debouncedQuery] = useDebounce(query, 400);

    const handleSearch = useCallback(() => {
        if (debouncedQuery && debouncedQuery.trim()) {
            router.get('/artikel', { q: debouncedQuery }, {
                preserveState: true,
                replace: true,
            });
        } else {
            router.get('/artikel', {}, {
                preserveState: true,
                replace: true,
            });
        }
    }, [debouncedQuery]);

    useEffect(() => {
        handleSearch();
    }, [debouncedQuery, handleSearch]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClear = () => {
        setQuery('');
        router.get('/artikel', {}, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative max-w-md mx-auto mb-8"
        >
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                        className="h-5 w-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search"
                    className="w-full pl-12 pr-12 py-3 bg-[#FF9A27] rounded-full font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-orange-100 transition-all duration-200"
                />
                {query && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default SearchBar;
