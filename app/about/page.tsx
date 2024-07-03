'use client';
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const staggeredLinks = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const linkVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const linkHover = {
  hover: { scale: 1.1, transition: { duration: 0.3 } }
};

const borderVariant = {
  hidden: { width: 0 },
  visible: { width: '100%', transition: { duration: 2 } }
};

export default function CancerDiagnosisPage() {
  return (
    <div className="relative h-screen flex flex-col justify-start items-start bg-white w-full px-8 py-32 md:px-24 md:py-48">
      <main className="w-full">
        <section className="mb-12 md:mb-24 text-start">
          <motion.h1
            className="text-4xl md:text-7xl font-light leading-tight"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Helping <span className="font-bold">Cancer Diagnosis</span><br />and Treatment
          </motion.h1>
        </section>

        <section className="mb-8 md:mb-16 text-left">
          <motion.nav
            className="flex flex-wrap justify-start space-x-4 md:space-x-6 text-gray-600"
            initial="hidden"
            animate="visible"
            variants={staggeredLinks}
          >
            <motion.a
              href="#"
              className="hover:underline"
              variants={linkVariant}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              variants={linkHover}
            >
              Instagram
            </motion.a>
            <motion.a
              href="#"
              className="hover:underline"
              variants={linkVariant}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              variants={linkHover}
            >
              Facebook
            </motion.a>
            <motion.a
              href="#"
              className="hover:underline"
              variants={linkVariant}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              variants={linkHover}
            >
              Linkedin
            </motion.a>

          </motion.nav>
        </section>

        <motion.div
          className="border-t-2 border-slate-500"
          initial="hidden"
          animate="visible"
          variants={borderVariant}
        />

        <section className="flex lg:flex-row w-full md:flex-col sm:flex-col justify-between gap-8 md:gap-24 items-start pt-10">
          <motion.p
            className="text-gray-600 max-w-full md:max-w-md"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Learn about different types of cancers, their symptoms, and how they are diagnosed using advanced medical technologies and procedures.
          </motion.p>
          <motion.p
            className="text-gray-600 max-w-full md:max-w-md"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Our team of oncologists and healthcare professionals is dedicated to providing comprehensive, personalized treatment plans tailored to each patient's unique needs. We offer a full range of advanced therapies, including surgery, chemotherapy, and radiation therapy, to effectively target and treat various types of cancer. In addition to these core treatments, we incorporate the latest advancements in medical research and technology to enhance patient outcomes.
          </motion.p>
        </section>
      </main>
    </div>
  );
}
