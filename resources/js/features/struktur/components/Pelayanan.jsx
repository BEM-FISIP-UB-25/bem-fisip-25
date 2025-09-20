import React from 'react';
import background from "../../../../assets/struktur/spi/bg.webp";
import bg from "../../../../assets/struktur/spi/bg.png";
import jose from "../../../../assets/struktur/pelayanan/jose.webp";
import pelayanan from "../../../../assets/struktur/pelayanan/pelayanan.png";
import advokesma from "../../../../assets/struktur/pelayanan/advokesma.png";
import dagri from "../../../../assets/struktur/pelayanan/dagri.png";
import lugri from "../../../../assets/struktur/pelayanan/lugri.png";

import { advokesmaData } from "../data/advokesmaData";
import { dagriData } from "../data/dagriData";
import { lugriData } from "../data/lugriData";

import StaffCard from './StaffCard';
import EntryAnimation from '@/shared/components/EntryAnimation';

const PelayananDetails = () => {
    const rowAdvokesma1 = advokesmaData.slice(0, 1);
    const rowAdvokesma2 = advokesmaData.slice(1, 3);
    const rowAdvokesma3 = advokesmaData.slice(3, 6);
    const rowAdvokesma4 = advokesmaData.slice(6, 9);
    const rowAdvokesma5 = advokesmaData.slice(9, 12);
    const rowAdvokesma6 = advokesmaData.slice(12, 15);
    const rowAdvokesma7 = advokesmaData.slice(15, 17);

    const rowDagri1 = dagriData.slice(0, 2);
    const rowDagri2 = dagriData.slice(2, 5);
    const rowDagri3 = dagriData.slice(5, 8);
    const rowDagri4 = dagriData.slice(8, 11);
    const rowDagri5 = dagriData.slice(11, 14);

    const rowLugri1 = lugriData.slice(0, 2);
    const rowLugri2 = lugriData.slice(2, 5);
    const rowLugri3 = lugriData.slice(5, 8);
    const rowLugri4 = lugriData.slice(8, 11);
    const rowLugri5 = lugriData.slice(11, 14);
    const rowLugri6 = lugriData.slice(14, 17);
    const rowLugri7 = lugriData.slice(17, 18);

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
                        <img src={pelayanan} alt="pelayanan logo" className="w-[8vw]" />
                        <h1 className="monumentExtendedRegular text-[clamp(2vw,4vw,4vw)] md:text-[clamp(2vw,3vw,3vw)] text-center leading-tight text-white">
                            KEMENKOAN PELAYANAN DAN JARINGAN ORGANISASI
                        </h1>
                        <img src={jose} alt="jose" className="md:w-[25vw] w-[40vw]" />
                    </div>
                </EntryAnimation>

                {/* Bagian Advokesma */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                           <h1 className="monumentExtendedRegular text-[clamp(1.5vw,2.5vw,3vw)] text-start leading-tight text-white w-[71vw]">KEMENTERIAN ADVOKASI <br /> DAN KESEJAHTERAAN MAHASISWA</h1>
                           <img src={advokesma} alt="advokesma logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="up" className="transform">{rowAdvokesma1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.1} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowAdvokesma2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowAdvokesma3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowAdvokesma4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowAdvokesma5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowAdvokesma6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.6} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowAdvokesma7.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengadvokasian dan kesejahteraan mahasiswa berkoordinasi dengan Menko Pelayanan dan Jaringan Organisasi.","Bertanggung jawab dalam mentabulasi dan mengatasi isu permasalahan mahasiswa.","Bekerja sama dengan badan konseling mahasiswa untuk mensejahterakan mahasiswa FISIP.","Memberikan akses informasi beasiswa kepada mahasiswa FISIP.","Menjadi penghubung antara mahasiswa dan pihak dekanat untuk memastikan komunikasi yang efektif."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">SCHOLARIA</h3>
                                        <p>Program Scholarship Exploria yang dikemas dalam bentuk talkshow/seminar nasional, expo beasiswa, serta bilik konsultasi CV. Menyasar mahasiswa dan siswa dari seluruh Indonesia untuk meningkatkan akses terhadap peluang pendidikan dan pengembangan diri.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Dagri */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                         <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-center leading-tight text-white">KEMENTERIAN DALAM NEGERI</h1>
                            <img src={dagri} alt="dagri logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowDagri1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowDagri2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowDagri3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowDagri4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowDagri5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada interkonektivitas LKM/Komunitas berkoordinasi dengan Menko Pelayanan dan Jaringan Organisasi.","Menyediakan wadah komunikasi bagi LKM dan komunitas dengan pihak dekanat.","Menjaring isu permasalahan dalam lingkup LKM dan komunitas.","Berperan melayani kebutuhan dan memberikan apresiasi kepada LKM dan komunitas.","Memberikan wadah memperkenalkan LKM dan komunitas FISIP UB."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">LEXTION (LKM/Komunitas Exhibition)</h3>
                                        <p>Program pengenalan Lembaga Kemahasiswaan (LKM) dan komunitas FISIP UB kepada mahasiswa baru melalui bazar interaktif. Setiap LKM diberi kesempatan menampilkan stand kreatif sebagai sarana promosi dan interaksi langsung.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Lugri */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-center leading-tight text-white">KEMENTERIAN LUAR NEGERI</h1>
                            <img src={lugri} alt="lugri logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                     <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowLugri1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowLugri2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowLugri3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowLugri4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowLugri5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowLugri6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="up" delay={0.6} className="transform">{rowLugri7.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                     <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw] pb-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,2.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada konektivitas eksternal berkoordinasi dengan Menko Pelayanan dan Jaringan Organisasi.","Membangun hubungan yang baik dengan pihak eksternal BEM FISIP UB.","Mengkaji isu-isu internasional dan dimasifikasi melalui media publikasi.","Membuat wadah pengenalan FISIP UB untuk pelajar SMA di Jawa Timur.","Membangun relasi internasional bagi mahasiswa FISIP UB dan Lembaga BEM FISIP."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">JTH (Jingga Tour Hub)</h3>
                                        <p>Program studi ekskursi ke universitas dan instansi ternama di lingkup internasional untuk memperluas wawasan akademik dan non-akademik mahasiswa, sekaligus sebagai ajang relasi dan rekreasi.</p>
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

export default PelayananDetails;