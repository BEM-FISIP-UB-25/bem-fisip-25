/**@typedef {import('../types.js').Struktur} Struktur */

/** @type {Struktur[]} */
//spi
import yasin from "../../../../assets/struktur/spi/yasin.webp";
import benkab from "../../../../assets/struktur/spi/benkab.png";
import setkab from "../../../../assets/struktur/spi/setkab.png";
import pao from "../../../../assets/struktur/spi/pao.png";
import puskom from "../../../../assets/struktur/spi/puskom.png";

//pengembangan
import ade from "../../../../assets/struktur/pengembangan/ade.webp";
import psdm from "../../../../assets/struktur/pengembangan/psdm.png";
import ekraf from "../../../../assets/struktur/pengembangan/ekraf.png";
import inoya from "../../../../assets/struktur/pengembangan/inoya.png";
import senora from "../../../../assets/struktur/pengembangan/senora.png";

//pelayanan
import jose from "../../../../assets/struktur/pelayanan/jose.webp";
import advokesma from "../../../../assets/struktur/pelayanan/advokesma.png";
import dagri from "../../../../assets/struktur/pelayanan/dagri.png";
import lugri from "../../../../assets/struktur/pelayanan/lugri.png";

//pergerakan
import arifin from "../../../../assets/struktur/pergerakan/arifin.webp";
import kastrat from "../../../../assets/struktur/pergerakan/kastrat.png";
import pug from "../../../../assets/struktur/pergerakan/pug.png";
import sosling from "../../../../assets/struktur/pergerakan/sosling.png";

export const strukturData = [
    {
        id: 1,
        name: "AHMAD YASIN",
        major: "Psikologi",
        image_profile: yasin,
        division: "SATUAN PENGENDALI INTERNAL DAN INFORMASI",
        image: [benkab, setkab, pao, puskom],
        link: "/struktur/spi", 
    },
    {
        id: 2,
        name: "ADE ZULKARNAIN",
        major: "Ilmu Politik",
        image_profile: ade,
        division: "KEMENKOAN PENGEMBANGAN POTENSI MAHASISWA",
        image: [psdm, ekraf, inoya, senora],
        link: "/struktur/pengembangan", 
    },
    {
        id: 3,
        name: "JOSE MARIO",
        major: "Ilmu Politik",
        image_profile: jose,
        division: "KEMENKOAN PELAYANAN DAN JARINGAN ORGANISASI",
        image: [advokesma, dagri, lugri],
        link: "/struktur/pelayanan", 
    },
    {
        id: 4,
        name: "ARIFIN ILHAM",
        major: "Ilmu Pemerintahan",
        image_profile: arifin,
        division: "KEMENKOAN GERAKAN DAN SOSIAL",
        image: [kastrat, pug, sosling],
        link: "/struktur/pergerakan", 
    },
];