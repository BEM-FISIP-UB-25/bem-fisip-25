import React from 'react';
import background from "../../../../assets/struktur/spi/bg.webp";
import bg from "../../../../assets/struktur/spi/bg.png";

import ade from "../../../../assets/struktur/pengembangan/ade.webp";
import pengembangan from "../../../../assets/struktur/pengembangan/pengembangan.png";
import psdm from "../../../../assets/struktur/pengembangan/psdm.png";
import ekraf from "../../../../assets/struktur/pengembangan/ekraf.png";
import senora from "../../../../assets/struktur/pengembangan/senora.png";
import inoya from "../../../../assets/struktur/pengembangan/inoya.png";

import { psdmData } from "../data/psdmData";
import { ekrafData } from "../data/ekrafData";
import { inoyaData } from "../data/inoyaData";
import { senoraData } from "../data/senoraData";

import StaffCard from './StaffCard';
import EntryAnimation from '@/shared/components/EntryAnimation'; 

const PengembanganDetails = () => {
    const rowPsdm1 = psdmData.slice(0, 2);
    const rowPsdm2 = psdmData.slice(2, 5);
    const rowPsdm3 = psdmData.slice(5, 8);
    const rowPsdm4 = psdmData.slice(8, 11);
    const rowPsdm5 = psdmData.slice(11, 14);

    const rowEkraf1 = ekrafData.slice(0, 2);
    const rowEkraf2 = ekrafData.slice(2, 5);
    const rowEkraf3 = ekrafData.slice(5, 8);
    const rowEkraf4 = ekrafData.slice(8, 11);
    const rowEkraf5 = ekrafData.slice(11, 14);
    const rowEkraf6 = ekrafData.slice(14, 15);

    const rowInoya1 = inoyaData.slice(0, 2);
    const rowInoya2 = inoyaData.slice(2, 5);
    const rowInoya3 = inoyaData.slice(5, 8);
    const rowInoya4 = inoyaData.slice(8, 11);
    const rowInoya5 = inoyaData.slice(11, 14);
    const rowInoya6 = inoyaData.slice(14, 17);
    
    const rowSenora1 = senoraData.slice(0, 1);
    const rowSenora2 = senoraData.slice(1, 3);
    const rowSenora3 = senoraData.slice(3, 6);
    const rowSenora4 = senoraData.slice(6, 9);
    const rowSenora5 = senoraData.slice(9, 12);
    const rowSenora6 = senoraData.slice(12, 15);
    const rowSenora7 = senoraData.slice(15, 18);
    const rowSenora8 = senoraData.slice(18, 21);

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
                        <img src={pengembangan} alt="pengembangan logo" className="w-[8vw]" />
                        <h1 className="monumentExtendedRegular text-[clamp(2vw,4vw,4vw)] md:text-[clamp(2vw,3vw,3vw)] text-center leading-tight text-white">
                            KEMENKOAN PENGEMBANGAN POTENSI MAHASISWA
                        </h1>
                        <img src={ade} alt="ade" className="md:w-[25vw] w-[40vw]" />
                    </div>
                </EntryAnimation>

                {/* Bagian PSDM */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                           <h1 className="monumentExtendedRegular text-[clamp(1.5vw,2.5vw,3vw)] text-start leading-tight text-white w-[71vw]">KEMENTERIAN PENGEMBANGAN SUMBER DAYA MAHASISWA</h1>
                           <img src={psdm} alt="psdm logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowPsdm1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowPsdm2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowPsdm3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowPsdm4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowPsdm5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengembangan mahasiswa dan berkoordinasi dengan menko Pengembangan.","Mewadahi pelatihan mahasiswa yang relevan dan berbasis dengan kebutuhan mahasiswa di era 5.0.","Mewadahi kebutuhan mahasiswa dalam pengembangan soft skills dan hard skill yang linear dengan 21st century skills yang dapat menunjang karier mahasiswa.","Mendorong pelatihan kepemimpinan mahasiswa dalam bentuk forum diskusi untuk regenerasi kepengurusan ormawa di FISIP.","Menjalin kemitraan dengan berbagai institusi, perusahaan, atau lembaga pemerintah untuk memberikan peluang internship bagi mahasiswa.","Membuat pedoman kaderisasi dan pengembangan ormawa di lingkup FISIP."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">Jingga Local Internship</h3>
                                        <p>Program fasilitasi magang mahasiswa melalui kerja sama antara BEM FISIP UB dan mitra eksternal untuk mendukung pengembangan keterampilan dan jaringan profesional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Ekraf */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                         <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-center leading-tight text-white">KEMENTERIAN EKONOMI KREATIF</h1>
                            <img src={ekraf} alt="ekraf logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowEkraf1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowEkraf2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowEkraf3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowEkraf4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowEkraf5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="up" delay={0.5} className="transform">{rowEkraf6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengembangan ekonomi kreatif mahasiswa dan berkoordinasi dengan menko pengembangan.","Membantu mahasiswa memahami dasar-dasar kewirausahaan dan mengembangkan pola pikir bisnis berbasis kreativitas.","Mewadahi bagi mahasiswa untuk mengembangkan ide-ide kreatif yang dapat diimplementasikan menjadi produk atau layanan.","Membuka akses jejaring dengan pelaku industri kreatif, komunitas bisnis di kalangan mahasiswa.","Menjaring kewirausahaan mahasiswa FISIP dan mengelola pemberdayaan kewirausahaan mahasiswa."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">FISIP Market</h3>
                                        <p>Wadah bagi mahasiswa untuk memasarkan produk, mengembangkan usaha, dan melatih jiwa kewirausahaan dalam lingkungan kampus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Inoya */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-start leading-tight text-white w-[70vw]">KEMENTERIAN INOVASI DAN KARYA</h1>
                            <img src={inoya} alt="inoya logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                     <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="left" className="flex flex-row gap-x-[8vw] items-center justify-center">{rowInoya1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.1} className="flex flex-row items-center justify-between w-full">{rowInoya2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowInoya3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowInoya4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowInoya5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowInoya6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                     <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengembangan inovasi dan karya mahasiswa dan berkoordinasi dengan menko pengembangan.","Mendorong mahasiswa untuk aktif dalam kegiatan penelitian melalui kolaborasi dengan dosen, lembaga penelitian, atau komunitas ilmiah.","Membantu mahasiswa dalam mengakses dana penelitian atau kompetisi mahasiswa.","Mewadahi akademik mahasiswa tiap jurusan untuk mengakses dalam 1 file dan memudahkan mahasiswa dalam menempuh pengembangan akademiknya.","Mendukung mahasiswa dalam menghasilkan inovasi karya melalui kerjasama yang dibangun."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">EUNOIA</h3>
                                        <p>Kompetisi berskala internasional yang dilaksanakan secara hybrid (daring untuk babak penyisihan dan luring untuk final serta awarding).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>

                 {/* Bagian Senora */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-start leading-tight text-white w-[65vw]">KEMENTERIAN SENI DAN OLAHRAGA</h1>
                            <img src={senora} alt="senora logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                     <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="up" className="transform">{rowSenora1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.1} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowSenora2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowSenora3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowSenora4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowSenora5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowSenora6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.6} className="flex flex-row items-center justify-between w-full">{rowSenora7.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.7} className="flex flex-row items-center justify-between w-full">{rowSenora8.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                     <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-[2vw] pb-[2vw]">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada pengembangan minat bakat mahasiswa dan berkoordinasi dengan menko pengembangan.","Mewadahi mahasiswa untuk mengembangkan minat dan bakat dalam aspek olahraga, pageant, dan supporter di lingkup FISIP.","Mewadahi potensi bakat mahasiswa baru FISIP dalam aspek seni dan olahraga.","Memfasilitasi mahasiswa untuk mengeksplorasi bakat dan minat di bidang seni dan olahraga.","Memperkenalkan pemahaman budaya di Jawa Timur dalam sebuah pagelaran dan konsep kegiatan lainnya."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">Adhipati dan KJM Cup</h3>
                                        <p>Kompetisi dan ajang pengembangan minat dan bakat dalam bidang seni dan olahraga di kalangan mahasiswa FISIP UB.</p>
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

export default PengembanganDetails;