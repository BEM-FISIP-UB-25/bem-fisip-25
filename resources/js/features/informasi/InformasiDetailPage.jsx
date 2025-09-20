import { infoDetails } from "./informasi.data";
import bgPattern from "../../../assets/landingpage/organisasi/bg.webp";
import { router } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function InformasiDetailPage({ slug }) {
  const data = infoDetails[slug];
  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Informasi tidak ditemukan.</p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-12">
          {/* Breadcrumb */}
          <motion.nav 
            className="text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="text-[#1d2466] underline hover:no-underline" onClick={() => router.visit('/informasi')}>Informasi</button>
            <span className="mx-2">/</span>
            <span className="text-[#1d2466] font-semibold">{data.title}</span>
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h1 
              className="monumentExtendedUltrabold text-[#23235F] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {data.title}
            </motion.h1>

            {data.isOrganigram && data.organigramData ? (
            <div>
            <div className="mx-[0vw] mt-[4vw] mb-[6vw]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-block bg-gradient-to-br from-orange-400 to-orange-500 rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] px-[3vw] py-[2vw] md:px-[6vw] md:py-[1vw] shadow-lg"
                >
                     <h1 className="monumentExtendedUltrabold text-white text-[clamp(2.5vw,3.5vw,4vw)] md:text-[clamp(1vw,2vw,3vw)] tracking-tight">
                         ARSIP BEM
                     </h1>
                </motion.div>
            </div>
              <motion.div 
                className="space-y-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <div className="bg-[#F8F3EE] rounded-[24px] p-6 md:p-8 shadow-md shadow-[#006181] relative">
                  <div className="flex justify-center -mt-16 mb-8">
                     <div className="bg-[#006181] text-white rounded-xl px-8 md:px-12 py-3 md:py-4 shadow-lg">
                       <h3 className="poppinsSemi text-2xl md:text-4xl lg:text-5xl uppercase">VISI &</h3>
                       <h3 className="poppinsSemi text-2xl md:text-4xl lg:text-5xl uppercase px-2 md:px-3">MISI</h3>
                     </div>
                  </div>
                  
                  <div className="space-y-6 text-center">
                    <div>
                      <h4 className="poppinsSemi underline text-[#23235F] text-xl md:text-2xl mb-4">VISI</h4>
                      <p className="text-black text-md md:text-xl leading-relaxed orienta">
                        {data.organigramData.visi}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="poppinsSemi underline text-[#23235F] text-xl md:text-2xl mb-4">MISI</h4>
                      <ul className="space-y-3 max-w-4xl mx-auto">
                        {data.organigramData.misi.map((item, i) => (
                          <li key={i} className="text-black text-md md:text-xl leading-relaxed orienta">
                           {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="bg-[#F8F3EE] rounded-[24px] p-6 md:p-8 shadow-md shadow-[#006181] relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="flex justify-center -mt-16 mb-8">
                    <div className="bg-[#006181] text-white rounded-md px-6 md:px-8 py-4 md:py-6 shadow-lg">
                      <h3 className="poppinsSemi text-2xl md:text-4xl lg:text-5xl uppercase">CORE VALUE</h3>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="monumentExtendedUltrabold text-[#23235F] text-2xl md:text-4xl mb-8">
                      {data.organigramData.coreValue}
                    </h4>
                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-5xl mx-auto">
                      {data.organigramData.coreValues.map((value, i) => (
                        <span key={i} className="text-black text-base md:text-lg orienta">
                          {value}
                          {i < data.organigramData.coreValues.length - 1 && <span className="mx-2 md:mx-3 text-[#23235F]">|</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="poppinsBlack text-2xl md:text-4xl lg:text-5xl text-[#805555] flex justify-center items-center">ORGANIGRAM</h2>
                  <h2 className="poppinsBlack text-2xl md:text-4xl lg:text-5xl text-[#805555] flex justify-center items-center mb-8 md:mb-16">BEM FISIP UB 2024</h2>
                  <div className="w-full text-center">
                    <img 
                      src={data.organigramData.organigramImage} 
                      alt="Organigram BEM FISIP UB 2024" 
                      className="w-full h-auto object-contain" 
                      loading="lazy" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'text-gray-500 text-lg';
                        fallback.textContent = 'Organigram akan segera tersedia';
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
              </div>
            ) : data.isCalendar ? (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {data.body?.map((p, i) => (
                  <motion.p 
                    key={i} 
                    className="text-black text-xl leading-relaxed montserratBold text-justify"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                  >
                    {p}
                  </motion.p>
                ))}
                
                <motion.div 
                  className="bg-white rounded-[24px] p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <iframe
                    src={data.calendarEmbed}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="FIMOLY Calendar"
                    className="rounded-lg"
                  ></iframe>
                </motion.div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap- items-center">
                <motion.div 
                  className="order-1 lg:order-1 flex justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="relative">
                    <img 
                      src={data.heroImage} 
                      alt={`${data.title} mockup`} 
                      className="w-full max-w-sm md:max-w-md object-contain transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300" 
                      loading="lazy" 
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="order-2 lg:order-2 lg:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {data.body?.map((p, i) => (
                    <motion.p 
                      key={i} 
                      className="text-black text-xl md:text-3xl leading-relaxed montserratBold text-justify"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>

          {data.ctaHref && (
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={data.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-black bg-[#FF9A27] rounded-xl px-8 md:px-12 py-4 md:py-5 text-2xl md:text-4xl montserratBold uppercase tracking-wide hover:brightness-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                {data.ctaLabel || 'Selengkapnya'}
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}


