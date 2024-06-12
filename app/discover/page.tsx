'use client';

// TODO: make only the search bar client side

import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

type CancerType = {
  name: string;
  image: string;
  organ: string;
};

const cancerTypes: CancerType[] = [
  {
    name: "Adrenal Cancer",
    image: "https://baconmockup.com/600/400",
    organ: "Adrenal Glands"
  },
  {
    name: "Bile Duct Cancer",
    image: "https://baconmockup.com/601/400",
    organ: "Bile Ducts"
  },
  {
    name: "Bladder Cancer",
    image: "https://baconmockup.com/602/400",
    organ: "Bladder"
  },
  {
    name: "Bone Cancer",
    image: "https://baconmockup.com/603/400",
    organ: "Bones"
  },
  {
    name: "Brain Cancer",
    image: "https://baconmockup.com/604/400",
    organ: "Brain"
  },
  {
    name: "Breast Cancer",
    image: "https://baconmockup.com/605/400",
    organ: "Breast"
  },
  {
    name: "Cervical Cancer",
    image: "https://baconmockup.com/606/400",
    organ: "Cervix"
  },
  {
    name: "Colon Cancer",
    image: "https://baconmockup.com/607/400",
    organ: "Colon"
  },
  {
    name: "Colorectal Cancer",
    image: "https://baconmockup.com/608/400",
    organ: "Colon and Rectum"
  },
  {
    name: "Endometrial Cancer",
    image: "https://baconmockup.com/609/400",
    organ: "Endometrium"
  },
  {
    name: "Esophageal Cancer",
    image: "https://baconmockup.com/610/400",
    organ: "Esophagus"
  },
  {
    name: "Eye Cancer",
    image: "https://baconmockup.com/611/400",
    organ: "Eye"
  },
  {
    name: "Gallbladder Cancer",
    image: "https://baconmockup.com/612/400",
    organ: "Gallbladder"
  },
  {
    name: "Gastric Cancer",
    image: "https://baconmockup.com/613/400",
    organ: "Stomach"
  },
  {
    name: "Head and Neck Cancer",
    image: "https://baconmockup.com/614/400",
    organ: "Head and Neck"
  },
  {
    name: "Hodgkin Lymphoma",
    image: "https://baconmockup.com/615/400",
    organ: "Lymphatic System"
  },
  {
    name: "Kidney Cancer",
    image: "https://baconmockup.com/616/400",
    organ: "Kidneys"
  },
  {
    name: "Laryngeal Cancer",
    image: "https://baconmockup.com/617/400",
    organ: "Larynx"
  },
  {
    name: "Leukemia",
    image: "https://baconmockup.com/618/400",
    organ: "Blood and Bone Marrow"
  },
  {
    name: "Liver Cancer",
    image: "https://baconmockup.com/619/400",
    organ: "Liver"
  },
  {
    name: "Lung Cancer",
    image: "https://baconmockup.com/620/400",
    organ: "Lungs"
  },
  {
    name: "Melanoma",
    image: "https://baconmockup.com/621/400",
    organ: "Skin"
  },
  {
    name: "Mesothelioma",
    image: "https://baconmockup.com/622/400",
    organ: "Mesothelium"
  },
  {
    name: "Multiple Myeloma",
    image: "https://baconmockup.com/623/400",
    organ: "Bone Marrow"
  },
  {
    name: "Neuroblastoma",
    image: "https://baconmockup.com/624/400",
    organ: "Adrenal Glands"
  },
  {
    name: "Non-Hodgkin Lymphoma",
    image: "https://baconmockup.com/625/400",
    organ: "Lymphatic System"
  },
  {
    name: "Oral Cancer",
    image: "https://baconmockup.com/626/400",
    organ: "Mouth"
  },
  {
    name: "Ovarian Cancer",
    image: "https://baconmockup.com/627/400",
    organ: "Ovaries"
  },
  {
    name: "Pancreatic Cancer",
    image: "https://baconmockup.com/628/400",
    organ: "Pancreas"
  },
  {
    name: "Penile Cancer",
    image: "https://baconmockup.com/629/400",
    organ: "Penis"
  },
  {
    name: "Prostate Cancer",
    image: "https://baconmockup.com/630/400",
    organ: "Prostate"
  },
  {
    name: "Rectal Cancer",
    image: "https://baconmockup.com/631/400",
    organ: "Rectum"
  },
  {
    name: "Sarcoma",
    image: "https://baconmockup.com/632/400",
    organ: "Connective Tissues"
  },
  {
    name: "Skin Cancer",
    image: "https://baconmockup.com/633/400",
    organ: "Skin"
  },
  {
    name: "Small Intestine Cancer",
    image: "https://baconmockup.com/634/400",
    organ: "Small Intestine"
  },
  {
    name: "Soft Tissue Sarcoma",
    image: "https://baconmockup.com/635/400",
    organ: "Soft Tissues"
  },
  {
    name: "Stomach Cancer",
    image: "https://baconmockup.com/636/400",
    organ: "Stomach"
  },
  {
    name: "Testicular Cancer",
    image: "https://baconmockup.com/637/400",
    organ: "Testicles"
  },
  {
    name: "Throat Cancer",
    image: "https://baconmockup.com/638/400",
    organ: "Throat"
  },
  {
    name: "Thyroid Cancer",
    image: "https://baconmockup.com/639/400",
    organ: "Thyroid Gland"
  },
  {
    name: "Uterine Cancer",
    image: "https://baconmockup.com/640/400",
    organ: "Uterus"
  },
  {
    name: "Vaginal Cancer",
    image: "https://baconmockup.com/641/400",
    organ: "Vagina"
  },
  {
    name: "Vulvar Cancer",
    image: "https://baconmockup.com/642/400",
    organ: "Vulva"
  }
];


const highlightKeyword = (text: string, keyword: string) => {
  const index = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (index === -1) return text;

  const beforeKeyword = text.slice(0, index);
  const afterKeyword = text.slice(index + keyword.length);
  return (
    <>
      {beforeKeyword}
      <mark>{text.slice(index, index + keyword.length)}</mark>
      {afterKeyword}
    </>
  );
};

function Page() {
  const [query, setQuery] = React.useState('');
  const top = 5;
  const matchingCancerTypes =
    query === '' ? [] : cancerTypes.filter(cancer => cancer.name.toLowerCase().includes(query.toLowerCase())).slice(0, top);

  return (
    <div className='px-32 py-20'>
      <h1 className='text-6xl font-bold text-center'>Find Your Cancer <br /> Treatment</h1>

      <section className='mt-16 w-[75%] border-2 border-gray-400 bg-gray-800 text-white rounded-lg overflow-hidden mx-auto'>
        <div className="flex text-2xl items-center px-4 py-4 ">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='flex-1 outline-none bg-transparent' placeholder='Search your cancer type ...' />
          <IoSearchOutline />
        </div>
        <Suggestions  {...{ matchingCancerTypes, query }} />
      </section>
    </div>
  )
}

function Suggestions({ matchingCancerTypes, query }: { matchingCancerTypes: CancerType[], query: string }) {
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
          <ul ref={contentRef} className="border-t-2 border-gray-700">
            {matchingCancerTypes.map((cancer, i) => (
              <Link
                href={`/discover/${cancer.name.toLowerCase().replace(/\s/g, '-')}`}
                key={i}
                className="flex items-center gap-4 justify-between group px-16 py-4 border-b-2 cursor-pointer border-gray-700 w-full animate-suggestion hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center justify-start gap-4 ">
                  <img
                    src={cancer.image}
                    alt={cancer.name}
                    className="w-12 h-12 object-cover rounded-full bg-gray-700"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">
                      {highlightKeyword(cancer.name, query)}
                    </h2>
                    <p className="text-sm">{cancer.organ}</p>
                  </div>
                </div>
                <FaArrowRight className="arrow-icon justify-end group-hover:-rotate-45 transition-all duration-300" />
              </Link>
            ))}
          </ul>
        </div>
      );
    }  
// function Page() {



//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white text-slate-900">
//       <div className="flex flex-col items-center">
//         <h1 className="text-4xl font-bold text-center">Search Cancer</h1>
//         <input
//           className="border border-gray-700 bg-gray-800 text-white rounded-md px-4 py-2 mt-4 w-80"
//           onChange={(e) => setQuery(e.target.value)}
//           value={query}
//           type="text"
//           placeholder="Search Cancer"
//         />
//         <div className="flex flex-col items-center gap-4 mt-4 w-full">
//           {query !== "" && (
//             <>
//               <div className="flex justify-between w-full px-4">
//                 <span>All</span>
//                 <span>Files</span>
//                 <span>People</span>
//               </div>
//               {data
//                 .filter((item) =>
//                   item.name.toLowerCase().includes(query.toLowerCase())
//                 )
//                 .map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center gap-4 p-4 border border-gray-700 rounded-md w-full"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded-full"
//                     />
//                     <div className="flex flex-col">
//                       <h2 className="text-xl font-bold">
//                         {highlightKeyword(item.name, query)}
//                       </h2>
//                       <p className="text-sm">{item.description}</p>
//                       <p className="text-sm">{item.treatment}</p>
//                       <p className="text-sm">{item.prevention}</p>
//                     </div>
//                   </div>
//                 ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Page;
