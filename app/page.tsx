'use client';
import MutationSection from './(components)/mutationSections';
import Trials from './(components)/trials';
import Footer from '@/app/(components)/footer';
import Approvals from './(components)/approvalsGraph';
import ProgressTracker from '@/app/(components)/ProgressTracker';
import HeroSection from '@/app/(components)/hero-section';
import CardsBanner from './(components)/cardsBanner';

const sections = ['1', '2', '3', '4', 'mutations'];


function Home() {


  return (
    <div className="bg-[#f1ffe9ab] text-gray-700">
      <ProgressTracker sections={sections} />
      <section id='1' className=''>
        <HeroSection />
      </section>
      <section id='2'>
<<<<<<< HEAD
        <div className='bg-[#fee0dde0] flex justify-center items-center font-sans'>
=======
        <div className='bg-[#fee0dde0] flex justify-center items-center'>
>>>>>>> home-v5
          <CardsBanner />
        </div>
      </section>
      <section id='3'>
        <Approvals />
      </section>
      <section id='4' className='w-full bg-[#f1ffe9ab] lg:p-32  p-4 sm:p-16 flex flex-col items-center justify-center '>
        <div className='lg:text-4xl md:text-2xl text-md text-center mb-4 px-3 lg:leading-normal md:leading-normal leading-normal'>
          <span className="font-bold text-orange-500 lg:text-6xl md:text-5xl text-2xl">Exponential increase in&nbsp;clinical&nbsp;trials</span> will further complicate the landscape of oncology treatment.
        </div>
        <p className='lg:text-lg text-sm sm:text-base  w-4/5'>
        </p>
        <Trials className={'flex justify-center w-[80%] mx-auto'} />
      </section>
<<<<<<< HEAD
      <section id={'mutations'} className='bg-[#f1ffe9ab] w-full lg:p-32  p-4 sm:p-16  my-24'>
        <div className='lg:text-4xl md:text-2xl text-md text-center mb-24 lg:leading-normal md:leading-normal leading-normal px-2'>
          Victreat aspires to be your <span className=" font-bold text-[#22c1d6] lg:text-6xl md:text-5xl text-2xl ">trusted partner at navigating the complexities</span> of cancer stages, mutations and the multitude of clinical trial options available.        </div>
        <div className="lg:max-w-[75%] w-full mx-auto">
=======
      <section id={'mutations'} className='bg-[#f1ffe9ab] w-full lg:p-32  p-4 sm:p-16 '>
        <div className='lg:text-4xl md:text-2xl text-md text-center mb-24 lg:leading-normal md:leading-normal leading-normal px-2'>
          Victreat aspires to be your <span className=" font-bold text-[#22c1d6] lg:text-6xl md:text-5xl text-2xl ">trusted partner at navigating the complexities</span> of cancer stages, mutations and the multitude of clinical trial options available.        </div>
        <div className="lg:max-w-[65%] w-full mx-auto">
>>>>>>> home-v5

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
