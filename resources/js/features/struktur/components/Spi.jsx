import React from 'react';
import background from "../../../../assets/struktur/spi/bg.webp";
import bg from "../../../../assets/struktur/spi/bg.png";
import yasin from "../../../../assets/struktur/spi/yasin.webp";
import spi from "../../../../assets/struktur/spi/spi.png";
import setkab from "../../../../assets/struktur/spi/setkab.png";
import benkab from "../../../../assets/struktur/spi/benkab.png";
import pao from "../../../../assets/struktur/spi/pao.png";
import puskom from "../../../../assets/struktur/spi/puskom.png";

import { setkabData } from "../data/setkabData";
import { benkabData } from "../data/benkabData";
import { aparaturData } from "../data/aparaturData";
import { puskomData } from "../data/puskomData";

import StaffCard from './StaffCard';
import EntryAnimation from '@/shared/components/EntryAnimation'; 

const SpiDetails = () => {
    const rowSetkab1 = setkabData.slice(0, 2);
    const rowSetkab2 = setkabData.slice(2, 5);
    const rowSetkab3 = setkabData.slice(5, 8);
    const rowSetkab4 = setkabData.slice(8, 11);
    const rowSetkab5 = setkabData.slice(11, 13);

    const rowBenkab1 = benkabData.slice(0, 2);
    const rowBenkab2 = benkabData.slice(2, 5);
    const rowBenkab3 = benkabData.slice(5, 8);
    const rowBenkab4 = benkabData.slice(8, 9);

    const rowAparatur1 = aparaturData.slice(0, 2);
    const rowAparatur2 = aparaturData.slice(2, 5);
    const rowAparatur3 = aparaturData.slice(5, 8);
    const rowAparatur4 = aparaturData.slice(8, 11);
    const rowAparatur5 = aparaturData.slice(11, 14);
    const rowAparatur6 = aparaturData.slice(14, 16);

    const rowPuskom1 = puskomData.slice(0, 1);
    const rowPuskom2 = puskomData.slice(1, 4);
    const rowPuskom3 = puskomData.slice(4, 7);
    const rowPuskom4 = puskomData.slice(7, 10);
    const rowPuskom5 = puskomData.slice(10, 13);
    const rowPuskom6 = puskomData.slice(13, 16);
    const rowPuskom7 = puskomData.slice(16, 19);
    const rowPuskom8 = puskomData.slice(19, 20);

    return (
<div className=" w-full flex flex-col items-center relative bg-gradient-to-b from-[#23235F] from-42% to-[#4949C5] to-[71%] overflow-hidden z-0 pt-[3vw]">
            <div className=" z-10 flex flex-col absolute w-full">
                <img src={background} alt="background" className="w-full z-10" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
                <img src={bg} alt="background" className="w-full z-10 opacity-20" loading="lazy" decoding="async" />
            </div>


            <div className=" flex flex-col items-center w-full relative z-20 ">
                
                <EntryAnimation type="fade" duration={1}>
                    <div className="flex flex-col items-center justify-center gap-y-[2.5vw] md:gap-y-[1vw]  w-[90vw] md:w-[65vw]">
                        <img src={spi} alt="spi logo" className="w-[8vw]" />
                        <h1 className="monumentExtendedRegular text-[clamp(2vw,4vw,4vw)] md:text-[clamp(2vw,3vw,3vw)] text-center leading-tight text-white">
                            SATUAN PENGENDALI INTERNAL DAN INFORMASI
                        </h1>
                        <img src={yasin} alt="yasin" className="md:w-[25vw] w-[40vw]" />
                    </div>
                </EntryAnimation>

                {/* Bagian Setkab */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                           <h1 className="monumentExtendedRegular text-[clamp(1.5vw,2.5vw,3vw)] text-center leading-tight text-white">BIRO KESEKTARIATAN KABINET</h1>
                           <img src={setkab} alt="setkab logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowSetkab1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowSetkab2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowSetkab3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowSetkab4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowSetkab5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)]  gap-y-2">{["Bertanggung jawab atas pencerdasan administrasi terhadap fungsionaris BEM FISIP.","Mengelola dokumen dan surat menyurat internal maupun eksternal.","Merancang SOP kesekretariatan untuk berkoordinasi dengan pihak internal BEM dan juga lembaga FISIP UB.","Bertanggung jawab dalam setiap arsip administrasi kelembagaan.","Bertanggung jawab atas pencerdasan administrasi terhadap fungsionaris BEM FISIP."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">Bersinar</h3>
                                        <p>Melalui pendekatan yang edukatif dan praktis, biro ini menyelenggarakan pelatihan administrasi keuangan. Tujuannya adalah agar seluruh fungsionaris memahami alur administrasi, penyusunan proposal, laporan pertanggungjawaban (LPJ), dan surat-menyurat secara tepat dan sistematis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Benkab */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                         <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-center leading-tight text-white">BIRO KEBENDAHARAAN KABINET</h1>
                            <img src={benkab} alt="benkab logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowBenkab1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowBenkab2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowBenkab3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="up" delay={0.3} className="transform">{rowBenkab4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengelolaan administrasi keuangan berkoordinasi dengan Kasat.","Mengelola uang kas kabinet BEM FISIP UB.","Merancang SOP administrasi keuangan untuk berkoordinasi dengan pihak internal BEM dan juga lembaga FISIP UB.","Bertanggung jawab dalam setiap arsip administrasi keuangan kelembagaan."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">Bersinar</h3>
                                        <p>Melalui pendekatan yang edukatif dan praktis, biro ini menyelenggarakan pelatihan administrasi keuangan. Tujuannya adalah agar seluruh fungsionaris memahami alur administrasi, penyusunan proposal, laporan pertanggungjawaban (LPJ), dan surat-menyurat secara tepat dan sistematis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Aparatur */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(1.5vw,2.5vw,3vw)] text-start leading-tight text-white w-[70vw]">BIRO PEMBERDAYAAN APARATUR ORGANISASI</h1>
                            <img src={pao} alt="pao logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                     <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowAparatur1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowAparatur2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowAparatur3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowAparatur4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowAparatur5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.5} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowAparatur6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                     <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)]  gap-y-2">{["Menjaga stabilitas performa internal fungsional BEM dimulai BPI/BPH staf ahli dan staf magang berkoordinasi dengan kepala satuan agar sesuai dengan job desk nya masing-masing.","Membuat standarisasi fungsionaris BEM FISIP UB 2025.","Memastikan hubungan fungsionaris antar kementerian atau biro berjalan dengan baik.","Memiliki standar interpersonal fungsionaris dan dapat menangani konflik dan ketidakselarasan antar fungsionaris.","Berkoordinasi dengan kasat dalam kebijakan pengeluaran surat peringatan yang kewenangannya terdapat pada kepala satuan."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">Kaloria / Bereskalasi</h3>
                                        <p>Program kerja untuk pengembangan kapasitas internal fungsionaris BEM. Program-programnya diarahkan untuk meningkatkan profesionalisme, produktivitas, dan sinergi aparatur organisasi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>

                {/* Bagian Puskom */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(1.5vw,2.5vw,3vw)] text-start leading-tight text-white w-[65vw]">BIRO PUSAT KOMUNIKASI DAN INFORMASI</h1>
                            <img src={puskom} alt="puskom logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                     <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw] pb-20">
                        <EntryAnimation type="slide" direction="up" className="transform">{rowPuskom1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowPuskom2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowPuskom3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowPuskom4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowPuskom5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowPuskom6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.6} className="flex flex-row items-center justify-between w-full">{rowPuskom7.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="up" delay={0.7} className="transform">{rowPuskom8.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20 pb-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengelolaan teknologi dan Informasi dan berkoordinasi dengan Kasat.","Mengelola seluruh media publikasi dan informasi BEM FISIP UB 2025.","Bertanggung jawab dalam pengembangan platform media dan informasi BEM FISIP UB 2025.","Membangun citra dan meningkatkan employer branding lembaga dan fungsionaris BEM FISIP UB.","Merancang sistematika dan publikasi internal dan media partner BEM FISIP UB 2025."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5rem,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9rem,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">Company Profile</h3>
                                        <p>Biro ini bertugas menyusun dan mempublikasikan profil kelembagaan BEM FISIP UB. Informasi yang disampaikan meliputi visi-misi, program kerja, capaian, dan aktivitas organisasi guna membangun citra positif serta memberikan informasi kepada mahasiswa, civitas akademika, dan mitra eksternal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
            </div>
        </div>
    );
};

export default SpiDetails;