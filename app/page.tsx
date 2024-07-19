'use client';
import MutationSection from '@/components/custom/mutationSections';
import Trials from '@/components/custom/trials';
import Footer from '@/components/custom/footer';
import Approvals from '@/components/custom/approvalsGraph';
import ProgressTracker from '@/components/custom/ProgressTracker';
import HeroSection from '@/components/custom/hero-section';
import CardsBanner from '@/components/custom/cardsBanner';

const sections = ['1', '2', '3', '4', 'mutations'];


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
      <section id='3'>
        <Approvals />
      </section>
      <section id='4' className='w-full lg:p-32  p-4 sm:p-16 flex flex-col items-center justify-center '>
        <div className='lg:text-5xl md:text-3xl text-3xl text-center'>
        The <span className="font-bold bg-orange-500 bg-clip-text text-transparent ">exponential increase in clinical trials</span> will further complicate the landscape of oncology treatment.
        </div>
        <p className='lg:text-lg text-sm sm:text-base  w-4/5'>
        </p>
        <Trials className={'flex justify-center w-[80%] mx-auto'} />
      </section>
      <section id={'mutations'} className='w-full lg:p-32  p-4 sm:p-16 '>
        <div className='lg:text-5xl md:text-4xl text-3xl text-center mb-24'>
          Victreat aims to be your <span className="font-bold text-[#22c1d6]">trusted partner in navigating the complexities</span> of cancer stages, mutations and the multitude of clinical trial options available.        </div>
        <div className="lg:max-w-[75%] w-full mx-auto">

          <MutationSection small={false} />
        </div>
      </section>
      <section className='w-full bg-black text-white'>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
