import SectionTitlePill from "./SectionTitlePill";
import SectionBlockTitle from "./SectionBlockTitle";
import StepCard from "./StepCard";
import RulePanel from "./RulePanel";
import InfoPill from "./InfoPill";
import bgPattern from "../../../assets/landingpage/organisasi/bg.webp";
import { motion } from "framer-motion";
import {
  stepsMediaPartner,
  rulesMediaPartner,
  rulesPartnership,
  contactNarhub,
  contactEmailSurat,
  suratUndangan,
  advoCareLines,
} from "./layanan.data";

export default function LayananPage() {
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
      <section className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-20">
          <SectionBlockTitle>Media Partner</SectionBlockTitle>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {stepsMediaPartner.map((s) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <StepCard no={s.no}>
                  {s.no === 4 ? (
                    <span>
                      Kami juga menawarkan kerjasama jangka panjang dengan benefit lebih. Informasi dan SOP lengkapnya dapat diakses <a href="https://bit.ly/SOPJangkaPanjang" target="_blank" rel="noreferrer" className="text-[#FF9A27] underline hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40">di sini</a>
                    </span>
                  ) : (
                    s.text
                  )}
                </StepCard>
              </motion.div>
            ))}
          </motion.div>
         
        </div>
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-5 mt-12">
        <SectionTitlePill className="mt-4">Ketentuan</SectionTitlePill>
        <RulePanel items={rulesMediaPartner} />
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-3">
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-10">
          <SectionBlockTitle>Partnership</SectionBlockTitle>
          <SectionTitlePill>Ketentuan</SectionTitlePill>
          <motion.div className="relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <RulePanel items={rulesPartnership} />
            <div className="w-full flex justify-center -mt-3">
              <InfoPill className="">{contactNarhub}</InfoPill>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-10">
          <SectionBlockTitle>Surat atau Undangan</SectionBlockTitle>
          <motion.div className="relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <RulePanel items={suratUndangan} />
            <div className="w-full flex justify-center -mt-3">
              <InfoPill className="">{contactEmailSurat}</InfoPill>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-5 lg:py-5">
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-10">
          <SectionBlockTitle>Advo Care</SectionBlockTitle>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <RulePanel items={advoCareLines} ordered={false} center />
          </motion.div>
        </div>
      </section>
    </main>
  );
}


