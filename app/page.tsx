'use client';
import MutationSection from './(components)/mutationSections';
import Trials from './(components)/trials';
import Footer from '@/app/(components)/footer';
import Approvals from './(components)/approvalsGraph';
import ProgressTracker from '@/app/(components)/ProgressTracker';
import HeroSection from '@/app/(components)/hero-section';
import CardsBanner from './(components)/cardsBanner';

const sections = ['1', '3', '4', 'mutations'];


function Home() {


  return (
    <div className="bg-background text-gray-700">
      <ProgressTracker sections={sections} />
      <section id='1' className=''>
        <HeroSection />
      </section>
      <section>
        <div className=' flex justify-center items-center'>
          <CardsBanner />
        </div>
      </section>
      <section id='3'>
        <Approvals />
      </section>
      <section id='4' className='w-full  lg:my-48 my-20 lg:px-32  px-4 sm:px-16 flex flex-col items-center justify-center '>
        <div className='lg:text-4xl md:text-2xl text-md text-center mb-8 lg:mb-20 px-3 lg:leading-normal md:leading-normal leading-normal'>
          <span className="font-bold text-orange-500 lg:text-6xl md:text-5xl text-2xl">Exponential increase in&nbsp;clinical&nbsp;trials</span> will further complicate the landscape of oncology treatment.
        </div>
        <Trials className={'flex justify-center w-[80%] mx-auto'} />
      </section>
      <section id={'mutations'} className=' lg:mt-48 mt-20 lg:pb-48 pb-20 w-full lg:px-32  px-4 sm:px-16 '>
        <div className='lg:text-4xl md:text-2xl text-md text-center lg:leading-normal md:leading-normal leading-normal px-2 mb-20'>
          Victreat aspires to be your <span className=" font-bold text-[#22c1d6] lg:text-6xl md:text-5xl text-2xl ">trusted partner at navigating the complexities</span> of cancer stages, mutations and the multitude of clinical trial options available.
        </div>
        <div className="lg:max-w-[65%] w-full mx-auto">

          <MutationSection small={false} />
        </div>
      </section>
      {/* <section className='w-full bg-black text-white'>
        <Footer />
      </section> */}
    </div>
  );
}

export default Home;
