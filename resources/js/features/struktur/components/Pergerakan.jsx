import React from 'react';
import background from "../../../../assets/struktur/spi/bg.webp";
import bg from "../../../../assets/struktur/spi/bg.png";
import arifin from "../../../../assets/struktur/pergerakan/arifin.webp";
import pergerakan from "../../../../assets/struktur/pergerakan/pergerakan.png";
import kastrat from "../../../../assets/struktur/pergerakan/kastrat.png";
import pug from "../../../../assets/struktur/pergerakan/pug.png";
import sosling from "../../../../assets/struktur/pergerakan/sosling.png";

import { kajianData } from "../data/kajianData";
import { genderData } from "../data/genderData";
import { soslingData } from "../data/soslingData";

import StaffCard from './StaffCard';
import EntryAnimation from '@/shared/components/EntryAnimation';

const PergerakanDetails = () => {
    const rowKajian1 = kajianData.slice(0, 1);
    const rowKajian2 = kajianData.slice(1, 3);
    const rowKajian3 = kajianData.slice(3, 6);
    const rowKajian4 = kajianData.slice(6, 9);
    const rowKajian5 = kajianData.slice(9, 12);
    const rowKajian6 = kajianData.slice(12, 15);
    const rowKajian7 = kajianData.slice(15, 18);
    const rowKajian8 = kajianData.slice(18, 19);

    const rowGender1 = genderData.slice(0, 2);
    const rowGender2 = genderData.slice(2, 5);
    const rowGender3 = genderData.slice(5, 8);
    const rowGender4 = genderData.slice(8, 11);
    const rowGender5 = genderData.slice(11, 14);
    const rowGender6 = genderData.slice(14, 16);

    const rowSosling1 = soslingData.slice(0, 1);
    const rowSosling2 = soslingData.slice(1, 3);
    const rowSosling3 = soslingData.slice(3, 6);
    const rowSosling4 = soslingData.slice(6, 9);
    const rowSosling5 = soslingData.slice(9, 12);
    const rowSosling6 = soslingData.slice(12, 15);
    const rowSosling7 = soslingData.slice(15, 17);

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
            </div>


            <div className=" flex flex-col items-center w-full relative z-20 ">
                
                <EntryAnimation type="fade" duration={1}>
                    <div className="flex flex-col items-center justify-center gap-y-[2.5vw] md:gap-y-[1vw]  w-[90vw] md:w-[65vw]">
                        <img src={pergerakan} alt="logo pergerakan" className="w-[8vw]" />
                        <h1 className="monumentExtendedRegular text-[clamp(2vw,4vw,4vw)] md:text-[clamp(2vw,3vw,3vw)] text-center leading-tight text-white">
                            KEMENKOAN GERAKAN DAN SOSIAL
                        </h1>
                        <img src={arifin} alt="arifin" className="md:w-[25vw] w-[40vw]" />
                    </div>
                </EntryAnimation>

                {/* Bagian Kajian (Kastrat) */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                           <h1 className="monumentExtendedRegular text-[clamp(1.5vw,2.5vw,3vw)] text-start leading-tight text-white w-[71vw]">KEMENTERIAN KAJIAN DAN AKSI STRATEGIS</h1>
                           <img src={kastrat} alt="kastrat logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="up" className="transform">{rowKajian1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.1} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowKajian2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowKajian3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowKajian4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowKajian5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowKajian6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.6} className="flex flex-row items-center justify-between w-full">{rowKajian7.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="up" delay={0.7} className="transform">{rowKajian8.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada isu strategis pergerakan mahasiswa dan berkoordinasi dengan Menko Gerakan dan Sosial.","Mengkaji data, fakta, dan perspektif kritis permasalahan isu sosial politik dalam lingkup kampus, daerah, dan nasional.","Berfokus meningkatkan awareness mahasiswa FISIP dalam aspek pemahaman dan pergerakan dalam isu sosial politik.","Memastikan bahwa aksi dilakukan secara strategis, terencana, dan sesuai dengan prinsip-prinsip etika.","Merumuskan strategi advokasi yang baik berdasarkan hasil kajian."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">SAPARJI (Sekolah Pergerakan Jingga)</h3>
                                        <p>Program ini menjadi wadah regenerasi pergerakan dan pendidikan advokasi sosial-politik. SAPARJI berbentuk komunitas dan kelas diskusi yang membangun kesadaran kritis mahasiswa terhadap isu-isu nasional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>

                {/* Bagian PUG */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                         <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] leading-tight text-white w-[70vw]">KEMENTERIAN PENGARUSUTAMAAN GENDER</h1>
                            <img src={pug} alt="pug logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
<EntryAnimation 
    type="slide" 
    direction="left" 
    className="flex flex-row gap-x-[8vw] items-center justify-center"
>
    {rowGender1.map(staff => <StaffCard key={staff.id} {...staff} />)}
</EntryAnimation>

<EntryAnimation 
    type="slide" 
    direction="right" 
    delay={0.1} 
    className="flex flex-row items-center justify-between w-full"
>
    {rowGender2.map(staff => <StaffCard key={staff.id} {...staff} />)}
</EntryAnimation>

<EntryAnimation 
    type="slide" 
    direction="left" 
    delay={0.2} 
    className="flex flex-row items-center justify-between w-full"
>
    {rowGender3.map(staff => <StaffCard key={staff.id} {...staff} />)}
</EntryAnimation>

<EntryAnimation 
    type="slide" 
    direction="right" 
    delay={0.3} 
    className="flex flex-row items-center justify-between w-full"
>
    {rowGender4.map(staff => <StaffCard key={staff.id} {...staff} />)}
</EntryAnimation>

<EntryAnimation 
    type="slide" 
    direction="left" 
    delay={0.4} 
    className="flex flex-row items-center justify-between w-full"
>
    {rowGender5.map(staff => <StaffCard key={staff.id} {...staff} />)}
</EntryAnimation>

<EntryAnimation 
    type="slide" 
    direction="right" 
    delay={0.5} 
    className="flex flex-row gap-x-[8vw] items-center justify-center"
>
    {rowGender6.map(staff => <StaffCard key={staff.id} {...staff} />)}
</EntryAnimation>
                    </div>
                     <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada isu pergerakan mahasiswa dan berkoordinasi dengan Menko Gerakan dan Sosial.","Mengintegrasikan prinsip kesetaraan gender dalam kebijakan, program, dan kegiatan organisasi mahasiswa.","Mewadahi ruang diskusi untuk meningkatkan pemahaman tentang isu gender bagi mahasiswa.","Menyediakan layanan atau mekanisme pengaduan untuk mendukung korban kekerasan, seperti konseling atau pendampingan.","Berkolaborasi dengan lembaga terkait untuk menangani kasus kekerasan berbasis gender secara profesional dan berintegritas."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">16HAKTP: Kampanye "16 Hari Anti Kekerasan Terhadap Pevwpuan"</h3>
                                        <p>Bertujuan untuk meningkatkan kesadaran dan mendorong penghapusan kekerasan terhadap pevwpuan melalui berbagai aksi dan kegiatan edukatif.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EntryAnimation>
                </div>
                
                {/* Bagian Sosling */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full px-[2vw] flex flex-col items-center gap-y-[3vw] mt-[3vw]">
                        <EntryAnimation type="slide" direction="up" className="flex flex-row items-center justify-between w-full max-w-7xl">
                            <h1 className="monumentExtendedRegular text-[clamp(2vw,2.5vw,3vw)] text-start leading-tight text-white w-[70vw]">KEMENTERIAN SOSIAL DAN LINGKUNGAN</h1>
                            <img src={sosling} alt="sosling logo" className="w-[10vw]" />
                        </EntryAnimation>
                    </div>
                     <div className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pt-[2vw]">
                        <EntryAnimation type="slide" direction="up" className="transform">{rowSosling1.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.1} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowSosling2.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.2} className="flex flex-row items-center justify-between w-full">{rowSosling3.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.3} className="flex flex-row items-center justify-between w-full">{rowSosling4.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.4} className="flex flex-row items-center justify-between w-full">{rowSosling5.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="left" delay={0.5} className="flex flex-row items-center justify-between w-full">{rowSosling6.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                        <EntryAnimation type="slide" direction="right" delay={0.6} className="flex flex-row gap-x-[8vw] items-center justify-center">{rowSosling7.map(staff => <StaffCard key={staff.id} {...staff} />)}</EntryAnimation>
                    </div>
                    <EntryAnimation type="slide" direction="up" delay={0.2} amount={0.1}>
                        <div className="w-full flex flex-col items-center px-[2vw] mt-20 pb-20">
                            <div className="bg-[#FF9A27] w-full max-w-7xl p-[1.5vw] flex items-center justify-center rounded-2xl z-10 shadow-lg">
                                <h2 className="monumentExtendedRegular text-[clamp(1.5vw,3.5vw,3.5vw)] text-center leading-tight text-[#23235F]">PROGRAM KERJA & ARAH STRATEGIS</h2>
                            </div>
                            <div className="w-full max-w-7xl flex flex-col text-[#23235F] montserratBold gap-y-[3vw] justify-end p-6 md:p-[2.5vw] bg-white pt-16 md:pt-[5vw] mt-[-3.5vw] sm:mt-[-3vw] rounded-b-2xl z-0">
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">ARAH STRATEGIS</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)]  gap-y-2">{["Berfokus pada isu pergerakan mahasiswa dan berkoordinasi dengan Menko Gerakan dan Sosial.","Meningkatkan kesadaran mahasiswa tentang isu-isu sosial yang ada di masyarakat, seperti kemiskinan, ketidakadilan sosial, pengangguran, dan pendidikan.","Mengorganisir kegiatan sosial seperti bakti sosial, donor darah, penggalangan dana untuk korban bencana, dan pemberian bantuan untuk masyarakat yang membutuhkan.","Berkolaborasi dengan desa binaan untuk mengadakan program pemberdayaan masyarakat, terutama di daerah-daerah yang membutuhkan bantuan.","Mengorganisir kegiatan yang mendukung pelestarian lingkungan, seperti penanaman pohon, aksi bersih-bersih lingkungan, daur ulang, atau pengurangan sampah plastik."].map((d, i) => (<div key={i} className="flex flex-row items-start gap-x-[1.5vw]"><h3 className="font-bold">{i + 1}.</h3><p>{d}</p></div>))}</div>
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw]">
                                    <h2 className="text-[clamp(1.5vw,2.5vw,2.5vw)]">PROGRAM KERJA</h2>
                                    <div className="flex flex-col text-black text-[clamp(0.9vw,1.5vw,1.5vw)] ">
                                        <h3 className="italic font-bold">SIDARLING (FISIP Sadar Lingkungan)</h3>
                                        <p>Kampanye kesadaran lingkungan di lingkungan kampus, dilakukan melalui media sosial maupun aksi langsung.</p>
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

export default PergerakanDetails;