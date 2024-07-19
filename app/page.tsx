'use client';
import MutationSection from '@/components/custom/mutationSections';
import Trials from '@/components/custom/trials';
import Footer from '@/components/custom/footer';
import Approvals from '@/components/custom/CustomBarChart1';
import ProgressTracker from '@/components/custom/ProgressTracker';
import HeroSection from '@/components/custom/hero-section';
import CardsBanner from '@/components/custom/cardsBanner';

const sections = ['1', '2', 'mutations', '3', '4'];


function Home() {


  return (
    <div className="bg-[#f1ffe9ab] text-gray-700">
      <ProgressTracker sections={sections} />
      <section id='1' className=''>
        <HeroSection />
      </section>
      <section id='2'>
        <div className='bg-[#fee0dde0] flex justify-center items-center font-sans'>
          <CardsBanner />
        </div>
      </section>
      <section id={'mutations'} className='w-full  mt-52 lg:p-32  p-4 sm:p-16 '>
        <div className='lg:text-6xl md:text-4xl text-3xl text-center font-bold mb-24'>
          Victreat aims to be your trusted partner in navigating the complexities of cancer stages, mutations and the multitude of clinical trial options available.        </div>
        <div className="lg:max-w-[75%] w-full mx-auto">

          <MutationSection small={false} />
        </div>
      </section>
      <section id='3'>
        <Approvals />
      </section>
      <section id='4' className='w-full mt-12 lg:p-32  p-4 sm:p-16 flex flex-col items-center justify-center '>
        <div className='lg:text-6xl md:text-3xl text-3xl font-semibold text-center'>
          The exponential increase in clinical trials will further complicate the landscape of oncology treatment.
        </div>
        <p className='lg:text-lg text-sm sm:text-base  w-4/5 mb-16'>
        </p>
        <Trials className={'flex justify-center w-[80%] mx-auto'} />
      </section>
      <section className='w-full bg-black text-white'>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
