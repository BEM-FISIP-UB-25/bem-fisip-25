import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

import shapes from "../../../assets/shapes.webp";
import eskalasi from "../../../../public/eskalasi.png";

const NavLink = ({ href, children, onClick }) => {
    const { url } = usePage();
    const isActive = href === "/" ? url === "/" : url.startsWith(href);

    const activeClasses =
        "bg-[#FFB76B] shadow-[0_0_12px_rgba(255,255,255,0.6)]";

    return (
        <li
            className={`
                rounded-full transition-all duration-300
                ${isActive ? activeClasses : ""}
                hover:${activeClasses}
            `}
        >
            <Link href={href} onClick={onClick} className="block px-[1vw] py-2">
                {children}
            </Link>
        </li>
    );
};

const HamburgerButton = ({ isOpen, setIsOpen }) => {
    const genericHamburgerLine = `h-1 w-6 my-[0.5vw] rounded-full bg-white transition ease transform duration-300`;

    return (
        <button
            className="flex flex-col  justify-center items-center group z-50 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-3 opacity-100"
                        : "opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-3 opacity-100"
                        : "opacity-100"
                }`}
            />
        </button>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
        exit: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
    };

    return (
        <nav className=" py-[2vw] lg:h-[7vw] w-full  bg-gradient-to-r from-[#FFEFE2] from-0% via-[#FFE2C5] via-7% to-[#FF9A27] to-59% flex items-center justify-between  sm:rounded-b-3xl relative shadow-lg px-[2vw] overflow-hidden z-30 absolute">
            <img
                src={shapes}
                alt="Shapes"
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* Logo dan Judul (Link ke Beranda) */}
            <Link
                href="/"
                className="flex flex-row items-center gap-x-[1vw] z-20"
            >
                <img
                    src={eskalasi}
                    alt="Eskalasi"
                    className="w-[8vw] md:w-14"
                />
                <div className="flex flex-col">
                    <h1 className="monumentExtendedUltrabold text-[#23235F] text-[5vw] sm:text-3xl lg:text-[2.5vw] ">
                        BEM FISIP UB 2025
                    </h1>
                    <h3
                        className="
    monumentExtendedRegular text-white
    text-[3vw] sm:text-lg lg:text-[1.6vw]
    [-webkit-text-stroke:0.2px_#23235F]       /* stroke tipis (WebKit) */
    [text-shadow:1px_0_0_#23235F,-1px_0_0_#23235F,0_1px_0_#23235F,0_-1px_0_#23235F] /* fallback */
  "
                    >
                        KABINET ESKALASI MIMPI
                    </h3>
                </div>
            </Link>

            {/* Menu Desktop (Hilang di layar kecil) */}
            <ul className="hidden lg:flex flex-row items-center gap-x-[1vw] text-white arialBlack text-[1vw] z-10">
                <NavLink href="/">BERANDA</NavLink>
                <NavLink href="/profil">PROFIL</NavLink>
                <NavLink href="/struktur">STRUKTUR</NavLink>
                <NavLink href="/lembaga">LEMBAGA</NavLink>
                <NavLink href="/artikel">ARTIKEL</NavLink>
                <NavLink href="/informasi">INFORMASI</NavLink>
                <NavLink href="/layanan">LAYANAN</NavLink>
            </ul>

            {/* Tombol Hamburger (Hanya muncul di layar kecil) */}
            <div className="lg:hidden">
                <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Menu Mobile / Drawer (Muncul dari kiri) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full w-3/4 max-w-sm bg-[#23235F] p-8"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-white text-2xl monumentExtendedUltrabold">
                                    MENU
                                </h2>
                                {/* Tombol tutup menggunakan SVG agar lebih jelas */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className="flex flex-col gap-y-6 arialBlack text-lg">
                                {/* Menambahkan onClick untuk menutup menu setelah link diklik */}
                                <NavLink
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                >
                                    BERANDA
                                </NavLink>
                                <NavLink
                                    href="/profil"
                                    onClick={() => setIsOpen(false)}
                                >
                                    PROFIL
                                </NavLink>
                                <NavLink
                                    href="/struktur"
                                    onClick={() => setIsOpen(false)}
                                >
                                    STRUKTUR
                                </NavLink>
                                <NavLink
                                    href="/lembaga"
                                    onClick={() => setIsOpen(false)}
                                >
                                    LEMBAGA
                                </NavLink>
                                <NavLink
                                    href="/artikel"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ARTIKEL
                                </NavLink>
                                <NavLink
                                    href="/informasi"
                                    onClick={() => setIsOpen(false)}
                                >
                                    INFORMASI
                                </NavLink>
                                <NavLink
                                    href="/layanan"
                                    onClick={() => setIsOpen(false)}
                                >
                                    LAYANAN
                                </NavLink>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
