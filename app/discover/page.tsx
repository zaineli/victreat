'use client';

// TODO: make only the search bar client side

import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const cancerTypes: string[] = [
  "Adrenal Cancer",
  "Bile Duct Cancer",
  "Bladder Cancer",
  "Bone Cancer",
  "Brain Cancer",
  "Breast Cancer",
  "Cervical Cancer",
  "Colon Cancer",
  "Colorectal Cancer",
  "Endometrial Cancer",
  "Esophageal Cancer",
  "Eye Cancer",
  "Gallbladder Cancer",
  "Gastric Cancer",
  "Head and Neck Cancer",
  "Hodgkin Lymphoma",
  "Kidney Cancer",
  "Laryngeal Cancer",
  "Leukemia",
  "Liver Cancer",
  "Lung Cancer",
  "Melanoma",
  "Mesothelioma",
  "Multiple Myeloma",
  "Neuroblastoma",
  "Non-Hodgkin Lymphoma",
  "Oral Cancer",
  "Ovarian Cancer",
  "Pancreatic Cancer",
  "Penile Cancer",
  "Prostate Cancer",
  "Rectal Cancer",
  "Sarcoma",
  "Skin Cancer",
  "Small Intestine Cancer",
  "Soft Tissue Sarcoma",
  "Stomach Cancer",
  "Testicular Cancer",
  "Throat Cancer",
  "Thyroid Cancer",
  "Uterine Cancer",
  "Vaginal Cancer",
  "Vulvar Cancer"
];

function Page() {
  const [query, setQuery] = React.useState('');
  const top = 10;
  const matchingCancerTypes =
    query === '' ? [] : cancerTypes.filter(cancerType => cancerType.toLowerCase().includes(query.toLowerCase())).slice(0, top);

  return (
    <div className='p-32'>
      <h1 className='text-6xl font-bold text-center'>Find Your Cancer Treatment</h1>

      <section className='mt-16 w-[75%] border-2 border-gray-400 bg-gray-800 text-white rounded-lg overflow-hidden mx-auto'>
        <div className="flex text-2xl items-center px-4 py-2 ">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='flex-1 outline-none bg-transparent' placeholder='Search your cancer type ...' />
          <IoSearchOutline />
        </div>
        <Suggestions  {...{ matchingCancerTypes }} />
      </section>
    </div>
  )
}

function Suggestions({ matchingCancerTypes }: { matchingCancerTypes: string[] }) {
  const contentRef = React.useRef<HTMLUListElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [previousHeight, setPreviousHeight] = React.useState(0);

  useEffect(() => {
    // contentRef.current?.animate([
    //   { opacity: 0, maxHeight: '0' },
    //   { opacity: 1,  maxHeight: '1000px'}
    // ], {
    //   duration: 1000,
    //   easing: 'ease-in-out'
    // })
    if (!contentRef.current || !wrapperRef.current) return;
    if (contentRef.current.scrollHeight === previousHeight) return;
    wrapperRef.current?.animate([
      { opacity: 0, height: previousHeight + 'px' },
      { opacity: 1, height: contentRef.current?.scrollHeight + 'px' }
    ], {
      duration: 500,
      easing: 'ease-in-out'
    })
    console.log({ previousHeight, target: contentRef.current?.scrollHeight })
    setPreviousHeight(contentRef.current?.scrollHeight || 0)
  }, [matchingCancerTypes, previousHeight])


  return (
    <div ref={wrapperRef}>
      <ul ref={contentRef} className=''>
        {matchingCancerTypes.map((cancerType, i) => (
          <li key={cancerType} className='px-4 animate-suggestion py-2 border-b border-gray-400' style={{
            animationDelay: `${i * 50 + 500}ms`
          }}>{cancerType}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page