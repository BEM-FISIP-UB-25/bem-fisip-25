export const infoCards = [
  {
    id: 'arsip-bem',
    title: 'ARSIP BEM',
    slug: 'arsip-bem',
    image: '/images/arsipbem.webp',
    accent: '#FF9A27',
    ctaLabel: 'Selengkapnya',
    ctaHref: null,
    excerpt: 'Dokumentasi dan arsip kegiatan BEM FISIP UB.',
    order: 1,
    alt: 'Tumpukan arsip BEM FISIP UB',
  },
  {
    id: 'fimoly',
    title: 'FIMOLY',
    slug: 'fimoly',
    image: '/images/fimoly.webp',
    accent: '#FF9A27',
    ctaLabel: 'Selengkapnya',
    ctaHref: null,
    excerpt: 'Kalender kegiatan FISIP UB 2025.',
    order: 2,
    alt: 'Kalender FIMOLY 2025',
  },
  {
    id: 'lakoona-media',
    title: 'LAKOONA MEDIA',
    slug: 'lakoona-media',
    image: '/images/lakoona.webp',
    accent: '#FF9A27',
    ctaLabel: 'Selengkapnya',
    ctaHref: 'https://instagram.com/lakoona.media',
    excerpt: 'Media kreatif resmi BEM FISIP UB.',
    order: 3,
    alt: 'Logo Lakoona Media',
  },
  {
    id: 'advo-center',
    title: 'ADVO CENTER',
    slug: 'advo-center',
    image: '/images/advocenter.webp',
    accent: '#FF9A27',
    ctaLabel: 'Selengkapnya',
    ctaHref: 'https://whatsapp.com/channel/0029Vb5bc1W60eBXd2z0J21U',
    excerpt: 'Pusat layanan advokasi mahasiswa FISIP UB.',
    order: 4,
    alt: 'Logo Advo Center',
  },
];

export const infoDetails = {
  'arsip-bem': {
    title: null,
    ctaLabel: null,
    ctaHref: null,
    isOrganigram: true,
    organigramData: {
      visi: 'Terwujudnya BEM FISIP UB sebagai Pijar Akselerasi, Sinergi, dan Transformasi menuju Realisasi Mutu Tanah Jingga yang tangguh satu perjuangan',
      misi: [
        'Sinergi Pijar Pembaharuan',
        'Mutu Pijar Pelayanan', 
        'Akselerasi Pijar Pergerakan',
        'Realisasi Pijar Pengabdian',
        'Transformasi Pijar Pendayagunaan'
      ],
      coreValue: 'APIK REK!',
      coreValues: ['Apresiatif', 'Progresif', 'Inklusif', 'Kolaboratif', 'Resilien', 'Elaboratif', 'Konkret'],
      organigramImage: '/images/organigram.webp'
    }
  },
  fimoly: {
    title: 'FIMOLY',
    heroImage: '/images/informasi/hero-fimoly.webp',
    body: [
      // 'FIMOLY adalah kalender kegiatan FISIP UB yang memudahkan pemetaan event kampus.',
    ],
    ctaLabel: null,
    ctaHref: null,
    isCalendar: true,
    calendarEmbed: 'https://calendar.google.com/calendar/embed?src=email.bemfisipub%40gmail.com&ctz=Asia%2FJakarta',
  },
  'lakoona-media': {
    title: 'LAKOONA MEDIA',
    heroImage: '/images/mockup lakoona.webp',
    body: [
      'Lakoona merupakan media alternatif resmi milik BEM FISIP UB yang dikelola oleh Biro Pusat Komunikasi dan Informasi, khususnya pada bagian Media Kreatif. Lakoona hadir sebagai ruang kreatif bagi penyampaian informasi, aspirasi, dan ekspresi mahasiswa FISIP UB melalui pendekatan yang lebih segar, dinamis, dan komunikatif. Untuk menikmati konten dari Lakoona, silakan kunjungi Instagram resmi kami di @lakoona.media',
    ],
    ctaLabel: 'Selengkapnya',
    ctaHref: 'https://instagram.com/lakoona.media',
  },
  'advo-center': {
    title: 'ADVO CENTER',
    heroImage: '/images/advocenter.webp',
    body: [
      'Advo Center adalah sebuah program kerja ADVOKESMA BEM FISIP UB yang memfasilitasi mahasiswa dalam mengakses bantuan keuangan seperti Penurunan UKT, Perubahan Golongan UKT/IPI, Pembebasan UKT, dan Pengangsuran UKT/IPI melalui pendampingan, sosialisasi, dan verifikasi pemberkasan.',
    ],
    ctaLabel: 'Selengkapnya',
    ctaHref: 'https://whatsapp.com/channel/0029Vb5bc1W60eBXd2z0J21U',
  },
};


