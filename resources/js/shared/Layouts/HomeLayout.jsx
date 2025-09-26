import { Head } from '@inertiajs/react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

SiteLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function SiteLayout({ 
  title, 
  description = "Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025. Wadah aspirasi dan pengembangan mahasiswa FISIP UB.",
  keywords = "BEM FISIP UB 2025, BEM FISIP, FISIP UB, Fakultas Ilmu Sosial dan Politik, Universitas Brawijaya, Mahasiswa, Organisasi Mahasiswa, Malang",
  image = "/eskalasi.png",
  children 
}) {
  const fullTitle = `${title} | BEM FISIP UB 2025`;
  const currentUrl = window.location.href;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="BEM FISIP UB 2025" />
        <meta property="og:locale" content="id_ID" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        
        <meta name="theme-color" content="#1d2466" />
        <meta name="msapplication-TileColor" content="#1d2466" />
      </Head>
      <div className='relative'>
        <Navbar />
        <div className='mt-[-2vw]'>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

