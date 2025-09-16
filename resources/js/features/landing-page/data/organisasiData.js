   /** @typedef {import('../types.js').Organisasi} Organisasi */
    import inovasi from "../../../../assets/landingpage/organisasi/inovasi.webp"
    import motivasi from "../../../../assets/landingpage/organisasi/motivasi.webp"
    import management from "../../../../assets/landingpage/organisasi/management.webp"
    import perjuangan from "../../../../assets/landingpage/organisasi/perjuangan.webp"
    import integritas from "../../../../assets/landingpage/organisasi/integritas.webp"
   
   /**
 * Sebuah array yang berisi objek-objek Organisasi.
 * Editor kode Anda sekarang tahu bahwa setiap objek di sini harus cocok dengan
 * struktur Organisasi yang didefinisikan di types.js.
 * @type {Organisasi[]}
 */

    export const organisasiData = [
        {
            id: 1,
            name: "MOTIVASI",
            image: motivasi
        },
        {
            id: 2,
            name: "INOVASI",
            image: inovasi
        },
        {
            id: 3,
            name: "MANAGEMENT",
            image: management
        },
        {
            id: 4,
            name: "PERJUANGAN",
            image: perjuangan
        },
        {
            id: 5,
            name: "INTEGRITAS",
            image: integritas
        }
    ]