import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

import shapes from "../../../assets/shapes.webp";
import eskalasi from "../../../../public/eskalasi.png";

const NavLink = ({ href, children, onClick }) => {
    const { url } = usePage();
    const isActive = href === "/" ? url === "/" : url.startsWith(href);
    const activeClasses = "bg-[#FFB76B] shadow-[0_0_12px_rgba(255,255,255,0.6)]";
    return (
        <li className={`rounded-full transition-all duration-300 ${isActive ? activeClasses : ""} hover:${activeClasses}`}>
            <Link href={href} onClick={onClick} className="block px-[1vw] py-2">
                {children}
            </Link>
        </li>
    );
};

const HamburgerButton = ({ isOpen, setIsOpen }) => {
    const lineClasses = "h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out";

    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 z-50"
        >
            <span
                className={`${lineClasses} absolute left-1/2 -translate-x-1/2 ${
                    isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1/4 -translate-y-3/4"
                }`}
            />
            <span
                className={`${lineClasses} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    isOpen ? "opacity-0" : ""
                }`}
            />
            <span
                className={`${lineClasses} absolute left-1/2 -translate-x-1/2 ${
                    isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "top-3/4"
                }`}
            />
        </button>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    const mobileNavItems = [
        { href: "/", label: "Beranda" },
        { href: "/profil", label: "Profil" },
        { href: "/struktur", label: "Struktur" },
        { href: "/lembaga", label: "Lembaga" },
        { href: "/artikel", label: "Artikel" },
        { href: "/informasi", label: "Informasi" },
        { href: "/layanan", label: "Layanan" },
    ];

    const menuVariants = {
        hidden: { opacity: 0, transition: { duration: 0.3 } },
        visible: { opacity: 1, transition: { duration: 0.3 } },
    };

    const listVariants = {
        hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    
    const NavbarHeaderContent = (
        <Link href="/" className="flex flex-row items-center gap-x-[1vw] z-20">
            <img src={eskalasi} alt="Eskalasi" className="w-[8vw] lg:w-14" />
            <div className="flex flex-col">
                <h1 className="monumentExtendedUltrabold text-[#23235F] text-[4vw] lg:text-[2.5vw]">
                    BEM FISIP UB 2025
                </h1>
                <h3 className="monumentExtendedRegular text-white text-[2vw] lg:text-[1.6vw] [-webkit-text-stroke:0.2px_#23235F] [text-shadow:1px_0_0_#23235F,-1px_0_0_#23235F,0_1px_0_#23235F,0_-1px_0_#23235F]">
                    KABINET ESKALASI MIMPI
                </h3>
            </div>
        </Link>
    );

    return (
        <>
            <nav className=" lg:h-[7vw] w-full bg-gradient-to-r from-[#FFEFE2] from-0% via-[#FFE2C5] via-7% to-[#FF9A27] to-59% flex items-center justify-between sm:rounded-b-3xl relative shadow-lg px-[2vw] z-40 overflow-hidden">
                <img src={shapes} alt="Shapes" className="absolute top-0 left-0 w-full h-full  -z-10" />
                
                {NavbarHeaderContent}

                <ul className="hidden lg:flex flex-row items-center gap-x-[1vw] text-white arialBlack text-[1vw] z-10">
                    <NavLink href="/">BERANDA</NavLink>
                    <NavLink href="/profil">PROFIL</NavLink>
                    <NavLink href="/struktur">STRUKTUR</NavLink>
                    <NavLink href="/lembaga">LEMBAGA</NavLink>
                    <NavLink href="/artikel">ARTIKEL</NavLink>
                    <NavLink href="/informasi">INFORMASI</NavLink>
                    <NavLink href="/layanan">LAYANAN</NavLink>
                </ul>

                <div className="lg:hidden">
                    <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex flex-col lg:hidden"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <header className=" w-full bg-gradient-to-r from-[#FFEFE2] from-0% via-[#FFE2C5] via-7% to-[#FF9A27] to-59% flex items-center justify-between relative shadow-lg px-[2vw]">
                             <img src={shapes} alt="Shapes" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                            {NavbarHeaderContent}
                            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                        </header>
                        
                        <motion.ul
                            className="flex flex-col w-full h-full overflow-y-auto"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            {mobileNavItems.map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    variants={itemVariants}
                                    className={`w-full text-center monumentExtendedRegular ${
                                        index % 2 === 0 ? "bg-[#FFB76B] text-[#23235F]" : "bg-[#23235F] text-white"
                                    }`}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full py-[2.5vw] text-[clamp(3vw,3vw,5vw)]"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;