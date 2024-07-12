'use client';
import MutationSection from '@/components/custom/mutationSections';
import Trials from '@/components/custom/trials';
import CallToAction from '@/components/custom/callToAction';
import ScrollButton from '@/components/custom/scroll-button';
import Footer from '@/components/custom/footer';
import CustomBarChart1 from '@/components/custom/CustomBarChart1';
import CardsBanner from '@/components/custom/cardsBanner';
import ProgressTracker from '@/components/custom/ProgressTracker';
import HeroSection from '@/components/custom/hero-section';

const sections = ['1', '2', '3'];


function Home() {


  return (
    <div className="">
      <ScrollButton />
      <ProgressTracker sections={sections} />
      <section id='1' className=''>
        <HeroSection />
      </section>
      <section id='2'>
        <div className='bg-[#fee0dde0] min-h-screen flex justify-center items-center font-sans'>
          <CardsBanner />
        </div>
      </section>
      <section id='3'>
        <CustomBarChart1 />
      </section>
      <section className='w-full mt-12 lg:p-32  p-4 sm:p-16 flex flex-col items-center justify-center '>
        <div className='lg:text-6xl md:text-3xl text-3xl font-semibold text-center'>
          Meanwhile, exponential growth in trials will only add to the complexity in onology treatment landscape.
        </div>
        <p className='lg:text-lg text-sm sm:text-base  w-4/5 mb-16'>
        </p>
        <Trials className={'flex justify-center w-[80%] mx-auto'} />
      </section>
      <section id={'mutations'} className='w-full  mt-64 lg:p-32  p-4 sm:p-16 '>
        <div className='lg:text-6xl md:text-4xl text-3xl text-center font-bold'>
          Victreat aspires to be your partner at navigating  cancer stages, mutations and myriad of clinical trial options
        </div>
        <div className="lg:max-w-[75%] w-full mx-auto">

          <MutationSection small={false} />
        </div>
      </section>
      <section className='w-full max-w-full'>
        <CallToAction />
      </section>
      <section className='w-full bg-black text-white'>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
