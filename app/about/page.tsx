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
    <div className="relative min-h-screen flex flex-col justify-start items-start bg-[#f1ffe9] text-gray-700 w-full px-8 py-32 md:px-24 md:py-48">
      <main className="w-full">
        <section className="mb-12 md:mb-24 text-start">
          <motion.h1
            className="text-4xl md:text-7xl font-light leading-tight"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Empowering patients to <span className="font-bold ">navigate cancer</span><br />
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
              target="_blank"
              href="https://www.instagram.com/victreat.official?igsh=MTlrZTFvMXltZnYxOQ%3D%3D&utm_source=qr"
              className="hover:underline"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              variants={linkHover}
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://www.facebook.com/victreat"
              target="_blank"
              className="hover:underline"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              variants={linkHover}
            >
              Facebook
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/victreat/"
              className="hover:underline"
              target="_blank"
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
            Every patient AROUND the world should have access to a personalized and optimized treatment plan.  Unfortunately, access to such care and trial information is limited to certain tier 1 cancer centers in developed world.  We aim to change that.
          </motion.p>
          <motion.p
            className="text-gray-600 max-w-full md:max-w-md"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Victreat intends to democratize access to world-class cancer care - regardless of where a patient may be based.  We aspire to help patients think through the most optimal therapeutic options depending on their tumor type, tumor stage, performance status, mutational profile, prior lines of therapy and beyond.
          </motion.p>
        </section>
      </main>
    </div>
  );
}
