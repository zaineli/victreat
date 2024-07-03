import React from 'react';
import { FaHeartbeat, FaMicroscope, FaUserMd, FaRadiation } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useSectionInView from '@/lib/useSectionInView';
import  Link  from 'next/link';

function CallToAction() {
    const [sectionRef1, inView1] = useSectionInView();
    const [sectionRef2, inView2] = useSectionInView();
    const [sectionRef3, inView3] = useSectionInView();
    const [sectionRef4, inView4] = useSectionInView();
    const [sectionRef5, inView5] = useSectionInView();

    const leftCardVariants = {
        hidden: { opacity: 0, x: -50},
        visible: { opacity: 1, x: 0 },
    };

    const rightCardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const topCardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    const bottomCardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="p-10 min-h-screen w-full flex flex-col items-center justify-center">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold mb-16 text-center">
                Leading Innovations in<br/> Cancer Treatment and Diagnosis
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
                <motion.div 
                    ref={sectionRef1}
                    className="bg-white p-6 rounded-lg shadow-md row-span-3 h-2/3 self-center mx-auto border border-gray-200 w-full"
                    initial="hidden"
                    animate={inView1 ? "visible" : "hidden"}
                    variants={leftCardVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="flex flex-col items-start mb-4">
                        <FaHeartbeat className="text-red-500 mb-4 mr-2" size={24} />
                        <h2 className="text-lg font-medium">Advanced Chemotherapy</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Our cutting-edge chemotherapy treatments target cancer cells with precision.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                        <img src="https://i0.wp.com/www.directrelief.org/wp-content/uploads/2019/02/untitled.png?ssl=1" alt="Chemotherapy" className="w-full"/>
                        <div className="flex justify-between mt-2 text-gray-600">
                            <div>Efficiency</div>
                            <div>Success Rate</div>
                            <div>Patients Treated</div>
                        </div>
                    </div>
                </motion.div>
                <div className='flex flex-col gap-10'>
                    <motion.div 
                        ref={sectionRef2}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        variants={topCardVariants}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-col items-start mb-4">
                            <FaMicroscope className="text-blue-500 mb-4 mr-2" size={24} />
                            <h2 className="text-lg font-medium">Innovative Diagnostics</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Utilizing the latest technology for early and accurate cancer detection.
                        </p>
                    </motion.div>
                    <motion.div 
                        ref={sectionRef3}
                        className="bg-gradient-to-r from-[#21333D] to-black p-6 rounded-lg shadow-md text-white max-w-s mx-auto"
                        initial="hidden"
                        animate={inView3 ? "visible" : "hidden"}
                        variants={topCardVariants}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <h2 className="text-lg font-medium mb-4 mr-16">Take part in this inovation</h2>
                        <div className='flex justify-between items-center'>
                            <Link href='\careers' className="bg-white text-black py-2 px-4 rounded-lg font-semibold">
                                Join Us
                            </Link>
                            <div className="mt-4">
                                <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="1" fill="none" />
                                    <circle cx="50" cy="25" r="20" stroke="white" strokeWidth="1" fill="none" />
                                    <circle cx="75" cy="25" r="20" stroke="white" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        ref={sectionRef4}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                        initial="hidden"
                        animate={inView4 ? "visible" : "hidden"}
                        variants={bottomCardVariants}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <div className="flex flex-col items-start mb-4">
                            <FaUserMd className="text-green-500 mb-4 mr-2" size={24} />
                            <h2 className="text-lg font-medium">Personalized Care</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Tailored treatment plans designed to meet the unique needs of each patient.
                        </p>
                    </motion.div>
                </div>
                <motion.div 
                    ref={sectionRef5}
                    className="bg-white p-6 rounded-lg shadow-md row-span-3 h-2/3 self-center mx-auto border border-gray-200"
                    initial="hidden"
                    animate={inView5 ? "visible" : "hidden"}
                    variants={rightCardVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="flex flex-col items-start mb-4">
                        <FaRadiation className="text-purple-500 mb-4 mr-2" size={24} />
                        <h2 className="text-lg font-medium">Radiation Therapy</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Effective radiation treatments with state-of-the-art equipment.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                        <img src="https://i0.wp.com/www.directrelief.org/wp-content/uploads/2019/02/untitled.png?ssl=1" alt="Radiation Therapy" className="w-full"/>
                        <div className="flex justify-between mt-2 text-gray-600">
                            <div>Efficiency</div>
                            <div>Success Rate</div>
                            <div>Patients Treated</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default CallToAction;
