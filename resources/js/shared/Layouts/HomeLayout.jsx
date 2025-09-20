import { Head } from '@inertiajs/react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

SiteLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function SiteLayout({ title, children }) {
  return (
    <>
      <Head title={title} />
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

