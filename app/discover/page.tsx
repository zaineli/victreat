'use client';

// TODO: make only the search bar client side

import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";

type CancerType = {
  name: string;
  image: string;
  organ: string;
};

const cancerTypes: CancerType[] = [
  {
    name: "Adrenal Cancer",
    image: "https://source.unsplash.com/600x400/?adrenal",
    organ: "Adrenal Glands"
  },
  {
    name: "Bile Duct Cancer",
    image: "https://source.unsplash.com/600x400/?bile-duct",
    organ: "Bile Ducts"
  },
  {
    name: "Bladder Cancer",
    image: "https://source.unsplash.com/600x400/?bladder",
    organ: "Bladder"
  },
  {
    name: "Bone Cancer",
    image: "https://source.unsplash.com/600x400/?bone",
    organ: "Bones"
  },
  {
    name: "Brain Cancer",
    image: "https://source.unsplash.com/600x400/?brain",
    organ: "Brain"
  },
  {
    name: "Breast Cancer",
    image: "https://source.unsplash.com/600x400/?breast",
    organ: "Breast"
  },
  {
    name: "Cervical Cancer",
    image: "https://source.unsplash.com/600x400/?cervix",
    organ: "Cervix"
  },
  {
    name: "Colon Cancer",
    image: "https://source.unsplash.com/600x400/?colon",
    organ: "Colon"
  },
  {
    name: "Colorectal Cancer",
    image: "https://source.unsplash.com/600x400/?colorectal",
    organ: "Colon and Rectum"
  },
  {
    name: "Endometrial Cancer",
    image: "https://source.unsplash.com/600x400/?endometrium",
    organ: "Endometrium"
  },
  {
    name: "Esophageal Cancer",
    image: "https://source.unsplash.com/600x400/?esophagus",
    organ: "Esophagus"
  },
  {
    name: "Eye Cancer",
    image: "https://source.unsplash.com/600x400/?eye",
    organ: "Eye"
  },
  {
    name: "Gallbladder Cancer",
    image: "https://source.unsplash.com/600x400/?gallbladder",
    organ: "Gallbladder"
  },
  {
    name: "Gastric Cancer",
    image: "https://source.unsplash.com/600x400/?stomach",
    organ: "Stomach"
  },
  {
    name: "Head and Neck Cancer",
    image: "https://source.unsplash.com/600x400/?head-neck",
    organ: "Head and Neck"
  },
  {
    name: "Hodgkin Lymphoma",
    image: "https://source.unsplash.com/600x400/?hodgkin",
    organ: "Lymphatic System"
  },
  {
    name: "Kidney Cancer",
    image: "https://source.unsplash.com/600x400/?kidney",
    organ: "Kidneys"
  },
  {
    name: "Laryngeal Cancer",
    image: "https://source.unsplash.com/600x400/?larynx",
    organ: "Larynx"
  },
  {
    name: "Leukemia",
    image: "https://source.unsplash.com/600x400/?leukemia",
    organ: "Blood and Bone Marrow"
  },
  {
    name: "Liver Cancer",
    image: "https://source.unsplash.com/600x400/?liver",
    organ: "Liver"
  },
  {
    name: "Lung Cancer",
    image: "https://source.unsplash.com/600x400/?lung",
    organ: "Lungs"
  },
  {
    name: "Melanoma",
    image: "https://source.unsplash.com/600x400/?melanoma",
    organ: "Skin"
  },
  {
    name: "Mesothelioma",
    image: "https://source.unsplash.com/600x400/?mesothelioma",
    organ: "Mesothelium"
  },
  {
    name: "Multiple Myeloma",
    image: "https://source.unsplash.com/600x400/?myeloma",
    organ: "Bone Marrow"
  },
  {
    name: "Neuroblastoma",
    image: "https://source.unsplash.com/600x400/?neuroblastoma",
    organ: "Adrenal Glands"
  },
  {
    name: "Non-Hodgkin Lymphoma",
    image: "https://source.unsplash.com/600x400/?non-hodgkin",
    organ: "Lymphatic System"
  },
  {
    name: "Oral Cancer",
    image: "https://source.unsplash.com/600x400/?oral-cancer",
    organ: "Mouth"
  },
  {
    name: "Ovarian Cancer",
    image: "https://source.unsplash.com/600x400/?ovarian",
    organ: "Ovaries"
  },
  {
    name: "Pancreatic Cancer",
    image: "https://source.unsplash.com/600x400/?pancreas",
    organ: "Pancreas"
  },
  {
    name: "Penile Cancer",
    image: "https://source.unsplash.com/600x400/?penile",
    organ: "Penis"
  },
  {
    name: "Prostate Cancer",
    image: "https://source.unsplash.com/600x400/?prostate",
    organ: "Prostate"
  },
  {
    name: "Rectal Cancer",
    image: "https://source.unsplash.com/600x400/?rectum",
    organ: "Rectum"
  },
  {
    name: "Sarcoma",
    image: "https://source.unsplash.com/600x400/?sarcoma",
    organ: "Connective Tissues"
  },
  {
    name: "Skin Cancer",
    image: "https://source.unsplash.com/600x400/?skin-cancer",
    organ: "Skin"
  },
  {
    name: "Small Intestine Cancer",
    image: "https://source.unsplash.com/600x400/?small-intestine",
    organ: "Small Intestine"
  },
  {
    name: "Soft Tissue Sarcoma",
    image: "https://source.unsplash.com/600x400/?soft-tissue",
    organ: "Soft Tissues"
  },
  {
    name: "Stomach Cancer",
    image: "https://source.unsplash.com/600x400/?stomach",
    organ: "Stomach"
  },
  {
    name: "Testicular Cancer",
    image: "https://source.unsplash.com/600x400/?testicular",
    organ: "Testicles"
  },
  {
    name: "Throat Cancer",
    image: "https://source.unsplash.com/600x400/?throat",
    organ: "Throat"
  },
  {
    name: "Thyroid Cancer",
    image: "https://source.unsplash.com/600x400/?thyroid",
    organ: "Thyroid Gland"
  },
  {
    name: "Uterine Cancer",
    image: "https://source.unsplash.com/600x400/?uterus",
    organ: "Uterus"
  },
  {
    name: "Vaginal Cancer",
    image: "https://source.unsplash.com/600x400/?vagina",
    organ: "Vagina"
  },
  {
    name: "Vulvar Cancer",
    image: "https://source.unsplash.com/600x400/?vulva",
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
    <div className='p-32'>
      <h1 className='text-6xl font-bold text-center'>Find Your Cancer Treatment</h1>

      <section className='mt-16 w-[75%] border-2 border-gray-400 bg-gray-800 text-white rounded-lg overflow-hidden mx-auto'>
        <div className="flex text-2xl items-center px-4 py-2 ">
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
      <ul ref={contentRef} className='px-16'>
        {matchingCancerTypes.map((cancer, i) => (
          // <li key={i} className='px-4 animate-suggestion py-2 border-b border-gray-400' style={{
          //   animationDelay: `${i * 50 + 500}ms`
          // }}>{cancer.name}</li>

          <div
            key={i}
            className="flex items-center gap-4  py-4 border-b-2 border-gray-700  w-full animate-suggestion"
          >
            <img
              src={cancer.image}
              // alt={cancer.name}
              className="w-12 h-12 object-cover rounded-full bg-gray-700"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">
                {highlightKeyword(cancer.name, query)}
              </h2>
              <p className="text-sm">{cancer.organ}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
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
